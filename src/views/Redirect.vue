<template>
    <div>
   {{text}}
    </div>
</template>

<script>
import { get } from "axios"
export default {
    mounted(){
        document.title = "Redirecting.."
        get(`${this.API_ENDPOINT}/_db/init/`+this.$route.params.qcode)
        .then(({ data }) => {
            if(data.code===3821) return this.text = "Veritabanında bu koda ait yönlendirme bulunamadı."
            else if(data.code===200){
                window.location = data._cb.to;
            }
        })
        .catch((err)=>{
            alert("Bir hata oluştu : "+err)
        })
    },
    data(){
        return { 
            text:"Redirecting..",
            API_ENDPOINT:"http://localhost"
        }
    }
}
</script>  