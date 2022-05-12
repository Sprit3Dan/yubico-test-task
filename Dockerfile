FROM node:14.14.0-alpine

WORKDIR /app

CMD ["yarn", "run", "startd"]
