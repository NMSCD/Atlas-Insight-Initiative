import{c as g,g as h,e as r,f as t,j as p,C as d,a as s,h as f}from"./index-DDfLDYGb.js";import{h as y}from"./_plugin-vue_export-helper-nx9bK1OZ.js";const Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:a}}=h(),o=r(p,t);if(o===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(d,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=s((()=>{const t=(!0===o.header.space?o.header.size:0)+(!0===o.footer.space?o.footer.size:0);if("function"==typeof e.styleFn){const n=!0===o.isContainer.value?o.containerHeight.value:a.screen.height;return e.styleFn(t,n)}return{minHeight:!0===o.isContainer.value?o.containerHeight.value-t+"px":0===a.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":a.screen.height-t+"px"}})),c=s((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>f("main",{class:c.value,style:i.value},y(n.default))}});export{Q};
