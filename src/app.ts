import {Request, Response} from 'express'
import {DialogflowApp} from 'actions-on-google'

const {WebhookClient} = require('dialogflow-fulfillment');

import * as Welcome from './actions/Welcome'
import * as Fallback from './actions/Fallback'
import * as search_start from './actions/read_reddit_search_start'

export function createDialogflowApp(request: Request, response: Response) {
    const agent = new WebhookClient({request, response});

    interface Intent {
        name: string,
        handler: (agent: any) => void
    }

    const intents: Intent[] = [
        Welcome,
        Fallback,
        search_start
    ];

    const intentMap = new Map();
    intents.forEach(action => intentMap.set(action.name, action.handler));
    agent.handleRequest(intentMap);
}