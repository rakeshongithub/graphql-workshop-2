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
      const product = fetchProductsById(args.id);
      return product;
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
