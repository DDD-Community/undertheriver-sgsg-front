#!/bin/bash

cd /home/ubuntu/frontend
sudo pm2 stop sgsg
sudo pm2 delete sgsg
pm2 start --name sgsg npm -- start