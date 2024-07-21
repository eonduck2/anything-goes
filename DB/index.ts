// src/index.ts
import { auth, database } from "./firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";

const email = process.env.AUTH_EMAIL!;
const password = process.env.AUTH_PW!;

const saveData = async () => {
  console.log("DATABASE_TYPE:", process.env.DATABASE_TYPE);

  try {
    await signInWithEmailAndPassword(auth, email, password);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const dbRef = ref(database, "randomData");
          await set(dbRef, {
            name: "John Doe",
            age: 30,
            city: "New York",
          });
          console.log("Data saved successfully.");
        } catch (error) {
          console.error("Error saving data:", error);
        }
      } else {
        console.error("User is not authenticated.");
      }
    });
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

saveData();
