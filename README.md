# ReactQL

- Technologies Implemented:
    - React.js
    - Apollo Client
    - Node.js
    - Express.js
    - GraphQL
    - TypeORM
    - MySQL

A Full-Stack TypeScript Application bolstering a React Front-End, Express-GraphQL back-end connecting to a MySQL database for user data, utilizing Node.js.

# How to install locally

**1.** A MySQL database is reuired for this project. Please dowload [Here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) if you need it.

**2.** Follow the ths [contribution](https://github.com/GreenJ84/ReactExchange/blob/main/project_contributions.md.md#profile-contributions-guidline) steps for getting the repository set up.

**3.** Once the project is cloned, ``` cd ReactExchange ``` into the project directory.

**4.** Have two different command terminals open for each the client and server sides of the application

**5.** In one, ``` cd client ``` and ``` npm i ``` or ``` yarn ``` to install all dependencies.

**6.** In the other, ``` cd server ``` and ```npm i -f``` or ``` yarn -force ``` to install all dependencies (Using -force here because of a graphql / express-graphql peer dependency conflict. If you have a fix for it, sumbit an issue! )

**7.** From the server file, Open up the server.ts file, check and update the AppDataSource variable with you MySQL information

**8.** Then run ``` npm run dev ``` in both terminal (server terminal first) to get the application up and running

**9.** From here you can make edits using your favorite code editor and changes should appear as you make them thanks to nodemon!
