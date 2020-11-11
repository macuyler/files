# Files
This is a simple file hosting app designed to run on firebase hosting.

## Setup
1. Add some files/folders to the public directory.
2. In the files directory run:
```
npm install
```
3. Setup Firebase

### Firebase Setup
 - Create a new project in the [Firebase console](https://console.firebase.google.com/u/0/)
 - Setup the [firebase-cli](https://firebase.google.com/docs/cli)
 - `firebase login`
 - `firebase init`
   - Select your firebase project
   - Select firebase hosting
   - Handle the prompts:

> ? What do you want to use as your public directory? `dist`
>
> ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `No`
>
> ? File dist/404.html already exists. Overwrite? (y/N) `No`
>
> ? File dist/index.html already exists. Overwrite? (y/N) `No`


## Development
```
npm start
```

## Deployment
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

