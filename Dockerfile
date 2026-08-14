FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine AS runtime

WORKDIR /app

COPY package.json package-lock.json ./
COPY astro.config.mjs ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist

EXPOSE 4321

CMD ["npx", "astro", "preview", "--host", "0.0.0.0", "--port", "4321"]
