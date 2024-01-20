import{S as c}from"./assets/vendor-c9def49e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="https://pixabay.com/api/",f="39475716-e1b9a363d760376814942c80f",m=document.getElementById("search-form"),l=document.querySelector(".gallery"),a=new c(".gallery a.lightbox-trigger");a.refresh();l.addEventListener("click",n=>{n.target.classList.contains("lightbox-trigger")&&(n.preventDefault(),a.open())});m.addEventListener("submit",u);function u(n){n.preventDefault();const r=document.querySelector(".loading-indicator");r.style.display="block";const t=document.querySelector("form input").value;fetch(`${d}?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{p(e),r.style.display="none"}).catch(e=>{console.error("Fetch error:",e),r.style.display="none"})}function p(n){const r=n.hits.map(t=>`<div class="photo-card">
                <a href="${t.largeImageURL}" class="lightbox-trigger">
                  <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                </a>
                <div class="info">
                  <p class="info-item"><b>Likes: ${t.likes}</b></p>
                  <p class="info-item"><b>Views: ${t.views}</b></p>
                  <p class="info-item"><b>Comments: ${t.comments}</b></p>
                  <p class="info-item"><b>Downloads: ${t.downloads}</b></p>
                </div>
              </div>`).join("");l.innerHTML=r,a.refresh()}
//# sourceMappingURL=commonHelpers.js.map
