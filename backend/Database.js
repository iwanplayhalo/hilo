import { doc, setDoc, getDoc, getDocs, collection, query, where } from "firebase/firestore"
import { database } from "./Firebase"

export async function saveUserStats(uid, stats) {
  const ref = doc(database, "users", uid);
  await setDoc(ref, stats, { merge: true });
} 

export async function getUserStats(uid) {
    const ref = doc(database, "users", uid);
    const snap = await getDoc(ref); // get document snapshptot
    if (snap.exists()) {
        return snap.data();
    } else {
        return null;
    }
}