import axios from 'axios';

const FIREBASE_DATABASE_URL = process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

export async function getUserProfile(userId, token) {
    const response = await axios.get(`${FIREBASE_DATABASE_URL}/users/${userId}.json?auth=${token}`);
    return response.data;
}

export async function updateUserProfile(userId, data, token) {
    await axios.put(`${FIREBASE_DATABASE_URL}/users/${userId}.json?auth=${token}`, data);
}

export async function deleteUser(userId, idToken) {
    await axios.delete(`${FIREBASE_DATABASE_URL}/users/${userId}.json?auth=${idToken}`);
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${API_KEY}`, {
        idToken: idToken,
    });
}
