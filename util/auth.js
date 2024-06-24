import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY
const FIREBASE_DATABASE_URL = process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL
async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });
    const token = response.data.idToken;
    const localId = response.data.localId;
    return { token, localId };
}

export async function createUser(email, password) {
    const { token, localId } = await authenticate('signUp', email, password);
    await axios.put(`${FIREBASE_DATABASE_URL}/users/${localId}.json`, {
        email: email,
        name: '',
    });
    return { token, localId };
}


export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}