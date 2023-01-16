/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  Id: string;
  Password: string;
  Quantity: number;
  Token: string;
  Username: string;
};

export type Connection = {
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Guest = {
  __typename?: 'Guest';
  updatedAt: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSession: Session;
  createUser: User;
};


export type MutationCreateSessionArgs = {
  password: Scalars['Password'];
  username: Scalars['Username'];
};


export type MutationCreateUserArgs = {
  password: Scalars['Password'];
  username: Scalars['Username'];
};

export type Node = {
  id: Scalars['Id'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Id']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Id']>;
};

export type Query = {
  __typename?: 'Query';
  currentDate: Scalars['Date'];
  viewer: Viewer;
};

export type Session = Node & {
  __typename?: 'Session';
  createdAt: Scalars['Date'];
  id: Scalars['Id'];
  token: Scalars['Token'];
  userId: Scalars['Id'];
};

export type SessionEdge = {
  __typename?: 'SessionEdge';
  cursor: Scalars['Id'];
  node: Session;
};

export type SessionsConnection = Connection & {
  __typename?: 'SessionsConnection';
  edges: Array<SessionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  id: Scalars['Id'];
  sessions?: Maybe<SessionsConnection>;
  username: Scalars['Username'];
};


export type UserSessionsArgs = {
  after?: InputMaybe<Scalars['Id']>;
  before?: InputMaybe<Scalars['Id']>;
  first?: InputMaybe<Scalars['Quantity']>;
  last?: InputMaybe<Scalars['Quantity']>;
};

export type Viewer = Guest | User;

export type CurrentDateQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentDateQueryQuery = { __typename?: 'Query', currentDate: string };


export const CurrentDateQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentDateQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentDate"}}]}}]} as unknown as DocumentNode<CurrentDateQueryQuery, CurrentDateQueryQueryVariables>;