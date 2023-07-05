import { IOptions } from '../types'
import * as api from '../api'
import { IPostReq, IPostSearchReq, IReadNotificationsBody } from './types'

export default class Posts {
  workspaceId: number

  constructor({ workspaceId }: IOptions) {
    this.workspaceId = workspaceId
  }

  getPost(postId: string) {
    return api.getPostApi({ workspaceId: this.workspaceId, postId })
  }

  getAllNotifications(customerId: string, pageToken: string) {
    return api.getAllNotificationsApi({ workspaceId: this.workspaceId, customerId, pageToken })
  }

  getUnreadNotificationsCount(customerId: string) {
    return api.getUnreadNotificationsCountApi({ workspaceId: this.workspaceId, customerId })
  }

  readNotifications(customerId: string, body: IReadNotificationsBody) {
    return api.readNotificationsApi({ workspaceId: this.workspaceId, customerId, body })
  }

  createPost(body: IPostReq) {
    return api.createPostApi({ workspaceId: this.workspaceId, body })
  }

  publishPost(postId: string) {
    return api.publishPostApi({ workspaceId: this.workspaceId, postId })
  }

  updatePost(postId: string, body: IPostReq) {
    return api.updatePostApi({ workspaceId: this.workspaceId, postId, body })
  }

  searchPosts(body: IPostSearchReq, pageToken?: string) {
    return api.searchPosts({ workspaceId: this.workspaceId, body, pageToken })
  }

  searchCategory(body: IPostSearchReq, pageToken?: string) {
    return api.searchCategory({ workspaceId: this.workspaceId, body, pageToken })
  }

  deletePost(postId: string) {
    return api.deletePostApi({ workspaceId: this.workspaceId, postId })
  }

  trackInteraction(id: string | number, body: any) {
    return api.trackInteractionApi({ workspaceId: this.workspaceId, id, body })
  }

  deleteInteraction(id: string | number, body: any) {
    return api.deleteInteractionApi({ workspaceId: this.workspaceId, id, body })
  }

  getInteractions(id: string | number, body: any) {
    return api.getInteractionsApi({ workspaceId: this.workspaceId, id, body })
  }

  createComment(postId: string, body: any) {
    return api.createCommentApi({ workspaceId: this.workspaceId, postId, body })
  }

  deleteComment(body: any) {
    return api.deleteCommentApi({ workspaceId: this.workspaceId, body })
  }

  getComments(id: string | number, pageToken?: string) {
    return api.getCommentsApi({ workspaceId: this.workspaceId, id, pageToken })
  }

  getUserRegion(city: string) {
    return api.getUserRegionApi({ workspaceId: this.workspaceId, city })
  }
}