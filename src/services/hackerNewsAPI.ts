import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newPostsURL = `${baseURL}newstories.json`;
export const PostURL = `${baseURL}item/`;

export const getPost = async (postId: number): Promise<object> => {
  const result = await axios.get(`${PostURL + postId}.json`);

  return result.data;
};

export const getPostIds = async (): Promise<number[]> => {
  const result = await axios.get(newPostsURL);

  return result.data;
};