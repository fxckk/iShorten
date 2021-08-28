<template>
    <div>
 <div id="shortMain" class="grid text-center gap-[10px]">
       <p id="shortTitle" class="text-[36px] text-[#FF7B00] font-bold w-[100%]">Bir Bağlantıyı Kısalt</p>
    
       <p id="shortDescription" class="text-white text-[16px] w-[780px] font-medium text-left">
         Bir bağlantıyı kısaltmak için aşağıda yer alan kutuya bağlantıyı yapıştır ve Oluştur butonuna tıkla, bağlantıyı oluşturduktan sonra beliren Kopyala butonuna tıklayarak kopyalayabilirsin.
       </p>
     </div>
     <form id="shortForm" @submit="shortURL" class="w-[700px] pt-[25px] h-[80px] flex gap-[10px] items-center justify-center">
      <div id="shortInput" class="w-[525px] bg-[#F0F7FE] p-[10px] transition-all delay-[100ms] rounded-[15px] h-full grid grid-cols-[8fr,auto] justify-center items-center gap-[5px]" :style="inputStatus">
      <input id="url" :style="inputModel" maxlength="250" v-model="url" class="w-full bg-transparent h-full" placeholder="Kısaltmak için bir URL girin..">
      <p v-tippy="{ placement : 'bottom',  arrow: true, trigger:'click', theme:'google'}" content="Kopyalandı!"><i v-clipboard:copy="cacheurl" content="Kopyala"  v-tippy="{placement : 'bottom', arrow: true, theme:'google'}"  :style="iconStyle" class="fa fa-clipboard items-center justify-center text-[#2c2c2c] text-[23px] cursor-pointer"></i></p>
      </div>
      <input id="submit" type="submit" class="w-[137px] bg-[#F18213] cursor-pointer grid items-center justify-center rounded-[15px] h-full text-[18px] font-semibold" :disabled="btnDisabled" :value="btnVal" />
     </form>
    </div>
</template>

<script>
import { get, post } from 'axios'
export default {
  mounted(){
    document.title = "iShorten: Free Shortener Service"
  },
  data(){
    return {    
      url:"",
      inputStatus:"border:4px solid #F0F7FE",
      btnVal:"Oluştur",
      btnDisabled:false,
      cacheurl:"",
      iconStyle:"display:none;",
      inputModel:"",
      key:"",
      ax:()=>{},
      API_ENDPOINT:"https://apishorten3.herokuapp.com"
    }
  },
  methods:{
    uriHandler(url){
     return !/^https?:\/\//i.test(url) ? `https://${url}` : url;
    },
    errorHandle(){
      this.btnDisabled = false;
           this.inputStatus = "border:4px solid #EE3737;color:#EE3737"
           this.iconStyle = "display:none;"
          clearInterval(this.ax)
          this.btnVal = "Oluştur"
    },
    successHandle(){
      this.btnDisabled = false;
        this.inputStatus = "border:4px solid #37EE5C;font-weight:medium;"
        this.inputModel = "color:rgb(51 196 38);"
       
        this.iconStyle = "display:grid;color:#626368;"
       clearInterval(this.ax)
       this.btnVal = "Oluştur"
    },
    nextURICompile(){
     
      this.url = this.uriHandler(this.url)
      post(`${this.API_ENDPOINT}/_db/new`, {
        "uri":this.url
      })
      .then(({ data }) => { 
       if(data.state===true) {
         this.url = "https://ishorten.gq/"+data._cb.code
         this.cacheurl = this.url
         this.successHandle()
       }
       if(!data.state || data.code === "2952"){
         this.url = "https://ishorten.gq/"+data._cb.code
         this.cacheurl = this.url
         this.successHandle()
       }
      })
      .catch((err)=>{
        console.log(err); 
        alert(err)
        this.errorHandle()
      })
    },
    shortURL(e){
      e.preventDefault();
      var _c = ""
      
      if(this.url.length<1) return false;
        this.ax = setInterval(()=>{
        this.btnVal = _c;
       switch(_c){
         case "•":
           _c = "••"
           break
         case "••":
           _c = "•••"
           break
         case "•••":
           _c = "••••"
           break
         case "••••":
           _c = "••••"
         default:
           _c = "•"
           break
       }
      }, 200)
      this.btnDisabled = true;
      this.url = this.uriHandler(this.url);
      setTimeout(()=>{
       post(`${this.API_ENDPOINT}/proxy`, {
         target:this.url
       })
       .then(({ data }) => { 
        if(data.code===2002) return this.nextURICompile();
        else if(data.code===5883) return this.errorHandle()
       })
       .catch((err) => { 
         console.log(err)
         this.errorHandle()
       })
      }, 1500) 
    }
  },
  watch:{
    url(x, y){
      if(x==this.cacheurl) {}
      else{
        this.inputStatus = "border:4px solid #F0F7FE;";
        this.inputModel = "color:black;"
        this.iconStyle = "display:none";
      }
    }
  }
}
</script>
3