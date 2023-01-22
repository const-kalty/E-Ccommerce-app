import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation={})=>{
  if(!userAuth)return;
  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }catch (error){
console.log("error creating user",error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;

 return await  createUserWithEmailAndPassword(auth,email,password)
}
