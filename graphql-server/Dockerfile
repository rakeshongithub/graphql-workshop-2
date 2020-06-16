FROM node:12.13.0
LABEL author="rakeshpersonal@gmail.com"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
CMD ["npm", "start"]
