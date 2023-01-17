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
  registerUser: RegisterUserResult;
};


export type MutationCreateSessionArgs = {
  password: Scalars['Password'];
  username: Scalars['Username'];
};


export type MutationCreateUserArgs = {
  password: Scalars['Password'];
  username: Scalars['Username'];
};


export type MutationRegisterUserArgs = {
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

export type RegisterUserResult = {
  __typename?: 'RegisterUserResult';
  session: Session;
  user: User;
};

export type Session = Node & {
  __typename?: 'Session';
  createdAt: Scalars['Date'];
  id: Scalars['Id'];
  token: Scalars['Token'];
  user: User;
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

export type CreateSessionMutationVariables = Exact<{
  username: Scalars['Username'];
  password: Scalars['Password'];
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', createSession: { __typename: 'Session', id: string, token: string, createdAt: string, userId: string, user: { __typename: 'User', id: string, username: string, createdAt: string } } };

export type CurrentDateQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentDateQueryQuery = { __typename?: 'Query', currentDate: string };

export type RegisterUserMutationVariables = Exact<{
  username: Scalars['Username'];
  password: Scalars['Password'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserResult', session: { __typename: 'Session', id: string, token: string, createdAt: string, userId: string, user: { __typename: 'User', id: string, username: string, createdAt: string } } } };


export const CreateSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Password"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSessionMutation, CreateSessionMutationVariables>;
export const CurrentDateQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentDateQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentDate"}}]}}]} as unknown as DocumentNode<CurrentDateQueryQuery, CurrentDateQueryQueryVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Password"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"session"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;