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

// update post
export async function updateData(data) {
  axios.put(
    `${FIREBASE_DATABASE_URL}/posts/${data.id}.json`,
    data
  );
}

export async function deleteData(id) {
  axios.delete(
    `${FIREBASE_DATABASE_URL}/posts/${id}.json`
  );
}