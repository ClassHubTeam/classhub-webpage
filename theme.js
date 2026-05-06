const states = ["system", "dark", "light"];
const labels = { system: "Auto", dark: "Dark", light: "Light" };
const root = document.documentElement;
const btn = document.getElementById("theme-toggle");
let current = localStorage.getItem("theme") || "system";

function applyTheme() {
  const theme =
    current === "system"
      ? matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
      : current;
  root.setAttribute("data-theme", theme);
  btn.textContent = labels[current];
}

matchMedia("(prefers-color-scheme: light)").addEventListener(
  "change",
  applyTheme,
);
btn.addEventListener("click", () => {
  current = states[(states.indexOf(current) + 1) % 3];
  localStorage.setItem("theme", current);
  applyTheme();
});

applyTheme();
