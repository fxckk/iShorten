(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc5e5"],{"4e42":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s(t.text)+" ")])},c=[],i=n("bc3a"),o={mounted:function(){var t=this;document.title="Redirecting..",Object(i["get"])("".concat(this.API_ENDPOINT,"/_db/init/")+this.$route.params.qcode).then((function(e){var n=e.data;if(3821===n.code)return t.text="Veritabanında bu koda ait yönlendirme bulunamadı.";200===n.code&&(window.location=n._cb.to)}))["catch"]((function(t){alert("Bir hata oluştu : "+t)}))},data:function(){return{text:"Redirecting..",API_ENDPOINT:"https://apishorten3.herokuapp.com"}}},u=o,r=n("2877"),d=Object(r["a"])(u,a,c,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0cc5e5.e24df095.js.map