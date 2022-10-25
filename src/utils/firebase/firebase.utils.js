// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCpcgR_fkqmz7kBPee0vusleatX0-LWX1k",
	authDomain: "crown-clothing-zta.firebaseapp.com",
	projectId: "crown-clothing-zta",
	storageBucket: "crown-clothing-zta.appspot.com",
	messagingSenderId: "847775049710",
	appId: "1:847775049710:web:7a8b3b8acf5d847da550ff",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, provider);
};
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};
