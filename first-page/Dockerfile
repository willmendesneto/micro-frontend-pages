FROM node:8.1.4-alpine

EXPOSE 4000

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install -s --no-progress

COPY . .

CMD ["node", "index.js"]