FROM node:lts
RUN apt update && apt upgrade -y
RUN apt-get install
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm run dev -- --zero 