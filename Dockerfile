FROM node:14-alpine

RUN apk update
RUN apk add git

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --no-progress

COPY ./ .

RUN yarn build

CMD yarn start:prod