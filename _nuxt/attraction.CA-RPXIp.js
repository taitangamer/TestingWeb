import{a4 as a,ah as s,a6 as i,ag as r,D as o,Y as l,f as c}from"./entry.DIm1cVWt.js";const d=a("attraction",{state:()=>({completed:!1}),actions:{checkAttraction(){var e;s().getDailyKeysMiniGameClaimed&&i().getDailyComboClaimed&&r().getDailyCipherClaimed&&(((e=o().tasks.find(t=>t.id===l.STREAK_DAYS))==null?void 0:e.isCompleted)??!1)?(this.completed=!0,c().trackEvent("attraction_reached")):this.completed=!1}}});export{d as u};
