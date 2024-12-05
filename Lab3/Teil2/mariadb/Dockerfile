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

# Copy custom my.cnf to the appropriate directory
COPY my.cnf /etc/mysql/my.cnf

# Add SQL initialization script
COPY init.sql /tmp/init.sql

# Expose MariaDB port
EXPOSE 3306

# Initialize MariaDB and execute custom SQL commands
RUN mysqld_safe --skip-networking & \
    sleep 5 && \
    mysql --protocol=socket -uroot -e "source /tmp/init.sql;" && \
    killall mysqld_safe

USER mysql

# Use entrypoint script to configure MariaDB (run mysqld with initial setup)
CMD ["mysqld"]
