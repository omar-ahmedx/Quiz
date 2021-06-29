function show() {
  const sub = document.querySelector(".sub-nav");

  if(sub.classList.contains("flex")) {
    sub.classList.remove("show")
    setTimeout(function() {
      sub.classList.remove("flex")
    }, 1000)
  } else {
    sub.classList.add("flex")
    setTimeout(function() {
      sub.classList.add("show")
    }, 100)
  }
}
const btn = document.querySelector('.toggle')
btn.addEventListener("click", show)