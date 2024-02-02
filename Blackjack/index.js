const asideHeader = document.querySelector(".aside-mobil-header");

asideHeader.addEventListener('click', (e) => {
  const isExpanded = asideHeader.getAttribute('aria-expanded')
  const asideContent = asideHeader.nextElementSibling
  if(isExpanded === "true") {
    asideContent.style.maxHeight = asideContent.scrollHeight + "px"
    asideHeader.setAttribute("aria-expanded", false)
  } else {
    asideContent.style.maxHeight =0
    asideHeader.setAttribute("aria-expanded", true)
  }
})

// const startBtn = document.getElementById("startGame")

// startBtn.addEventListener('click', (e)=> {
//   startBtn.style.display  = "none"
// })