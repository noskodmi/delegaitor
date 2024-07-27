export const unvotedProposals = [
  {
    id: 1,
    description: 'This is a description of the first DAO proposal. It includes details about the proposal and its potential impact.',
    dao: 'Ethereum DAO',
    advisedByDelegator: true,
    aiComment: 'Based on your prompt, this proposal aligns with your preferences for sustainable development.',
    autoVoteExecutionTime: '12:34:56',
  },
];

export const votedProposals = [
  {
    id: 4,
    description: 'This is a description of the fourth DAO proposal. It includes details about the proposal and its potential impact.',
    dao: 'Cardano DAO',
    aiComment: 'Based on your prompt, this proposal aligns with your preferences for education and community engagement.',
    voted: 'Yes',
  },
  {
    id: 5,
    description: 'This is a description of the fifth DAO proposal. It includes details about the proposal and its potential impact.',
    dao: 'Solana DAO',
    aiComment: 'Based on your prompt, this proposal does not align with your preferences for decentralization.',
    voted: 'No',
  },
];

export const defaultPrompt = 'I prefer proposals that focus on sustainable development, decentralization, and interoperability. Avoid proposals that centralize power or harm the environment.';
