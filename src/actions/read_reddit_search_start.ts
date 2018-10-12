import {DialogflowApp} from 'actions-on-google'

const snoowrap = require('snoowrap');
const {WebhookClient} = require('dialogflow-fulfillment');


export const name = 'read_reddit.search.start';

export function handler(agent: any) {
    const r = new snoowrap({
        userAgent: 'Read It',
        clientId: process.env.r_clientId,
        clientSecret: process.env.r_clientSecret,
        refreshToken: process.env.r_refreshToken
    });
    return r.getHot()
        .then(function (posts: any) {
            agent.add(posts[0].title);
            console.log(posts[0].title);
            return Promise.resolve();
        }).then(function (value: any) {
            return Promise.resolve();
        })
}