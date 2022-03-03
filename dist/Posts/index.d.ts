import { IOptions } from '../types';
import { IPostReq, IPostSearchReq } from './types';
export default class Posts {
    workspaceId: number;
    constructor({ workspaceId }: IOptions);
    getPost(postId: string): Promise<void | import("axios").AxiosResponse<any>>;
    createPost(body: IPostReq): Promise<void | import("axios").AxiosResponse<any>>;
    publishPost(postId: string): Promise<void | import("axios").AxiosResponse<any>>;
    updatePost(postId: string, body: IPostReq): Promise<void | import("axios").AxiosResponse<any>>;
    searchPosts(body: IPostSearchReq, pageToken?: string): Promise<void | import("axios").AxiosResponse<any>>;
    deletePost(postId: string): Promise<void | import("axios").AxiosResponse<any>>;
    trackInteraction(id: string | number, body: any): Promise<void | import("axios").AxiosResponse<any>>;
    deleteInteraction(id: string | number, body: any): Promise<void | import("axios").AxiosResponse<any>>;
    getInteractions(id: string | number, body: any): Promise<void | import("axios").AxiosResponse<any>>;
    createComment(postId: string, body: any): Promise<void | import("axios").AxiosResponse<any>>;
    deleteComment(body: any): Promise<void | import("axios").AxiosResponse<any>>;
    getComments(id: string | number, pageToken?: string): Promise<void | import("axios").AxiosResponse<any>>;
}
