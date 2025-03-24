import { db } from "../../pages/Firebase/config";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Fetch all category
export const fetchMenu = async () => {
  const querySnapshot = await getDocs(collection(db, "menu"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new category
export const addMenu  = async (menuData) => {
  await addDoc(collection(db, "menu"), menuData);
};

// Update category details
export const updateMenu  = async (menuId, updatedData) => {
  const menuRef = doc(db, "menu", menuId);
  await updateDoc(menuRef, updatedData);
};

// Delete a category
export const deleteMenu  = async (menuId) => {
  const menuRef = doc(db, "menu", menuId);
  await deleteDoc(menuRef);
};