# 🍋 Static website with Capri and TanStack Router

This is an example of how to build a static website with [Capri](https://capri.build) and [TanStack Router](https://tanstack.com/router/).

## Features

- 📁 Type-safe, file-system-based router
- 🍃 Zero KB of JavaScript shipped to the client
- 🏝️ Pages with interactive islands
- 💨 Styled with Tailwind & [classname-variants](https://github.com/fgnass/classname-variants)

## Try out locally

Clone the repo and run the following commands:

```
npm install
npm run build
npm run preview
```

## About this demo

TanStack Router and Capri are a perfect match to build static websites. In contrast to other frameworks like Next.js or Remix, the generated pages contain no JavaScript by default.

### Islands

When you add interactive islands, only the code that is needed by exactly these components is downloaded. The islands are pre-rendered during the static build and hydrated once the page has loaded.

### Routes

When running `npm run dev`, the router CLI watches the `/src/routes` directory and generates files in `/src/routes.generated`. These are then used to configure the router.

Since we don't want any JavaScript to end up in our static pages, the Router's `useServerData` is set to `false`.

### Preview and Dev-Mode

In _dev-mode_, or when you visit the `/preview` route in production, the whole site is served as SPA. This makes it super fast to preview changes and allows you have instant live-previews inside a headless CMS, without having to perform a new build every time.

Visit https://capri.build for more details.

# License

MIT
