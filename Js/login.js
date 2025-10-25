function login(){
  var u = document.getElementById("u");
  var p = document.getElementById("p");
  var ok = document.getElementById("ok");

  if(u && p && u.value !== "" && p.value !== ""){
    window.location.href = "../html/website.html";
  }else{
    if(ok){ ok.textContent = "پر کن!"; }
  }
}
