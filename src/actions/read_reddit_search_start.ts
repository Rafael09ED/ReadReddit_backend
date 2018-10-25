const snoowrap = require('snoowrap');

export const name = 'read_reddit.search.start';

// noinspection JSUnusedGlobalSymbols
export function handler(agent) {
    const r = new snoowrap({
        userAgent: 'Read It',
        clientId: process.env.r_clientId,
        clientSecret: process.env.r_clientSecret,
        refreshToken: process.env.r_refreshToken
    });
    return r.getHot()
        .then((posts) => {
            agent.add(posts[0].title);
            console.log(posts[0].title);
            return Promise.resolve();
        })
        .catch(() => {
            agent.add("Sorry, the top post from reddit is not available right now");
            return Promise.resolve();
        })
}