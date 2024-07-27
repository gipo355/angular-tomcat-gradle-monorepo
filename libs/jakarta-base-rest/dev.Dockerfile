FROM tomcat:9-jdk21@sha256:8c247ee5bf39eaefcd6c457d468b04f11773e10a2bb0eb47281da9d91f0e4b44
COPY build/libs/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
