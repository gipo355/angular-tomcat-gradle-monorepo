FROM tomcat:10-jdk21@sha256:9a09e6b3a2f978be30bbfb98aee0d377e1d83c4ed7b666f970dd6d937e7dfd09

# COPY ./wars/* /usr/local/tomcat/webapps
COPY dist/libs/jakarta-base-rest/* /usr/local/tomcat/webapps

EXPOSE ${PORT}

CMD ["catalina.sh", "run"]
