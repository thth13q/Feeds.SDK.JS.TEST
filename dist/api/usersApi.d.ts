import { IUserSearchReq } from 'Users/types';
interface IUserReq {
    workspaceId: number;
    userId?: string;
    body?: object;
}
interface ISearchReq {
    workspaceId: number;
    pageToken?: string;
    body: IUserSearchReq;
}
export declare const getUserApi: ({ workspaceId, userId }: IUserReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const updateUser: ({ workspaceId, userId, body }: IUserReq) => Promise<void | import("axios").AxiosResponse<any>>;
export declare const searchUsers: ({ workspaceId, body, pageToken }: ISearchReq) => Promise<void | import("axios").AxiosResponse<any>>;
export {};
