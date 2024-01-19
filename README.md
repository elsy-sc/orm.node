# orm.node
Object-Relational Mapping for Nodejs using Express framework and MongoDB

# Installation
```bash
npm install
```

## .env file
Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:
```
MONGODB_URL=[url]
MONGODB_NAME=[dbname]
APP_NAME=[appname]
PORT=[port]
```

# Usage
you need to install nodemon for auto reload
```bash
npm install -g nodemon
```
then run
```bash
npm run dev
```
if you don't want auto reload, run
```bash
npm start
```