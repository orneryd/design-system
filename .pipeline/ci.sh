#!/usr/bin/env bash

set -e

handle_error() {
    echo "ci.sh: Error occurred on line $1"
    exit 1
}

trap 'handle_error $LINENO' ERR