import{_ as l}from"./coin.Cxfi8KlU.js";import{d as u,f as d,o as f,c as m,a as s,b as p,n as a,t as r,l as x}from"./entry.DIm1cVWt.js";const g={class:"price"},y={class:"price-image"},_=u({__name:"Price",props:{price:{type:Number,required:!0},text:{type:String,required:!1},size:{type:String,default:"normal"},prefix:{type:String,required:!1},affix:{type:String,required:!1},color:{type:String,required:!1},round:{type:Boolean,default:!0,required:!1}},setup(e){const t=e;function n(){switch(t.size){case"super-small":return"is-14";case"small":return"is-18";case"normal":return"is-20";case"large":return"is-28";case"x-large":return"is-40";case"xx-large":return"is-60";default:return"is-20"}}function i(){switch(t.color){case"yellow":return"text-yellow";case"green":return"text-green";case"orange":return"text-orange";case"blue":return"text-blue";case"red":return"text-red";default:return""}}const o=d();return(S,h)=>{const c=l;return f(),m("div",g,[s("div",y,[p(c,{class:a(n())},null,8,["class"])]),s("div",{class:a(["price-value",i()])},r(e.prefix)+r(e.text?e.text:x(o).numberFormat(e.price,e.round))+r(e.affix),3)])}}});export{_};
