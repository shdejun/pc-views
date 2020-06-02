
import yjIcon from './yjIcon'
import yjButton from './buttton'
import lyTable from './lyTable';
import lyPopup from  './popup'
import richText from './richText'
import yjCard  from './card'
import form from './form'
//pop弹窗
import popup from './popup/popup.js'
//mask 遮罩层
import Mask from './mask/Mask.js'
//dialog 对话框
import dialog from './dialog/index'
//sideBar
import sideBar from './sideBar/index'
let components = {
  // ...form,
  yjButton,
  lyTable,
  lyPopup,
  yjIcon,
  richText,
  yjCard,
}
Object.assign(components,form)
let jsLists = {
  popup,
  Mask,
  dialog,
  sideBar
}
const install = Vue => {
  //注册全局组件
  for(var key in jsLists){
    if(key == 'Mask'){
      Vue.prototype.$mask = new Mask()
    }else{
      Vue.prototype[`$${key}`] = jsLists[key]
    }
  }
  // Vue.prototype.$popup = popup;
  // Vue.prototype.$mask = new Mask();
  // Vue.prototype.$dialog = dialog;
  Object.keys(components).forEach(cpt=>{Vue.component(components[cpt].name,components[cpt])})
}
export default {
  install
}
/**
 * @param {object} obj对象
 * 
 */