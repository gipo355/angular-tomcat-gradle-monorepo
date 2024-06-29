FROM tomcat:10-jdk21@sha256:7da39e08ce940943ee3fdf59e580fcfeb7ede1d77a341b80189fccdedc512bd4

# COPY ./wars/* /usr/local/tomcat/webapps
COPY dist/libs/jakarta-base-rest/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
