from node:12


COPY . /app
WORKDIR /app

CMD ["npm", "start"]