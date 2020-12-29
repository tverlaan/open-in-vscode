#!/bin/bash

for SIZE in 16 24 32 48 128
do
inkscape -w $SIZE -h $SIZE icon_open_vscode.png -o images/icon_open_vscode_$SIZE.png
done
