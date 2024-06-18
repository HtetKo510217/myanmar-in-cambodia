import axios from 'axios';
import { FIREBASE_API_KEY } from 'react-native-dotenv';

const API_KEY = FIREBASE_API_KEY

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

export function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}