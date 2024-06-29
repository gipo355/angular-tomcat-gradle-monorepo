FROM tomcat:10-jdk21@sha256:7da39e08ce940943ee3fdf59e580fcfeb7ede1d77a341b80189fccdedc512bd4
COPY build/libs/* /usr/local/tomcat/webapps

# RUN adduser tomcat

# RUN chown -R tomcat:tomcat  /usr/local/tomcat/webapps

# USER tomcat

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
