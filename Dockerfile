FROM node:5-onbuild

WORKDIR /opt/redirector
ADD . .

RUN npm install

EXPOSE 80
EXPOSE 443
CMD ["npm", "start"]
