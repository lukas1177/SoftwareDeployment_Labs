FROM debian:bookworm

# Install MariaDB and other necessary tools
RUN apt-get update && apt-get install -y \
    mariadb-server \
    mariadb-client \
    && rm -rf /var/lib/apt/lists/*

# Create required directories and set correct ownership
RUN mkdir -p /var/lib/mysql /run/mysqld && \
    chown -R mysql:mysql /var/lib/mysql /run/mysqld && \
    chmod -R 755 /var/lib/mysql /run/mysqld

# Switch to the mysql user for running MariaDB (but we'll run the server as root)
USER mysql

# Expose MariaDB port
EXPOSE 3306

# Copy the init script that will grant privileges
COPY init.sql /docker-entrypoint-initdb.d/

# Use entrypoint script to configure MariaDB (run mysqld with initial setup)
CMD ["mysqld"]
