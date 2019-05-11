<template>
    <div class="storeBrand">
        <ul>
            <li>所有品牌</li>
            <li class="gray">A</li>
            <li>阿玛尼</li>
            <li>亚历山大.麦昆</li>
            <li class="gray">B</li>
            <li>巴厘</li>
            <li>巴宝莉</li>
            <li>宝格丽</li>
            <li>波比布朗</li>
            <li>宝玑</li>
            <li class="gray">C</li>
            <li>卡尔文.克莱恩</li>
            <li>香奈儿</li>
            <li>切瑞迪</li>
            <li>西铁城</li>
            <li>卡西欧</li>  
            <li class="gray">A</li>
            <li>阿玛尼</li>
            <li>亚历山大.麦昆</li>
            <li class="gray">B</li>
            <li>巴厘</li>
            <li>巴宝莉</li>
            <li>宝格丽</li>
            <li>波比布朗</li>
            <li>宝玑</li>
            <li class="gray">C</li>
            <li>卡尔文.克莱恩</li>
            <li>香奈儿</li>
            <li>切瑞迪</li>
            <li>西铁城</li>
            <li>卡西欧</li> 
            <li class="gray">A</li>
            <li>阿玛尼</li>
            <li>亚历山大.麦昆</li>
            <li class="gray">B</li>
            <li>巴厘</li>
            <li>巴宝莉</li>
            <li>宝格丽</li>
            <li>波比布朗</li>
            <li>宝玑</li>
            <li class="gray">C</li>
            <li>卡尔文.克莱恩</li>
            <li>香奈儿</li>
            <li>切瑞迪</li>
            <li>西铁城</li>
            <li>卡西欧</li>
        </ul>        
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
   mounted(){ 
        //配置下拉刷新
        var myscroll = new BScroll('.storeBrand',{

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
        
       this.$store.commit("isstoreallCb2",this.storeallCb2) 
   }
}
</script>
<style lang="scss" scoped>
   div {  
    width: 100%; 
    height: 6rem;
    overflow: auto;
    position: relative;   
    top: -0.04rem;
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

