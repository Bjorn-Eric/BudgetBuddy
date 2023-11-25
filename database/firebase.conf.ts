import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCB-Ic9pN4BbmoDT48UqG1iKIRMHRaKM-0",
  authDomain: "budgetbuddy-86427.firebaseapp.com",
  databaseURL:
    "https://budgetbuddy-86427-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "budgetbuddy-86427",
  storageBucket: "budgetbuddy-86427.appspot.com",
  messagingSenderId: "815964700639",
  appId: "1:815964700639:web:4fbc31b8a142a4402b8e6a",
  measurementId: "G-9GGQ501358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
