(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("main"),a=document.createElement("footer");t.id="header",a.id="footer",n.id="main",document.createElement("ul").className="nav-bar";const o=document.createElement("div");o.id="nav-bar-buttons";const s=document.createElement("h1");s.textContent="Spiffing Steakhouse",s.id="restaurant-name",t.appendChild(s),["home","menu","contact"].forEach((e=>{let t=document.createElement("input"),n=document.createElement("label");t.type="radio",t.name="tabs",t.id="tab-"+e,n.htmlFor=`${t.id}`,n.textContent=e,o.appendChild(t),o.appendChild(n)})),t.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(a)})(),console.log("made it here too");const e=document.getElementById("main"),t=(document.querySelector("#content"),document.createElement("div"),document.createElement("img"));t.src="images/restaurant_outside.jpg",document.createElement("h1").textContent="Spiffing Steakhouse";const n=document.createElement("p");n.textContent="The Spiffing Steakhouse, being situated on the corner of the river Thames and the mediterranean Sea, is an absolute must when vising the City. Whether you decide on one of our world class Aussie beef steaks, our seafood, or our hamburgers, you'll undoubtedly be raving about it to all your friends and family until they dissown you!";const a=()=>{e.appendChild(t),e.appendChild(n)},o=document.getElementById("main"),s=(document.createElement("img"),document.createElement("div"));s.className="sections";class i{constructor(e,t,n,a=""){this.title=e,this.price=t,this.section=n,this.description=a}}let d=[];d.push(new i("Bone marrow and onions","8","starters","")),d.push(new i("Smoked mackerel salad","10","starters","")),d.push(new i("Spiffing smoked salmon","12","starters","")),d.push(new i("Spiffing Burger","12","mains","served with chips or salad")),d.push(new i("Poached Scallop with mashed potatoes","14","mains")),d.push(new i("Chilled lobster meat roll","14","mains")),d.push(new i("Slow-cooked pork ribs","16","mains")),d.push(new i("Rump (300g)","18","steak","")),d.push(new i("Rib-Eye (350g)","24","steak","")),d.push(new i("Sirloin (400g)","26","steak","")),d.push(new i("Fillet (350g)","32","steak","")),d.push(new i("Curly fries","5","sides","")),d.push(new i("Chunky thick-cut chips","5","sides","")),d.push(new i("Mash","6","sides","")),d.push(new i("Macaroni cheese","6","sides","")),d.push(new i("Creamy spinach","7","sides","")),d.push(new i("Spiffing cheesecake","8","desserts","")),d.push(new i("Millionaire shortbread","9","desserts","")),d.push(new i("Sticky toffee pudding","10","desserts","")),console.log(d),document.createElement("h1").textContent="I am the menu",document.createElement("p").textContent="The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.",["starters","mains","steak","sides","desserts"].forEach((e=>{let t=document.createElement("div");t.className="section";let n=document.createElement("h2");n.className="section-title",n.textContent=`${e}`,t.appendChild(n),d.forEach((n=>{if(n.section===e){let e=document.createElement("div"),a=document.createElement("span");a.className="menu-item-title";let o=document.createElement("span");o.className="menu-item-price",e.className="dish",a.textContent=`${n.title}`,o.textContent=`${n.price}`,e.appendChild(a),e.appendChild(o),t.appendChild(e)}})),s.appendChild(t)}));const c=document.getElementById("main"),l=(document.querySelector("#content"),document.createElement("div"),document.createElement("img")),m=document.createElement("h1");m.textContent="You can contact us here";const r=document.createElement("p");r.textContent="Head on over to our social media pages to get up-to-date news on Spiffing Steakhouse, get the insider gossip on when the next STEAK GIVEAWAY IS!";const u=document.createElement("div");u.id="social-div",["facebook","twitter","instagram","google"].forEach((e=>{let t=document.createElement("a");t.className=`fa fa-${e}`,u.appendChild(t)})),document.getElementById("content");const h=document.getElementById("main"),p=()=>{for(;h.lastElementChild;)h.removeChild(h.lastElementChild)};document.addEventListener("click",(e=>{"home"==e.target.textContent&&(p(),a()),"menu"==e.target.textContent&&(p(),o.appendChild(s)),"contact"==e.target.textContent&&(p(),c.appendChild(l),c.appendChild(m),c.appendChild(r),c.appendChild(u))})),a()})();