FROM node:9

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64
RUN chmod +x /usr/local/bin/dumb-init

WORKDIR /opt/redirector
COPY . /opt/redirector

RUN npm install

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
CMD ["npm", "start"]
