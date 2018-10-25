

export const name = 'Default Fallback Intent';

// noinspection JSUnusedGlobalSymbols
export function handler(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}