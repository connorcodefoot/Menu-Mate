# Menu Mate

## Setup DB

psql

```CREATE ROLE mate WITH LOGIN password '123456';
CREATE DATABASE mmdatabase OWNER mate;```

Ensure .env file looks like this:
```DB_HOST=localhost
DB_USER=mate
DB_PASS=123456
DB_NAME=mmdatabase
DB_PORT=5432```

run ```npm install```

run ```npm run db:reset```  


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
