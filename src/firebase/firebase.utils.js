import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBT4IpBtAMspNkt-Hu-f14D0HqGgkwtC2k",
  authDomain: "crown-crow.firebaseapp.com",
  databaseURL: "https://crown-crow.firebaseio.com",
  projectId: "crown-crow",
  storageBucket: "crown-crow.appspot.com",
  messagingSenderId: "970664839537",
  appId: "1:970664839537:web:02b92e188b46dce7ff0ed0",
  measurementId: "G-2YDVJ6T07G",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
