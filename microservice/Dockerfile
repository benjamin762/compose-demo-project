FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM builder AS test
RUN npm test

FROM node:24-alpine AS run
WORKDIR /app
# COPY --from=builder /app ./
# Optimize by only installing prod dependevies?
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "index.js"]

