# E-COMMERCE

## Website link: https://evening-basin-64737.herokuapp.com/

#### The e-commerce-app is a fully online and modern e commerce store concept. It is implemented with a simple login in system, allows users to add products to their cart, confirm a transaction to buy the products in their cart, add comments on the products, and even sell their own items on the store! (CRUD operations)

### The purpose of this project is to learn and practice concepts related to: 
> - HTML/CSS/JavaScript
> - MERN stack
> - Front-end
> - Back-end
> - Building a REST API
> - Web Architectural Patterns
> - Deployment Dynamic Website


#### More specifically, I used the following:
> - Dependency injection
> - Client Server architecture pattern
> - Service Oriented architecture pattern
> - 3 tier architecture (presentation/business/data access layers)
> - Testing API Endpoints (Postman)
> - HTTP (GET, POST, DELETE, PUT, PATCH, status codes)
> - RESTful API guidelines
> - Deployment using heroku with remote mongoDB database
> - UI and UX principles to improve user ergonomics through decreasing cognitive load and increasing usability (ex : efficient organisation of information, use of mental models, user action feedback, consistent style and clear error messages)

# Front-end
Stored in the client folder. Use the following commands to start the front-end on port 3000 :
> - 'cd .\client\'
> - 'npm install'
> - 'npm start'
# Back-end
Stored in the root folder (usually the back-end would be in a server folder, however for the deployment heroku needs the server.js, package.json and package-lock.json to be in the root folder). Use the following commands in a second terminal to start the back-end on port 5000 :
> - 'npm install'
> - 'npm start'
#### A connection to the mongoDB database is automatically put in place after having ran the back-end.

# Deployment on heroku
(Note to self: to update the app 
> - run 'npm install', because of potential ERROR express not found from heroku
> - modify code
> - git add everything except server side node_modules, git commit, git push
> - in http.service.js : use SERVER_URL: https://evening-basin-64737.herokuapp.com/api in order to communicate with the production url api, the localhost:5000 is the development url api
> - git push heroku master
> - to debug use heroku logs --tail)
