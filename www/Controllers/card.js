document.addEventListener('DOMContentLoaded', function () {
    const ritmoCardiacoWrapper = document.getElementById('ritmo-cardiaco-wrapper');
    const primerosAuxiliosWrapper = document.getElementById('primeros-auxilios-wrapper');
    const estiloVidaSaludableWrapper = document.getElementById('estilo-vida-saludable-wrapper');
    const presionArterialWrapper = document.getElementById('presion-arterial-wrapper');
    const hipertensionWrapper = document.getElementById('hipertension-wrapper');
    const diabetesWrapper = document.getElementById('diabetes-wrapper');


    // Inicializa Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Función para cargar tarjetas según la categoría
    function cargarTarjetasPorCategoria(categoria, wrapper) {
        db.collection('cards')
            .where('category', '==', categoria)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const cardHTML = `
                        <div class="swiper-slide" onclick="showContent('${doc.id}', '${categoria}')">
                            <div class="bg-rtca p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer">
                                <img src="${data.image}" alt="Icon" class="w-16 h-auto mb-4">
                                <p class="font-semibold">${data.title}</p>
                            </div>
                        </div>
                    `;
                    wrapper.insertAdjacentHTML('beforeend', cardHTML);
                });
            })
            .catch((error) => {
                console.log('Error getting documents:', error);
            });
    }

    // Cargar tarjetas de ritmo cardíaco
    cargarTarjetasPorCategoria('ritmo_cardiaco', ritmoCardiacoWrapper);

    // Cargar tarjetas de primeros auxilios
    cargarTarjetasPorCategoria('primeros_auxilios', primerosAuxiliosWrapper);

    // Cargar tarjetas de estilo de vida saludable
    cargarTarjetasPorCategoria('estilo_vida_saludable', estiloVidaSaludableWrapper);

    // Cargar tarjetas de presión arterial
    cargarTarjetasPorCategoria('presion_arterial', presionArterialWrapper);

});

function showContent(cardId, category) {
    db.collection('cards').doc(cardId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const title = data.title;
            const paragraphs = data.paragraphs; // Suponiendo que paragraphs es un arreglo de strings

            // Construir el contenido completo a pasar a info.html
            let content = '';
            for (let i = 0; i < paragraphs.length; i++) {
                content += paragraphs[i] + '\n\n'; // Puedes ajustar el formato según sea necesario
            }

            // Redirigir a info.html con los datos
            const infoUrl = `info.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`;
            window.location.href = infoUrl;
        } else {
            console.log('No such document!');
        }
    }).catch((error) => {
        console.log('Error getting document:', error);
    });
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: '2.5', // Mostrar slides basado en el ancho del contenedor
    spaceBetween: 25, // Espacio entre las tarjetas
    pagination: {
        el: '.swiper-pagination', // Paginación
        clickable: true, // Permitir clic en paginación para cambiar slides
    },
});
