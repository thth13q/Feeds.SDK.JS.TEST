import { IOptions } from '../types';
import { AxiosResponse } from 'axios';
import { IUpdateUserReq, IUserRes, IUserSearchReq, IUserSearchRes } from './types';
export default class Users {
    workspaceId: number;
    constructor({ workspaceId }: IOptions);
    getUser(userId: string): Promise<void | AxiosResponse<IUserRes>>;
    updateUser(userId: string, body: IUpdateUserReq): Promise<void | AxiosResponse<IUserRes>>;
    searchUsers(body: IUserSearchReq, pageToken?: string): Promise<void | AxiosResponse<IUserSearchRes>>;
}
