import {DialogflowApp} from 'actions-on-google'

const {WebhookClient} = require('dialogflow-fulfillment');


export const name = 'Default Welcome Intent';

export function handler(agent: any) {
    agent.add(`Welcome to my agent!`);
}