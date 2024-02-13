FROM node:16

WORKDIR /usr/src/mobile

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .