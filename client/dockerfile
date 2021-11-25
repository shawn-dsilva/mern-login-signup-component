# using node 10.16.3 LTS Image based on Alpine Linux image
FROM node:10.16.3-alpine

WORKDIR /client

EXPOSE 3000
# sets env to node_modules in app
ENV PATH /client/node_modules/.bin:$PATH

# copies package.json from directory and installs packages,also installs react
COPY package.json /client/package.json
RUN npm install react-scripts -g
RUN npm install

# start command
CMD ["npm", "start"]