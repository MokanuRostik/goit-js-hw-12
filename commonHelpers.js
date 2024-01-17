import{S as a}from"./assets/vendor-c9def49e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="https://pixabay.com/api/",f="39475716-e1b9a363d760376814942c80f",u=document.getElementById("search-form"),c=document.querySelector(".gallery"),l=new a(".gallery a.lightbox-trigger");l.refresh();c.addEventListener("click",r=>{r.target.classList.contains("lightbox-trigger")&&(r.preventDefault(),l.open())});u.addEventListener("submit",m);function m(r){r.preventDefault();const n=document.querySelector(".loading-indicator");n.style.display="block";const t=document.querySelector("form input").value;fetch(`${d}?key=${f}&q=${t}`).then(s=>s.json()).then(s=>{p(s),n.style.display="none"})}function p(r){const n=r.hits.map(t=>`<div class="photo-card">
                <a href="${t.largeImageURL}" class="lightbox-trigger">
                  <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                </a>
                <div class="info">
                  <p class="info-item"><b>Likes: ${t.likes}</b></p>
                  <p class="info-item"><b>Views: ${t.views}</b></p>
                  <p class="info-item"><b>Comments: ${t.comments}</b></p>
                  <p class="info-item"><b>Downloads: ${t.downloads}</b></p>
                </div>
              </div>`).join("");c.innerHTML=n,l.refresh()}
//# sourceMappingURL=commonHelpers.js.map
