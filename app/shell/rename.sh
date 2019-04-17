#!/bin/bash
echo "Using: ./rename.sh -s (source extension) -d (destination extension) -r (directory)"

s=${1:jsx}
d=${2:js}
r=${3:$(pwd)}

for f in $r/*.$s
do
    [ -f "$f" ] && mv -v "$f" "${f%$s}$d"
done
