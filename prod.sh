#!/bin/bash

#colors

RED='\033[0;31m'
BLUE='\033[40;38;5;82m'
PURPLE='\033[0;35m'
source ./node_setup.sh 


echo "***** Preparing Production Environment ********"
sleep 2

echo "***** Updating services ****"
sleep 3
sudo apt-get update


echo -e  "Checking for Nodejs"
sleep 2


if [ -x "$(command -v node)" ];
then
    echo -e " ${RED} You have NodeJS installed! \033[0m"
else
    install_nodejs
fi

echo -e "**** Web Server setup ****"
install_nginx

echo Done
echo -e " ${BLUE} Tweet me @jackhoudini__ \033[0m"
