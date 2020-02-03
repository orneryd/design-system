#!/usr/bin/env bash


echo 'Deploying to development'
cf login -a "${PCF_DEV_API}" -u "${PCF_USER}" -p "${PCF_PASSWORD}" -o ISRM-SecOps-dev -s dev

cf push -f manifest.dev.yml
