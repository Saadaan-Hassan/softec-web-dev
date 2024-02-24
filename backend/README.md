# Models

## User Model:

- DOB
- Email address
- Gender/Sex
- Password
- Type (CUSTOMER, ADMIN)
- Activation Status
- Blocked


# APIs

## User API Endpoints:

- Get all users: GET /api/users/

### Get a user by ID:

GET /api/users/:id/

response:

```json
{
  "user": {
    "role": "USER",
    "_id": "65d9abf4d42133d00a3ae486",
    "username": "Test",
    "email": "test@gmail.com",
    "posts": [],
    "location": "lhr",
    "description": "test data",
    "avatar": "https://images.unsplash.com/photo-1620750034602-1ad42e46b86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "dob": "2023-12-01T19:00:00.000Z",
    "gender": "MALE",
    "__v": 0
  }
}
```

### Create a new user:

POST /api/users/signup/

request body:

```json
{
	"username": "Test",
	"email": "test@gmail.com",
	"password": "test",
	"location": "lhr",
	"description": "test data",
	"dob": "12-02-2023",
	"gender": "MALE",
}
```

### Login a user:

POST /api/users/login/

request body:

```json
{
	"email": "test2@gmail.com",
	"password": "test123"
}
```

response:

```json
{
	"message": "Login Successful",
	"user": {
		"_id": "65d8b6d2158afcaf3a82b09e",
		"name": "Shafin",
		"email": "shafin@gmail.com",
		"dob": "2023-12-01T19:00:00.000Z",
		"gender": "MALE",
		"role": "USER",
		"accountStatus": "ACTIVE",
		"blockedBy": ["65d8b6d2158afcaf3a82b09e"]
	},
	"token": "Token"
}
```

- Update a user: PATCH /api/users/:id/
  request body:

  ```json
  {
  	"name": "Test"
  }
  ```

  response:

  ```json
  {
  	"message": "User updated successfully",
  	"user": {
  		"_id": "65d8b6d2158afcaf3a82b09e",
  		"name": "Test",
  		"email": "shafin@gmail.com",
  		"dob": "2023-12-01T19:00:00.000Z",
  		"gender": "MALE",
  		"role": "USER",
  		"accountStatus": "ACTIVE",
  		"blockedBy": ["65d8b6d2158afcaf3a82b09e"]
  	}
  }
  ```

