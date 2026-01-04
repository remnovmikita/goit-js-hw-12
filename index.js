import{a as q,S as v,i as M}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let d=15;const $="https://pixabay.com/api/",x="53507836-a90b7328b368e53f321449aea",h=async(s,t)=>{try{return{...(await q.get($,{params:{key:x,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:t}})).data,perPage:d}}catch(r){throw r}},y=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".showLoad"),E=()=>y.innerHTML="",g=()=>p.classList.add("show"),f=()=>p.classList.remove("show"),L=()=>m.classList.add("show"),l=()=>m.classList.remove("show");function u(s){const t=s.map(({webformatURL:a,largeImageURL:e,tags:o,likes:i,views:b,comments:P,downloads:S})=>`<li class ="gallery-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${o}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${i}</p></li>
            <li>Views<p>${b}</p></li>
            <li>Comments<p>${P}</p></li>
            <li>Downloads<p>${S}</p></li>
            </ul>
                    </li>`).join("");y.insertAdjacentHTML("beforeend",t),new v(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const n=s=>{M.error({title:"Error",position:"topRight",message:s})},O=document.querySelector(".form"),w=document.querySelector('[name="search-text"]'),A=document.querySelector(".showLoad");let c=1;O.addEventListener("submit",async s=>{s.preventDefault();const t=w.value.trim();if(E(),l(),t===""){n("Невалидный ввод");return}g();try{const r=await h(t,c);r.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):Math.ceil(r.totalHits/r.perPage)<=r.perPage&&(u(r.hits),L())}catch{n("Sorry, there are no images matching your search query. Please try again!")}finally{f(),c=1}});A.addEventListener("click",async()=>{c+=1;const s=w.value.trim();l(),g();try{const t=await h(s,c);if(Math.ceil(t.totalHits/t.perPage)<=c)u(t.hits),l(),n("We're sorry, but you've reached the end of search results.");else{u(t.hits);const a=document.querySelector(".gallery-item");L()}}catch{n("We're sorry, but you've reached the end of search results.")}finally{f()}});
//# sourceMappingURL=index.js.map
