# Use the official Node.js 14 image as the base image
FROM node:16.19.1

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm i

# Copy the application code to the container
COPY . .

# Expose the port on which your application listens
EXPOSE 3333

# Start the application
CMD ["npm", "start"]
