# Driver simulator

Use this simulator to test your solution for the full-stack code challenge.

The driver simulator will:
1. Register all vehicles listed in the file `vehicles.json`
2. Update the vehicle location until it reaches its destination
3. De-register all vehicles when they are finished

## Get started

You need to install [node](https://github.com/creationix/nvm#install-script) and [yarn](https://yarnpkg.com/en/docs/install) to run the simulator.

Make sure your node version is the same as the one listed in the `.nvmrc` file, if you are using nvm to manage your node instances you can run `$ nvm use` in your command line, it will compare your current node version with the one set in the file `.nvmrc`.

Once you have yarn and the correct version of node installed, you can run `$ yarn install`, this is going to install all the dependencies of the project.

Finally, you can start the simulator running:

```shell
$ yarn start localhost:3000
# Replace localhost:3000 with the host of your API
# yarn start <API URL>:<API Port>
```

## Tests

This project contains automated tests that can be executed by running the following command:

```shell
$ yarn test
```
