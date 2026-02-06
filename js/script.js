// COUNTER ANIMATION
document.querySelectorAll('.count').forEach(counter=>{
  let target=+counter.dataset.target;
  let i=0;
  let interval=setInterval(()=>{
    i++;
    counter.innerText=i;
    if(i>=target) clearInterval(interval);
  },40);
});

// MODAL
function openDonate(){
  document.getElementById("donateModal").style.display="flex";
}
function closeDonate(){
  document.getElementById("donateModal").style.display="none";
}

// LANGUAGE TOGGLE (simple)
document.getElementById("langBtn").onclick=()=>{
  alert("Next step: Full Urdu/English JSON based switch (stable)");
};
