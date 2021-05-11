# AWS-socket-io-test-server

socket-io server for testing automatic deploy with github ACTIONS

## Author: Fizzo Pannosch

**Version**: 1.0.0

<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

### <center> links and resources </center>

#### <center> [AWS bean stalk deployed site](http://fizzosocketioservertest-env.eba-6g4rpcpc.us-west-2.elasticbeanstalk.com/) </center>


![console.log printout of app running](./assets/2025.PNG)

#### <center> [github actions](https://github.com/fizzo999/AWS-socket-io-test-server/actions/runs/829958299) </center>

#### <center> [merged pull request - github](https://github.com/fizzo999/AWS-socket-io-test-server/pull/1) </center>


<hr>


## Overview

test server deployed on AWS to show how to deploy through github actions (ci/cd)

## Setup

git clone repo from github link:
https://github.com/fizzo999/AWS-socket-io-test-server.git

#### npm install

(to install dependencies: socket.io and socket.io-client)

#### Running the app

+ to test this server - run the command:

+ npm run start in one ubuntu window

+ and open anothyer ubuntu window and run the command:

+ node client.js


## Architecture

- socket.io server (index-sockets.js) and socket.io-client (client.js)

## Change Log

05-10-2021 6:15pm - Application running and manually tested in terminal.

## Credits and Collaborations

Number and name of feature: setup file structure, deploy to AWS create main.yml file for workflow w github readme - finish deploy to AWS - manual test
Estimate of time needed to complete: 2 hours
Start time: 3:00 pm
Finish time: 6:15 pm
Actual time needed to complete: 3.25 hours

