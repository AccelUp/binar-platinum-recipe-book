# Binar Platinum Recipe Book

The Binar Platinum Recipe Book is a web application that allows users to create, edit, and delete recipes. The application is built using React and Express, two popular web development frameworks. With this application, users can add their own recipes to the database, search for recipes, and edit or delete existing recipes. The application also features user authentication and authorization, ensuring that only authorized users can access protected routes. Additionally, the application allows users to upload and download files.

## API Documentation

To view the API documentation for this project, please visit the following link: [Postman Documentation](https://documenter.getpostman.com/view/28570357/2s9YXb8QdS)

## Getting Started

### Prerequisites

Make sure you have Yarn installed on your machine. You can install Yarn by following the instructions on the [Yarn website](https://classic.yarnpkg.com/en/docs/install).

### Installation

1. Clone the repository to your local machine using:

   ```bash
   git clone https://github.com/AccelUp/binar-platinum-recipe-book
   ```

2. Navigate to the project directory:

   ```bash
   cd binar-platinum-recipe-book
   ```

3. Install the project dependencies using Yarn:

   ```bash
   yarn install
   ```

4. Create tables and insert some sample data in your database using:

   ```bash
   npx knex migrate:latest
   ```

   ```bash
   npx knex seed:run
   ```

### Usage

Now that you have installed the necessary dependencies using Yarn, you can run the Binar Platinum Recipe Book locally.

1. Start the development server:

   ```bash
   yarn dev
   ```

   This command will start the development server, and your app should be accessible at [http://localhost:8000/](http://localhost:8000/) in your web browser.

2. Start the development client:

   ```bash
   yarn start
   ```

   This command will start the development server, and your app should be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

3. Start the development client and server using concurrently:

   ```bash
   yarn devStart
   ```

   This command will start both development server, and client.

4. You can now use the app to create, read, update, and delete recipe.

## API Features

- **Add Recipe**: This API adds a new recipe to the database.
- **Edit Recipe**: This API updates the details of the recipe with the given id with the data provided.
- **Delete Recipe**: This API deletes the recipe with the given id from the database.
- **Get Recipes**: This API returns a list of all the recipes in the database.
- **Search Recipes**: This API searches for recipes based on ingredients.

## User Features

- **Register User**: This API registers a new user.
- **Login User**: This API logs in an existing user.
- **Logout User**: This API logs out an existing user.
- **Refresh Token**: This API refreshes an expired token.
- **Protected Route**: This API returns a list of all the protected routes.

### Contributing

If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. We welcome contributions from the community.

### License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.
