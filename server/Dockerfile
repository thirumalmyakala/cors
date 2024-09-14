FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
COPY cors-proxy-server.js .
EXPOSE 8082
CMD ["npm", "start"]
