(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34680ae5"],{4795:function(t,e,a){var r=a("23e7"),n=a("da84"),i=a("342f"),l=[].slice,s=/MSIE .\./.test(i),o=function(t){return function(e,a){var r=arguments.length>2,n=r?l.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,a)}};r({global:!0,bind:!0,forced:s},{setTimeout:o(n.setTimeout),setInterval:o(n.setInterval)})},"5b8f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("form",{staticClass:"w-[700px] pt-[25px] h-[80px] flex gap-[10px] items-center justify-center",attrs:{id:"shortForm"},on:{submit:t.shortURL}},[a("div",{staticClass:"w-[525px] bg-[#F0F7FE] p-[10px] transition-all delay-[100ms] rounded-[15px] h-full grid grid-cols-[8fr,auto] justify-center items-center gap-[5px]",style:t.inputStatus,attrs:{id:"shortInput"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"w-full bg-transparent h-full",style:t.inputModel,attrs:{id:"url",maxlength:"250",placeholder:"Kısaltmak için bir URL girin.."},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),a("p",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"bottom",arrow:!0,trigger:"click",theme:"google"},expression:"{ placement : 'bottom',  arrow: true, trigger:'click', theme:'google'}"}],attrs:{content:"Kopyalandı!"}},[a("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.cacheurl,expression:"cacheurl",arg:"copy"},{name:"tippy",rawName:"v-tippy",value:{placement:"bottom",arrow:!0,theme:"google"},expression:"{placement : 'bottom', arrow: true, theme:'google'}"}],staticClass:"fa fa-clipboard items-center justify-center text-[#2c2c2c] text-[23px] cursor-pointer",style:t.iconStyle,attrs:{content:"Kopyala"}})])]),a("input",{staticClass:"w-[137px] bg-[#F18213] cursor-pointer grid items-center justify-center rounded-[15px] h-full text-[18px] font-semibold",attrs:{id:"submit",type:"submit",disabled:t.btnDisabled},domProps:{value:t.btnVal}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid text-center gap-[10px]",attrs:{id:"shortMain"}},[a("p",{staticClass:"text-[36px] text-[#FF7B00] font-bold w-[100%]",attrs:{id:"shortTitle"}},[t._v("Bir Bağlantıyı Kısalt")]),a("p",{staticClass:"text-white text-[16px] w-[780px] font-medium text-left",attrs:{id:"shortDescription"}},[t._v(" Bir bağlantıyı kısaltmak için aşağıda yer alan kutuya bağlantıyı yapıştır ve Oluştur butonuna tıkla, bağlantıyı oluşturduktan sonra beliren Kopyala butonuna tıklayarak kopyalayabilirsin. ")])])}],i=(a("4795"),a("bc3a")),l={mounted:function(){document.title="iShorten: Free Shortener Service"},data:function(){return{url:"",inputStatus:"border:4px solid #F0F7FE",btnVal:"Oluştur",btnDisabled:!1,cacheurl:"",iconStyle:"display:none;",inputModel:"",key:"",ax:function(){},API_ENDPOINT:"http://apishorten3.herokuapp.com"}},methods:{uriHandler:function(t){return/^https?:\/\//i.test(t)?t:"https://".concat(t)},errorHandle:function(){this.btnDisabled=!1,this.inputStatus="border:4px solid #EE3737;color:#EE3737",this.iconStyle="display:none;",clearInterval(this.ax),this.btnVal="Oluştur"},successHandle:function(){this.btnDisabled=!1,this.inputStatus="border:4px solid #37EE5C;font-weight:medium;",this.inputModel="color:rgb(51 196 38);",this.iconStyle="display:grid;color:#626368;",clearInterval(this.ax),this.btnVal="Oluştur"},nextURICompile:function(){var t=this;this.url=this.uriHandler(this.url),Object(i["post"])("".concat(this.API_ENDPOINT,"/_db/new"),{uri:this.url}).then((function(e){var a=e.data;!0===a.state&&(t.url="https://ishorten.gq/"+a._cb.code,t.cacheurl=t.url,t.successHandle()),a.state&&"2952"!==a.code||(t.url="https://ishorten.gq/"+a._cb.code,t.cacheurl=t.url,t.successHandle())}))["catch"]((function(e){console.log(e),alert(e),t.errorHandle()}))},shortURL:function(t){var e=this;t.preventDefault();var a="";if(this.url.length<1)return!1;this.ax=setInterval((function(){switch(e.btnVal=a,a){case"•":a="••";break;case"••":a="•••";break;case"•••":a="••••";break;case"••••":a="••••";default:a="•";break}}),200),this.btnDisabled=!0,this.url=this.uriHandler(this.url),setTimeout((function(){Object(i["post"])("".concat(e.API_ENDPOINT,"/proxy"),{target:e.url}).then((function(t){var a=t.data;return 2002===a.code?e.nextURICompile():5883===a.code?e.errorHandle():void 0}))["catch"]((function(t){console.log(t),e.errorHandle()}))}),1500)}},watch:{url:function(t,e){t==this.cacheurl||(this.inputStatus="border:4px solid #F0F7FE;",this.inputModel="color:black;",this.iconStyle="display:none")}}},s=l,o=a("2877"),c=Object(o["a"])(s,r,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-34680ae5.15e9ed7f.js.map