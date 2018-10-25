const snoowrap = require('snoowrap');
const {Suggestion} = require('dialogflow-fulfillment');


export const name = 'read_reddit.search.subreddit';

// noinspection JSUnusedGlobalSymbols
export function handler(agent) {
    const subreddit = agent.parameters['subreddit'].replace(/\s/g, '');
    console.log("Reading from subreddit: " + subreddit);
    const r = new snoowrap({
        userAgent: 'Read It',
        clientId: process.env.r_clientId,
        clientSecret: process.env.r_clientSecret,
        refreshToken: process.env.r_refreshToken
    });
    agent.add(new Suggestion("read comments"));
    return r
        .getSubreddit(subreddit)
        .getHot()
        .then(function (posts) {
            const post = posts[0];
            agent.add(post.title);
            console.log(post.title);
            // noinspection TypeScriptValidateJSTypes
            agent.setContext({
                name: 'submission',
                lifespan: 5,
                parameters:{
                    subreddit,
                    post_id: post.id
                }
            });
            console.log(agent);
            return Promise.resolve();
        }).catch(() => {
            agent.add("There was a problem accessing that subreddit");
            return Promise.resolve();
        })
}