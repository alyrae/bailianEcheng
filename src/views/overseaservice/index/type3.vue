<template>
    <div class="type3"  v-if="overseas_index.overseas_cata!==undefined">
        <div v-for="data in overseas_index.overseas_cata">
            <div class="hd" >
                <div class="left">
                    <p>{{data.cata_name}}</p>
                    <p>{{data.cata_name_en}}</p>
                </div>
                <p class="right">查看更多></p>
            </div>
            <div :class="`wrapper_${data.cata_id} silder`">
                <ul class="content">
                    <li v-for="item in data.overseas_project">
                        <img :src="item.project_img" alt="">
                        <p>{{item.project_title}}</p>
                        <h2>{{item.flag}}&nbsp:&nbsp<span>{{item.discount_price}}</span></h2>
                    </li>
                </ul>
            </div>
            <div class="blank"></div>
        </div>
        
    </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
    computed:{
        ...mapState(['overseas_index'])
    },
    mounted(){
        
    },
    updated(){
        console.log(this.overseas_index)
        
        for(var i = 0;i<this.overseas_index.overseas_cata.length;i++){
            new BScroll(`.wrapper_${this.overseas_index.overseas_cata[i].cata_id}`,{
                scrollY: false,
                scrollX: true,
                click: true
            })
        }
        
    }
}
</script>
<style lang="scss" scoped>
    .type3{
        .hd{
            height:.65rem;
            display:flex;
            width:100%;
            justify-content: space-between;
            margin-bottom:.18rem;
            .left{
                p:nth-of-type(1){
                    height:.53rem;
                    font-size:.18rem;
                    line-height: .68rem
                }
                p:nth-of-type(2){
                    height:.12rem;
                    font-size:.12rem;
                    color:#999;
                    line-height:.12rem;
                }
            }
            .right{
                line-height:.68rem;
                font-size:.14rem;
                color:#999;
            }
        }
        .silder{
            width:100%;
            overflow:hidden;
            background:#f2f2f2;
            border-bottom:.1rem solid #f2f2f2;
            margin-bottom:.1rem;
            .content{
                display:flex;
                width:11rem;
                justify-content:space-between;
                li{
                    background:white;
                    img{
                        width:2rem;
                        height:1.5rem;                        
                    }
                    p{
                        width:2rem;
                        height:.44rem;
                        font-size:.18rem;
                        line-height:.56rem;
                        color:#333;
                        font-weight:bold;
                        display:-webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp: 1 ;
                        overflow: hidden;
                    }
                    h2{
                        height:.56rem;
                        font-size:.16rem;
                        color:#999;
                        line-height:.56rem
                    }
                    span{
                        color:#33a0ff;
                        display:inline-block;
                    }
                }
                
            }
        }
        .blank{
            height:.1rem;
            width:3.75rem;
            position:relative;
            background:#f2f2f2;
            left:-.2rem
        }
        
    }
</style>

