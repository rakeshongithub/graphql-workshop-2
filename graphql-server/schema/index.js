const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    customers: [Customer]
    customer(id: ID): Customer
    products: [Product]
    product(id: ID): Product
    orders: [Order]
    order(id: ID): Order
  }

  type Mutation {
    registerUser(customer: CustomerInput): Customer
    login(customer: LoginInput): String
    createNewProduct(product: ProductInput): Product
    createNewOrder(order: CreateOrderInput): CreateOrder
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

  type CreateOrder {
    id: ID!
    totalOrderValue: Float
    shippingAddress: String
    paymentMethod: String
    customerId: ID!
    products: [OrderProductOuput]
  }

  input CreateOrderInput {
    totalOrderValue: Float
    shippingAddress: String
    paymentMethod: String
    customerId: ID!
    products: [OrderProductInput]
  }

  type Order {
    id: ID!
    totalOrderValue: Float
    shippingAddress: String
    paymentMethod: String
    customer: Customer
    products: [OrderProduct]
  }

  type OrderProduct {
    product: Product
    quantity: Int
    price: Float
  }

  input OrderInput {
    customer: String
    shippingAddress: String
    paymentMethod: String
    products: [OrderProductInput]
  }

  input OrderProductInput {
    productId: ID!
    quantity: Int
    price: Float
  }

  type OrderProductOuput {
    productId: ID!
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
