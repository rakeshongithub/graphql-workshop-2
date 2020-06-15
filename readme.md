# GraphQL Workshop 2

## Customer Service

1. Register new customer

<pre>
mutation {
  registerUser(customer: {
      name: "Rakesh Kumar",
      email: "rakeshpersonal@gmail.com",
      address:"New Delhi, India",
      password: "test@123"
  }) {
    id,
    name,
    email
  }
}
</pre>

2. Login Registered User

<pre>
mutation {
  login(customer: {
      email: "test@gmail.com",
      password:"test@123"
    })
}
</pre>

3. Get customers list
<pre>
query {
  customers {
    name,
    id,
    email,
    address
  }
}
</pre>

4. Get specific customer detail
<pre>
query {
  ccustomer(id: "5ee4a83a6c001022ee618ea2") {
    name,
    email,
  }
}
</pre>

## Product Service

1. Create new product

<pre>
mutation {
  createNewProduct(product: {
      name: "iPhone",
      price: 100000,
      category: "mobile"
    }) {
    name,
    id,
    price,
    category
  }
}
</pre>

2. Fetch list of products

<pre>
query {
  products {
    category,
    price,
    name,
    id
  }
}
</pre>

## Order Service

1. Create new Order

<pre>
mutation {
  createNewOrder(order: {
    customerId: "5ee64df4dd50282d331f50eb",
    totalOrderValue: 12000,
    shippingAddress: "Gurgaon",
    paymentMethod: "COD",
    products: [
      {
        productId: "5ee64e874f446934492e1389",
        quantity: 100,
        price: 12344
      },
      {
        productId: "5ee64e684f446934492e1388",
        quantity: 200,
        price: 543112
      }
    ]
    
  }) {
    id,
    customerId,
    totalOrderValue,
    shippingAddress,
    paymentMethod,
    products {
      productId
      quantity,
      price,
    }
  }
}
</pre>

2. Fetch list of orders

<pre>
query {
  orders {
    shippingAddress,
    totalOrderValue,
    paymentMethod
    products {
      product {
        name,
        category,
        price
      }
      quantity,
      price
    }
    customer {
      name,
      email
    }
  }
}
</pre>
