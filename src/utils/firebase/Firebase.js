import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object);
  })
  await batch.commit();
  console.log("done");
}

export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db,"categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
}

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
export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;

 return await  signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangeListener = (callback)=> onAuthStateChanged(auth,callback);
