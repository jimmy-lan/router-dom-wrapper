npm run clean

# We want to compile such that only comments in type declaration
# files are kept.
printf "> [tsc] compile declaration files\n"
tsc -p . --removeComments false --declaration
printf "> [tsc] compile source code\n"
tsc -p . --removeComments true --declaration false

printf "\n"

printf "> copy LICENSE\n"
cp LICENSE ./dist
