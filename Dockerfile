# Step 1: Use an official Node.js runtime as base image
FROM node:18

# Step 2: Create app directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your application code
COPY . .

# Step 5: Expose the port your app runs on
EXPOSE 3000

# Step 6: Define command to run the app
CMD ["node", "index.js"]
