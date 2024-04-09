FROM node:21-alpine3.18

# set working directory
WORKDIR /llc-site

#add /app/node_modules/.bin to $PATH
ENV PATH ${WORKDIR}/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
#RUN npm run dev

ADD app app/
RUN npm run build

# start app
CMD ["npm", "run", "start"]
