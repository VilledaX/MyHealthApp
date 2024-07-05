// Controllers/testFirebase.js

import { database, ref, set, get, child } from './firebaseConfig.js';

// Función para escribir un valor en la base de datos
function writeTestData() {
    set(ref(database, 'test/connection'), {
        connected: true
    }).then(() => {
        console.log('Data written successfully.');
        // Leer el valor escrito
        readTestData();
    }).catch((error) => {
        console.error('Error writing data:', error);
    });
}

// Función para leer un valor de la base de datos
function readTestData() {
    const dbRef = ref(database);
    get(child(dbRef, 'test/connection')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log('Data read successfully:', snapshot.val());
        } else {
            console.log('No data available');
        }
    }).catch((error) => {
        console.error('Error reading data:', error);
    });
}

// Exportar funciones para usarlas en otros archivos
export { writeTestData, readTestData };
