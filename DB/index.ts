// src/saveData.ts
import { app, analytics } from "./firebase.config";
import { getDatabase, ref, set } from "firebase/database";

const saveData = async () => {
  const database = getDatabase(app);
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
};

saveData();
