FROM node:10.4.1-alpine

LABEL MAINTAINER "Gonzalo Plaza <gonzalo@verize.com>"

# Environment vars
ARG NODE_ENV=production
ARG PORT=3000

ENV NODE_CONFIG_STRICT_MODE=1
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT
ENV VUE_APP_NAME=Apsteroid!
ENV VUE_APP_VERSION=1.1.0-beta
ENV VUE_APP_NASA_API_ENDPOINT=https://api.nasa.gov/neo/rest/v1/feed
ENV VUE_APP_NASA_API_KEY=DEMO_KEY

# Clear cache
RUN rm -rf /var/cache/apk/* && rm -rf /tmp/* 

RUN mkdir -p /app
COPY package.json /app/
COPY yarn.lock /app/
WORKDIR /app

# Install production dependencies
RUN yarn install --production=true && yarn global add pm2

# Clear Yarn Cache and remove node_modules
RUN yarn cache clean

#Copy rest of application
COPY . /app

# Expose ports
EXPOSE $PORT

# Start pm2.json process file
CMD ["pm2-runtime", "start", "/app/server/pm2.json", "--env", "production"]