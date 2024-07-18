import * as admin from "firebase-admin";

const serviceAccount = require("./firebase-admin-key.json"); // 경로는 적절하게 수정

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Firebase Realtime Database URL
});

export const db = admin.firestore();
