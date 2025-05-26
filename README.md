# Pinak Thakar's Business Card CLI

![Node.js](https://img.shields.io/badge/Node.js-v22.5.1-green) ![License](https://img.shields.io/badge/license-ISC-blue)

A professional CLI-based business card for Pinak Thakar (@pinak95), showcasing my skills and contact information as a Backend Developer. Run it with `npx pinak95` to explore my portfolio, GitHub, LinkedIn, or send me a message.

## About Me

- **Name**: Pinak Thakar (@pinak95)
- **Status**: Seeking Backend Developer roles (Previously Lead Developer at AGILf(x))
- **Certification**: Microsoft Azure AI Fundamentals
- **Tagline**: I am a Developer by day ☼ and an Aspiring Content Creator by night ☾
- **Links**:
  - [Portfolio](https://pinak95.onrender.com)
  - [GitHub](https://github.com/pinak95)
  - [LinkedIn](https://linkedin.com/in/pinak95)
  - Email: pinak.thakar95@gmail.com

## Features

- Interactive CLI interface with options to:
  - Send an email 📧
  - Message me on LinkedIn 💬
  - Visit my portfolio 🌐
  - Check my GitHub 💻
  - Exit
- Professional styling with a double-bordered, cyan-themed card on a black background
- Optimized for performance with cached strings and async operations

## Installation

Run the card directly via npm:

```bash
npx pinak95
```

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/pinak95/pinak95BusinessCard.git
   cd pinak95BusinessCard
   ```
2. Ensure Node.js v22.5.1 is installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the card:
   ```bash
   npm start
   ```

## Dependencies

- `boxen@7.1.1`: Renders the card with a styled box
- `chalk@5.3.0`: Adds color and formatting to text
- `inquirer@9.2.12`: Provides interactive CLI prompts
- `open@10.1.0`: Opens links in the default browser or email client
- `clear@0.1.0`: Clears the console for a clean display

## Development

To contribute or modify the card:

1. Fork and clone the repository.
2. Install dependencies with `npm install`.
3. Edit `card.js` (uses ESM with `"type": "module"`).
4. Test changes with `npm start`.
5. Submit a pull request to [pinak95/pinak95BusinessCard](https://github.com/pinak95/pinak95BusinessCard).

## Publishing

To publish an updated version to npm:

```bash
npm publish
```

Ensure you have npm publishing rights for the `pinak95` package.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact

Connect with me:

- Email: [pinak.thakar95@gmail.com](mailto:pinak.thakar95@gmail.com)
- LinkedIn: [pinak95](https://linkedin.com/in/pinak95)
- Portfolio: [pinak95.onrender.com](https://pinak95.onrender.com)
- GitHub: [pinak95](https://github.com/pinak95)

Run `npx pinak95` to interact with my card and explore my work!
