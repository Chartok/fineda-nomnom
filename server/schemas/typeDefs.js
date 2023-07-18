const { gql } = require('apollo-server-express');

// GraphQL typeDefs
const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        recipeCount: Int
        savedBooks: [Recipe]
    }

    type Recipe {
        recipeId: ID!
        cusine: String!
        authors: [String]
        description: String!
        ingredients: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input LoginInput {
        email: String!
        username: String!
        password: String!
    }

    input CreateUserInput {
        username: String!
        email: String!
        password: String!
    }

    input SaveRecipeInput {
        recipeId: String!
        authors: [String]
        cusine: String!
        description: String!
        ingredients: String!
        title: String!
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(input: LoginInput!): Auth
        createUser(input: CreateUserInput!): Auth
        saveRecipe(userId: ID!, recipe: SaveRecipeInput!): User
        removeRecipe(userId: ID!, recipeId: String!): User
    }
`;

module.exports = typeDefs;
