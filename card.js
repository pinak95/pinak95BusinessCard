#!/usr/bin/env node

"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const boxen = require("boxen");
const open = require("open");
const clear = require("clear");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.cyan.bold("email")}`,
        value: () => {
          const email = open("mailto:pinak.thakar95@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
          return email;
        },
      },
      {
        name: `Visit my ${chalk.green.bold("website")}`,
        value: () => {
          const website = open("https://pinakthakar.codes");
          console.log("\nDone, see you soon at website.\n");
          return website;
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("\nI will see you next time!\n");
        },
      },
    ],
  },
];

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};

const data = {
  name: chalk.bold.white("Pinak Thakar"),
  handle: chalk.bold.white("@pinak95"),
  work: `${chalk.white("Junior AI Architect and Backend Engineer at")} ${chalk
    .hex("#00FF00")
    .bold("A.B. Modi LLC")}`,
  github: chalk.gray("https://github.com/") + chalk.white.bold("pinak95"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.white.bold("pinak95"),
  leetcode: chalk.gray("https://leetcode.com/u/") + chalk.white.bold("pinak95"),
  codeforces:
    chalk.gray("https://codeforces.com/profile/") + chalk.white.bold("pinak95"),
  web: chalk.cyan.bold("https://pinakthakar.codes"),
  npx: chalk.redBright("npx") + " " + chalk.white.bold("pinak95"),

  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLeetCode: chalk.white.bold("   LeetCode:"),
  labelCodeforces: chalk.white.bold(" Codeforces:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const leetcoding = `${data.labelLeetCode}  ${data.leetcode}`;
const codeforcesing = `${data.labelCodeforces}  ${data.codeforces}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;
const me = `${chalk.italic.white.bold(
  "I am a Developer by day ☼ and an Aspiring Competitive Programmer by night ☾"
)}`;

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  leetcoding +
  newline +
  codeforcesing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding +
  newline +
  newline +
  me;

console.log(chalk.green(boxen(output, options)));

const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
