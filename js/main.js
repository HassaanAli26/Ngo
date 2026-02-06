function openDonate(){document.getElementById('donateModal').style.display='block'}
function closeDonate(){document.getElementById('donateModal').style.display='none'}

document.querySelectorAll('[data-count]').forEach(el=>{
  let target=+el.dataset.count,c=0
  let i=setInterval(()=>{
    c++;el.innerText=c
    if(c>=target)clearInterval(i)
  },20)
})

let en=false
document.getElementById('langBtn').onclick=()=>{
  en=!en
  document.querySelectorAll('[data-ur]').forEach(e=>{
    e.innerText=en?e.dataset.en:e.dataset.ur
  })
}
