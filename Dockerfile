FROM node:8.9.4

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /whereWhen && cp -a /tmp/node_modules /whereWhen/

WORKDIR /whereWhen
ADD . /whereWhen

EXPOSE 9000
CMD [ "npm", "run", "docker" ]
