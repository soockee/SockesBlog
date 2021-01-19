FROM node:12.16.1 as builder

COPY gatsby/package*.json /
RUN npm install

COPY gatsby /home/blog
WORKDIR /home/blog

ENV PATH=/node_modules/.bin:$PATH
RUN gatsby build

FROM nginx:latest

# noop for legacy migration
RUN mkdir /app && \
    echo "#!/bin/bash" > /app/migrate.sh && \
    chmod +x /app/migrate.sh && \
    chmod 775 /usr/share/nginx/html/ 

COPY --from=builder /home/blog/public /home/blog/public    

# Syslink for serving gatsby site by nginx
#RUN rm /usr/share/nginx/html/index.html
#RUN mv /home/blog/public/* /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
