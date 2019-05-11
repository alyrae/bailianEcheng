<template>
    <div class="sotreCity">
      <ul>
        <li>所有城市</li>
        <li class="gray">B</li>
        <li>北京</li>
        <li>包头</li>
        <li class="gray">C</li> 
        <li>长春</li>
        <li>重庆</li>
        <li>成都</li>
        <li class="gray">D</li>
        <li>大连</li>
        <li class="gray">F</li>
        <li>福州</li>
        <li class="gray">G</li>
        <li>广州</li>
        <li class="gray">C</li>
        <li>长春</li>
        <li>重庆</li>
        <li>成都</li>
        <li class="gray">D</li>
        <li>大连</li>
        <li class="gray">F</li>
        <li>福州</li>
        <li class="gray">G</li>
        <li>广州</li>
        <li class="gray">D</li>
        <li>大连</li>
        <li class="gray">F</li>
        <li>福州</li> 
        <li class="gray">G</li>
        <li>广州</li>
        <li class="gray">C</li>
        <li>长春</li>
        <li>重庆</li>
        <li>成都</li>
        <li class="gray">D</li>
        <li>大连</li>
        <li class="gray">F</li>
        <li>福州</li>
        <li class="gray">G</li>
        <li>广州</li> 
      </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  mounted(){
           //配置下拉刷新
        var myscroll = new BScroll('.sotreCity',{

            pullDownRefresh: {
            threshold: 50,
            stop: 20
            },
            scrollbar: {
            fade: true, 
            interactive: false // 1.8.0 新增
            },
            //配置上拉加载
            pullUpLoad: {
            threshold: 50
            }
        })
      this.$store.commit('isstoreallCb1',this.storeallCb1)
  }
}
</script>
<style lang="scss" scoped>

div {   
    height: 6rem;
    overflow: auto;
    position: relative;  
    top: -0.04rem;
    width: 100%;
    z-index: 2; 
    background: white;
   
}
div ul li{   
    height: .22rem;
    padding: .1rem;
    padding-left: .2rem;
    font-size: .15rem;
}
.gray{
    font-size: .17rem;
    background: #e5e5e5;    
}

</style>



