FROM tomcat:10-jdk21@sha256:9a09e6b3a2f978be30bbfb98aee0d377e1d83c4ed7b666f970dd6d937e7dfd09

RUN mkdir -p /usr/local/tomcat/webapps/angular-test-app

# COPY ./angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app
COPY ./dist/apps/angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app


# need to add valve for rewrite
COPY ./tomcat/server.xml /usr/local/tomcat/conf/server.xml

# need to add rewrite.config
COPY ./tomcat/rewrite.config /usr/local/tomcat/conf/Catalina/localhost/rewrite.config

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
