// created grafbase connection for local and production testing

import { GraphQLClient } from "graphql-request";

const isProducion = process.env.NODE_ENV === 'production';

const apiUrl = isProducion ? process.env.NEXTAUTH_PUBLUC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProducion ? process.env.NEXT_PUBLICGRAFBASE_API_KEY || '' : 'I NEED ACCESS';
const serverUrl = isProducion ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient('apiUrl')

const makeGraphQLRequest = async (query: string,
    variable = {}) => {
        try {
            return await client.request(query, variables)

        } catch (error) {
            throw error;
        }
    }
