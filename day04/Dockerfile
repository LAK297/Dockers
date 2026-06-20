FROM node:24

WORKDIR /node_backend

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8088

CMD [ "node","server.js" ]