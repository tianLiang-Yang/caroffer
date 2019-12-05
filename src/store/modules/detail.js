import { getInfoAndListById } from '@/services/index';

const state = {
        list: [],
        year: [],
        current: '全部',
        currentList: []
    }
    //给车款排序
function sortList(list) {
    //排序规则 排量升序 && 功率升序 && 自然吸气>涡轮增压
    return list.sort((a, b) => {
        if (a.exhaust_str == b.exhaust_str) {
            if (a.max_power_str == b.max_power_str) {
                return b.inhale_type > a.inhale_type;
            } else {
                return a.max_power_str - b.max_power_str;
            }
        } else {
            return a.exhaust - b.exhaust;
        }
    })
}
//格式化数据
function carList(list) {
    //拼接每款车的key 排量/功率 吸气方式
    list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item;
    })
    let newList = [];
    //遍历，根据key聚合数据
    list.forEach(item => {
        let index = newList.findIndex(value => value.key == item.key);
        if (index !== -1) {
            newList[index].list.push(item);
        } else {
            newList.push({
                key: item.key,
                list: [item]
            })
        }
    })
    return newList
}
const mutations = {
    detaillist(state, payload) {
        if (payload.code == 1) {
            state.list = payload.data
                //处理数据  拿到年份
            let year = payload.data.list.map(item => item.market_attribute.year);
            //concat 连接数组的方法
            state.year = ["全部"]
            state.year = state.year.concat([...new Set(year)])
                //拿到当前选择年份的数据
            let currentList = [];
            console.log(state.current);

            if (state.current == "全部") {
                currentList = payload.data.list;
            } else {
                currentList = payload.data.list.filter(item => {
                    item.market_attribute.year == state.current
                })
            }
            //给当前年份数据排序
            currentList = sortList(currentList);
            //聚合key相同的车款数据
            currentList = carList(currentList);
            state.currentList = currentList
            console.log('currentList--------', currentList);
        } else {
            alert(payload.msg)
        }
    },
    setCurrent(state, payload) {
        console.log('payload--------', payload);
        state.current = payload;
    }
}
const actions = {
    async getInfoAndListById({ commit }, payload) {
        let res = await getInfoAndListById(payload);
        console.log(res);
        commit('detaillist', res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}