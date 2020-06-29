FROM nginx:latest

# noop for legacy migration
RUN mkdir /app && \
    echo "#!/bin/bash" > /app/migrate.sh && \
    chmod +x /app/migrate.sh

# npm and gatsby
RUN apt-get update && apt-get -y install npm && npm i -g gatsby-cli

# Syslink for serving gatsby site by nginx
RUN ls /home/
RUN mkdir -p /home/blog/public
RUN ln -s /home/blog/public /var/www/blog/html

COPY gatsby-v2-tutorial-starter /home/blog
WORKDIR /home/blog
RUN npm install
RUN gatsby build

COPY nginx.conf /etc/nginx/nginx.conf
COPY html /usr/share/nginx/html

EXPOSE 80
