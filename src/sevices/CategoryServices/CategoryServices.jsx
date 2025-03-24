import { db } from "../../pages/Firebase/config";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Fetch all category
export const fetchCategory = async () => {
  const querySnapshot = await getDocs(collection(db, "category"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new category
export const addCategory  = async (categoryData) => {
  await addDoc(collection(db, "category"), categoryData);
};

// Update category details
export const updateCategory  = async (categoryId, updatedData) => {
  const categoryRef = doc(db, "category", categoryId);
  await updateDoc(categoryRef, updatedData);
};

// Delete a category
export const deleteCategory  = async (categoryId) => {
  const categoryRef = doc(db, "category", categoryId);
  await deleteDoc(categoryRef);
};