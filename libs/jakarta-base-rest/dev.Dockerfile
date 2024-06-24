FROM tomcat:9-jdk21@sha256:89f53b8cc6e34622b9c486b6bf366f06703aae873d0ca08f00f53fc7fd407f71
COPY build/libs/* /usr/local/tomcat/webapps

# RUN adduser tomcat

# RUN chown -R tomcat:tomcat  /usr/local/tomcat/webapps

# USER tomcat

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
