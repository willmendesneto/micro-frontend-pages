FROM node:8.1.4-alpine

EXPOSE 5000

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install -s --no-progress

COPY . .

CMD ["node", "index.js"]