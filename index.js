import{a as q,S as v,i as M}from"./assets/vendor-DcJ-KoJm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let h=15;const $="https://pixabay.com/api/",x="53507836-a90b7328b368e53f321449aea",y=async(r,t)=>{try{return{...(await q.get($,{params:{key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:t}})).data,perPage:h}}catch(s){throw s}},p=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".showLoad"),B=()=>p.innerHTML="",f=()=>g.classList.add("show"),L=()=>g.classList.remove("show"),w=()=>m.classList.add("show"),d=()=>m.classList.remove("show");function u(r){const t=r.map(({webformatURL:a,largeImageURL:e,tags:o,likes:l,views:b,comments:P,downloads:S})=>`<li class ="gallery-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${o}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${l}</p></li>
            <li>Views<p>${b}</p></li>
            <li>Comments<p>${P}</p></li>
            <li>Downloads<p>${S}</p></li>
            </ul>
                    </li>`).join("");p.insertAdjacentHTML("beforeend",t),new v(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const E=document.querySelector(".form"),O=document.querySelector('[name="search-text"]'),A=document.querySelector(".showLoad"),i=r=>{M.error({title:"Error",position:"topRight",message:r})};let c="",n=1;E.addEventListener("submit",async r=>{if(r.preventDefault(),c=O.value.trim(),B(),d(),c===""){i("Невалидный ввод");return}f();try{n=1;const t=await y(c,n);if(t.hits.length===0)i("Sorry, there are no images matching your search query. Please try again!");else{const s=Math.ceil(t.totalHits/t.perPage);n>s&&(u(t.hits),i("We're sorry, but you've reached the end of search results.")),u(t.hits),w()}}catch{i("Sorry, there are no images matching your search query. Please try again!")}finally{L()}});A.addEventListener("click",async()=>{n+=1,d(),f();try{const r=await y(c,n);if(Math.ceil(r.totalHits/r.perPage)<n)u(r.hits),d(),i("We're sorry, but you've reached the end of search results.");else{u(r.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),w()}}catch{i("We're sorry, щось трапилося")}finally{L()}});
//# sourceMappingURL=index.js.map
