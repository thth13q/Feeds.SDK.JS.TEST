import { IPostSearchReq, IInteractionReq, IPostCommentReq } from "Posts/types";
interface IPostReq {
    workspaceId: number;
    postId?: string;
    body?: object;
}
interface ISearchReq {
    workspaceId: number;
    pageToken?: string;
    body: IPostSearchReq;
}
export declare const createPostApi: ({ workspaceId, body }: IPostReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const publishPostApi: ({ workspaceId, postId }: IPostReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const getPostApi: ({ workspaceId, postId }: IPostReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const updatePostApi: ({ workspaceId, postId, body }: IPostReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const searchPosts: ({ workspaceId, body, pageToken }: ISearchReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const deletePostApi: ({ workspaceId, postId }: IPostReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const trackInteractionApi: ({ workspaceId, id, body }: IInteractionReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const deleteInteractionApi: ({ workspaceId, id, body }: IInteractionReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const getInteractionsApi: ({ workspaceId, id, body }: IInteractionReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const createCommentApi: ({ workspaceId, postId, body }: IPostCommentReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const deleteCommentApi: ({ workspaceId, body }: any) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const getCommentsApi: ({ workspaceId, id, pageToken }: any) => Promise<void | import("axios").AxiosResponse<any>>;
export {};
