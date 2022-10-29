FROM node:19

WORKDIR /code/frontend

COPY package*.json /code/

RUN npm install

COPY . /code/

CMD ["npm", "start"]

EXPOSE 3000
