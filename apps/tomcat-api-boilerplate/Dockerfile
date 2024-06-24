FROM tomcat:9-jdk21@sha256:701bdd15e1cf25451056932397b582681e5c2afbd5a4bd540835b47e0a31a4c3

# COPY ./wars/* /usr/local/tomcat/webapps
COPY dist/libs/jakarta-base-rest/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
