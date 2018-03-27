#!/bin/sh

set -e

yarn build-client
yarn install
yarn start
