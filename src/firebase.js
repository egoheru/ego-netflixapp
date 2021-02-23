import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvOhKWCYdKOwYfAfDd1HuNeSkktL7Gs1A",
    authDomain: "netflix-ego.firebaseapp.com",
    projectId: "netflix-ego",
    storageBucket: "netflix-ego.appspot.com",
    messagingSenderId: "201637768598",
    appId: "1:201637768598:web:07448c2a215ee5969101b7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;