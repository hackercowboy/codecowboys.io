FROM node:8-alpine
MAINTAINER David Uebelacker <david@uebelacker.ch>

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --no-progress

COPY ./ .

RUN yarn build

CMD yarn start:prod