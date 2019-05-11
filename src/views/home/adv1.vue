<template>
    <ul>
        <li v-for='data in datalist'>
            <a href="#">
            <img :src="data.ad_code" alt="">
            </a>
        </li>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            datalist:[]
        }
    },
    mounted() {
        axios({
            url:`https://apim.restful.5lux.com.cn//index/columu_recommend`,
				headers:{
					'Access-Control-Request-Headers': 'x-client-info,x-host'

				}
			}).then(res=>{
                console.log(res.data.data[1].ad_code);
                this.datalist=res.data.data
                
        })
    },
}
</script>
<style scoped>
ul{
    width: 100%;
    height: 2.74rem;
    margin-bottom: .03rem;
}
li{
    float: left;
    width: 1.83rem;
    height: 1.3rem;
    margin: .02rem;
    overflow: hidden;
}
img{
    display: block;
    width: 1.83rem
}
</style>
