document.addEventListener('DOMContentLoaded', function () {
    const ritmoCardiacoWrapper = document.getElementById('ritmo-cardiaco-wrapper');
    const primerosAuxiliosWrapper = document.getElementById('primeros-auxilios-wrapper');
    const estiloVidaSaludableWrapper = document.getElementById('estilo-vida-saludable-wrapper');
    const presionArterialWrapper = document.getElementById('presion-arterial-wrapper');
    const hipertensionWrapper = document.getElementById('hipertension-wrapper');
    const diabetesWrapper = document.getElementById('diabetes-wrapper');


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


    cargarTarjetasPorCategoria('ritmo_cardiaco', ritmoCardiacoWrapper);
    cargarTarjetasPorCategoria('p1', primerosAuxiliosWrapper);
    cargarTarjetasPorCategoria('estilo_vida_saludable', estiloVidaSaludableWrapper);
    cargarTarjetasPorCategoria('presion_arterial', presionArterialWrapper);

});

function showContent(cardId, category) {
    db.collection('cards').doc(cardId).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const title = data.title;
            const paragraphs = data.paragraphs;

            let content = '';
            for (let i = 0; i < paragraphs.length; i++) {
                content += paragraphs[i] + '\n\n';
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
    slidesPerView: '2.5',
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permitir clic en paginación para cambiar slides
    },
});
