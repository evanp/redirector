FROM node:5-onbuild

WORKDIR /opt/redirector
ADD . .

RUN npm install
RUN npm install -g coffee-script
RUN cake build

EXPOSE 80
EXPOSE 443
CMD ["npm", "start"]
