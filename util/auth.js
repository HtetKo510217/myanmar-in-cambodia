import axios from 'axios';

const API_KEY = 'AIzaSyBCeqV1i3j0xKSPcwIcpP5qx8ppS9NmWuQ'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}