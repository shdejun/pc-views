export default function (el,params){
  let reslove,reject,promise = new Promise((res,rej)=>{
    reslove = res;
    reject = rej
  })
  /*
    *@param {[type]} el vue实列
    *Vue.extend 返回的是一个Vue 实例构造器 非实例（so需要$mount挂载入）
  */
  let Profile = Vue.extend(el); 
  /*
  *new Profile({obj}) obj.data(){},methods:{},created:{} 会合并el和obj中的所有属性选项
  */
  let popup = new Profile({
    //propsData 用于传值，在扩展里接受,需要用props接受
      propsData:{
        params:Object.assign({},params),
      },
      data:{
        visible:true,
      },
      methods: {
        reslove(agr){
          reslove(agr);
          this.visible = false
        },
        deletePopup(){
          this.visible = false
          removeChild()
        }
      },
  })
  // console.log(popup,'Profile')
  //$mount 如果没提供挂载DOMSelect,模板将被渲染为文档之外的元素，必须使用原生的DOM API把它插入到文档中
  let popDom = new Profile().$mount().$el
  document.body.appendChild(popDom);
  function removeChild(){
    document.body.removeChild(popDom)
  }

  return promise
}