FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --no-progress

COPY ./ .

RUN yarn lint
RUN yarn test:coverage
RUN yarn build

CMD yarn start:prod