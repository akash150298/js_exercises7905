# NodeBalancer

NodeBalancer is a high-performance Node.js web server application designed to handle high traffic efficiently. It leverages process forking and NGINX as a load balancer to distribute incoming requests across multiple child processes, ensuring optimal use of CPU resources and high availability.

## Features

- **Process Forking**: Utilizes Node.js `fork()` to create multiple child processes.
- **Load Balancing**: Uses NGINX to distribute traffic among child processes.
- **High Availability**: Ensures the application remains responsive under high load.

## Prerequisites

- Node.js (v14 or later)
- NGINX
- A machine with multiple CPU cores

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/NodeBalancer.git
    cd NodeBalancer
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up NGINX**:
    - Edit your NGINX configuration file (e.g., `/etc/nginx/nginx.conf`) to include the following:
    ```nginx
    http {
        upstream nodebalancer {
            server localhost:8000;
            server localhost:8001;
            server localhost:8002;
            server localhost:8003;
        }

        server {
            listen 80;

            location / {
                proxy_pass http://nodebalancer;
            }
        }
    }
    ```

4. **Restart NGINX**:
    ```bash
    sudo systemctl restart nginx
    ```

## Usage

1. **Start the main application**:
    ```bash
    node main.js
    ```

2. **Access the application**:
    - Open your web browser and navigate to `http://localhost`.

## Project Structure

- `main.js`: The main application file that forks child processes.
- `worker.js`: The child process file that handles HTTP requests.
- `README.md`: This file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Acknowledgements

- Node.js
- NGINX

## Contact

For any questions or suggestions, please open an issue or contact Akash.

