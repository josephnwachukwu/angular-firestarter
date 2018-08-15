[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/josephnwachukwu/angular-matchstick.svg?branch=master)](https://travis-ci.org/josephnwachukwu/angular-matchstick)

# MatchStick - Angular + Firebase Progressive Web App Based on Angular-firestarter

MatchStick is a basic Angular PWA powered by Firebase. 


- [Live Demo](https://firestarter-96e46.firebaseapp.com/)

## Features

- Angular 5.1.3



## Usage

Create an account at https://firebase.google.com/

- `git clone https://github.com/josephnwachukwu/angular-matchstick.git project-name`
- `cd project-name`
- `npm install`

Create the environment files below in `src/environments/`.

#### environment.ts
```typescript
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'APIKEY',
        authDomain: 'DEV-APP.firebaseapp.com',
        databaseURL: 'https://DEV-APP.firebaseio.com',
        projectId: 'DEV-APP',
        storageBucket: 'DEV-APP.appspot.com',
        messagingSenderId: '123456789'
    }
};
```
#### environment.prod.ts
```typescript
export const environment = {
    production: true,
    firebaseConfig: {
        // same as above, or use a different firebase project to isolate environments
    }
};
```

And finally `ng serve` or `yarn start`
