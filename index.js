import{a as v,S as M,i as $}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let h=15;const x="https://pixabay.com/api/",B="53507836-a90b7328b368e53f321449aea",g=async(t,r)=>{try{return{...(await v.get(x,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:r}})).data,perPage:h}}catch(s){throw s}},p=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector(".showLoad"),E=()=>p.innerHTML="",L=()=>m.classList.add("show"),w=()=>m.classList.remove("show"),b=()=>f.classList.add("show"),u=()=>f.classList.remove("show");function d(t){const r=t.map(({webformatURL:a,largeImageURL:e,tags:o,likes:n,views:P,comments:S,downloads:q})=>`<li class ="gallery-item">
                    <a class = "gallery-link" href="${e}">
                    <img
                        class = "gallery-image"    
                        src = "${a}"
                        alt ="${o}"
                        />
                    </a>
                     <ul class="info">
            <li>Likes<p>${n}</p></li>
            <li>Views<p>${P}</p></li>
            <li>Comments<p>${S}</p></li>
            <li>Downloads<p>${q}</p></li>
            </ul>
                    </li>`).join("");p.insertAdjacentHTML("beforeend",r),new M(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"}).refresh()}const l=t=>{$.error({title:"Error",position:"topRight",message:t})},O=document.querySelector(".form"),y=document.querySelector('[name="search-text"]'),A=document.querySelector(".showLoad");let c="",i=1;O.addEventListener("submit",async t=>{if(t.preventDefault(),c=y.value.trim(),E(),u(),c===""){l("Невалидный ввод");return}L();try{i=1;const r=await g(c,i);r.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):Math.ceil(r.totalHits/r.perPage)>=i&&(d(r.hits),b())}catch{l("Sorry, there are no images matching your search query. Please try again!")}finally{w(),y.value=""}});A.addEventListener("click",async()=>{i+=1,u(),L();try{const t=await g(c,i);if(Math.ceil(t.totalHits/t.perPage)<=i)d(t.hits),u(),l("We're sorry, but you've reached the end of search results.");else{d(t.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),b()}}catch{l("We're sorry, щось трапилося")}finally{w()}});
//# sourceMappingURL=index.js.map
