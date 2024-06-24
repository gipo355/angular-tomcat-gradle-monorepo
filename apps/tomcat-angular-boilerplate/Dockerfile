FROM tomcat:9-jdk21@sha256:89f53b8cc6e34622b9c486b6bf366f06703aae873d0ca08f00f53fc7fd407f71

RUN mkdir -p /usr/local/tomcat/webapps/angular-test-app

# COPY ./angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app
COPY ./dist/apps/angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app


# need to add valve for rewrite
COPY ./tomcat/server.xml /usr/local/tomcat/conf/server.xml

# need to add rewrite.config
COPY ./tomcat/rewrite.config /usr/local/tomcat/conf/Catalina/localhost/rewrite.config

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
