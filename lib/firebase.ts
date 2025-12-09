import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app: FirebaseApp | null = null;

export function getFirebaseApp() {
  if (app) return app;

  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  if (!config.apiKey || !config.projectId) {
    throw new Error(
      "Firebase config missing. Please set NEXT_PUBLIC_FIREBASE_* env vars."
    );
  }

  app = getApps().length ? getApps()[0] : initializeApp(config);
  return app;
}

export function getFirebaseDb() {
  const appInstance = getFirebaseApp();
  return getFirestore(appInstance);
}
