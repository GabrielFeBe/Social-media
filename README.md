# Social Media - Backend

A Comprehensive Project Template with Sequelize, MySQL, Zod, Socket.io and Object-Oriented Programming

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Model Subdomain](#model-subdomain)
- [License](#license)
- [Images](#images)
- [Frontend](#frontend)
- [CORS](#cors)
- [Socket.io](#socket)

## Introduction

This project is a robust and flexible template for building applications using Sequelize as the ORM, MySQL as the database, Zod for data validation, and follows object-oriented programming (OOP) principles. The primary goal is to provide a strong foundation for developing applications in a structured and maintainable way.

## Features

- **Sequelize Integration:** Seamlessly integrate Sequelize, a powerful and popular Object-Relational Mapping library, into your project for database operations.

- **MySQL Database:** Utilize MySQL as your database management system for data storage.

- **Zod Validation:** Employ Zod for data validation, ensuring data consistency and safety throughout your application.

- **Object-Oriented Programming:** Implement your project using object-oriented programming (OOP) principles for a more organized and modular codebase.

- **Soquet.io:** Use Socket.io for real-time communication between the client and the server.

## Requirements

Before getting started, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/) >= 16.x.x
- npm (Node Package Manager): Comes with Node.js
- MySQL: [Download and Install MySQL](https://dev.mysql.com/downloads/installer/)
- Git: [Download and Install Git](https://git-scm.com/downloads)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:GabrielFeBe/Social-media.git
   cd Social-media
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Database Configuration:**

   - Create a MySQL database.
   - Configure the database connection in `src/database/config/database.ts`.

4. **Environment Variables:**

   Create a `.env` file for storing sensitive information like database credentials. You can use a package like `dotenv` for this.

5. **Building Typescript:**

   Build the Typescript files using:

   ```bash
   npm run build
   ```

6. **Run Migrations:**

   Run the Sequelize migrations to set up the database schema:
   The migration will only work once you build the typescript files, as it will create the `dist` folder, the `.sequelizerc` file is configured to use the `dist` folder, you may change it if you want to.

   ```bash
   npx sequelize db:migrate
   ```

7. **Start the Application:**

   Start the application using:

   ```bash
   npm start
   ```

Your application should now be up and running.

## Usage

<details>
<summary><strong>Friends Endpoints</strong></summary>

### All endpoints are accessed only by authenticated users.

#### `Endpoint /friends/:id`

- Endpoint to find friends of a user by the user's ID.
- Request method: GET
- Parameters:
  - `id` (from request parameters) - User ID
- Returns a JSON response with the found friends.

#### `Endpoint /friends/:id`

- Endpoint to create a new friend request.
- Request method: POST
- Request body should contain the necessary information to create the friend request.
- Emits a socket event 'friendRequest' using `SocketUtils` to notify other users.
- Returns a JSON response with the created friend request.

#### `Endpoint /friends/:id`

- This is basically to decline a friend request.
- Endpoint to delete a friend request by its ID.
- Request method: DELETE
- Parameters:
  - `id` (from request parameters) - Friend Request ID
- Returns a JSON response with a 204 status code indicating success.

#### `Endpoint /friends`

- Theres no need to pass any parameters, because the user is already logged in so it's retrieving the user's ID from the JWT token.
- Endpoint to fetch all friends of a user.
- Request method: GET
- Returns a JSON response with the user's friends.

#### `Endpoint /friends/:id`

- This is basically to accept a friend request.
- Endpoint to update an existing friend request by its ID.
- Request method: PATCH
- Parameters:
  - `id` (from request parameters) - Friend Request ID
- Request body should contain the necessary information to update the friend request.
- Returns a JSON response with the updated friend request.

</details>

<details>
<summary><strong>Post Endpoints</strong></summary>

### All endpoints are accessed only by authenticated users.

#### `Endpoint /posts/:id`

- Endpoint to get a post by its ID.
- Request method: GET
- Parameters:
  - `id` (from request parameters) - Post ID
- Returns a JSON response with the post details.

#### `Endpoint /posts`

- Endpoint to create a new post.
- Request method: POST
- Request body should contain the necessary information to create the post.
- Returns a JSON response with the created post.

#### `Endpoint /posts/:id`

- Endpoint to delete a post by its ID.
- Request method: DELETE
- Parameters:
  - `id` (from request parameters) - Post ID
- Returns a JSON response with a 204 status code indicating success.

#### `Endpoint /posts`

- Endpoint to fetch all posts.
- Request method: GET
- Returns a JSON response with all posts.

#### `Endpoint /posts/user/:id`

- Endpoint to find posts by a specific user's ID.
- Request method: GET
- Parameters:
  - `id` (from request parameters) - User ID
- Returns a JSON response with posts by the user.
</details>

<details>
<summary><strong>Users endpoint</strong></summary>

### Most of those endpoints are not in use, so therefore they don't need authentication.

#### `Endpoint /users/:id`

- Endpoint to get a user by by the user's ID.
- Request method: GET
- Parameters:
  - `id` (from request parameters) - User ID
- Returns a JSON response with the user details.

#### `Endpoint /users`

- Endpoint to create a new user.
- Request method: POST
- Request body should contain the necessary information to create the user.
- Returns a JSON response with the created user.

#### `Endpoint /users/:id`

- Endpoint to delete a user by their ID.
- Request method: DELETE
- Parameters:
  - `id` (from request parameters) - User ID
- Returns a JSON response with a 204 status code indicating success.

#### `Endpoint /users`

- Endpoint to fetch all users.
- Request method: GET
- Returns a JSON response with all users.

#### `Endpoint /users/names`

- Endpoint to search for users by name.
- Request method: POST
- Request body should contain the user's name to search for.
- Returns a JSON response with users matching the provided name.

#### `Endpoint /users/login`

- Endpoint to log in a user.
- Request method: POST
- Request body should contain the user's email and password for authentication.
- Returns a JSON response with an authentication token.

</details>

<details>
<summary><strong>Posts Comments Endpoints</strong></summary>

### Most of those endpoints are not in use, so therefore they don't need authentication.

#### `Endpoint /comments/:id`

- Endpoint to update a comment by its ID.
- Request method: PATCH
- Parameters:
  - `id` (from request parameters) - Comment ID
- Request body should contain the necessary information to update the comment.
- Returns a JSON response with the updated comment.

#### `Endpoint /comments`

- Endpoint to create a new comment.
- Request method: POST
- Request body should contain the necessary information to create the comment.
- Returns a JSON response with the created comment.

#### `Endpoint /comments/:id`

- Endpoint to delete a comment by its ID.
- Request method: DELETE
- Parameters:
  - `id` (from request parameters) - Comment ID
  - `userId` (from request body) - User ID for authorization
- Returns a JSON response with a 204 status code indicating success.

#### `Endpoint /comments/:id`

- Endpoint to find comments by a specific post's ID.
- Request method: GET
- Parameters:
  - `id` (from request parameters) - Post ID
- Returns a JSON response with comments associated with the specified post.

</details>

## Model Subdomain

One of the key features of this project is its "Model Subdomain." This subdomain allows you to easily change the ORM by swapping out Sequelize for another ORM without affecting the rest of your application. To do so, follow these steps:

1. Create a new ORM module under the `model` directory.

2. There are already types that are ORM-agnostic in `src/interface/ICRUD.ts`. Add any additional types that are specific to your new ORM.

3. It's actually pretty simple to swap out Sequelize for another ORM. all you have to do is change the implementation of the `Model` class in `src/model`, since each model there has an ORM-agnostic type, but keep in mind that all of the methods in the Models must return whatever type is specified in `src/interface/ICRUD.ts`, and you can't discard any of the properties in the `Model` class.

   This approach makes your application more flexible and maintainable by decoupling the ORM from the rest of your codebase.

## License

This project is licensed under no license =/.

## Images

- Well i still don't have acess to a server to be able to upload images, so the accounts are not provided with a profile picture, but i will be able to do it soon.

## Frontend

- The frontend of this project is still in development as is the backend, but you can check it out here: https://github.com/GabrielFeBe/Social-media-fe
- The frontend is being developed with React, Typescript, Next.js and Socket.io

## CORS

- The CORS is free for all, because i'm in development mode, but i will change it to only allow the frontend to access the backend or you can change it yourself in the `src/app.ts` file.

## Socket

- The socket.io is only being used to send a notification to the user when he receives a friend request.
- I don't plan on implementing a chat system, but if you want to implement it, you can use the socket.io to do it.
- And the socket.io is only being allowed to be used by the frontend, but you can change it in the `src/app.ts` file.
