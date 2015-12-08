#!/bin/bash

if [ -d "./build" ]; then
    rm -r ./build
fi

mkdir build
cp ./app/index.html ./build/
mkdir ./build/js
cp ./app/js/bundle.js ./build/js