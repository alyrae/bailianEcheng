<template>
    <div class="asd">
        <ul class="header clear">     
            <li :class="active?'active':''" @click="handleChange(0)">推荐专柜</li>
            <li :class="!active?'active':''" @click="handleChange(1)">支持预约</li>                    
            <i class="iconfont icon-search"></i>
            <i class="iconfont icon-shoutibao"></i>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
     data(){
         return{
          active:true
          
         }       
     },   
     methods:{
        handleChange(data){
       
            if(data===0){
                this.active = true
            }
            else{
                this.active = false
            }
          

            axios({
                url:`https://apim.restful.5lux.com.cn/good/storelist?mtoken=&is_bespeak=${data}`, 
            }).then(res=>{
                console.log(res.data.data) 
                this.$store.commit("isStoreChildTwo",res.data.data.store_list)
                this.datalist = res.data.data.store_list 
            })
           
         
        }
    }
  }
</script>

<style lang="scss" scoped> 
    .clear:after{ content:""; display: block; clear:both;}

    div{
       
        height: .39rem;
        border-bottom: .01rem #ccc solid;
      
    }
    .header{
        
        position: relative;
        left: .96rem;
        top:.06rem; 
    }
    .header li{       
        float: left;      
        background: white;
        color:black;
        width: 0.71rem;
        height: .23rem;
    }
    .header li:nth-of-type(1){ 
        font-size: .14rem;
        text-align: center;
        border:.01rem black solid;
        border-right: none;
        border-radius: .05rem 0 0 .05rem;
    }
    .header li:nth-of-type(2){ 
        font-size: .14rem;
        text-align: center;
        border:.01rem black solid;
        border-left: none;
        border-radius: 0 .05rem .05rem 0;
    }

    .header i{
        position: relative;
        left: .4rem;
        font-size: .3rem;
    }
    .header i:nth-of-type(1){       
       margin-left: .3rem;    
    }
 
   li.active{     
       background: black;
       color:white;
   } 
  
 </style> 
