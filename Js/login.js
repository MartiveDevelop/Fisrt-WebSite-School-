function login() {
  var u = document.getElementById("u");
  var p = document.getElementById("p");
  var ok = document.getElementById("ok");

  if (u && p && u.value !== "" && p.value !== "") {
    localStorage.setItem("username", u.value);
<<<<<<< HEAD
    window.location.href = "index.html";
=======
    window.location.href = "website.html";
>>>>>>> fc5d837297b76ceae534272f8f3801902004c8e8
  } else {
    if (ok) ok.textContent = "پر کن!";
  }
}
