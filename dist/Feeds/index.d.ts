import { IOptions } from '../types';
export default class Feeds {
    workspaceId: number;
    constructor({ workspaceId }: IOptions);
    getFeed(feedId: number, pageToken: string, body: object): Promise<any>;
}
