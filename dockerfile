# using node 10.16.3 LTS Image based on Alpine Linux image
FROM node:10.16.3-alpine

WORKDIR /server

EXPOSE 5000
# sets env to node_modules in app
ENV PATH /server/node_modules/.bin:$PATH

# copies package.json from directory and installs packages
COPY package*.json /server/
RUN npm install

# start command
CMD ["npm", "start"]