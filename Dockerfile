FROM mhart/alpine-node:5.5

WORKDIR /opt/redirector
ADD . .

RUN npm install

EXPOSE 80
EXPOSE 443
CMD ["npm", "start"]
