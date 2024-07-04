/* eslint-disable */
// https://github.com/nrwl/nx/issues/1098
// https://github.com/nrwl/nx/issues/3533
// https://github.com/nrwl/nx/issues/19367

// NOTE: sandboxed tests don't have access to the global scope

// so globalthis is scoped to global-setup and global-teardown

import { HttpStatus } from '@nestjs/common';

import {
  // getGlobalDispatcher,
  setGlobalDispatcher,
  // interceptors,
  // request,
  // Agent,
  RetryAgent,
  Client,
} from 'undici';

import {
  ChildProcessWithoutNullStreams,
  // spawn
} from 'child_process';

import { v2 as compose } from 'docker-compose';

// import ky from 'ky';

// https://undici.nodejs.org/#/docs/best-practices/writing-tests
// const agent = new Agent({
//   keepAliveTimeout: 10,
//   keepAliveMaxTimeout: 10,
// });
const undiciClient = new Client('http://localhost:8080', {
  keepAliveMaxTimeout: 10,
  keepAliveTimeout: 10,
});
const undiciRetryAgent = new RetryAgent(undiciClient);

setGlobalDispatcher(undiciClient);

const composeConfig = {
  // cwd: 'docker',
  config: [
    // 'docker/psql.compose.yml',
    'libs/jakarta-base-rest/compose.dev.yml',
  ],
  log: true,
};

declare global {
  var __SERVER_PROCESS__: ChildProcessWithoutNullStreams;
  var __TEARDOWN_MESSAGE__: string;
  var __UNDICI_RETRY_AGENT__: typeof undiciRetryAgent;
  var __UNDICI_CLIENT__: typeof undiciClient;
  var __COMPOSE__: typeof compose;
  var __COMPOSE_CONFIG__: typeof composeConfig;
}

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  await compose.upAll(composeConfig);

  // Start the API server
  // const server = spawn('nx', ['serve', 'jakarta-base-rest'], {
  //   shell: true,
  //   //stdio: 'inherit',
  //   stdio: 'pipe',
  // });

  // Store the server process in globalThis so it can be accessed in globalTeardown
  // globalThis.__SERVER_PROCESS__ = server;

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';

  globalThis.__UNDICI_CLIENT__ = undiciClient;
  globalThis.__UNDICI_RETRY_AGENT__ = undiciRetryAgent;
  globalThis.__COMPOSE__ = compose;
  globalThis.__COMPOSE_CONFIG__ = composeConfig;

  // You might want to wait for the server to be fully up before proceeding
  // This is a simplistic approach; consider polling a health endpoint instead
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // use axios with retry logic to check if the server is up on /healthz
  // if not, throw an error and exit the process
  // await new Promise<void>((resolve, reject) => {
  //   const axios = require('axios');
  //   axios
  //     .get('http://localhost:3000/healthz')
  //     .then(() => {
  //       console.log('Server is up and running');
  //       resolve();
  //     })
  //     .catch((error: unknown) => {
  //       console.error('Server is not up and running');
  //       console.error(error);
  //       reject();
  //     });
  // });

  // use ky with retry logic to check if the server is up on /healthz
  // await ky('http://localhost:3000/healthz', {
  //   timeout: 5000,
  //   retry: {
  //     limit: 10,
  //     methods: ['get'],
  //     delay: (attemptCount) => 1000,
  //   },
  // });

  console.log('Checking /healthz...');
  // const res = await agent.request({
  //   method: 'GET',
  //   path: '/healthz',
  //   origin: 'http://localhost:3000',
  // });
  // BUG: not building  changed baseservice with healthz
  // try to change baseservice to healthz
  const res = await undiciRetryAgent.request({
    method: 'GET',
    path: '/jakarta-base-rest/app/base/healthz',
  });
  // https://blog.platformatic.dev/http-fundamentals-understanding-undici-and-its-working-mechanism
  // const res = await request('/jakarta-base-rest/app/base/healthz', {
  //   dispatcher: getGlobalDispatcher().compose(
  //     interceptors.retry({
  //       maxRetries: 5,
  //       minTimeout: 1000,
  //       maxTimeout: 10000,
  //       timeoutFactor: 2,
  //       retryAfter: true,
  //     })
  //   ),
  // });

  // const timeout = new Promise<void>((resolve) => setTimeout(resolve, 15000));

  // Promise.race([timeout, res]);

  if (res.statusCode !== HttpStatus.OK) {
    throw new Error('Server is not up and running');
  }

  console.log('Server is up and running');
};
