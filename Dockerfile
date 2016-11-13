FROM kkarczmarczyk/node-yarn

COPY . /react-c3js

WORKDIR /react-c3js
RUN make build

WORKDIR example
RUN rm -rf node_modules && \
  yarn

EXPOSE 9966
CMD npm start
