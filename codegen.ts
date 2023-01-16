import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql-schema/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          Date: 'string',
          Id: 'string',
          Token: 'string',
          Username: 'string',
          Password: 'string',
          Quantity: 'number',
        },
      },
    },
  },
}

export default config
