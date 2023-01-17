/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation CreateSession($username: Username!, $password: Password!) {\n    createSession(username: $username, password: $password) {\n      __typename\n      id\n      token\n      createdAt\n      userId\n      user {\n        __typename\n        id\n        username\n        createdAt\n      }\n    }\n  }\n": types.CreateSessionDocument,
    "\n  query CurrentDateQuery {\n    currentDate\n  }\n": types.CurrentDateQueryDocument,
    "\n  mutation RegisterUser($username: Username!, $password: Password!) {\n    registerUser(password: $password, username: $username) {\n      user {\n        __typename\n        id\n        username\n        createdAt\n      }\n      session {\n        __typename\n        id\n        token\n        createdAt\n        userId\n      }\n    }\n  }\n": types.RegisterUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSession($username: Username!, $password: Password!) {\n    createSession(username: $username, password: $password) {\n      __typename\n      id\n      token\n      createdAt\n      userId\n      user {\n        __typename\n        id\n        username\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSession($username: Username!, $password: Password!) {\n    createSession(username: $username, password: $password) {\n      __typename\n      id\n      token\n      createdAt\n      userId\n      user {\n        __typename\n        id\n        username\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CurrentDateQuery {\n    currentDate\n  }\n"): (typeof documents)["\n  query CurrentDateQuery {\n    currentDate\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser($username: Username!, $password: Password!) {\n    registerUser(password: $password, username: $username) {\n      user {\n        __typename\n        id\n        username\n        createdAt\n      }\n      session {\n        __typename\n        id\n        token\n        createdAt\n        userId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($username: Username!, $password: Password!) {\n    registerUser(password: $password, username: $username) {\n      user {\n        __typename\n        id\n        username\n        createdAt\n      }\n      session {\n        __typename\n        id\n        token\n        createdAt\n        userId\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;