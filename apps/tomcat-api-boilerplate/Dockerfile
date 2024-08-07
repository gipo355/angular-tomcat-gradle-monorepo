FROM tomcat:10-jdk21@sha256:3c87192b2e3627fe0c81718107062b6f3448aebb132d4006c18b4b2a54410156

# COPY ./wars/* /usr/local/tomcat/webapps
COPY dist/libs/jakarta-base-rest/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
