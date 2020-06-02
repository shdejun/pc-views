// import Vue from 'Vue'
// import store from '@/store';
const store = {}
import './sideBar.scss'
class SideBar {
  /**
   * 
   * @param {Vnode} component  Vue组件
   * @param {Object} params  Vue组件props
   */
  constructor({component='',params={}}){
      this.component = component||'';
      this.params = params;
      this.sideDiv = ''
  }
  //初始化
  init(cb){
    this.render();
    cb && cb(this)
  }
  //展示
  show(cb){
    if(document.body.querySelector('#sideFoldPop')){
      this.sideDiv.style.right = '0px';
      cb && cb(this)
    }else {
      throw new Error('sideBar未初始化！')
    }
  }
  //隐藏
  hidden(cb){
    if(document.body.querySelector('#sideFoldPop')){
      this.sideDiv.style.right = '-2000px';
      cb && cb(this)
    }else {
      throw new Error('sideBar未初始化！')
    }
  }
  //销毁
  destroy(){
    //只存在一个sideFoldPop
    document.body.querySelector('#sideFoldPop') && document.body.removeChild(document.body.querySelector('#sideFoldPop'))
  }
  render() {
      /**
       * @param {DOM} hideBtn  隐藏按钮
       * @param {DOM} innerDiv  滚动层盒子
       * @param {DOM} this.sideDiv  最外层盒子
       * 
       */
      //有则删除
      this.destroy()
      //基本行内样式
      const sideCss = 'position:fixed; top:20px; right:0px; bottom:200px'
      const hideBtn = document.createElement('div');
      const innerDiv = document.createElement('div');
      this.sideDiv = document.createElement('div');
      this.sideDiv.id = 'sideFoldPop'
      this.sideDiv.style.cssText = sideCss;
      this.sideDiv.className = 'side-fold-pop';
      innerDiv.className = 'side-fold-inner';
      hideBtn.className = 'side-fold-footer';
      hideBtn.innerHTML = '隐藏 >'
      document.body.appendChild(this.sideDiv)
      //监听隐藏按钮点击事件
      hideBtn.addEventListener('click',() => {
        this.hidden()
      })
      this.sideDiv.appendChild(innerDiv);
      this.sideDiv.appendChild(hideBtn);
      if(this.component){
        const Cp = Vue.extend(this.component);
        const vm = new Cp({
          router: window.$router,
          el:document.createElement('div'),
          store,
          propsData:this.params,
        })
        innerDiv.appendChild(vm.$el);
        hideBtn.style.width = vm.$el.clientWidth + 'px' ||'300px'
      }
  }
}
export default SideBar