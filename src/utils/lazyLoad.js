function LazyLoad(el) {
    this.el = el;
    if (el) {
        el = document.querySelector(el);
        el.addEventListener('scroll', () => {
            this.loadImage();
        })
        el.addEventListener('touchmove', () => {
            this.loadImage();
        })
    } else {
        window.addEventListener('scroll', () => {
            this.loadImage();
        })
    }
    this.loadImage();
}

LazyLoad.prototype.loadImage = function() {
    let eles = [...document.querySelectorAll('div[data-bg]')];
    eles.forEach(item => {
        if (this.isEnterView(item)) {
            if (!this.isLoad(item)) {
                let src = item.dataset.bg;
                item.style.backgroundImage = `url(${src})`;
            }
        }
    })
}

LazyLoad.prototype.isEnterView = function(el) {
    let rect = el.getBoundingClientRect();
    let { top, bottom, left, right } = rect;
    return !(top > window.innerHeight || bottom < 0 || left > window.innerWidth || right < 0)
}

LazyLoad.prototype.isLoad = function(el) {
    let src = el.dataset.bg;
    let bg = el.style.backgroundImage;
    return `url(${src})` == bg;
}



export default LazyLoad;