// src/index.ts
import { auth, database } from "./firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";

const email = "whdtnxd@gmail.com";
const password = "!1dlwhdtn";

const saveData = async () => {
  try {
    // 사용자 로그인
    await signInWithEmailAndPassword(auth, email, password);

    // 로그인 완료 후 인증 상태 확인
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // 인증된 경우 데이터 저장
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
