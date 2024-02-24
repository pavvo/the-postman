# The Postman

The Postman is a simple, React based web application that allows users to read posts and comments associated with those posts.

## Prerequisites

Before you begin, ensure you have installed the correct version of Node.js. For managing Node.js versions, use [nvm](https://github.com/nvm-sh/nvm). To install `nvm` run:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then, install the latest version of Node.js:

```bash
nvm install
```

This will install the latest version of Node.js specified in the `.nvmrc` file. You will also need to have `pnpm` installed. You can install it by running:

```bash
npm install -g pnpm
```

## Getting Started

To get started, clone the repository:

```bash
git clone https://github.com/pavvo/the-postman
```

Navigate to the project directory:

```bash
cd the-postman
```

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then, install the dependencies:

```bash
pnpm install
```

And finally, start the application:

```bash
pnpm start:dev
```

🚀 The application will be running at [http://localhost:5173/](http://localhost:5173)
