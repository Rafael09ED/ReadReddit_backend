import {Request, Response} from 'express'

const {WebhookClient} = require('dialogflow-fulfillment');

import * as Welcome from './actions/Welcome'
import * as Fallback from './actions/Fallback'
import * as search_start from './actions/read_reddit_search_start'
import * as search_subreddit from './actions/read_reddit_search_subreddit'
import * as search_subreddit_read_top_comment from './actions/read_reddit_search_subreddit_top_comment'

export function createDialogflowApp(request: Request, response: Response) {
    const agent = new WebhookClient({request, response});

    interface Intent {
        name: string,
        handler: (agent) => void
    }

    const intents: Intent[] = [
        Welcome,
        Fallback,
        search_start,
        search_subreddit,
        search_subreddit_read_top_comment
    ];

    const intentMap = new Map();
    intents.forEach(action => intentMap.set(action.name, action.handler));
    agent.handleRequest(intentMap);
}