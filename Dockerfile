FROM triptease/base-node-pm2:nodejs-6.2
MAINTAINER PhilWhiteUK (pjd.white@gmail.com)

# define entrypoint and port
CMD ["index.js"]
EXPOSE 80

# setup application
ADD . /usr/src/app
