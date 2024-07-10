
var nm = document.querySelector("#name");
var em = document.querySelector("#email");
var msg = document.querySelector("#message");
var cmp = document.querySelector("#company");


function handleMouseOver() {
  this.style.transform = "scale(1.04)";
  this.style.backgroundColor = "#D3D3D3";
}

function handleMouseOut() {
  this.style.transform = "scale(1)";
  this.style.backgroundColor = "#fff";
}
[nm, em, msg, cmp].forEach(element => {
  element.addEventListener("mouseover", handleMouseOver);
  element.addEventListener("mouseout", handleMouseOut);
});
