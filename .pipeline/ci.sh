#!/usr/bin/env bash

set -e

handle_error() {
    echo "ci.sh: Error occurred on line $1"
    exit 1
}

trap 'handle_error $LINENO' ERR

yarn && yarn build && CI=true yarn test && yarn build:cdn

( cd storybook ; yarn && CI=true yarn test && yarn build-storybook )
