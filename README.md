# UniqKey Dashboard
This is still work-in-progress.

## Quick Notes:
- We use Next.js for server-side rendering which gives us a bunch of features such as a folder API, code splitting and much more.
- Currently it can take a while for HMR to build a page up but it isn't a problem in production. Once it's build it should update fast when making changes. We'll look into optimizing this.
- Some features aren't ready yet but will be soon (Authenticaiton, protected routes etc.). Some of this is also due to some minor problems with the API which will get resolved soon.
- A more comprehensive documentation will follow

## Installation, development and build
**Install all dependencies:**
```
yarn install
```

**Run development:**
```
yarn dev

Go to http://localhost:3000 in your browser
```

**Run production:**
```
yarn build

yarn start

Go to http://localhost:3000 in your browser
```
