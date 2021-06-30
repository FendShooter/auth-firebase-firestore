import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: 'AIzaSyAX4PgCtUCOWb_Hczo7Og2w05g28yxR2eA',
  authDomain: 'login-auth-project-b8e98.firebaseapp.com',
  projectId: 'login-auth-project-b8e98',
  storageBucket: 'login-auth-project-b8e98.appspot.com',
  messagingSenderId: '619427780343',
  appId: '1:619427780343:web:e0a2ede1be7ba11f0025f2',
};

firebase.initializeApp(config);

export const createUserProfilDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  if (!userRef) return;
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
