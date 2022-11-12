FROM node:16.14.2 AS builder
WORKDIR /app
COPY . .
WORKDIR /app
RUN yarn install && yarn releases

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]