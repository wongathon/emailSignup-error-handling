## Overview

This repo contains a Node.js web app that currently does one thing: Allows users to create an account.

## Installation

1. In order to run this project, you'll need to have Node.js and NPM installed on your machine. [Follow these instructions](https://www.npmjs.com/get-npm) to install Node.js, which includes NPM.
1. Install all dependencies: `npm install`

## Usage

To start the server, run the following command:

```
npm start
```

Once the server is running, you should be able to visit [localhost:3000](http://localhost:3000) in your browser and see the "Create account" screen.

Problem 1
-Problem with ? and = characters when creating password
-Display Error msg for this failure case "Cannot accept ? or = as pw"
-Success page for ALL OTHERS. 
-Tips
	-Not too many lines of code
	-Comment in optimizations
	-Do not create new files. 


Problem 2 
-Add feature that checks if email exists in server
-User tries to sign up with existing email > throw error!
-Otherwise success
-Tips
	-Use fake-db.js
	-nodemon watches files, any server file saved will restart the server and wipe fake-db.js
	-Do not create new files
