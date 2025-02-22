#!/bin/bash

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Install PM2 globally
npm install -g pm2

# Install dependencies
pnpm install

# Build the application
pnpm run build

# Start the application with PM2
pm2 start .output/server/index.mjs --name "nuxt-app"

# Save PM2 process list and configure to start on system boot
pm2 save
pm2 startup 