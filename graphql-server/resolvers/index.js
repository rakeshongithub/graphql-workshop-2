const {
  registerCustomer,
  fetchCustomers,
  fetchCustomerById,
  login,
} = require("../customers");
const {
  fetchProducts,
  fetchProductsById,
  createNewProduct,
} = require("../products");
const { fetchOrders, fetchOrderById } = require("../orders");
const resolvers = {
  Query: {
    customers: (parent, args, context) => {
      const { me } = context;
      console.log("---me----", me);

      const customers = fetchCustomers();
      return customers;
    },
    customer: (_, args) => {
      const customer = fetchCustomerById(args.id);
      return customer;
    },
    products: () => {
      const products = fetchProducts();
      return products;
    },
    product: (_, args) => {
      return fetchProductsById(args.id);
    },
    orders: () => {
      return fetchOrders();
    },
    order: (_, args) => {
      return fetchOrderById(args.id);
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      const customer = await registerCustomer(args.customer);
      return customer;
    },
    login: async (parent, args) => {
      const token = await login(args.customer);
      return token;
    },
    createNewProduct: async (_, args) => {
      const product = await createNewProduct(args.product);
      return product;
    },
  },
};

module.exports = resolvers;
