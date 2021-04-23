#!/bin/bash

#colors
RED='\033[0;31m'
BLUE='\033[40;38;5;82m'
PURPLE='\033[0;35m'
#version
NODEJS_VERSION='14.x'
MONGODB_VERSION='4.0'

function install_nodejs {
    echo -e " ${BLUE} Installing Nodejs and npm "
    sleep 2
    curl -sL https://deb.nodesource.com/setup_${NODEJS_VERSION} -o nodesource_setup.sh && \
    sudo chmod +x nodesource_setup.sh && sudo ./nodesource_setup.sh && \
    sudo apt-get install nodejs -y
    echo -e  " ${BLUE} Nodejs and npm has been installed! \033[0m"
    sleep 2 
    echo -e  " ${BLUE} Installing yarn"
    npm i -g yarn 
    echo -e  " ${BLUE} yarn has been installed! \033[0m"
    sleep 2 
    echo -e  " ${BLUE} Installing Pm2"
    npm i -g Pm2
    echo -e  " ${BLUE} Pm2 has been installed! \033[0m"
}

function install_nginx {
    echo -e " ${BLUE} Installing nginx"
    sleep 2
    sudo apt update
    sudo apt install nginx
    echo =e "${BLUE} nginx is rearing to go!"
}