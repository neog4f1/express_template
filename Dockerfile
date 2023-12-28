# node: latest, lts, slim, lts-slim, alpine, lts-alpine
FROM node:lts-alpine AS builder

WORKDIR /code

ENV NODE_ENV=production

COPY . .
RUN npm i
RUN npm run build

# if npm i <package_name> then must copy package.json from builder

# here, we are implementing the multi-stage build. It greatly reduces our size
# it also won't expose our code in our container as we will copy
# the build output from the first stage

# stage 2
FROM node:lts-alpine

# set again because different stage
WORKDIR /code

# port for express or use .env file
ENV PORT=5555

# copy dist, node_modules (to run express, cors, pg, ...) folders created from first stage
COPY --from=builder /code/dist ./dist
COPY --from=builder /code/node_modules ./node_modules

# copy package.json to run command from scripts
COPY ./package.json ./
CMD ["npm", "run", "start"]
