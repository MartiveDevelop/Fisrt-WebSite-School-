function login() {
  var u = document.getElementById("u");
  var p = document.getElementById("p");
  var ok = document.getElementById("ok");

  if (u && p && u.value !== "" && p.value !== "") {
    localStorage.setItem("username", u.value);
    window.location.href = "website.html";
  } else {
    if (ok) ok.textContent = "پر کن!";
  }
}
