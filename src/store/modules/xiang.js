import { getInfoAndListById } from '@/services/index';

const state = {
        list: [], //元数据
        current: '全部', //当前选择年份
        year: ['全部'], //所有年份
        currentList: [] //当前年份的车款数据
    }
    // 给车款排序
function sortCarList(list) {
    // 排序规则 排量升序 && 功率升序 && 自然吸气>涡轮增压
    list.sort((a, b) => {
        if (a.exhaust_str == b.exhaust_str) {
            if (a.max_power_str == b.max_power_str) {
                return b.inhale_type > a.inhale_type
            } else {
                return a.max_power - b.max_power
            }
        } else {
            return a.exhaust - b.exhaust
        }

    })
    return list

}

// 格式化数据
function formatCarList(list) {
    // 拼接每款车的key 排量/功率 吸气方式
    list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item
    })

    let newList = [];

    // 遍历   根据key 把数据聚合一下
    list.forEach(item => {
        let index = newList.findIndex(value => value.key == item.key);
        if (index !== -1) {
            newList[index].list.push(item);
        } else {
            newList.push({
                    key: item.key,
                    list: [item]
                })
                // newList.map(item => item.key.concat([...new Set(item.key)]))
        }
    })
    return newList;
}

// 判断数据排序
function isList(data) {
    state.list = data
        // 处理数据
        // 1.拿到年份
    state.year = ['全部'];
    let year = data.list.map(item => item.market_attribute.year);
    state.year = state.year.concat([...new Set(year)]);

    // 2.拿到当前选择年份的数据
    let currentList = [];
    if (state.current == '全部') {
        currentList = data.list
    } else {
        currentList = data.list.filter(item => item.market_attribute.year === state.current);
    }

    // 3.给当前年份数据排序
    currentList = sortCarList(currentList);

    // 4.聚合key相同的车款数据
    currentList = formatCarList(currentList);
    state.currentList = currentList;
}

// 定义一个 mutations 的方法
const mutations = {
    xianglist(state, payload) {
        if (payload.code === 1) {
            // 判断排序数据
            isList(payload.data)
        } else {
            alert(payload.msg)
        }
    },
    // 根据传参  改变当前年份 进项排序
    setCurrent(state, payload) {
        state.current = payload;
        isList(state.list)
    }
}


const actions = {
    async getInfoAndListById({ commit }, payload) {
        let res = await getInfoAndListById(payload);
        console.log("res???", res)
        commit('xianglist', res)


    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}