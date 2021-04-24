#!/bin/bash

cd /home/ubuntu/frontend
sudo npx browserslist@latest --update-db
sudo sudo pm2 stop sgsg | sudo pm2 delete sgsg
pm2 start --name sgsg npm -- start