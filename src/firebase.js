import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDneuwfUvJgDB7SumbAcIKigSbw1LhZP2c",
  authDomain: "apoyo-final.firebaseapp.com",
  projectId: "apoyo-final",
  storageBucket: "apoyo-final.appspot.com",
  messagingSenderId: "41321947244",
  appId: "1:41321947244:web:c6e093a1df36e5c5cf7849"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {db,auth};