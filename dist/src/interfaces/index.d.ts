export interface Bot {
    botID: string;
    owner: {
        userID: string;
        userTag: string;
    };
    prefix: string;
    approved: boolean;
    registered: boolean;
}
