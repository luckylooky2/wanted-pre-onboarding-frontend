FROM node:16
WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["bash", "setup.sh"]
