document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const content = params.get('content');

    // Llenar los elementos HTML con los datos recibidos
    document.getElementById('info-title').textContent = title;

    // Dividir el contenido por párrafos y mostrarlos
    const paragraphs = content.split('\n\n');
    const contentContainer = document.getElementById('info-content');
    paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        p.classList.add('mb-4'); // Agregar espacio inferior entre párrafos usando Tailwind CSS
        contentContainer.appendChild(p);
    });
});
