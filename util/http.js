import axios from 'axios';
import { FIREBASE_DATABASE_URL } from 'react-native-dotenv';
export function storeData(data) {
  axios.post(
    `${FIREBASE_DATABASE_URL}/posts.json`,
    data
  );
}

export async function getData() {
  const response = await axios.get(`${FIREBASE_DATABASE_URL}/posts.json`);
  const posts = [];
  for (const key in response.data) {
    posts.push({
      id: key,
      userId: response.data[key].userId,
      categoryIds: response.data[key].categoryIds,
      title : response.data[key].title,
      description: response.data[key].description,
      imageUrl: response.data[key].imageUrl,
      address: response.data[key].address
    });
  }

  return posts;
}