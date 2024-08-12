# Personal Blogging Platform API

Welcome to the Personal Blogging Platform API documentation. This API provides endpoints for managing people, posts, and comments on a personal blog.

# End Points

## People

- GET /people - Get all people
- GET /people/:id - Get a person by ID
- POST /people - Create a new person
- PUT /people/:id - Update a person
- DELETE /people/:id - Delete a person

## Posts

- GET /:userId/posts - Get all posts by a specific user
- POST /posts - Create a new post
- GET /posts - Get all posts
- GET /posts/:id - Get a post by ID
- PUT /posts/:id - Update a post
- DELETE /posts/:id - Delete a post

## Comments

- GET /:postId/comments - Get all comments for a post
- POST /:postId/comments - Create a new comment for a post
- GET /comments/:id - Get a comment by ID
- PUT /comments/:id - Update a comment
- DELETE /comments/:id - Delete a comment

# Setup Instructions

1. **Clone the Repository**:

```bash
     git clone https://github.com/roqiaahmed/Backend-Projects.git
```

2. **Install Dependencies**:

```bash
   cd Personal-Blogging-Platform-API
   npm install
```

3. **Set Environment Variables**:

- Create a .env file in the root directory and add the following variables:
  ```bash
    DB_URL=your_mongodb_uri
  ```

4. **Run the Server**:

```bash
   npm start
```
