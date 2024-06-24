FROM tomcat:9-jdk21@sha256:701bdd15e1cf25451056932397b582681e5c2afbd5a4bd540835b47e0a31a4c3

RUN mkdir -p /usr/local/tomcat/webapps/angular-test-app

COPY ./angular-test-app/browser/* /usr/local/tomcat/webapps/angular-test-app

# RUN rm -rf /usr/local/tomcat/webapps/angular-test-app/Dockerfile

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
