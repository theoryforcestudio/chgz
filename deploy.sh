#!/bin/bash
LPUB=web/public/
host=east
RPUB=/var/www/chgz/
# -----
echo " > building website at `pwd`"
npm run build
echo "rsync to $RPUB"
rsync -rzavP $LPUB $host:$RPUB
ssh $host "ls -lrt $RPUB"
git add . && git commit -m "build ~" && git push origin master
echo "~~done~~"
