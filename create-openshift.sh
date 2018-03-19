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
  | oc create -f -	
else
  echo "git status didn't resolve a git branch"
  exit 1
fi

# need to await until the backed pod is up then run "php artisan migrate". get the pod name with:
# oc get pods
# when you see backend-xxx then run:
# oc exec backend-xxx php artisan migrate

# NUKE EVERYTHING WITH THE COMMAND BELOW
# note this doesnt delete secrets - which is a good thing! - manually delete them from the webui resources section
#oc get all |  awk '!/NAME/ {print $1}' | while read NAME ; do oc delete $NAME; done

