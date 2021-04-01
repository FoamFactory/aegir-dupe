#!/bin/bash
##
# Update package.json version string for github actions release process.
#
# Inputs:
#  - GITHUB_REF: An env variable containing the full refs/tags/<tag> string
#    dictating the string of the version number.
#
# Outputs:
# - package.json: A package.json file with the new version number, but ONLY if
#   the version conforms to the semver specification.

WORKDIR=`pwd`
NEW_VERSION=`echo $GITHUB_REF | awk -F"/" '{print $3}'`

# Verify that it's semver-certified
VALID_VERSION=`npx semver $NEW_VERSION`

if [ -z $VALID_VERSION ]
then
  echo "Version not valid"
  exit 1
fi

cp $WORKDIR/package.json $WORKDIR/package.json.old
jq --arg v "$NEW_VERSION" '.version=$v' $WORKDIR/package.json > $WORKDIR/package.json.new
rm $WORKDIR/package.json
mv $WORKDIR/package.json.new $WORKDIR/package.json
