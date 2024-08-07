#!/bin/bash
set -e

# https://github.com/diffplug/spotless/issues/623
# https://gist.github.com/bhaskarmelkani/8baff88980f9cd90f8c44e07e433eb73#file-spotlessapply-sh

# A precommit hook that uses spotless to format only staged files

# It also supports partially stage files using the following steps:
# 1. It stashed all the unstaged changes and then runs spotlessApply
# 2. After spotless apply is finished it applyes the stashed changes back on the code (that is also formatted/changed by spotless)
# 3. All the files that have conflicts due to the stash apply, it merges the conflict with the changes that are coming from the stash to not loose any new changes that were not staged

# stash any un staged changes
STASHED_HASH=$(git stash create)

if [ -n "$STASHED_HASH" ]; then
  git stash store $STASHED_HASH
  git checkout -- .
fi

filesToFormat="$(git --no-pager diff --name-status --no-color --cached | awk '$1 != "D" && $2 ~ /\.kts|\.java|\.kt/ { print $2}')"

printf "\n~~~ Spotless Starting ~~~"
printf "\nSpotless: Files to check"

for filePath in $filesToFormat; do
  printf "\n* %s" "$filePath"
done

printf "\n\nSpotless: Starting to format dirty files\n\n"
for sourceFilePath in $filesToFormat; do
  ./gradlew spotlessCheck -PspotlessIdeHook="$(pwd)/$sourceFilePath"
  git add "$sourceFilePath"
done

if [ -n "$STASHED_HASH" ]; then
  echo "$(git stash apply -q)"

  conflictedFiles="$(git diff --name-only --diff-filter=U)"

  for conflictedFile in $conflictedFiles; do
    git checkout --theirs "$(pwd)/$conflictedFile"
    git restore --staged "$(pwd)/$conflictedFile"
  done

  git stash drop -q
fi

printf "\n~~~ Spotless Finished ~~~\n"
