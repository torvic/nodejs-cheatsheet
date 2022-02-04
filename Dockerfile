FROM node:14

# create app directory
WORKDIR /usr/src/app

# install app dependencies 
COPY package*.json ./
RUN npm install

# bundle app source
COPY . .

# expose port 
EXPOSE 4000

# run the app
CMD ["npm","run","dev"]