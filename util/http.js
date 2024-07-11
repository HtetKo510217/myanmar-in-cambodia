import axios from 'axios';
const FIREBASE_DATABASE_URL = process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL;
export function storeData(data) {
  axios.post(
    `${FIREBASE_DATABASE_URL}/posts.json?auth=${token}`,
    data
  );
}

export async function getData(token) {
  const response = await axios.get(`${FIREBASE_DATABASE_URL}/posts.json?auth=${token}`);
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
export async function updateData(data, token) {
  axios.put(
    `${FIREBASE_DATABASE_URL}/posts/${data.id}.json?auth=${token}`,
    data
  );
}

export async function deleteData(id, token) {
  try {
    // First, fetch all comments for this post
    const commentsResponse = await axios.get(
      `${FIREBASE_DATABASE_URL}/comments.json?orderBy="postId"&equalTo="${id}"&auth=${token}`
    );
    const commentsData = commentsResponse.data;

    // Create an array of delete promises for each comment
    const deleteCommentPromises = Object.keys(commentsData || {}).map(commentId =>
      axios.delete(`${FIREBASE_DATABASE_URL}/comments/${commentId}.json?auth=${token}`)
    );

    // Delete all comments
    await Promise.all(deleteCommentPromises);

    // Then delete the post
    await axios.delete(`${FIREBASE_DATABASE_URL}/posts/${id}.json?auth=${token}`);

    console.log(`Post ${id} and its comments deleted successfully`);
  } catch (error) {
    console.error('Error deleting post and comments:', error);
    throw error; // Re-throw the error so it can be handled by the calling function
  }
}


export function postComment(comment, token) {
  return axios.post(
    `${FIREBASE_DATABASE_URL}/comments.json?auth=${token}`,
    comment
  );
}

export async function getComments(postId, token) {
  try {
    console.log(`Fetching comments for post ID: ${postId}`);
    const response = await axios.get(
      `${FIREBASE_DATABASE_URL}/comments.json?orderBy="postId"&equalTo="${postId}"&auth=${token}`
    );
    console.log('Response:', response.data);
    const commentsData = response.data;
    return Object.keys(commentsData || {}).map(key => ({
      id: key,
      content : commentsData[key].content,
      userId : commentsData[key].userId,
      postId : commentsData[key].postId,
      replyToCommentId : commentsData[key].replyToCommentId
    }));
  } catch (error) {
    console.error('Error fetching comments:', error.response ? error.response.data : error.message);
    return [];
  }
}

export async function deleteComment(id, token) {
  console.log(`Deleting comment with ID: ${id}`);
  axios.delete(
    `${FIREBASE_DATABASE_URL}/comments/${id}.json?auth=${token}`
  );
}

export async function updateComment(comment, token) {
  axios.put(
    `${FIREBASE_DATABASE_URL}/comments/${comment.id}.json?auth=${token}`,
    comment
  );
}