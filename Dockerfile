FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --no-progress

COPY ./ .

RUN yarn build

CMD yarn start:prod