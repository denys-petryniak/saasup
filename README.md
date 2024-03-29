# SaaSup

<img src="https://github.com/denys-petryniak/saasup/assets/16530588/df265948-6a98-43ab-a58e-b05464ed21f0" alt="SaaSup Preview" width="650">

## Demo

Check out the live demo of SaaSup at [https://saaasup.vercel.app](https://saaasup.vercel.app).

## Explore in StackBlitz

Click the button below to open the project in StackBlitz for preview and experimentation:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/denys-petryniak/saasup)

Feel free to explore the code, make changes, and see the results in real-time!

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

### Storyblok

#### HTTPS

Storyblok v2 requires your app to be served via HTTPS. Please follow the steps below to enable this in a Nuxt 3 project.

- **Install `mkcert` on your system:** The installation instructions for macOS, Windows and Linux can be found in the [mkcert Github repository](https://github.com/FiloSottile/mkcert).

- **Change the following in your package.json:** `nuxt dev` -> `NODE_TLS_REJECT_UNAUTHORIZED=0 nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem
`

- **Create a valid certificate by running the following command in your project folder:**

```bash
mkcert localhost
```

IMPORTANT: Add this to your project’s to gitignore

```bash
# HTTPS Proxy certificates
localhost.pem
localhost-key.pem
```

#### Storyblok + TypeScript

- Install the Storyblok CLI: `npm i -g storyblok`
- Login using storyblok login in your terminal
- In your project directory, save the schema of your Storyblok components in a `.json` file by running `storyblok pull-components --space SPACE_ID`
- Install storyblok-generate-ts: `pnpm add -D storyblok-generate-ts`
- Add the following command to your package.json: `"generate-sb-types": "storyblok-generate-ts source=./components.[SPACE_ID].json target=./component-types-sb"`
- Generate the types: `pnpm generate-sb-types`
- Import the type in each component, for example: `import type { PageStoryblok } from '../component-types-sb'`
- Remember to rerun the `pull-components` and `generate-sb-types` scripts after you’ve made changes to your component schema in your Storyblok space

Please refer to the documentation of [Storyblok CLI](https://github.com/storyblok/storyblok-cli) and [storyblok-generate-ts](https://github.com/dohomi/storyblok-generate-ts) for advanced use cases, customization options, and more.

## Development Server

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Credits

Special thanks to [VictorFlow](https://www.figma.com/@victorflow) for the fantastic design that served as an inspiration for this project.
