# aws-lamda-serverless
This project consist in build an API based on NodeJS/Serverless with a PostgreSQL database.

## Launch 🚀

_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._

### Pre-requirements 📋

* [Nodejs](https://nodejs.org/en/download)
* [Git](https://git-scm.com/downloads)
* [Postgresql](https://www.postgresql.org/download)
* If you want to store your data in RDS, should be a [AWS account](https://aws.amazon.com/es/)
* If you want to develop in better place, install [VSCode](https://code.visualstudio.com/) or [Intellij Idea](https://www.jetbrains.com/es-es/idea/)
* If you want to test the endpoints, maybe you should be install [Postman](https://www.postman.com/downloads/)

### Installation 🔧

_The following are a series of steps that tells you what you must run to have a development environment running_

_1. Install NodeJs_

_2. Install Git_

_3. Clone repository: go to the path where you want to download the project and run the following command_

```
git clone https://github.com/j0sehernan/aws-lamda-serverless.git
```
_4. Run the command:_
```
npm install
```

_5. If you want to work with local database, you must install Postgresql._
```
* Note: To make the project run faster, a connection was left pointing to a test RDS database, which is hosted on AWS.
If you decide to work with this RDS database, you just have to run this command:

npx sequelize db:migrate:undo:all

Then continue with step 7
```

_6. Then you must create a database and then you need to change the connection in the file:_

```
/config/config.json
```
And change the object development with your values:
```
  ...
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database_name",
    "host": "your_host",
    "dialect": "postgres"
  }
  ...
```
_7. Now we will create the structure of the tables with the following command:_
```
npx sequelize db:migrate
```
_8. Now we will insert test data, with the following command:_
```
npx sequelize db:seed:all
```
_9. To run the project locally we execute the command:_
```
sls offline
```
You will be shown the list of available services with their corresponding path.

_10. As an example, you can consume the service that lists Authors, through postman or from the browser:_
```
http://localhost:3000/dev/authors
```

## Test ⚙️

_Unit and Integration tests have been added, to run them you can use this command:_

```
npm run test
```

## Deployment 📦

_To deploy services to aws, we need to change our credentials, with the command:_
```
serverless config credentials --provider aws --key your_key --secret your_secret --profile deploy-aws
```
* To obtain this data, you must configure your user in the IAM service.
* In order to shorten the configuration time, a valid username and password have been left by default in the configuration.

Then change the provider data in the serverless.yml, as this
```
provider:
  name: aws
  runtime: nodejs14.x
  stage: dev
  profile: deploy-aws
  region: us-west-2
```
Now run the command:
```
npm run deploy
```

## Built with 🛠️

* [Serverless](https://www.serverless.com/)
* [Serverless-Offline](https://github.com/dherault/serverless-offline)
* [Postgresql](https://www.postgresql.org)
* [Nodejs](https://nodejs.org/)
* [Git](https://git-scm.com)
* [Sequelize](https://sequelize.org/)
* [Mocha](https://mochajs.org/)
* [Sinon](https://sinonjs.org/)
* [Chai](https://www.chaijs.com/)
* [Supertest](https://github.com/visionmedia/supertest)
* [AWS](https://aws.amazon.com/es/)

## Author ✒️

* **José Hernán Quispe**
