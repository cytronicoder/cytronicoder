#! /usr/bin/env node
const { get } = require("axios");

// Commands object with key-value pairs
const commands = {
  about: {
    description: "More about the guy who made this",
  },
  help: {
    description: "Show this particular help message",
  },
  projects: {
    description: "List of projects that I have worked on",
  },
  resume: {
    description: "My resume, gloriously hosted on Google Docs",
  },
  socials: {
    description: "My social media accounts - go follow me!",
  },
};

// Check if any arguments are passed
const argsPassed = process.argv.slice(2).length > 0;
if (!argsPassed) {
  help();
  process.exit(0);
}

// Get the command passed as an argument
const command = process.argv[2];
const commandExists = Object.keys(commands).includes(command);

// If the command doesn't exist, print the help message and exit
if (!commandExists) {
  console.log(`Command "${command}" doesn't exist!\n`);
  help();
  process.exit(1);
}

// If the command exists, execute the corresponding function
switch (command) {
  case "about":
    about();
    break;
  case "help":
    help();
    break;
  case "projects":
    projects();
    break;
  case "resume":
    resume();
    break;
  case "socials":
    socials();
    break;
}

function help() {
  console.log(`Usage: npx cytronicoder [command]`);
  console.log(`
  Commands:`);

  for (const [key, value] of Object.entries(commands)) {
    console.log(`\t${key} - ${value.description}`);
  }
}

function about() {
  // TODO: Add more information
}

function projects() {
  // TODO: Add more information
}

function resume() {
  // TODO: Add more information
}

function socials() {
  // TODO: Add more information
}
