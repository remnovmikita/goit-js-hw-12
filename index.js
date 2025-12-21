/* empty css                      */import{S as v,i as q,a as P}from"./assets/vendor-CcCOw5fX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".showLoad"),$=()=>d.innerHTML="",p=()=>m.classList.add("show"),n=()=>m.classList.remove("show"),g=()=>h.classList.add("show"),c=()=>h.classList.remove("show");function f(r){const t=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:i,views:w,comments:b,downloads:S})=>`<li class ="gallarey-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${s}"
                        alt ="${o}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${i}</p></li>
            <li>Views<p>${w}</p></li>
            <li>Comments<p>${b}</p></li>
            <li>Downloads<p>${S}</p></li>
            </ul>
                    </li>`).join("");d.insertAdjacentHTML("beforeend",t),new v(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const u=r=>{q.error({title:"Error",position:"topRight",message:r})};let x=15;const M="https://pixabay.com/api/",B="53507836-a90b7328b368e53f321449aea",y=async(r,t)=>await P.get(M,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:x,page:t}}).then(a=>a.data),E=document.querySelector(".form"),L=document.querySelector('[name="search-text"]'),O=document.querySelector(".showLoad");let l=1;E.addEventListener("submit",r=>{let t=1,a=L.value.trim();r.preventDefault(),p(),$(),c(),a===""?u("Невалидный ввод"):setTimeout(()=>{n(),y(a,t).then(s=>{s.hits.length===0?u("Sorry, there are no images matching your search query. Please try again!"):(f(s.hits),g())}).catch(s=>{console.log(s)})},1e3)});O.addEventListener("click",()=>{l+=1;let r=L.value.trim();c(),p(),setTimeout(()=>{y(r,l).then(t=>{const a=Math.ceil(t.totalHits/15);if(n(),a===l)c(),u("We're sorry, but you've reached the end of search results.");else{f(t.hits);const e=document.querySelector(".gallarey-item").getBoundingClientRect();window.scrollBy({top:e.x*4,left:100,behavior:"smooth"}),g()}}).catch(t=>{n(),console.log(t)})},1e3)});
//# sourceMappingURL=index.js.map
