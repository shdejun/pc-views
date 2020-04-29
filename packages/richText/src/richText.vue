<template>
    <div id="richText"></div>
</template>
<script>

export default {
  name:'richText',
  props:{
    innerHtml:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      editor:null,//富文本
      interval:null,//定时器
    }
  },
  mounted(){
    this.initEditor().then(res=>{
      this.interval = setInterval(() => {
        if(window.wangEditor&&!this.editor){
          this.editor = new wangEditor('#richText');
          this.editor.customConfig.onchange = this.onchange;
          this.editor.create();
          this.editor&&this.editor.txt.html(this.innerHtml);
        }
      }, 200);
    })
  },
  methods:{
    onchange(htmlStr){
      this.$emit('onChange',htmlStr)
    },
    initEditor(){
      let resolve,reject,promise = new Promise((res,rej)=>{
        resolve = res;
        reject = rej
      })
      if(!window.wangEditor){
        reject('waitting');
        let hjs = document.createElement('script');
        hjs.src = './static/js/wangeditor.js';
        document.head.appendChild(hjs);
      }else{
        resolve('finsh')
      }
      return promise
    }
  },
  watch:{
    editor(newV,oldV){
      if(newV){
        clearInterval(this.interval)
      }
    }  
  }
}
</script>
<style lang="scss">
  
</style>