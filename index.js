import{a as b,S as E,i as a}from"./assets/vendor-S2qh7U4E.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const P="57130797-780b6a86ac76cc845781f498c",S="https://pixabay.com/api/",R=15;async function f(s,r=1){const e={key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:R,page:r};return(await b.get(S,{params:e})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more"),q=new E(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <div class="info">
            <p class="info-item"><span>Likes</span><span>${e.likes}</span></p>
            <p class="info-item"><span>Views</span><span>${e.views}</span></p>
            <p class="info-item"><span>Comments</span><span>${e.comments}</span></p>
            <p class="info-item"><span>Downloads</span><span>${e.downloads}</span></p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",r),q.refresh()}function B(){m.innerHTML=""}function L(){h.classList.add("active")}function w(){h.classList.remove("active")}function v(){g.classList.remove("hidden")}function l(){g.classList.add("hidden")}const p=document.getElementById("search-form"),$=document.querySelector(".load-more");let u="",n=1,i=0;p.addEventListener("submit",async s=>{s.preventDefault();const r=p.elements["search-text"].value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}u=r,n=1,i=0,B(),l(),L();try{const e=await f(u,n);if(e.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}i=e.totalHits,y(e.hits),e.hits.length<15||n*15>=i?(l(),a.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});$.addEventListener("click",async()=>{n+=1,L(),l();try{const s=await f(u,n);y(s.hits),n*15>=i?(l(),a.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v();const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
