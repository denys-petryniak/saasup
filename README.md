# SaaSup

![SaaSup Preview](https://github.com/denys-petryniak/saasup/assets/16530588/df265948-6a98-43ab-a58e-b05464ed21f0)

## Demo

Check out the live demo of SaaSup at [https://saaasup.vercel.app](https://saaasup.vercel.app).

## Explore in StackBlitz

Click the button below to open the project in StackBlitz for preview and experimentation:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/denys-petryniak/saasup)

Feel free to explore the code, make changes, and see the results in real-time!

## Setup

To set up the project, make sure to install the dependencies:

```bash
# Install dependencies with pnpm
pnpm install
```

## Storyblok Integration

### Enable HTTPS for Storyblok v2

Storyblok v2 requires your app to be served over HTTPS. Follow these steps to enable HTTPS in a Nuxt 3 project:

1. **Install mkcert**
   Install mkcert on your system. The installation instructions for macOS, Windows, and Linux can be found in the [mkcert GitHub repository](https://github.com/FiloSottile/mkcert).

2. **Generate the certificate**
   Run the following command in your project folder to create a valid SSL certificate:

   ```bash
   mkcert localhost
   ```

3. **Add the certificates to .gitignore**
   Ensure that the certificates are ignored in version control by adding the following lines to your .gitignore file:

   ```text
   # HTTPS Proxy certificates
   localhost.pem
   localhost-key.pem
   ```

4. **Modify your package.json**
   Update the nuxt dev script as follows:

   ```json
   "scripts": {
     "dev": "nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem"
   }
   ```

### Storyblok + TypeScript Setup

1. **Install Storyblok CLI**
   Run `npm i -g storyblok` to install the CLI.

2. **Login to Storyblok**
   In your terminal, use the command `storyblok login` to log in.

3. **Save the component schema**
   In your project directory, save the schema of your Storyblok components to a .json file:

   ```bash
   storyblok pull-components --space SPACE_ID
   ```

4. **Install storyblok-generate-ts**
   Install the TypeScript generator:

   ```bash
   pnpm add -D storyblok-generate-ts
   ```

5. **Add a generation script to package.json**
   Add the following script:

   ```json
   "scripts": {
     "generate-sb-types": "storyblok-generate-ts source=./components.[SPACE_ID].json target=./component-types-sb"
   }
   ```

6. **Generate types**
   Run the following command to generate TypeScript types for Storyblok components:

   ```bash
   pnpm generate-sb-types
   ```

7. **Use the generated types**
   Import the generated types in your components, for example:

   ```typescript
   import type { PageStoryblok } from '../component-types-sb'
   ```

Don't forget to rerun `pull-components` and `generate-sb-types` whenever you update your Storyblok schema.

For more details, refer to the documentation of the [Storyblok CLI](https://github.com/storyblok/storyblok-cli) and [storyblok-generate-ts](https://github.com/dohomi/storyblok-generate-ts).

## Development Server

Start the development server at [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

For more information on deployment, check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Credits

Special thanks to [VictorFlow](https://dribbble.com/victorflow) for the beautiful design that formed the basis of the project.

## License

This open-source project is available under the [MIT License](LICENSE).
