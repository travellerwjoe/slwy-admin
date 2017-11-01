import SlimScroll from './slimscroll'

export default {
    inserted(el, binding, vnode) {
        console.log(el, binding, vnode)
        new SlimScroll(el, { height: '100%' })
    }
}