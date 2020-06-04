FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json .
ADD ./dist /usr/src/app/dist

CMD [ "npm", "start:prod" ]
EXPOSE 3000
