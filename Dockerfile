# node:alpine - smallest, node:slim - small and stable
FROM node:lts AS build

WORKDIR /code

ENV NODE_ENV=production

COPY ./package.json ./
RUN npm i

COPY . .
RUN npm run build

# here, we are implementing the multi-stage build. It greatly reduces our size
# it also won't expose our code in our container as we will copy
# the build output from the first stage

# stage 2
FROM node:slim

WORKDIR /code # duplicate here, but must have

EXPOSE 5555

COPY --from=build /code/dist ./dist

# copy requirements (express, cors, scripts) and run server
COPY --from=build /code/node_modules ./node_modules
COPY ./package.json ./
COPY ./.env ./
CMD ["npm", "run", "start"]
