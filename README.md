# NadiaAssignmentROVR

This documents explain the requirements and steps to run the application in Visual Studio Code
# 1.Requirements
1. Bash - visual studio code
2. Node.js
3. mongoDb
4. Browserify

# 2.Enable bash in visual studio code
1. Install Git from https://git-scm.com/download/win
2. Open Visual Studio Code and press and hold Ctrl + ` to open the terminal.
3. Open the command palette using Ctrl + Shift + P.
4. Type - Select Default Shell
5. Select Git Bash from the options
6. Click on the + icon in the terminal window
7. The new terminal now will be a Git Bash terminal. Give it a few seconds to load Git Bash

# 3.Node.js
1. Download node.js from website https://nodejs.org/en/download/
2. Npm -v : to check node.js version

# 4.Mongo.db
1. Download MongoDb from website https://www.mongodb.com/try/download/community
2. Search for folder installation and find bin folder. Run mongo and mongod executable file
3. On bash, run
   createDb.js
   createLogAdminCollection.js
   **command : node [fileName]
   **file is located in oldTestData folder

# 5.Browserify - recognized ‘require’ in node.js
1. Install node.js
2. [skip]Npm init - will generate package.json
3. Npm i browserify --save-dev .  this will create node_modules folder
4. [skip]Edit package.json
5. [skip]Inside scripts "build": "browserify main.js -o bundle.js"
6. Npm run build

# 6.Clone from repository
1. Link : https://github.com/nadiayusof93/NadiaAssignmentROVR
2. Select code and copy clone url
3. Open visual studio code
4. Select clone repository

# 7.Run application from localhost
1. To install http server globally
   npm install http-server -g
2. Run server
   http-server . 
3. Click on link to run project on localhost
