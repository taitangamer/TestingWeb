import{d as s,h as l,aq as d,o as r,c as n,F as c,r as u,n as f,m as _,a as t,l as m}from"./entry.DIm1cVWt.js";const y={class:"achievement-circles"},g=["width","height","viewBox"],h=["r","transform","stroke"],p=["id","y1","y2"],B=["stop-color"],v=["stop-color"],x=s({__name:"Circles",props:{size:{type:Number,required:!1,default:150},animation:{type:Boolean,required:!1,default:!0},disabled:{type:Boolean,required:!1,default:!1},disabledColor:{type:String,required:!1,default:"#8B8E93"}},setup(e){l(!1);const o=d([{radius:"68.5",gradientId:"paint0_linear_7525_2209",gradientUrl:"url(#paint0_linear_7525_2209)",y1:"6",y2:"89.5",color:"#FF9C6D",transform:""},{radius:"74.5",gradientId:"paint1_linear_7525_2209",gradientUrl:"url(#paint1_linear_7525_2209)",y1:"0",y2:"90.7609",color:"#BD52FF",transform:"rotate(-180 75 75)"},{radius:"62.5",gradientId:"paint2_linear_7525_2209",gradientUrl:"url(#paint2_linear_7525_2209)",y1:"12",y2:"88.2391",color:"#5A60FF",transform:"rotate(-180 75 75)"},{radius:"56.5",gradientId:"paint3_linear_7525_2209",gradientUrl:"url(#paint3_linear_7525_2209)",y1:"18",y2:"86.9783",color:"#35E0B7",transform:""}]);return(w,F)=>(r(),n("div",y,[(r(!0),n(c,null,u(m(o),(a,i)=>(r(),n("svg",{class:f(["achievement-circle",{"no-animation":e.animation}]),key:i,xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:`0 0 ${e.size} ${e.size}`,fill:"none",style:_({animationDirection:i%2===0?"reverse":"normal"})},[t("circle",{cx:75,cy:75,r:a.radius,transform:a.transform,stroke:a.gradientUrl},null,8,h),t("defs",null,[t("linearGradient",{id:a.gradientId,x1:"75",y1:a.y1,x2:"75",y2:a.y2,gradientUnits:"userSpaceOnUse"},[t("stop",{offset:0,"stop-color":e.disabled?e.disabledColor:a.color},null,8,B),t("stop",{offset:1,"stop-color":e.disabled?e.disabledColor:a.color,"stop-opacity":"0"},null,8,v)],8,p)])],14,g))),128))]))}});export{x as _};
