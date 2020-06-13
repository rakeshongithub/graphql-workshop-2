sudo docker run -d --name workshop-customer-db -p 27017:27017 -v ~/data:/data/db -d mongo:latest
sudo docker run -d --name workshop-product-db -p 27018:27018 -v ~/data:/data/db -d mongo:latest
sudo docker run -d --name workshop-order-db -p 27019:27019 -v ~/data:/data/db -d mongo:latest