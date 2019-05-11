<template>
    <div>
        <ul>
            <li v-for='data in datalist'>
                <img :src="data.ad_code" alt="">
                <p>{{data.ad_name}}</p>
            </li>
        </ul>
    </div>
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
            url:`https://apim.restful.5lux.com.cn/index/index_button`,
				// headers:{
				// 	'Access-Control-Request-Headers': 'x-client-info,x-host'

				// }
			}).then(res=>{
                console.log(res.data.data.list);
                this.datalist=res.data.data.list
                
        })
    },

}
</script>
<style scoped>
ul{
    display: flex;
    background: #ccc;
    padding: .1rem 0;
}
    li{
        flex: 1;
        text-align: center;
            height: 100%;
    font-size: 12px;
    
    }
    img{
        width: 30%;
        margin-left: .25rem
    }
</style>
