# Bitcoin Tracker Project

This project allows you to track Bitcoin prices over different periods and visualize the data.

## Requirements

- Docker
- Docker Compose

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Elzada-Kasymova/bitcoin-tracker.git
   cd bitcoin-tracker
   ```

2. **Create the `.env` file**:

   In the root of the project directory, create a `.env` file with the following parameters:

   ```env
   COINGECKO_API=https://api.coingecko.com/api/v3
   PORT=3001
   MONGODB_URI=<your-mongodb-connection-string>
   ```

   Make sure to replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

3. **Build and start the Docker containers**:

   You can now build and start the containers with the following command:

   ```bash
   docker-compose up --build
   ```

   This will:
   - Build the Docker images.
   - Start the containers for the backend and frontend.

4. **Access the application**:

   - Backend: `http://localhost:3001`
   - Frontend: `http://localhost:3000`

   The frontend will automatically communicate with the backend at `http://localhost:3001/api`.

## Stopping the Containers

To stop the containers, run:

```bash
docker-compose down
```

## Additional Notes

- The backend is powered by Node.js (Express).
- The frontend is built with Nuxt.js.
- Make sure you have Docker and Docker Compose installed on your machine.
