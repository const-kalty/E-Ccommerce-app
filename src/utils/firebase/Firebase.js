import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCChd7yV3fdKPfr9knUnNvtyADm3c2_eHc",
  authDomain: "e-commerce-93eb9.firebaseapp.com",
  projectId: "e-commerce-93eb9",
  storageBucket: "e-commerce-93eb9.appspot.com",
  messagingSenderId: "1065243581587",
  appId: "1:1065243581587:web:86db669500a2d364ab4166",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth)=>{
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch (error){
console.log("error creating user",error.message);
    }
  }
  return userDocRef;
}
