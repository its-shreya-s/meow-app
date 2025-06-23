# Use Node.js base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source and public assets
COPY ./src ./src
COPY ./public ./public

# Expose dev port
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm", "run", "dev"]