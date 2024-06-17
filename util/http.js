import axios from 'axios';
import { FIREBASE_DATABASE_URL } from 'react-native-dotenv';
export function storeData(data) {
  axios.post(
    `${FIREBASE_DATABASE_URL}/posts.json`,
    data
  );
}