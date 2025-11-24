# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /saviti_saviti_final_site

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build /saviti_saviti_final_site/build /usr/share/nginx/html

# Expose the same port as in nginx.conf
EXPOSE 5575

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
