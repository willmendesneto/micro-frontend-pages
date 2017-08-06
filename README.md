# Micro Frontend Pages

> Simulate a micro frontend project using NodeJS and NGinx Reverse Proxy in Alpine Docker images


## Setup

Please make sure that you have Docker and Docker compose installed in your machine. After that, just run the command

```bash
$ docker-compose up
```

And, after that, you'll can check the performance of Docker images using `docker stats` command.


## About the folders

Every folder is part of the Micro Frontend Pages demo project. In this project we have 4 folders with connected content.


### NGinx

NGinx is being used to make a reverse proxy, connecting every single page as only one application for the users. It's connected with all pages and related projects.


### Home

The folder `home-page` is the default page of our project, so when you run the containers using `docker-compose up` command and access `http://localhost:8888` you will see the main page or our project with links for all other pages


### First page

The folder `first-page` is the first page of our project. The page is quite simple for now, but that's the first state of our project. You can access the page accessing `http://localhost:8888/first`. 


### Second page

The folder `second-page` is the second page of our project. The page is quite simple for now, but that's the second state of our project. You can access the page accessing `http://localhost:8888/second`.


## Author

**Wilson Mendes (willmendesneto)**
+ <https://plus.google.com/+WilsonMendes>
+ <https://twitter.com/willmendesneto>
+ <http://github.com/willmendesneto>