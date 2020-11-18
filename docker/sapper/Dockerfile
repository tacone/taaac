FROM node:12-alpine

# copy the deps files, download and cache dependencies
COPY ./sapper/package.json ./sapper/yarn.lock /deps/

WORKDIR /deps

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN echo 'NODE_ENV set to '${NODE_ENV}''

ARG DEPS_INSTALL
RUN echo ${DEPS_INSTALL} && ${DEPS_INSTALL} && yarn add build # see: https://github.com/sveltejs/sapper/issues/1108

# copy the application code
COPY ./sapper /app

# copy deps files back into the source tree
RUN mv -f package.json /app && mv -f yarn.lock /app && cp -rp node_modules /app/ \
    && rm node_modules -rf &&rmdir /deps

WORKDIR /app

# build the app
RUN [ "$NODE_ENV" = 'production' ] && yarn run build || echo 'Skipping build'
