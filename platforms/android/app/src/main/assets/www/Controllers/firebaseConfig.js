const firebaseConfig = {
    apiKey: "AIzaSyAPm0axQ6snpTwoGDpizrR1Pnj5SFImxeU",
    authDomain: "myhealthapp-16b86.firebaseapp.com",
    projectId: "myhealthapp-16b86",
    storageBucket: "myhealthapp-16b86.appspot.com",
    messagingSenderId: "336420410118",
    appId: "1:336420410118:web:1232d4175d67ed431e4487",
    measurementId: "G-LLPJ0P0C3K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();