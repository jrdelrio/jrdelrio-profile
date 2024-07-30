var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycby3XbC_fQotPUpeDLVL-GOC3H_83ye20eeNYybnyrr4FB88_-uQoDKW-2iYZnrTb3mn/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const requestOptions = {
    method: "POST",
    body: new FormData(form),
    redirect: 'follow',
    mode: 'no-cors',
    headers: {"Access-Control-Allow-Origin": "*"}
  };

  fetch(scriptURL, requestOptions)
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
