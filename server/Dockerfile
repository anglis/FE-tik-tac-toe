FROM node:14-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i

CMD ["sh", "./start.sh"]
