const {Suggestion} = require('dialogflow-fulfillment');

export const name = 'Default Welcome Intent';

// noinspection JSUnusedGlobalSymbols
export function handler(agent) {
    agent.add("What subreddit would you like to read?");
    agent.add(new Suggestion("read r/news"));
    agent.add(new Suggestion("read world news"));
}