#!/bin/bash
SOURCE_REPOSITORY_REF=$(git status | awk 'NR==1{print $NF}')
if [[ -n "$SOURCE_REPOSITORY_REF" ]]; then
  NAMESPACE=$(oc project --short)
  echo git branch is $SOURCE_REPOSITORY_REF
  oc process -f openshift-template.json  \
    -p NAME=webapp \
    -p NAMESPACE=$NAMESPACE \
    -p SOURCE_REPOSITORY_URL=git@github.com:UniqKey/web-application.git \
    -p SOURCE_REPOSITORY_REF=$SOURCE_REPOSITORY_REF \
    -p SCMSECRET=scmsecret2 \
    -p MEMORY_LIMIT=256Mi \
  | oc create -f -	
  cat .env.staging | xargs oc set env bc webapp 
else
  echo "git status didn't resolve a git branch"
  exit 1
fi


