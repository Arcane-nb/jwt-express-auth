# jwt-express-auth
Auth system example with Express.js &amp;  JWT

```
node app.js
```

**Need to check your config.js!!**

### config.js
```
module.exports = {
    'secret': 'SeCrEtKeYfOrHaShInG',
    'mongodbUri': 'mongodb://<dbuser>:<dbpassword>@ds139884.mlab.com:39884/jwt-express-test'
}
```

## APIs
### Auth Route
#### Register
`POST /api/auth/register`
```
{
    username,
    password
}
```
**Description**: creates a new user; first user will be assigned as an admin user. Password is stored in `HMAC-SHA1` format

#### Login
`POST /api/auth/login`
```
{
    username,
    password
}
```
**Description**: logs in to the server. Server will return a JWT token as:
```javascript
{
  "message": "logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODQ4MjU1NjJhOWRlMDE5NmM5MTI4ZmIiLCJ1c2VybmFtZSI6InRlc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE0ODExMjMxNjMsImV4cCI6MTQ4MTcyNzk2MywiaXNzIjoidmVsb3BlcnQuY29tIiwic3ViIjoidXNlckluZm8ifQ.vh8LPqxYWJtO6Bxe7reL7sEon13dYFFnhpnyyEmaLBk"
}
```


#### Check
`GET /api/auth/check` or `GET /api/auth/check?token={token}`  

**Description**: checks the JWT. Token should be passed as Url-encoded query or `x-access-token` header

### User Route
APIs in user routes need admin's permission to process   

#### Check
`GET /api/user/list`

**Description**: retrieves all user list. Token should be passed as Url-encoded query or `x-access-token` header

#### Assign Admin
`POST /api/user/assign-admin/:username`  

**Description**: assigns admin permission to the given user. Token should be passed as Url-encoded query or `x-access-token` header

## Based On
[Velopert](https://velopert.com/2448)