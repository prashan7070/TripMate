import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Trip } from '../types/Trip';

export const addTrip = async (trip: Trip) => {
    await addDoc(collection(db, 'trips'), trip);
};

export const getUserTrips = async (userId: string) => {
    const q = query(collection(db, 'trips'), where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Trip));
};

export const deleteTrip = async (tripId: string) => {
    await deleteDoc(doc(db, 'trips', tripId));
};