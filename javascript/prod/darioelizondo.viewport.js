function showViewportSize(){var n=window.innerWidth+"x"+window.innerHeight;document.getElementById("resolution").innerHTML=n,window.addEventListener("resize",function(){var n=window.innerWidth+"x"+window.innerHeight;document.getElementById("resolution").innerHTML=n})}document.addEventListener("DOMContentLoaded",showViewportSize,!1);