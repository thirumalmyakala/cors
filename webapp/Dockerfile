FROM node:18
LABEL Thirumal thirumal@gmail.com
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g http-server
EXPOSE 8080
RUN chmod +x /app/replace-proxy-url.sh
CMD ["sh", "-c", "/app/replace-proxy-url.sh && http-server dist -p 8080"]
 

