# Atlassian Connect App using Express

Congratulations!
You've successfully created an Atlassian Connect App using the Express web application framework.

## What's next?

[Read the docs](https://bitbucket.org/atlassian/atlassian-connect-express/src/master/README.md).

## Human-readable instructions
`yarn add atlas-connect` or `npm i atlas-connect`

`atlas-connect new basic-ACE`

change credentials.json.sample to credentials.json and fill them in
username is Jira email and password is API key from Jira

in routes/index.js change hello-world.hbs to hello-world.jsx and uncomment browserOnly: true

in hello-world.jsx change the return because SectionMessage doesn't always work

start with `yarn watch-jsx` or npm run watch-jsx + `yarn start` or npm run start

yarn start will create the tunnel and install the app automatically using credentials.json (you need ngrok to be installed)
