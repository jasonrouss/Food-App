document.addEventListener("DOMContentLoaded", function (event) {
  var jA = document.querySelector(".jA");

  // Navbar
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));
  //Window Resize

  function resize() {
    if (window.innerWidth < 984) {
      jA.classList.remove("jA");
    } else {
      jA.classList.add("jA");
    }
  }

  window.onresize = resize;

  //Main function

  document.querySelector("#foodInput").addEventListener("submit", (e) => {
    //Prevent Actual Submitted
    e.preventDefault();

    //Get values
    const monBreakfast = document.querySelector("#bkInput").value;
    const lunch = document.querySelector("#luInput").value;
    const dinner = document.querySelector("#diInput").value;
    const bk = document.querySelector("#bkOutput");
    const lu = document.querySelector("#luOutput");
    const di = document.querySelector("#diOutput");
    const bre = document.querySelector("#bre").innerText;
    const lun = document.querySelector("#lun").innerText;
    const din = document.querySelector("#din").innerText;

    const monKeyBre = localStorage.key(1);
    const keyLun = localStorage.key(0);
    const keyDin = localStorage.key(2);
    const monValueBre = JSON.parse(localStorage.getItem(monKeyBre));
    const valueLun = JSON.parse(localStorage.getItem(keyLun));
    const valueDin = JSON.parse(localStorage.getItem(keyDin));
    if (
      !localStorage.getItem("keyBre") ||
      JSON.parse(localStorage.getItem(monKeyBre)).length === 0
    ) {
      window.localStorage.setItem(bre, JSON.stringify(monBreakfast));
      bk.innerHTML = `${monValueBre}`;
    }
    if (
      !localStorage.getItem("keyLun") ||
      JSON.parse(localStorage.getItem(keyLun)).length === 0
    ) {
      window.localStorage.setItem(lun, JSON.stringify(lunch));

      lu.innerHTML = `${valueLun}`;
    }
    if (
      !localStorage.getItem("keyDin") ||
      JSON.parse(localStorage.getItem(keyDin)).length === 0
    ) {
      window.localStorage.setItem(din, JSON.stringify(dinner));
      di.innerHTML = `${valueDin}`;
    }
  });
  function update() {
    const bk = document.querySelector("#bkOutput");
    const lu = document.querySelector("#luOutput");
    const di = document.querySelector("#diOutput");
    const monKeyBre = localStorage.key(1);
    const keyLun = localStorage.key(0);
    const keyDin = localStorage.key(2);
    const monValueBre = JSON.parse(localStorage.getItem(monKeyBre));
    const valueLun = JSON.parse(localStorage.getItem(keyLun));
    const valueDin = JSON.parse(localStorage.getItem(keyDin));
    bk.innerHTML = `${monValueBre}`;
    lu.innerHTML = `${valueLun}`;
    di.innerHTML = `${valueDin}`;
  }
  update();
});
