(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".btn-up");i.addEventListener("click",()=>{window.scrollTo(0,0)});const s=document.querySelector(".btn-up");window.onscroll=()=>{window.scrollY>700?s.classList.remove("btn-hidden"):window.scrollY<700&&s.classList.add("btn-hidden")};(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelectorAll(".js-close-menu"),c=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",c),r.forEach(e=>{e.addEventListener("click",c)}),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const u=document.querySelectorAll("[data-modal-open]"),d=document.querySelector("[data-modal]"),a=document.querySelector("[data-modal-close]");u.forEach(function(n){n.addEventListener("click",function(){d.classList.remove("is-hidden")})});a.addEventListener("click",function(){d.classList.add("is-hidden")});
