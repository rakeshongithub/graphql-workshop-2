const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    customers: [Customer]
    customer(id: ID): Customer
    orders: [Order]
    order(id: ID): Order
  }

  type Mutation {
    registerUser(customer: CustomerInput): Customer
    login(customer: LoginInput): String
  }

  input CustomerInput {
    name: String
    email: String
    password: String
    address: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Customer {
    id: ID!
    name: String
    email: String
    address: String
  }

  type Order {
    id: ID!
    customer: Customer
    totalOrderValue: Float
    shippingAddress: String
    paymentMethod: String
    products: [OrderProduct]
  }

  type OrderProduct {
    product: Product
    quantity: Int
    price: Float
  }

  type Product {
    id: ID!
    name: String
    category: String
    price: Float!
  }

  input ProductInput {
    name: String
    category: String
    price: Float!
  }
`;

module.exports = typeDefs;
