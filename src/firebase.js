import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA7K9IprsfEfZtQdTzeB8rbvABYVdLp-f8",
    authDomain: "quora-61642.firebaseapp.com",
    projectId: "quora-61642",
    storageBucket: "quora-61642.appspot.com",
    messagingSenderId: "249826584453",
    appId: "1:249826584453:web:967966f2cf5dc873fc46ec"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db