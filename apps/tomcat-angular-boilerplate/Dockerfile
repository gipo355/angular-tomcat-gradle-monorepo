FROM tomcat:9-jdk21@sha256:8c247ee5bf39eaefcd6c457d468b04f11773e10a2bb0eb47281da9d91f0e4b44

RUN mkdir -p /usr/local/tomcat/webapps/angular-test-app

# COPY ./angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app
COPY ./dist/apps/angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app


# need to add valve for rewrite
COPY ./tomcat/server.xml /usr/local/tomcat/conf/server.xml

# need to add rewrite.config
COPY ./tomcat/rewrite.config /usr/local/tomcat/conf/Catalina/localhost/rewrite.config

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
