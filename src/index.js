import vueInlineDateChanger from './vue-inline-date-changer.vue' 
const VueInlineDateChanger  = {
	install (Vue, options) {
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
      Vue.use(vueInlineDateChanger)
		}
		Vue.component('vue-inline-date-changer', vueInlineDateChanger)
	}
}
export default VueInlineDateChanger
