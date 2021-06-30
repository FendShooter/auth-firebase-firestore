import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  // google js SDK
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
