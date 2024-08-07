FROM tomcat:10-jdk21@sha256:3c87192b2e3627fe0c81718107062b6f3448aebb132d4006c18b4b2a54410156

RUN mkdir -p /usr/local/tomcat/webapps/angular-test-app

# COPY ./angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app
COPY ./dist/apps/angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app


# need to add valve for rewrite
COPY ./tomcat/server.xml /usr/local/tomcat/conf/server.xml

# need to add rewrite.config
COPY ./tomcat/rewrite.config /usr/local/tomcat/conf/Catalina/localhost/rewrite.config

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
