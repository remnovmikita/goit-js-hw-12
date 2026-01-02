import{S as v,i as q,a as P}from"./assets/vendor-CcCOw5fX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".showLoad"),$=()=>d.innerHTML="",p=()=>h.classList.add("show"),n=()=>h.classList.remove("show"),y=()=>m.classList.add("show"),u=()=>m.classList.remove("show");function g(o){const t=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:b,comments:w,downloads:S})=>`<li class ="gallarey-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${r}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${i}</p></li>
            <li>Views<p>${b}</p></li>
            <li>Comments<p>${w}</p></li>
            <li>Downloads<p>${S}</p></li>
            </ul>
                    </li>`).join("");d.insertAdjacentHTML("beforeend",t),new v(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const l=o=>{q.error({title:"Error",position:"topRight",message:o})};let x=15;const M="https://pixabay.com/api/",B="53507836-a90b7328b368e53f321449aea",f=async(o,t)=>await P.get(M,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:x,page:t}}).then(s=>s.data),E=document.querySelector(".form"),L=document.querySelector('[name="search-text"]'),O=document.querySelector(".showLoad");let c=1;E.addEventListener("submit",o=>{let t=1,s=L.value.trim();if(o.preventDefault(),$(),u(),s===""){l("Невалидный ввод");return}else p(),n(),f(s,t).then(a=>{a.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):(g(a.hits),n(),y())}).catch(a=>{n(),l("Sorry, there are no images matching your search query. Please try again!")})});O.addEventListener("click",()=>{c+=1;let o=L.value.trim();u(),p(),f(o,c).then(t=>{const s=Math.ceil(t.totalHits/15);if(n(),s<=c)u(),l("We're sorry, but you've reached the end of search results.");else{g(t.hits);const e=document.querySelector(".gallarey-item").getBoundingClientRect();window.scrollBy({top:e.x*4,left:100,behavior:"smooth"}),y()}}).catch(t=>{n(),l("We're sorry, but you've reached the end of search results.")})});
//# sourceMappingURL=index.js.map
