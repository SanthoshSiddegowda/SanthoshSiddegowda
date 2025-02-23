#!/bin/bash

# Install required tools
npm install -g svgexport

# Convert SVG to PNG
svgexport public/favicon.svg public/favicon-16x16.png 16:16
svgexport public/favicon.svg public/favicon-32x32.png 32:32
svgexport public/favicon.svg public/apple-touch-icon.png 180:180
svgexport public/favicon.svg public/android-chrome-192x192.png 192:192
svgexport public/favicon.svg public/android-chrome-512x512.png 512:512

# Convert to ICO
convert public/favicon-32x32.png public/favicon.ico 