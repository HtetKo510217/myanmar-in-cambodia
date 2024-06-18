import axios from 'axios';
import { FIREBASE_DATABASE_URL } from 'react-native-dotenv';
import { Image } from 'react-native';

export function storeData(data) {
  axios.post(
    `${FIREBASE_DATABASE_URL}/posts.json`,
    data
  );
}

export async function getData() {
  const response = await axios.get(`${FIREBASE_DATABASE_URL}/posts.json`);
  const posts = [];
  const imagePromises = [];

  for (const key in response.data) {
    const post = {
      id: key,
      categoryIds: response.data[key].categoryIds,
      title: response.data[key].title,
      description: response.data[key].description,
      imageUrl: response.data[key].imageUrl,
    };

    // Prefetch image
    imagePromises.push(Image.prefetch(post.imageUrl));
    posts.push(post);
  }

  await Promise.all(imagePromises);
  return posts;
}