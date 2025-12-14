function setYear() {
  var y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}
setYear();

function goNext() {
  var dot = document.getElementById("dot");
  if (dot) dot.textContent = "...";
  location.hash = "#gallery";
}

window.addEventListener("DOMContentLoaded", function () {
  const user = localStorage.getItem("username");
  const signin = document.getElementById("signin");

  if (user && signin) {
    signin.outerHTML = `
      <div id="user-info">
        <span id="welcome">سلام، ${user} 👋</span>
        <button id="logout">خروج</button>
      </div>
    `;

    const logout = document.getElementById("logout");
    logout.addEventListener("click", () => {
      localStorage.removeItem("username");
      location.reload(); 
    });
  }
});
