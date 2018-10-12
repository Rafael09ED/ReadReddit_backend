const snoowrap = require('snoowrap');
const {Suggestion} = require('dialogflow-fulfillment');


export const name = 'read_reddit.search.subreddit';

export function handler(agent: any) {
    const subreddit = agent.parameters['subreddit'].replace(/\s/g, '');
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
        .then(function (posts: any) {
            const post = posts[0];
            agent.add(post.title);
            console.log(post.title);
            agent.setContext({
                name: 'submission',
                lifespan: 5,
                parameters:{
                    subreddit: subreddit,
                    post_id: post.id
                }
            });
            console.log(agent);
            return Promise.resolve();
        }).then(function (value: any) {
            return Promise.resolve();
        })
}