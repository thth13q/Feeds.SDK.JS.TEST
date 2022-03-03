interface IFeedReq {
    workspaceId: number;
    feedId?: number;
    body?: any;
    pageToken?: string;
}
export declare const getFeedApi: ({ workspaceId, feedId, pageToken, body }: IFeedReq) => Promise<any>;
export {};
