FROM tomcat:9-jdk21@sha256:2379f337c97e4604b996d65a072737d7cb55ddef4a264c24be5539a0f499ac8a

# COPY ./wars/* /usr/local/tomcat/webapps
COPY dist/libs/jakarta-base-rest/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
