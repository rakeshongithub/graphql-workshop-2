sudo docker run -d --name workshop-customer-db -p 27017:27017 -v ~/data:/data/db_1 -d mongo:latest
sudo docker run -d --name workshop-product-db -p 27018:27017 -v ~/data:/data/db_2 -d mongo:latest
sudo docker run -d --name workshop-order-db -p 27019:27017 -v ~/data:/data/db_3 -d mongo:latest