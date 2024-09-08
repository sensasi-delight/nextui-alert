# Contributing to NextuiAlert

We’re thrilled that you’re considering contributing to `NextuiAlert`! Whether you’re a seasoned developer or new to open source, your input helps improve this project for everyone.

## How You Can Contribute

There are several ways you can get involved and make a meaningful impact:

-   **Encountered a bug?** You can [report it here](https://github.com/sensasi-delight/nextui-alert/issues/new/choose). Your bug reports help us make the component more robust.
-   **Have a great idea?** Feel free to [suggest a feature](https://github.com/sensasi-delight/nextui-alert/issues/new/choose) by sharing your thoughts with us.
-   **Want to tackle an issue?** You can browse through our [open issues](https://github.com/sensasi-delight/nextui-alert/issues) and submit a fix if you find something you’d like to work on.
-   **Looking to improve the docs?** Documentation can always benefit from extra clarity, so you're welcome to enhance it!
-   **Interested in testing?** You can contribute by writing tests to improve the coverage and reliability of the component.

## Development Setup

To ensure code quality, we use ESLint, Prettier, and TypeScript. We strongly recommend running the linters and tests locally before submitting any changes.

### 1. Fork and Clone the Repository

First, fork the repository to your GitHub account, then clone your fork locally:

```bash
git clone https://github.com/your-username/nextui-alert.git
cd nextui-alert
```

### 2. Install Dependencies

Install the required dependencies to run the project:

```bash
npm install
```

### 3. Create a New Branch

Before making any changes, create a new branch:

```bash
git checkout -b your-branch-name
```

### 4. Make Your Changes

You can now start coding. If you’re fixing a bug or adding a feature, please reference the related issue in your commit message.

### 5. Lint and Format Your Code

We use **ESLint** and **Prettier** to enforce code style. Run the following commands before pushing your changes:

-   To lint the code:

```bash
npm run lint
```

-   To automatically fix linting issues:

```bash
npm run lint:fix
```

### 6. Commit Your Changes

Once your changes are ready, stage and commit them:

```bash
git add .
git commit -m "Describe your changes"
```

### 7. Push to Your Fork

Push your changes to your forked repository:

```bash
git push origin your-branch-name
```

### 8. Submit a Pull Request

Submit a pull request (PR) with a clear description of what you’ve done. Be sure to link any related issues.

## Code Guidelines

We follow some basic coding guidelines to maintain consistency:

-   **Prettier** is used to format code. Run `npm run lint:fix` to format automatically.
-   **TypeScript** ensures type safety. Please stick to TypeScript conventions.
-   **Follow existing patterns** when adding new features. Consistency is key for maintainability.

## Running Tests

If you are introducing a new feature or fixing a bug, make sure to add tests. You can run tests using:

```bash
npm test
```

## Contributing to Quality

Our project uses a combination of **ESLint** and **Prettier** to maintain code quality, along with **TypeScript** for type safety. These tools ensure that our code remains clean, consistent, and error-free.

To lint and format your code automatically, you can use the following commands:

-   **Lint your code**: `npm run lint`
-   **Fix linting issues**: `npm run lint:fix`

Please make sure your code passes all checks before submitting a pull request.

## Where to Ask for Help

Feel free to open a discussion or ask for guidance in your pull request if you're stuck or need help with any part of the project. We’re here to assist!

---

Thank you for contributing to `NextuiAlert`! Your efforts will help make the project better for everyone.
