import axios from 'axios';

const FIREBASE_DATABASE_URL = process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

export async function getUserProfile(userId) {
    const response = await axios.get(`${FIREBASE_DATABASE_URL}/users/${userId}.json`);
    return response.data;
}

export async function updateUserProfile(userId, data) {
    await axios.put(`${FIREBASE_DATABASE_URL}/users/${userId}.json`, data);
}

export async function deleteUser(userId, idToken) {
    await axios.delete(`${FIREBASE_DATABASE_URL}/users/${userId}.json`);
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${API_KEY}`, {
        idToken: idToken,
    });
}
