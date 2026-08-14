FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 4321

CMD ["npx", "astro", "dev", "--host", "0.0.0.0", "--port", "4321"]
