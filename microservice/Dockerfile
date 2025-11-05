FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM builder AS test
RUN npm test

FROM node:24-alpine AS run
WORKDIR /app
COPY --from=builder /app ./
CMD ["node", "index.js"]

