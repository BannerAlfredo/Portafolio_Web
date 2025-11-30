document.addEventListener("DOMContentLoaded", function () {

    const itemsPorPagina = 12;
    const contenedor = document.querySelector(".grid-proyectos");
    const items = Array.from(contenedor.children);

    const pagesContainer = document.querySelector(".paginacion .pages");
    const btnPrev = document.querySelector(".paginacion .prev");
    const btnNext = document.querySelector(".paginacion .next");

    let paginaActual = 1;
    let totalPaginas = Math.ceil(items.length / itemsPorPagina);

    // Generar números automáticamente
    function generarPaginas() {
        pagesContainer.innerHTML = ""; // limpiar

        for (let i = 1; i <= totalPaginas; i++) {
            const a = document.createElement("a");
            a.classList.add("page");
            a.textContent = i;

            a.addEventListener("click", () => mostrarPagina(i));

            pagesContainer.appendChild(a);
        }
    }

    function mostrarPagina(n) {
        paginaActual = n;

        const inicio = (n - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;

        items.forEach((item, index) => {
            item.style.display = (index >= inicio && index < fin) ? "block" : "none";
        });

        // marcar página activa
        document.querySelectorAll(".paginacion .page").forEach((p, idx) => {
            p.classList.toggle("active", idx + 1 === n);
        });

        // controlar botones
        btnPrev.style.opacity = (paginaActual === 1) ? "0.5" : "1";
        btnNext.style.opacity = (paginaActual === totalPaginas) ? "0.5" : "1";
    }

    // Botón anterior
    btnPrev.addEventListener("click", () => {
        if (paginaActual > 1) mostrarPagina(paginaActual - 1);
    });

    // Botón siguiente
    btnNext.addEventListener("click", () => {
        if (paginaActual < totalPaginas) mostrarPagina(paginaActual + 1);
    });

    generarPaginas();
    mostrarPagina(1);
});
