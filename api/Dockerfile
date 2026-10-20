FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate --config prisma7.config.ts
EXPOSE 3000
CMD ["node", "--watch", "app.ts"]