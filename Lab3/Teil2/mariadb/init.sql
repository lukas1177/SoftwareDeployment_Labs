-- Create the wordpress database if it doesn't exist
CREATE DATABASE IF NOT EXISTS wordpress;

-- Create the user and grant access from any host (%)
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'password';

-- Grant all privileges to the user on the wordpress database
GRANT ALL PRIVILEGES ON wordpress.* TO 'user'@'%' IDENTIFIED BY 'password';

-- Flush privileges to apply changes
FLUSH PRIVILEGES;
