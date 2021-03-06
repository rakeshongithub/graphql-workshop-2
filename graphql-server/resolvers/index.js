const {
  registerCustomer,
  fetchCustomers,
  fetchCustomerById,
  login,
} = require("../customers");
const {
  fetchProducts,
  fetchProductById,
  createNewProduct,
} = require("../products");
const { fetchOrders, fetchOrderById, createNewOrder } = require("../orders");
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
      return fetchProductById(args.id);
    },
    orders: () => {
      return fetchOrders();
    },
    order: (_, args) => {
      return fetchOrderById(args.id);
    },
  },
  Mutation: {
    registerUser: async (_, args) => {
      const customer = await registerCustomer(args.customer);
      return customer;
    },
    login: async (_, args) => {
      const token = await login(args.customer);
      return token;
    },
    createNewProduct: async (_, args) => {
      const product = await createNewProduct(args.product);
      return product;
    },
    createNewOrder: async (_, args) => {
      const orders = await createNewOrder(args.order);
      return orders;
    },
  },
  Order: {
    customer: (parent) => {
      if (parent.customerId !== "1") {
        const customer = fetchCustomerById(parent.customerId);
        return customer;
      }
    },
    products: async (parent) => {
      const products = [];
      parent.products.forEach((item) => {
        products.push(item[0]);
      });
      return products;
    },
  },
  OrderProduct: {
    product: async (parent) => {
      const product = await fetchProductById(parent.productId);
      return {
        name: product.name,
        category: product.category,
        price: product.price,
      };
    },
  },
};

module.exports = resolvers;
