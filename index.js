import{a as q,S as P,i as $}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let d=15;const M="https://pixabay.com/api/",x="53507836-a90b7328b368e53f321449aea",h=async(s,t)=>{try{return{...(await q.get(M,{params:{key:x,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:t}})).data,perPage:d}}catch(o){throw o}},y=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".showLoad"),B=()=>y.innerHTML="",g=()=>m.classList.add("show"),l=()=>m.classList.remove("show"),f=()=>p.classList.add("show"),u=()=>p.classList.remove("show");function L(s){const t=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:b,comments:S,downloads:v})=>`<li class ="gallary-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${i}"
                        alt ="${r}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${n}</p></li>
            <li>Views<p>${b}</p></li>
            <li>Comments<p>${S}</p></li>
            <li>Downloads<p>${v}</p></li>
            </ul>
                    </li>`).join("");y.insertAdjacentHTML("beforeend",t),new P(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const c=s=>{$.error({title:"Error",position:"topRight",message:s})},E=document.querySelector(".form"),w=document.querySelector('[name="search-text"]'),O=document.querySelector(".showLoad");let a=0;E.addEventListener("submit",async s=>{a+=1,s.preventDefault();const t=w.value.trim();if(B(),u(),t===""){c("Невалидный ввод");return}g();try{const o=await h(t,a);o.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(L(o.hits),f())}catch{c("Sorry, there are no images matching your search query. Please try again!")}finally{l(),a=0}});O.addEventListener("click",async()=>{a+=1;const s=w.value.trim();u(),g();try{const t=await h(s,a),o=Math.ceil(t.totalHits/t.perPage);if(l(),o<=a)u(),c("We're sorry, but you've reached the end of search results.");else{L(t.hits);const e=document.querySelector(".gallary-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"}),f()}}catch{c("We're sorry, but you've reached the end of search results.")}finally{l()}});
//# sourceMappingURL=index.js.map
