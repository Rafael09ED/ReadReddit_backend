const {Suggestion} = require('dialogflow-fulfillment');

export const name = 'Default Welcome Intent';

export function handler(agent: any) {
    agent.add("What subreddit would you like to read?");
    agent.agent.add(new Suggestion("read r/news"));
    agent.agent.add(new Suggestion("read world news"));
}