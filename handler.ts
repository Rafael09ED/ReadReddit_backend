import * as express from 'express'
import * as bodyParser from 'body-parser'
const serverless = require('serverless-http');
import { createDialogflowApp } from './src/app'

export const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.post('/fulfillment', createDialogflowApp);
module.exports.fulfillment = serverless(expressApp);