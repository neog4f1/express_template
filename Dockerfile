FROM node:lts AS builder

WORKDIR /code

COPY ./package.json ./
RUN npm i

COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
