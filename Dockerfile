FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package* .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]