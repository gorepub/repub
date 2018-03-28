#!/bin/sh

set -e

cd server/
yarn build-client
yarn install
yarn start
