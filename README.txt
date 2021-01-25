# API MERCADO LIVRE

## previw in:
url: https://api-mercado-livre.herokuapp.com

## HOW TO USE:

### DEVELOPMENT ENVIRONMENT:

#### STARTING REPOSITORIES
```
git clone https://github.com/MGSP-desenvolvimento/Api_ML
```
#### NODE MODULES
```
npm install
``` 
#### ENVIRONMENT VARIABLES
- CREAT A .env
```
  APP_ID=123456789101112
  KEY=abcdefghijkafasdioufhiasduh
  REDIRECT_URI=http://localhost:80/login
  PORT=80
  USER=myuser
  PASSWORD=1234
```
#### STARTING
```
npm run dev
```
## END POINTS
### GET

- directory /:
```
-GET http://localhost:80/
```
- MAKE A LOGIN

- REDIRECT TO /LOGIN:
```
-GET http://localhost:80/login
```

### POST
- /TOKEN
    ```
    -POST http://localhost:80/token
    ```
  - REQUEST BODY:
    ```
    {
        "user": "USER",
        "password": "1234",
        "refresh": "CODE"
    }
    ```
  - RESPONSE BODY:
    ```
    {
        "access_token": "YOUR TOKEN",
        "token_type": "bearer",
        "expires_in": 21600,
        "scope": "offline_access read write",
        "user_id": YOUR USER_ID,
        "refresh_token": "YOUR CODE"
    }
    ```
- /REFRESH
  ```
  -POST http://localhost:80/token
  ```
  - REQUEST BODY:
    ```
    {
        "user": "USER",
        "password": "1234",
        "refresh": "CODE"
    }
    ```
  - RESPONSE BODY:
    ```
    {
        "access_token": "YOUR TOKEN",
        "token_type": "bearer",
        "expires_in": 21600,
        "scope": "offline_access read write",
        "user_id": YOUR USER_ID,
        "refresh_token": "YOUR CODE"
    }
    ```







