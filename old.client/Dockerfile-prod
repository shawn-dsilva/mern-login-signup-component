# using node 10.16.3 LTS Image based on Alpine Linux image
FROM node:10.16.3-alpine as react-build
WORKDIR /client
# sets env to node_modules in app
ENV PATH /client/node_modules/.bin:$PATH
# copies package.json from directory and installs packages,also installs react
COPY package.json /client/package.json
RUN npm install react-scripts -g
RUN npm install
COPY ./ /client
RUN npm run build

FROM nginx
COPY --from=react-build /client/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 777 /usr/share/nginx/html/static/
CMD ["nginx", "-g", "daemon off;"]
