import { PlaidApi, Configuration, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
//   apiKey: process.env.PLAID_API_KEY,
});

export const plaidClient = new PlaidApi(configuration);