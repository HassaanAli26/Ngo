function openDonate(){
  document.getElementById("donateModal").style.display="flex";
}
function closeDonate(){
  document.getElementById("donateModal").style.display="none";
}

/* COUNTER */
document.querySelectorAll(".count").forEach(el=>{
  let target=+el.dataset.target;
  let c=0;
  let i=setInterval(()=>{
    c++; el.innerText=c;
    if(c>=target) clearInterval(i);
  },30);
});

/* LANGUAGE */
document.getElementById("langBtn").onclick=()=>{
  document.querySelectorAll(".ur").forEach(e=>e.classList.toggle("hide"));
  document.querySelectorAll(".en").forEach(e=>e.classList.toggle("hide"));
};
