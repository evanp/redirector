FROM node:9-alpine

WORKDIR /opt/redirector
COPY . /opt/redirector

RUN npm install

EXPOSE 80
EXPOSE 443
CMD ["npm", "start"]
