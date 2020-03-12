#!/usr/bin/env bash

set -e

handle_error() {
    echo "cd.sh: Error occurred on line $1"
    exit 1
}

trap 'handle_error $LINENO' ERR

echo 'Deploying to development'
cp -av ../dist ./build/dist
cp -av ./public/samples ./build/samples
cp -av ./public/simone ./build/simone
cf login -a "${PCF_DEV_API}" -u "${PCF_USER}" -p "${PCF_PASSWORD}" -o ISRM-SecOps-dev -s dev

cf push -f manifest.dev.yml
