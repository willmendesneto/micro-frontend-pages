# Micro Frontend Pages

> Simulate a micro frontend project using NodeJS, React and NGinx Reverse Proxy in Alpine Docker images

This project is based on [my talk at JSConf.Asia 2018 about Micro Frontend applications](https://goo.gl/KK7K4N).

- Slides: https://goo.gl/51sDkh
- Youtube video: https://goo.gl/KK7K4N

## Setup

Please make sure that you have Docker and Docker compose installed in your machine. After that, just run the command

```bash
$ docker-compose up
# or "docker-compose up --build"
# if you want to rebuild the containers
```

And, after that, you'll can check the performance of Docker images using `docker stats` command.

## About the folders

Every folder is part of the Micro Frontend Pages demo project. In this project we have 4 folders with connected content.

### Monolith

The folder `monolith` is the default page of our project, so when you run the project using the commands:

```bash
nvm use # or make sure you are using NodeJS v8.1.4
npm install
npm start
```

and access `http://localhost:8888` you will see the web application with links for all other pages. This is the legacy code we are using as a base for our migration from monolith to microfrontend `\o/`!

### NGinx

NGinx is being used to make a reverse proxy, connecting every single page as only one application for the users. It's connected with all pages and related projects.

### Home

The folder `home-page` is the default page of our project, so when you run the containers using `docker-compose up` command and access `http://localhost:8888` you will see the main page or our project with links for all other pages

### Docs

The folder `docs-page` is the docs page of our project. The page is quite simple for now and it's one of the state in our project. You can access the page accessing `http://localhost:8888/docs`.

### Checkout

The folder `checkout-page` is the checkout page of our project. The page is quite simple for now and it's one of the state in our project. You can access the page accessing `http://localhost:8888/checkout`.

### Categories page

The folder `items-page` is the list of items page of our project. The page has a list of items by category, linking to a specific page for a item in our project. You can access the list page accessing `http://localhost:8888/items` and the list item page acessing `http://localhost:8888/items/:id`.

## Author

**Wilson Mendes (willmendesneto)**

- <https://plus.google.com/+WilsonMendes>
- <https://twitter.com/willmendesneto>
- <http://github.com/willmendesneto>
