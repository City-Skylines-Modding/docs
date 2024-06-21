# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
pnpm install
```

### Local Development

```
pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This website is deployed using Github Pages. The deployment process is automated using Github Actions. The deployment script is located in `.github/workflows/deploy.yml`.
