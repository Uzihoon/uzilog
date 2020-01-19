import { API, Auth } from "aws-amplify";
import { IPost } from "store/redux/post";

const url = "/uzilog";
const apiName = "uzilog";

export async function getList() {
  return await API.get(apiName, url, null);
}

export async function getPost(id: string) {
  return await API.get(apiName, `${url}/${id}`, null);
}

export async function createPost(body: IPost) {
  return await API.post(apiName, url, { body });
}

export async function updatePost(postId: string, body: IPost) {
  return await API.put(apiName, `${url}/${postId}`, { body });
}

export async function deletePost(postId: string) {
  return await API.del(apiName, `${url}/${postId}`, null);
}

export async function checkSession() {
  return await Auth.currentSession();
}

export async function signIn(email: string, password: string) {
  return await Auth.signIn(email, password);
}

export async function signOut() {
  return await Auth.signOut();
}
