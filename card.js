#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import open from "open";
import clear from "clear";

// Clear console for clean presentation
clear();

// Cache prompt module for reuse
const prompt = inquirer.createPromptModule();

// Define interactive questions
const questions = [
  {
    type: "list",
    name: "action",
    message: chalk.cyan("What would you like to do?"),
    choices: [
      {
        name: `Send me an ${chalk.cyan.bold("email")} 📧`,
        value: async () => {
          await open("mailto:pinak.thakar95@gmail.com");
          console.log(
            chalk.green(
              "\nEmail client opened. Looking forward to your message!\n"
            )
          );
        },
      },
      {
        name: `Message me on ${chalk.blue.bold("LinkedIn")} 💬`,
        value: async () => {
          await open(
            "https://www.linkedin.com/messaging/thread/new/?recipient=pinak95"
          );
          console.log(
            chalk.green("\nLinkedIn messaging opened. Let's connect!\n")
          );
        },
      },
      {
        name: `Visit my ${chalk.green.bold("portfolio")} 🌐`,
        value: async () => {
          await open("https://pinak95.onrender.com");
          console.log(chalk.green("\nPortfolio opened. Explore my work!\n"));
        },
      },
      {
        name: `Check my ${chalk.blue.bold("GitHub")} 💻`,
        value: async () => {
          await open("https://github.com/pinak95");
          console.log(chalk.green("\nGitHub opened. See my projects!\n"));
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log(chalk.white("\nThanks for stopping by!\n"));
        },
      },
    ],
  },
];

// Define professional boxen styling
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: "cyan",
  backgroundColor: "black",
  title: chalk.bold.cyan("Pinak Thakar's Business Card"),
  titleAlignment: "center",
};

// Data object with resume details
const data = {
  name: chalk.bold.white("Pinak Thakar"),
  handle: chalk.bold.gray("@pinak95"),
  work: chalk.white(
    `Seeking ${chalk.cyan.bold(
      "Backend Developer"
    )} roles (Previously Lead Developer at ${chalk.cyan.bold("AGILf(x)")})`
  ),
  github: chalk.gray("https://github.com/") + chalk.white.bold("pinak95"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.white.bold("pinak95"),
  portfolio: chalk.cyan.bold("https://pinak95.onrender.com"),
  certification: chalk.white(
    `Certified in ${chalk.cyan.bold("Microsoft Azure AI Fundamentals")}`
  ),
  npx: chalk.redBright("npx") + " " + chalk.white.bold("pinak95"),
  labelWork: chalk.white.bold("Work:          "),
  labelGitHub: chalk.white.bold("GitHub:        "),
  labelLinkedIn: chalk.white.bold("LinkedIn:      "),
  labelPortfolio: chalk.white.bold("Portfolio:     "),
  labelCertification: chalk.white.bold("Certification: "),
  labelCard: chalk.white.bold("Card:          "),
};

// Cache formatted strings to reduce runtime concatenation
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}${data.work}`;
const githubing = `${data.labelGitHub}${data.github}`;
const linkedining = `${data.labelLinkedIn}${data.linkedin}`;
const porting = `${data.labelPortfolio}${data.portfolio}`;
const certing = `${data.labelCertification}${data.certification}`;
const carding = `${data.labelCard}${data.npx}`;
const tagline = chalk.italic.white(
  "I am a Developer by day ☼ and an Aspiring Content Creator by night ☾"
);

// Build output with aligned formatting
const output = [
  heading,
  newline,
  working,
  githubing,
  linkedining,
  porting,
  certing,
  newline,
  carding,
  newline,
  tagline,
].join(newline);

// Display card
console.log(boxen(output, options));

// Display tip for interactivity
console.log(
  chalk.gray(`Tip: ${chalk.cyan("cmd/ctrl + click")} on links to open them`)
);

// Execute prompt
prompt(questions).then(({ action }) => action());
