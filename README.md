## MERN Login Signup Component

⚠ **Update 3rd April 2021** : React and NodeJS packaged updated/fixed using `npm audit`, Packages updated may have breaking changes, If running the code in this repo causes any issues, send me an e-mail ⚠

Minimalistic, ready-to-use component for Sessions based Login and Sign-Up using Reactjs, Redux, Bootstrap Node.js + Express and MongoDB, can be used as a starting point for another project that needs authentication.

## Features

- Login page with success/error messages
- Register page with success/error messages
- Protected Profile page route that needs authentication to access
- Persistence achieved using Sessions, with session ID stored on Cookie
- Logout deletes session in database and cookie from browser
- Fully responsive across Desktop, Tablet and Mobile


## Prerequisites

- Node.js
- NPM
- React
- MongoDB Atlas MongoURI
- **.env file with ENV variables**, a .env template is provided

## Quick Start

Clone the repository

```
 https://github.com/shawn-dsilva/mern-login-signup-component.git
```

Install packages for Node backend

```
 cd mern-login-signup-component
 npm install
```

Install packages for React client

```
 cd mern-login-signup-component/client
 npm install
```
To Test Locally

remove the line ```"homepage": "https://demos.shawndsilva.com/sessions-auth-app",```
from ```client/package.json```
remove ```basename="/sessions-auth-app"```
from ```client/src/index.js```


Start Dev Server ( both React server and Nodejs server )

```
 npm run dev
```

## Image Gallery

**Homepage**
<img src="https://i.imgur.com/mjdMhvd.png">

**Login**

<img src="https://i.imgur.com/FVRZcER.png">

**Login with Error message**

<img src="https://i.imgur.com/UQVkaZD.png">

**Register**

<img src="https://i.imgur.com/FDNERPS.png">

**Register with Error message**

<img src="https://i.imgur.com/uDj6axZ.png">

**Register with Success message**

<img src="https://i.imgur.com/82C8VQM.png">

**Profile Page**

<img src="https://i.imgur.com/JMi9yrH.png">
