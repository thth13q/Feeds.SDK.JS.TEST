import { IOptions, IFeeds, IPosts, IUsers } from './types';
export default class FeedsSDK {
    options: IOptions;
    users: IUsers;
    posts: IPosts;
    feeds: IFeeds;
    constructor(options: IOptions);
    private init;
}
