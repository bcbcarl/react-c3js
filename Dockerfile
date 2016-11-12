FROM node:7

COPY . /react-c3js

WORKDIR /react-c3js
RUN rm -rf node_modules && \
  npm install && \
  npm run build

WORKDIR example
RUN rm -rf node_modules && \
  npm install && \
  npm run build

EXPOSE 8000
CMD npm run serve
