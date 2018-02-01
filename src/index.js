import vueInlineDateChanger from './vue-inline-date-changer.vue' 
const VueInlineDateChanger  = {
	install (Vue, options) {
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
		}
		Vue.component('VueInlineDateChanger', vueInlineDateChanger)
	}
}
export default VueInlineDateChanger
