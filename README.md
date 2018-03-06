# Project Name

> Project description

## Related Projects

  - https://github.com/TeamSparkles/service-header
  - https://github.com/TeamSparkles/service-attendees
  - https://github.com/TeamSparkles/service-description
  - https://github.com/TeamSparkles/service-suggestions
  - https://github.com/TeamSparkles/proxy-becca

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

From the root directory...

To seed the database (named timeLocation):
npm run seed

To setup API Key:
See instructions in the config/addApiKeyHere.js file
Basically, you'll need to get a Google Maps API key here: https://developers.google.com/maps/documentation/static-maps/
And then add that key to addApiKeyHere.js and rename that file apiKeys.js

To run webpack and server at port 9000:
npm start

To run webpack alone:
npm run webpack

To run tests:
npm test

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
