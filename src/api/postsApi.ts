import { getAxiosInstance } from "../utils/axios";
import generateError from "../utils/Error";
import { POSTS_API_URL } from "../config";
import { IPostSearchReq, IInteractionReq, IPostCommentReq } from "Posts/types";

interface IPostReq {
  workspaceId: number;
  postId?: string;
  body?: object;
}

interface INotificationsReq {
  workspaceId: number;
  customerId?: string;
  pageToken?: string;
}

interface INotificationsReadReq {
  workspaceId: number;
  customerId: string;
  body: any;
}

interface ISearchReq {
  workspaceId: number;
  pageToken?: string;
  body: IPostSearchReq;
}

export const createPostApi = ({ workspaceId, body }: IPostReq) =>
  getAxiosInstance()
    .post(`${POSTS_API_URL}/pages/${workspaceId}/posts`, body)
    .catch(err => generateError(err));

export const publishPostApi = ({ workspaceId, postId }: IPostReq) =>
  getAxiosInstance()
    .post(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}/status`, {
      status: "active"
    })
    .catch(err => generateError(err));

export const getPostApi = ({ workspaceId, postId }: IPostReq) =>
  getAxiosInstance()
    .get(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`)
    .catch(err => generateError(err));

export const getAllNotificationsApi = ({ workspaceId, customerId, pageToken }: INotificationsReq) =>
  getAxiosInstance()
    .post(`${POSTS_API_URL}/pages/${workspaceId}/notifications/${customerId}`, {
      pageToken
    })
    .catch(err => generateError(err));

export const getUnreadNotificationsCountApi = ({ workspaceId, customerId }: INotificationsReq) =>
    getAxiosInstance()
      .get(`${POSTS_API_URL}/pages/${workspaceId}/notifications/count/${customerId}`)
      .catch(err => generateError(err));

export const readNotificationsApi = ({ workspaceId, customerId, body }: INotificationsReadReq) =>
  getAxiosInstance()
    .put(`${POSTS_API_URL}/pages/${workspaceId}/notifications/${customerId}`, body)
    .catch(err => generateError(err));

export const updatePostApi = ({ workspaceId, postId, body }: IPostReq) =>
  getAxiosInstance()
    .put(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`, body)
    .catch(err => generateError(err));

export const searchPosts = ({ workspaceId, body, pageToken }: ISearchReq) => {
  const token = pageToken ? `?pageToken=${pageToken}` : "";
  return getAxiosInstance()
    .post(`${POSTS_API_URL}/pages/${workspaceId}/search${token}`, body)
    .catch(err => generateError(err));
};

export const searchCategory = ({ workspaceId, body }: ISearchReq) => 
  getAxiosInstance()
    .post(`${POSTS_API_URL}/pages/${workspaceId}/CategorySearch`, body)
    .catch(err => generateError(err));

export const deletePostApi = ({ workspaceId, postId }: IPostReq) =>
  getAxiosInstance()
    .delete(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`)
    .catch(err => generateError(err));

export const trackInteractionApi = ({
  workspaceId,
  id,
  body
}: IInteractionReq) =>
  getAxiosInstance()
    .post(
      `${POSTS_API_URL}/pages/${workspaceId}/interactions/${id}/track`,
      body
    )
    .catch(err => generateError(err));

export const deleteInteractionApi = ({
  workspaceId,
  id,
  body
}: IInteractionReq) =>
  getAxiosInstance()
    .delete(`${POSTS_API_URL}/pages/${workspaceId}/interactions/${id}/delete`, {
      data: body
    })
    .catch(err => generateError(err));

export const getInteractionsApi = ({
  workspaceId,
  id,
  body
}: IInteractionReq) =>
  getAxiosInstance()
    .post(
      `${POSTS_API_URL}/pages/${workspaceId}/interactions/${id}/get`,
      body
    )
    .catch(err => generateError(err));

export const createCommentApi = ({
  workspaceId,
  postId,
  body
}: IPostCommentReq) => 
  getAxiosInstance()
    .post(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}/comments`, body)
    .catch(err => generateError(err));

export const deleteCommentApi = ({
  workspaceId,
  body
}: any) =>
  getAxiosInstance()
    .delete(`${POSTS_API_URL}/pages/${workspaceId}/posts/${body.postId}/comments/${body.commentId}`)
    .catch(err => generateError(err));

export const getCommentsApi = ({
  workspaceId,
  id,
  pageToken
}: any) => {
  const token = pageToken ? `?pageToken=${pageToken}` : "";
  return getAxiosInstance()
    .get(`${POSTS_API_URL}/pages/${workspaceId}/posts/${id}/comments${token}`)
    .catch(err => generateError(err));
}

export const getUserRegionApi = ({
  workspaceId,
  city
}: any) => (
  getAxiosInstance()
    .get(`${POSTS_API_URL}/pages/${workspaceId}/locations/cities/${city}`)
    .catch(err => generateError(err))
)