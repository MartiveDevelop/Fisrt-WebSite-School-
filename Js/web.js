function setYear(){
  var y = document.getElementById("y");
  if(y){
    y.textContent = new Date().getFullYear();
  }
}
setYear();

function goNext(){
  var dot = document.getElementById("dot");
  if(dot){ dot.textContent = "..."; }
  location.hash = "#gallery";
}
