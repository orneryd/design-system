#!/usr/bin/env bash

# get the arguments and declare them as variables 
# arguments are defined as variables that equal themselves.
# 
# example: 
# 
# $ ./version.sh foo 
# makes the variable foo=foo inside the script.
# 
# arguments with - or -- get the next argument as its value.
# example: 
# 
# $ ./version.sh --foo bar 
# makes the variable publish=bar inside the script.
# 
# If a flag is passed without a second param, it is set to "true"
# example:
# 
# $ ./version.sh --publish  
# makes the variable publish=true inside the script.
# 
# $ ./version.sh --publish patch 
# makes the variable publish=patch inside the script.
# makes the variable patch=patch inside the script.
# 
while [ $# -gt 0 ]; do
    if [[ $1 == *"-"* ]]; then
        PARAM="${1/-/}"
        PARAM="${PARAM/-/}"
        VALUE=$2
        if [ -z "$2" ]; then
            VALUE="true"
        fi
        declare $PARAM="$val"
        echo "$PARAM=$val"
    else 
        declare $1="$1"
        echo "$1=$1"
    fi
  shift
done

get_package_name()
{
    local _PACKAGE_NAME=$(cat package.json \
        | grep name \
        | head -1 \
        | awk -F: '{ print $2 }' \
        | sed 's/[",]//g')

    echo "$_PACKAGE_NAME"
}

get_package_json_version()
{
    local _PACKAGE_VERSION=$(cat package.json \
        | grep version \
        | head -1 \
        | awk -F: '{ print $2 }' \
        | sed 's/[",]//g')

    echo "$_PACKAGE_VERSION"
}

# set the versioning scheme
SCHEME=$patch

if [ -z $SCHEME ]; then
    SCHEME=$minor
fi

if [ -z $SCHEME ]; then
    SCHEME=$major
fi

if [ -z $SCHEME ]; then
    echo "You cannot version without a scheme! usage: ./version.sh patch|minor|major [--publish|-publish|publish]"
    exit 1;
fi

cd packages

for d in ./*/ ; 
do 
    cd "$d"
    CURRENTDIR=$(pwd)
    FILESCHANGED=$(git diff --name-only master .)
    if [ -f package.json ] && [ ! -z "$FILESCHANGED" ]; then
        PACKAGE_NAME=$(get_package_name) > /dev/null;
        OLD_PACKAGE_VERSION=$(get_package_json_version) > /dev/null;
        npm version $SCHEME --no-git-tag-version > /dev/null;
        NEW_PACKAGE_VERSION=$(get_package_json_version) > /dev/null;
        echo "$PACKAGE_NAME$OLD_PACKAGE_VERSION ->$NEW_PACKAGE_VERSION"
         if [ ! -z $publish ]; then
            echo "Publishing package..."
            npm publish
        fi 
    fi
    cd ../
done
