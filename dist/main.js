(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("footer"),o=document.createElement("main");o.id="main",e.appendChild(o);const a=document.createElement("ul");a.className="nav-bar",["home","menu","contact"].forEach((e=>{let t=document.createElement("li");t.textContent=e,t.className="nav-button",a.appendChild(t)}));const c=document.createElement("nav");c.appendChild(a),t.appendChild(c),e.appendChild(t),e.appendChild(o),e.appendChild(n)})(),console.log("made it here too");const e=document.getElementById("main"),t=(document.querySelector("#content"),document.createElement("div"),document.createElement("img"));t.src="../dist/images/restaurant_outside.jpg";const n=document.createElement("h1");n.textContent="The Spiffing Restaurant";const o=document.createElement("p");o.textContent="The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.";const a=()=>{e.appendChild(t),e.appendChild(n),e.appendChild(o)},c=document.getElementById("main"),d=(document.querySelector("#content"),document.createElement("div"),document.createElement("img")),m=document.createElement("h1");m.textContent="I am the menu";const l=document.createElement("p");l.textContent="The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.";const i=document.getElementById("main"),r=(document.querySelector("#content"),document.createElement("div"),document.createElement("img")),p=document.createElement("h1");p.textContent="You can contact us here";const u=document.createElement("p");u.textContent="The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.",document.getElementById("content");const s=document.getElementById("main"),h=()=>{for(;s.lastElementChild;)s.removeChild(s.lastElementChild)};document.addEventListener("click",(e=>{console.log(e.target.textContent),"home"==e.target.textContent&&(h(),a()),"menu"==e.target.textContent&&(h(),c.appendChild(d),c.appendChild(m),c.appendChild(l)),"contact"==e.target.textContent&&(h(),i.appendChild(r),i.appendChild(p),i.appendChild(u))})),a()})();