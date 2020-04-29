
import yjIcon from './yjIcon'
import yjButton from './buttton'
import lyTable from './lyTable';
import lyPopup from  './popup'
import richText from './richText'
//pop弹窗
import popup from './popup/popup.js'
let components = {
  yjButton,
  lyTable,
  lyPopup,
  yjIcon,
  richText
}
const install = Vue => {
  //注册全局组件
  Vue.prototype.$popup = popup
  Object.keys(components).forEach(cpt=>{Vue.component(components[cpt].name,components[cpt])})
}
export default {
  install
}
/**
 * @param {object} obj对象
 * 
 */