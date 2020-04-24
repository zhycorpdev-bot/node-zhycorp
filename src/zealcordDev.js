const zealcordRequest = require("./zealcordRequest.js");
/**
 * zealcordDev Client
 */
module.exports = class zealcordDev {
    /**
     * Create new zealcordDev Wrapper Client
     * @param {String} token zealcordDev token
     * @param {String} clientID Your Bot Client ID
     * @param {String} ownerID Your ID
     */
    constructor(token, clientID, ownerID) {
        this.baseURL = "app.zealcord.xyz";
        this.baseAPIURL = this.baseURL + "/api";
        // if (!client.user.id) throw new Error("Unsupported Library")
        const request = new zealcordRequest(this.baseURL);
        if (isNaN(clientID)) throw new Error("Invalid Bot ID");
        if (!ownerID) throw new Error("Invalid Client Options");
        if (isNaN(ownerID)) return new Error("Invalid Client ID");
        this.version = require("../package.json").version; // eslint-disable-line
        var loggedInAs = ""; // eslint-disable-line
        // Validate Token
        if (token || token !== undefined || token !== "") {
            tokenValidator(token, request).then(valid => {
                if (valid === "false") {
                    throw new Error("Invalid Zealcord API Token");
                    // eslint-disable-line
                } else {
                    if (valid === "true") {
                        fetchToken(token, clientID, ownerID, request).then(fetchedToken => {
                            // console.log(fetchedToken.ownedBy.bots.filter(bot => bot.id === clientID));
                            console.log(`[zealcordAPI] You're now logged in as: ${fetchedToken.ownedBy.tag}!`);
                            loggedInAs = fetchedToken.ownedBy;
                        });
                    }
                }
            });
        }

        /**
         * zealcordRequest Client for creating requests
         * @private
         */
        this._request = request;

        /**
         *  Get any specified bot data using Bot ID
         * @param {String} ID Bot's user ID
         * @returns {Promise<Object>} A promise that contains data of the bot
         */
        this.getBot = async (ID) => {
            if (!ID || !clientID) throw new Error("[getBot] No ID was provided");
            var userID = ID || clientID;
            const response = await request.get(`bots/${userID}`);
            const bodyRaw = await response.body;
            if (bodyRaw.error === "bot_not_found") return undefined;
            const owner = await fetchUser(bodyRaw.ownerID, request);
            const botUser = await fetchUser(bodyRaw.botID, request);
            // if (botUser.bot !== true) return undefined;
            const body = {
                owner: {
                    id: owner.id,
                    username: owner.username,
                    discriminator: owner.discriminator,
                    tag: owner.tag,
                    avatar: owner.avatar,
                    avatarURL: owner.avatarURL,
                    displayAvatarURL: owner.displayAvatarURL,
                    bot: owner.bot,
                    createdAt: new Date(owner.createdTimestamp),
                    createdTimestamp: owner.createdTimestamp,
                    bots: owner.bots
                },
                bot: {
                    id: botUser.id,
                    username: botUser.username,
                    discriminator: botUser.discriminator,
                    tag: botUser.tag,
                    avatar: botUser.avatar,
                    avatarURL: botUser.avatarURL,
                    displayAvatarURL: botUser.displayAvatarURL,
                    bot: botUser.bot,
                    createdAt: new Date(botUser.createdTimestamp),
                    createdTimestamp: botUser.createdTimestamp,
                    ownedBy: botUser.ownedBy
                },
                prefix: bodyRaw.prefix,
                accepted: bodyRaw.accepted,
                claimed: bodyRaw.claimed
            };
            let bodyBotOwnedByBots = body.bot.ownedBy.bots;
            let bodyBotOwnedByCreatedTimestamp = body.bot.ownedBy.createdTimestamp;
            delete body.bot.ownedBy.bots;
            delete body.bot.ownedBy.createdTimestamp;
            body.bot.ownedBy.createdAt = new Date(bodyBotOwnedByCreatedTimestamp);
            body.bot.ownedBy.createdTimestamp = bodyBotOwnedByCreatedTimestamp;
            body.bot.ownedBy.bots = bodyBotOwnedByBots;
            return body;
        };

        /**
         * Fetches User from Discord 
         * @param {String} ID 
         * @returns {Promise<Object>} A Promise that contains user object
         */
        this.fetchUser = async (ID) => {
            if (!ID) throw new Error("[fetchUser] No ID was provided");
            const response = await request.get(`fetchUser?id=${ID}`);
            const body = await response.body;
            var user = null; // eslint-disable-line

            if (body.error === "unknown_user") return undefined;

            user = {
                id: body.id,
                username: body.username,
                discriminator: body.discriminator,
                tag: body.tag,
                avatar: body.avatar,
                avatarURL: body.avatarURL,
                displayAvatarURL: body.displayAvatarURL,
                bot: body.bot,
                createdAt: new Date(body.createdTimestamp),
                createdTimestamp: body.createdTimestamp
            };

            if (user.bot === true || body.bot === true) {
                user.ownedBy = body.ownedBy;
            } else {
                user.bots = body.bots;
            }

            return user;
        };

        /**
         * Gets a list of bots matching your query
         * @param {Object} query The query for your search
         * @returns {Promise<Object>}
         */
        // this.getBots = async (query) => { // eslint-disable-line
        //     return "Still In Development";
        // };

        /**
         * Posts your Bot stats to Zealcord Nation (serversCount and usersCount)
         * [!IMPORTANT!] This function needs your zealcordDev Token.
         * @param {String} serversCount Your Bot servers count
         * @param {String} usersCount Your Bot users count
         * @returns {Promise<Object>}
         */
        // this.postStats = async (serversCount, usersCount) => { // eslint-disable-line
        //     return "Still In Development";
        // };
    }
};

async function tokenValidator(token, request) { // eslint-disable-line no-unused-vars
    var response = await request.post("tokenValidator", {
        token: token
    });
    var body = await response.body;
    if (body.isThatTokenValid === false) return "false";
    else return "true";
}

async function fetchToken(token, clientID, ownerID, request) { // eslint-disable-line
    var response = await request.post("fetchToken", {
        token: token
    });
    var body = await response.body;
    if (body.valid === false) throw new Error("Invalid Zealcord API Token");
    if (body.owned === false) return "Unknown Token";
    if (body.ownedBy === null) return "Unknown Token";
    // var ownedArrays = new Array();
    // bot.ownedBy
    var returns = {
        valid: body.valid,
        owned: body.owned,
        ownedBy: {
            id: body.ownedBy.id,
            username: body.ownedBy.username,
            discriminator: body.ownedBy.discriminator,
            tag: body.ownedBy.tag,
            avatar: body.ownedBy.avatar,
            avatarURL: body.ownedBy.avatarURL,
            displayAvatarURL: body.ownedBy.displayAvatarURL,
            bot: body.ownedBy.bot,
            createdAt: new Date(body.ownedBy.createdTimestamp),
            createdTimestamp: body.ownedBy.createdTimestamp,
            bots: body.ownedBy.bots
        }
    };

    var bots = [];
    returns.ownedBy.bots.forEach(bot => {
        bots.push(bot.botID);
    });
    // console.log(bots);
    if (!bots.includes(clientID)) {
        var bot = await fetchUser(clientID, request);
        if (!bot) throw new Error("Invalid clientID");
        if (bot.bot !== true) throw new Error(`The clientID (${clientID}) is not a Bot`);
        throw new Error(`You are not the Owner of this Bot (${bot.tag})`);
    }

    var ownerUser = await fetchUser(ownerID, request);

    if (!ownerUser) throw new Error("Invalid ownerID");

    return returns;
}

async function fetchUser(userID, request) {
    // const version = require('../package.json').version;
    let {
        body: user
    } = await request.get(`fetchUser?id=${userID}`);

    if (user.error === "unknown_user") return undefined;

    var userResolved = null;

    var body = user;

    userResolved = {
        id: body.id,
        username: body.username,
        discriminator: body.discriminator,
        tag: body.tag,
        avatar: body.avatar,
        avatarURL: body.avatarURL,
        displayAvatarURL: body.displayAvatarURL,
        bot: body.bot,
        createdAt: new Date(body.createdTimestamp),
        createdTimestamp: body.createdTimestamp
    };

    if (user.bot === true || body.bot === true) {
        userResolved.ownedBy = body.ownedBy;
    } else {
        userResolved.bots = body.bots;
    }

    return userResolved;
}