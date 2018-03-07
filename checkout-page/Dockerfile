FROM node:8.1.4-alpine

EXPOSE 5000

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i -s --no-progress

COPY . .

RUN npm run build

CMD ["node", "server.js"]