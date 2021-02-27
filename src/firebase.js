import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBaQ8QPk6G9dVjiWI-O2uhtffzxyuDSRI8",
    authDomain: "apoyo-7152b.firebaseapp.com",
    projectId: "apoyo-7152b",
    storageBucket: "apoyo-7152b.appspot.com",
    messagingSenderId: "771312102341",
    appId: "1:771312102341:web:e894cfc3d2ce0eb826f9ac"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {db,auth};