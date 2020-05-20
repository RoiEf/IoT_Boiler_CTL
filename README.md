<p align="center">
  <a href="" rel="noopener">
 <img width=300px height=300px src="https://i.imgur.com/LIHowq4.jpg" alt="Project logo"></a>
</p>

<h1 align="center">Hybrid Front End control BoilerPlate for ESP32 IoT applicatons</h1>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Making changes](#making_changes)
- [TODO](#todo)

## 🧐 About <a name = "about"></a>

### The Aim of this project is to create a usefull BoilerPlate code for ESP32 IoT applications.

#### This project takes on a Hybrid approach where the Front End control of things will be a SPA \(Single Page Application\) written in Java-Script so on the Server IoT side of things there will obly be a need to create a API endpoint.

### This reposotory contain **ONLY** the Front end SPA control.

#### It is created using [Preact](https://github.com/preactjs) & [Microbundle](https://github.com/developit/microbundle).

#### The "IoT" side of things is at: []()

#### A Mockup API to run and test this code against is at: [IoT_Base_MockAPI](https://github.com/RoiEf/IoT_Base_MockAPI)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and deployment purposes.

### Prerequisites

This project was built using VS-Code.
The project is written in Java-Script and require Node.JS & NPM to be installed.  
Working on windows I also use [Git-SCM](https://git-scm.com/)
Given the nature of the project, I'm not going to go over how to setup your local machine.

### Installing

In order to get the project, just do a _Git: checkout_ to this repository.  
Then run **npm install** to automaticaly install all project dependencies such as Preact and Microbundle from GitHub.com and you are good to go.

It is recomended also to Install the Mockup API for this project.
It can be found at: [IoT_Base_MockAPI](https://github.com/RoiEf/IoT_Base_MockAPI)

## 🎈 Usage <a name="usage"></a>

### For Running this code localy:

Open two terminal windows.  
In the first give the command **npm run build_dev**  
In the second give the command **npm run serve**

## 🚀 Deployment <a name = "deployment"></a>

## Making changes to the code <a name="making_changes"></a>

The code in this repository is Split into three main directories.  
The **_src_** directory contain all the Java-Script code.  
The **_build_dev_** directory contain html and CSS files. After a seccessfull build\*dev it will also contain .js and .map files. This is the derectory from the live server will serve the content for development perposes.  
The **_build_** directory is very much the same as the _build_dev_. only building the project files there will generate a smaller more compact version of the built files in order to save memory space on the IoT device.

## ToDo:

In the readme file - Write the deployment section  
Fix the "npm run dev" script.
