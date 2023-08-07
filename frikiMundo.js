// --------------------- imagen que gira ----------------------

function changeSpeed() {
  var imagen = document.getElementById("imagenGiratoria");
  var control = document.getElementById("speedControl");
  imagen.style.animation = "girar " + control.value + "s linear infinite";
}

// Llamamos a la función una vez al cargar la página para iniciar la animación
changeSpeed();

// -----------------------relojes del mundo-----------------

function updateClocks() {
  let now = new Date();

  document.getElementById("barcelona").textContent =
    " 🇪🇸 Barcelona: " +
    now.toLocaleTimeString("en-US", {
      timeZone: "Europe/Madrid",
      hour12: false,
    });
  document.getElementById("santiago").textContent =
    " 🇨🇱 Santiago: " +
    now.toLocaleTimeString("en-US", {
      timeZone: "America/Santiago",
      hour12: false,
    });
  document.getElementById("berlin").textContent =
    " 🇩🇪 Berlín: " +
    now.toLocaleTimeString("en-US", {
      timeZone: "Europe/Berlin",
      hour12: false,
    });
  document.getElementById("londres").textContent =
    " 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Londres: " +
    now.toLocaleTimeString("en-US", {
      timeZone: "Europe/London",
      hour12: false,
    });
  document.getElementById("tokio").textContent =
    " 🇯🇵 Tokio: " +
    now.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo", hour12: false });
  document.getElementById("san_francisco").textContent =
    " 🇺🇸 San Francisco: " +
    now.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour12: false,
    });
  document.getElementById("sidney").textContent =
    " 🇦🇺 Sídney: " +
    now.toLocaleTimeString("en-US", {
      timeZone: "Australia/Sydney",
      hour12: false,
    });
}
setInterval(updateClocks, 1000); // actualiza cada segundo

window.onload = function () {
  let selectElement = document.getElementById("country");

  fetch('./countries.json') // replace with the path to your JSON file
  .then(response => response.json())
  .then(data => {
    const select = document.getElementById('country');

    // create an initial blank option and append it to the select
    const initialOption = document.createElement('option');
    initialOption.value = '';
    initialOption.text = '';
    select.appendChild(initialOption);

    // create an option for each country and append it to the select
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name; // replace 'name' with the property in your JSON objects that holds the country name
      option.text = country.name; // replace 'name' with the property in your JSON objects that holds the country name
      select.appendChild(option);
    });
  })
  .catch(error => console.error('Error:', error));
};
