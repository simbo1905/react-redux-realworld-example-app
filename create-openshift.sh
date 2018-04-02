#!/bin/bash
SOURCE_REPOSITORY_REF=$(git status | awk 'NR==1{print $NF}')
if [[ -n "$SOURCE_REPOSITORY_REF" ]]; then
  NAMESPACE=$(oc project --short)
  echo git branch is $SOURCE_REPOSITORY_REF
  oc process -f openshift-template.json  \
    -p NAME=webapp \
    -p NAMESPACE=$NAMESPACE \
    -p SOURCE_REPOSITORY_URL=https://github.com/simbo1905/react-redux-realworld-example-app.git \
    -p SOURCE_REPOSITORY_REF=$SOURCE_REPOSITORY_REF \
  | oc create -f -	
else
  echo "git status didn't resolve a git branch"
  exit 1
fi


