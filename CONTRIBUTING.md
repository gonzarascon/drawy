# Contributing to Drawy

Thank you for considering contributing to **Drawy**! We appreciate your interest in improving the library. By contributing, you help make Drawy better for everyone.

This guide will help you get started with contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Forking the Repository](#forking-the-repository)
  - [Cloning the Repository](#cloning-the-repository)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Development Workflow](#development-workflow)
  - [Building the Project](#building-the-project)
  - [Running Tests](#running-tests)
  - [Linting and Formatting](#linting-and-formatting)
  - [Commit Messages](#commit-messages)
- [Submitting Changes](#submitting-changes)
  - [Creating a Pull Request](#creating-a-pull-request)
  - [Pull Request Guidelines](#pull-request-guidelines)
- [Issue Reporting](#issue-reporting)
- [Code Style Guidelines](#code-style-guidelines)
- [License](#license)
- [Contact](#contact)

---

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14 or higher is recommended).
- **Yarn** or **npm**: Use your preferred package manager.
- **Tailwind CSS**: The project uses Tailwind CSS. Familiarity with it is recommended.
- **TypeScript**: The codebase is written in TypeScript.

### Forking the Repository

1. Navigate to the [Drawy repository](https://github.com/gonzarascon/drawy) on GitHub.
2. Click the **Fork** button in the upper right corner to create a copy of the repository in your GitHub account.

### Cloning the Repository

Clone your forked repository to your local machine:

```bash
git clone https://github.com/yourusername/drawy.git
cd drawy
```

### Setting Up the Development Environment

Install the dependencies:

```bash
npm install
# or
yarn install
```

## Development Workflow

### Building the Project

Drawy uses `tsup` for building the library. To build the project, run:

```bash
npm run build
# or
yarn build
```

This will generate the output in the `dist/` directory.

### Running Tests

Currently, there may not be any tests set up. If you wish to add tests, please consider using a testing framework like Jest or React Testing Library.

### Linting and Formatting

Drawy uses ESLint and Prettier for linting and formatting.

- **Lint the code**:

  ```bash
  npm run lint
  # or
  yarn lint
  ```

- **Format the code**:

  ```bash
  npm run format
  # or
  yarn format
  ```

Please ensure your code passes linting and is properly formatted before submitting.

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for your commit messages. This helps in automating the release process and generating changelogs.

**Example commit message**:

```
feat: add support for custom panel animations
```

## Submitting Changes

### Creating a Pull Request

1. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them with descriptive messages.

3. **Push your branch** to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a pull request**:

   - Go to your fork on GitHub.
   - Click on the **Compare & pull request** button.
   - Provide a clear and descriptive title and description for your pull request.
   - Submit the pull request to the `main` branch of the original repository.

### Pull Request Guidelines

- **One feature per pull request**: Keep your pull requests focused on a single feature or fix.
- **Include relevant documentation**: Update the README or other documentation if your changes require it.
- **Avoid breaking changes**: If your change is likely to break existing users' code, please discuss it in an issue first.
- **Check for conflicts**: Ensure your branch is up to date with the latest `main` branch and resolve any merge conflicts.

## Issue Reporting

If you encounter any issues or have suggestions for improvements, please open an issue on GitHub:

1. Go to the [Issues](https://github.com/gonzarascon/drawy/issues) tab of the repository.
2. Click on **New issue**.
3. Provide a clear and descriptive title and description.
4. Include steps to reproduce the issue, if applicable.

## Code Style Guidelines

- **TypeScript**: Use TypeScript for all code.
- **React Functional Components**: Use functional components and React hooks.
- **Naming Conventions**: Use `camelCase` for variables and functions, `PascalCase` for component and type names.
- **Imports**: Group imports logically and use absolute imports when appropriate.
- **Comments**: Write clear and concise comments where necessary.
- **Tailwind CSS Classes**: Use Tailwind CSS classes for styling. Be mindful of class name conflicts and consider using prefixes if necessary.

## License

By contributing to Drawy, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## Contact

If you have any questions, feel free to reach out:

- **GitHub Issues**: [Create an issue](https://github.com/gonzarascon/drawy/issues)

---

Thank you for your contributions!

---
