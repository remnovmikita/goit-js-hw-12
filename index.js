import{S as v,i as q,a as P}from"./assets/vendor-CcCOw5fX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".showLoad"),$=()=>d.innerHTML="",m=()=>h.classList.add("show"),l=()=>h.classList.remove("show"),p=()=>y.classList.add("show"),u=()=>y.classList.remove("show");function f(s){const t=s.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:w,comments:b,downloads:S})=>`<li class ="gallary-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${r}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${i}</p></li>
            <li>Views<p>${w}</p></li>
            <li>Comments<p>${b}</p></li>
            <li>Downloads<p>${S}</p></li>
            </ul>
                    </li>`).join("");d.insertAdjacentHTML("beforeend",t),new v(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const n=s=>{q.error({title:"Error",position:"topRight",message:s})};let x=15;const M="https://pixabay.com/api/",B="53507836-a90b7328b368e53f321449aea",g=async(s,t)=>{try{return(await P.get(M,{params:{key:B,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:x,page:t}})).data}catch(o){throw o}},E=document.querySelector(".form"),L=document.querySelector('[name="search-text"]'),O=document.querySelector(".showLoad");let c=1;E.addEventListener("submit",async s=>{s.preventDefault();const t=L.value.trim();if($(),u(),t===""){n("Невалидный ввод");return}m();try{const o=await g(t,c);o.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):(f(o.hits),c>=1&&p())}catch{n("Sorry, there are no images matching your search query. Please try again!")}finally{l()}});O.addEventListener("click",async()=>{c+=1;const s=L.value.trim();u(),m();try{const t=await g(s,c),o=Math.ceil(t.totalHits/15);if(l(),o<=c)u(),n("We're sorry, but you've reached the end of search results.");else{f(t.hits);const e=document.querySelector(".gallary-item").getBoundingClientRect();window.scrollBy({top:e.x*2,left:100,behavior:"smooth"}),p()}}catch{n("We're sorry, but you've reached the end of search results.")}finally{l()}});
//# sourceMappingURL=index.js.map
