FROM node:5

COPY . /react-c3js

WORKDIR /react-c3js
RUN npm install && \
  npm run build

WORKDIR example
RUN npm install && \
  npm run build

EXPOSE 8000
CMD npm run serve
