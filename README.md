# Files

This is a simple file hosting app designed to run on a free tier of Netlify or Firebase.


## Quick Start

Add some files to the `public` directory to get started!

```
npm install
npm start
```


## Netlify Deploy

1. Create a new project on [Netlify](https://app.netlify.com)
2. Setup the [netlify-cli](https://cli.netlify.com):

```
npm install -g netlify-cli
```

3. Run: `netlify login`
4. Run: `netlify link`
   - Select your new project.
5. Build and deploy:

```
npm run build
netlify deploy --prod --dir dist
```


## Firebase Deploy

1. Create a new project in the [Firebase console](https://console.firebase.google.com)
2. Setup the [firebase-cli](https://firebase.google.com/docs/cli):

```
npm install -g firebase-cli
```

3. Run: `firebase login`
4. Run: `firebase init`
   - Select your firebase project
   - Enable firebase hosting
   - Handle the prompts below:

> ? What do you want to use as your public directory? `dist`
>
> ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `No`
>
> ? File dist/404.html already exists. Overwrite? (y/N) `No`
>
> ? File dist/index.html already exists. Overwrite? (y/N) `No`

5. Build and deploy:

```
npm run build
firebase deploy
```


## Misc.

To ignore changes to `public/hello.txt` and `src/map.js`

```
git update-index --skip-worktree public/hello.txt
git update-index --skip-worktree src/map.js
```
