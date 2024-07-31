#!/bin/bash
docker compose up -d
npx tailwindcss -i ./docs/styles/style.css -o ./docs/styles/build.css --watch;