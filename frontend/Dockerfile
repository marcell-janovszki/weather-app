FROM node:16-alpine3.15

WORKDIR /app

COPY package*.json .

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "serve" ]
