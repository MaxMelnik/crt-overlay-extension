
(() => {
    if (document.getElementById("crt-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "crt-overlay";
    overlay.setAttribute("aria-hidden", "true");

    document.documentElement.appendChild(overlay);
})();
