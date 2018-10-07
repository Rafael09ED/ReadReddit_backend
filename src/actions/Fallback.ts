import {DialogflowApp} from 'actions-on-google'

const {WebhookClient} = require('dialogflow-fulfillment');


export const name = 'Default Fallback Intent';

export function handler(agent: any) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}