import Vue from 'Vue';
import './mask.scss'
class Mask {
  constructor() {
    this.state = {  }
  }
  show(component,props){
   return this.render(component,props)
  }
  render(component, props) { 
    let resolve, reject, promise = new Promise((res, rej) => {
      resolve = res ;
      reject = rej
    })
    let maskBox = document.createElement('div');
    let destroyFN = () => {
      document.body.removeChild(maskBox)
    }
    maskBox.style.position = 'fixed';
    maskBox.style.left = '0';
    maskBox.style.right = '0';
    maskBox.style.bottom = '0';
    maskBox.style.top = '0';
    maskBox.style.textAlign = 'center';
    maskBox.style.backgroundColor = 'rgb(0,0,0,0.5)';
    //居中样式
    maskBox.className = 'yj-toast-wrapper'
    document.body.appendChild(maskBox);
    let ct = Vue.extend(component);
    let cp = new ct({
      el:document.createElement('div'),
      propsData:props
    })
    maskBox.appendChild(cp.$el)
    maskBox.addEventListener('click',(e) => {
      var e = e || window.event;
      //当前元素才销毁
      if(e.target.className === 'yj-toast-wrapper'){
        destroyFN()
      }
    })
    cp.$on('resolve',(res) => {
      resolve(res) ;
      destroyFN()
    })
    cp.$on('reject',(rej) => {
      resolve(rej);
      destroyFN()
    })
    return promise;
  }
}
 
export default Mask;