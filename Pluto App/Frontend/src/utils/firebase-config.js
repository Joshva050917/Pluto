import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZxfnsf9jSlYmXMdd8Q8d-_2_TyPLs_y0",
  authDomain: "react-netflix-clone-35659.firebaseapp.com",
  projectId: "react-netflix-clone-35659",
  storageBucket: "react-netflix-clone-35659.appspot.com",
  messagingSenderId: "236675088439",
  appId: "1:236675088439:web:e29c796805c8bf9406ffb2",
  measurementId: "G-H6MTX68CN3",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
