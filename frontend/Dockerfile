# Dockerfile for React client

# Build react client
FROM node:14-alpine

# Working directory be app
WORKDIR /app

COPY ./my-project/package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY ./my-project/ .

EXPOSE 5137

CMD ["npm","run", 'dev']