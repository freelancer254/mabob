import{Q as m,a as p,b as _,c as f}from"./QPage.021cb69e.js";import{c as s,d as g,Q as c,e as x}from"./QItem.4b0e2c75.js";import{api as h}from"./axios.c3c1c740.js";import{_ as N,T as l,a0 as i,W as e,V as t,a2 as u,a3 as Q,Y as n,Z as r,X as w,a1 as k,U as B}from"./index.dee82092.js";import"./use-router-link.0005982d.js";const I={name:"IndexPage",data(){return{text:"",trendingNews:[]}},mounted(){this.text="\u{1F525} Trending News",this.getTrendingNews()},methods:{getTrendingNews:function(){h.get("/trending").then(o=>{this.trendingNews=o.data}).catch(o=>{console.log(o)})}}},T={class:"q-pa-md",style:{"max-width":"700px"}},V={key:0,class:"q-gutter-xl items-center text-center"};function b(o,y,S,q,d,v){return l(),i(u,null,[e(m),e(p,{class:"flex"},{default:t(()=>[Q("div",T,[e(s,{class:"text-center"},{default:t(()=>[n(r(d.text),1)]),_:1}),d.trendingNews.length?w("",!0):(l(),i("div",V,[e(_,{size:"10em",color:"teal"})])),(l(!0),i(u,null,k(d.trendingNews,a=>(l(),B(x,{key:a.title},{default:t(()=>[e(g,{tag:"a",target:"_blank",href:a.url},{default:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[n(r(a.title),1)]),_:2},1024),e(s,{caption:"",lines:"5"},{default:t(()=>[n(r(a.text),1)]),_:2},1024),e(s,{caption:"",class:"q-pl-xl"},{default:t(()=>[n(" - "+r(a.source),1)]),_:2},1024)]),_:2},1024),e(c,{side:"",top:""},{default:t(()=>[e(s,{caption:""},{default:t(()=>[n(r(a.timestamp),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(f,{spaced:"",inset:""})]),_:2},1024))),128))])]),_:1})],64)}var A=N(I,[["render",b]]);export{A as default};
