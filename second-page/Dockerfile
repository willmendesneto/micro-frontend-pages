FROM node:8.1.4-alpine

EXPOSE 3000

WORKDIR /app

COPY package.json .

RUN npm install -s --no-progress

COPY . .

RUN npm run build:dynamic \
  && rm -rf src .angular-cli.json .gitignore .nvmrc Dockerfile *.ts tsconfig.json webpack.server.config.js

CMD ["npm", "run", "serve:dynamic"]