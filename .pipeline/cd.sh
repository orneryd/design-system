#!/usr/bin/env bash

set -e

handle_error() {
    echo "cd.sh: Error occurred on line $1"
    exit 1
}

trap 'handle_error $LINENO' ERR

.pipeline/ci.sh

echo 'Deploying to development'
cf login -a "${PCF_DEV_API}" -u "${PCF_USER}" -p "${PCF_PASSWORD}" -o ISRM-SecOps-dev -s dev

#cf push -f manifest.dev.yml
