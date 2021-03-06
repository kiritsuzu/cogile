# nimblecode

Nimblecode is a code type-racing game to improve your speed and accuracy as a coder.  You can race either against the clock, show off your skills in live muliplayer with your friends in a private or public game.

Nimblecode was started by four software engineers in Los Angeles with a vision of building a game that was both fun and educational. Play today at [nimblecode.io](http://nimblecode.io).

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisities](#prerequisities)
- [Installing](#installing)
- [Running the tests](#running-the-tests)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Our Team](#our-team)
	
## Getting Started

Here is a quick step by step if you'd liek to contribute to our project


### Prerequisities

Fork the repo and clone locally

**You must have node installed and have a MySQL db to connect to**

You can set up a local db to connect to

The config file to connect to your db should be placed in **server -->db -->config -->config.js**

#####Example of config layout:
```
module.exports = {
    db_host: 'HOST_IP',
    db_user: 'DB_USER',
    db_password: 'DB_PASSWORD',
    db_name: 'DB_NAME',
    charset: 'utf8'
  };
```

### Installing

clone the repo where you would like

```
git clone https://github.com/nimblecode/nimblecode.git
```
cd into directory
```
cd nimblecode
```
run npm install
```
npm install
```
We often use nodemon to run node and it will relaunch node when changes are saved.
To get nodemon 
```
npm install nodemon -g
```
start the server!
```
npm start
```
default port on the project is 8080 as compiance with AWS
it should console.log 
```
listening at http://localhost:8080/
```
## Running the tests
We have a few tests for server side, please feel free to add more.

Our config is setup to run the test easily with npm.
```
npm test
```

## Deployment

Deployment info will change bewteen your choice of platform to use.  We used a AWS(Amazon Web Services) EC2 instance that hosted our server and Database on the same instance.  There are tutorials and info to do this on Amazon.

## Tech Stack

* React
* Redux
* React Router
* Node.js
* Express
* Bookshelf.js
* MySQL
* Knex.js
* Socket.io
* Ace Code Editor

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

#Our Team

##Mark
####Product Owner aka React/Redux Master
<img src="./client/assets/mark-profile.jpg" width="200" height="200" />
#####About Role and Experience
Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
  
  
##Rick 
####React/Redux Master
<img src="./client/assets/rick-profile.jpg" width="200" height="200" />
#####About Role and Experience
Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
  
  
##Nick 
####Full Stack Monster aka multiplayer socket whizzz
<img src="./client/assets/nick-profile.jpg" width="200" height="200" />
#####About Role and Experience
Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
  
  
##Jordan
####Back-end aficionado
<img src="./client/assets/jordan-profile.jpg" width="200" height="200" />

**Tech-Stack:** Node, Express, Bookshelf, Knex, MySQL, AWS  
#####Contribution
- Configured and devlopment of server and database
- Managed setup and consistent **deployment** on AWS
- Contributed on design and styling of front end

#####Challenges
Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.  Why is this not being committed?
#####Goals
Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.  Why is this not being committed?

