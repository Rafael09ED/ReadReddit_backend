const snoowrap = require('snoowrap');

export const name = 'read_reddit.search.subreddit.top_comment';

function createResponseFromComment(redditComment) {
    return "User " + redditComment.author.name + " says \n " + redditComment.body;
}

// noinspection JSUnusedGlobalSymbols
export function handler(agent) {
    const post_id = agent.getContext('submission').parameters['post_id'];

    const r = new snoowrap({
        userAgent: 'Read It',
        clientId: process.env.r_clientId,
        clientSecret: process.env.r_clientSecret,
        refreshToken: process.env.r_refreshToken
    });
    return r.getSubmission(post_id)
        .comments.fetchMore({
            amount: 1,
            sort: 'top'
        })
        .then( (comments) => {
            let response = createResponseFromComment(comments[0]);
            agent.add(response);
            console.log(response);
            return Promise.resolve();
        })
        .catch(() => {
            agent.add("There was a problem getting the top comment from that post");
            agent.add("Sorry, a problem prevented me from getting the top comment");
            return Promise.resolve();
        })
}