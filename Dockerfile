FROM node:18-alpine AS build

# Create working directory
WORKDIR /saviti_saviti_final_site

# Copy package.json and lock files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining source code
COPY . .

# Build production build
RUN npm run build

FROM nginx:alpine

# Copy build output to Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
