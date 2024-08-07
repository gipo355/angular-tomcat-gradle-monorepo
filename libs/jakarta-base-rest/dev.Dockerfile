FROM tomcat:10-jdk21@sha256:3c87192b2e3627fe0c81718107062b6f3448aebb132d4006c18b4b2a54410156
COPY build/libs/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
