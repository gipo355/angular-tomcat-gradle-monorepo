FROM tomcat:9-jdk21@sha256:2379f337c97e4604b996d65a072737d7cb55ddef4a264c24be5539a0f499ac8a

RUN mkdir -p /usr/local/tomcat/webapps/angular-test-app

# COPY ./angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app
COPY ./dist/apps/angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app


# need to add valve for rewrite
COPY ./tomcat/server.xml /usr/local/tomcat/conf/server.xml

# need to add rewrite.config
COPY ./tomcat/rewrite.config /usr/local/tomcat/conf/Catalina/localhost/rewrite.config

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
