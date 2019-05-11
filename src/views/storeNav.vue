<template>
 <div class="storeNav"> 
    <ul class="navList clear"> 
         <li @click="allCb(0)">所有城市<i :class="classA"></i></li>
         <li @click="allCb(1)">所有品牌<i :class="classB"></i></li>
         <li>附近<i class="iconfont icon-xiangyou-copy"></i></li>       
    </ul> 
    <storeCity v-show="storeallCb1"></storeCity>
    <storeBrand v-show="storeallCb2"></storeBrand>
 </div> 
</template>  
<script>
import storeCity from './storeCity'
import storeBrand from './storeBrand'
export default {
      data(){
         return{
          storeallCb1:false,
          storeallCb2:false,
       
          classA: {
             iconfont: true,
             'icon-35_xiangxiajiantou': true,
             city: false
          },
           classB: {
             iconfont: true,
             'icon-35_xiangxiajiantou': true,
             brand: false
          }

         }       
     },
     methods:{
          allCb(data){
              
               if(data===0){
                    this.city = true
                    this.classA.city=!this.classA.city
                    this.storeallCb1 = !this.storeallCb1    
               }  
               if(data===1){
                    this.brand = true
                    this.classB.brand=!this.classB.brand
                    this.storeallCb2 = !this.storeallCb2 
               }        
          }
     },
     components:{       
        storeCity,
        storeBrand     
    },
}
</script>


<style lang="scss" scoped> 
     .clear:after{ content:""; display: block; clear:both;}
  
     .navList{
          margin-top: -0.06rem;
          width: 100%;
          background: white;  
          position: relative;
          top: .06rem;
          height: .39rem;
          border-bottom: .01rem #ccc solid; 
          i{
               font-size: .22rem;
               height: .22rem;
               width: .22rem;
               display:block;
          }
          i:nth-of-type(3){
               font-size: .1rem;
          }
          li i:nth-of-type(1){
               position: relative;
               left: .63rem;
               top: -.19rem;
          }
      
         
     }
     .navList li{
          margin-top: .07rem;
     }
     .navList li:nth-of-type(1){
         margin-left: .12rem;
    } 
     .navList li:nth-of-type(2){
         margin-left: .3rem;
    }
     .navList li:nth-of-type(3){
         margin-left: 1.13rem;      
    }
     .navList li i:nth-of-type(3){
         font-size: .3rem;
    }
     .navList li{  
                      
          float: left;
     }

     .city{
          transform: rotateZ(180deg); 
     }
     .brand{
          transform: rotateZ(180deg); 
     }
     
 </style> 