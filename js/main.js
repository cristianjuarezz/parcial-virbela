const themeToggle = document.querySelector("#theme-btn"); // Tomo la referencia al boton por su ID (devuelve el unico item)
const currentTheme = localStorage.getItem("theme"); // Carga la key "theme" si es que existe, sino es nulo
const body = document.body; // Referencia al body para togglear la clase dark

// Definen el innerHTML para los iconos del boton de tema
const sun = '<i class="fa-solid fa-sun"></i>'
const moon = '<i class="fa-solid fa-cloud-moon"></i>'

let isDark = true // Define el estado del switch (no exactamente el tema)

if (currentTheme == "dark") {
  body.classList.add("dark");
  themeToggle.innerHTML=sun;
}
else{
  themeToggle.innerHTML=moon;
}

function themeMode() {
    isDark = !isDark;
    isDark ? themeToggle.innerHTML = moon : themeToggle.innerHTML = sun; // Ternario para asignar el icono moon o sun correspondiente
    body.classList.toggle("dark");

    let theme = "light";
    if (body.classList.contains("dark")) { // Sincroniza la variable theme con el real
      theme = "dark";
    }
    localStorage.setItem("theme", theme); // Asigna o actualiza la key "theme"
}
