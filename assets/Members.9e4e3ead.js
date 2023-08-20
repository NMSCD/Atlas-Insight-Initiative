import{Q as R}from"./QPage.de2b57aa.js";import{c as g,r as u,w as j,a as E,h as s,Z as L,_ as $,E as k,F as _,R as q,J as F,X as w,M as C,G as B,I as H,S as K,Q as D,T as G}from"./index.542e4ac9.js";import{Q as O}from"./QSpinner.48a13582.js";import{c as V,h as A}from"./render.7e6b15fa.js";import"./use-size.663b8255.js";const J={ratio:[String,Number]};function W(e,i){return g((()=>{const r=Number(e.ratio||(void 0!==i?i.value:void 0));return!0!==isNaN(r)&&r>0?{paddingBottom:100/r+"%"}:null}))}const X=16/9;var Z=V({name:"QImg",props:{...J,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:X},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:r}){const l=u(e.initialRatio),n=W(e,l);let t=null,a=!1;const o=[u(null),u(S())],m=u(0),c=u(!1),p=u(!1),d=g((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),v=g((()=>({width:e.width,height:e.height}))),f=g((()=>`q-img__image ${void 0!==e.imgClass?e.imgClass+" ":""}q-img__image--with${!0===e.noTransition?"out":""}-transition`)),b=g((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function h(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null}function y(e){null!==t&&(clearTimeout(t),t=null),p.value=!1,null===e?(c.value=!1,o[1^m.value].value=S()):c.value=!0,o[m.value].value=e}function _({target:e}){!0!==a&&(null!==t&&(clearTimeout(t),t=null),l.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,N(e,1))}function N(e,i){!0===a||1e3===i||(!0===e.complete?function(e){!0!==a&&(m.value=1^m.value,o[m.value].value=null,c.value=!1,p.value=!1,r("load",e.currentSrc||e.src))}(e):t=setTimeout((()=>{t=null,N(e,i+1)}),50))}function w(e){null!==t&&(clearTimeout(t),t=null),c.value=!1,p.value=!0,o[m.value].value=null,o[1^m.value].value=S(),r("error",e)}function q(i){const r=o[i].value,l={key:"img_"+i,class:f.value,style:b.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return m.value===i?(l.class+=" q-img__image--waiting",Object.assign(l,{onLoad:_,onError:w})):l.class+=" q-img__image--loaded",s("div",{class:"q-img__container absolute-full",key:"img"+i},s("img",l))}function B(){return!0!==c.value?s("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},A(i[!0===p.value?"error":"default"])):s("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==i.loading?i.loading():!0===e.noSpinner?void 0:[s(O,{color:e.spinnerColor,size:e.spinnerSize})])}return j((()=>h()),y),y(h()),E((()=>{a=!0,null!==t&&(clearTimeout(t),t=null)})),()=>{const i=[];return null!==n.value&&i.push(s("div",{key:"filler",style:n.value})),!0!==p.value&&(null!==o[0].value&&i.push(q(0)),null!==o[1].value&&i.push(q(1))),i.push(s(L,{name:"q-transition--fade"},B)),s("div",{class:d.value,style:v.value,role:"img","aria-label":e.alt},i)}}});const Y={class:"member-item"},ee={class:"heading"},ie=k({__name:"MemberItem",props:{imgUrl:String,memberName:String,position:String},setup(e){const i=e;return(e,r)=>(_(),q("div",Y,[F(Z,{src:i.imgUrl,"spinner-color":"white",class:"avatar",fit:"contain"},null,8,["src"]),w("p",ee,C(i.memberName),1),w("p",null,C(i.position),1)]))}});var te=$(ie,[["__scopeId","data-v-0f6a6ef0"]]),re=[{memberName:"Cyberpunk2350",imgUrl:"profilePictures/CP2350.png",position:"Network Guy"},{memberName:"ThatBomberBoi",imgUrl:"profilePictures/Bomber.gif",position:"Expedition Hacker"},{memberName:"KhaozTopsy",imgUrl:"profilePictures/Khaoz.webp",position:"Magic Man"},{memberName:"Lenni",imgUrl:"profilePictures/Lenni.png",position:"Script Kiddie"},{memberName:"Sphynxcolt",imgUrl:"profilePictures/Sphynxcolt.webp",position:"Art Boi"},{memberName:"Corvus",imgUrl:"profilePictures/Corvus.webp",position:"Professional Crow"},{memberName:"Blend3rman",imgUrl:"profilePictures/Blend3rman.webp",position:"Probably a person"}];const ue=k({__name:"Members",setup:e=>(e,i)=>(_(),B(R,{class:"row items-center justify-evenly member-cards q-mx-xl q-mt-xl"},{default:H((()=>[(_(!0),q(G,null,K(D(re),(e=>(_(),B(te,{imgUrl:e.imgUrl,memberName:e.memberName,position:e.position,key:e.memberName,class:"shadow-1"},null,8,["imgUrl","memberName","position"])))),128))])),_:1}))});export{ue as default};
