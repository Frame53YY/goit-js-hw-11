import{a as f,S as y,i as s}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="51592963-48219a683fda327b2179667c8",p="https://pixabay.com/api/";function h(i){const o={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(p,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),new Error("Failed to fetch images from Pixabay.")})}const l=document.querySelector(".gallery");let b=new y(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(i){function o({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:m,comments:d,downloads:u}){return`<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${n}" alt="${t}" />
          </a>
          <div class="image-info">
            <div class="image-info-container">
              <b>Likes</b>
              <p>${a}</p>
            </div>
            <div class="image-info-container">
              <b>Views</b>
              <p>${m}</p>
            </div>
            <div class="image-info-container">
              <b>Comments</b>
              <p>${d}</p>
            </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${u}</p>
            </div>
          </div>
        </div>
      </li>`}const r=i.map(o).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function L(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("visuallyhidden")}function w(){document.querySelector(".loader").classList.add("visuallyhidden")}const c=document.querySelector(".form"),x=document.querySelector('input[name="search-text"]');c.addEventListener("submit",P);async function P(i){i.preventDefault();const o=x.value.trim();if(o===""){c.reset(),s.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}L(),S();try{const r=await h(o);r.hits.length===0?s.info({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0}):v(r.hits)}catch(r){s.error({title:"Error",message:r.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{w(),c.reset()}}
//# sourceMappingURL=index.js.map
