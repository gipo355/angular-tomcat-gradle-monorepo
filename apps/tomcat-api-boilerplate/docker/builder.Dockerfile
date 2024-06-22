# OLD DOCKERFILE
# keeping it for reference
# this was meant to be used for development purposes

# FROM eclipse-temurin:21 as BUILD_IMAGE
FROM eclipse-temurin:21@sha256:2dbc9d6e45e878ef98d0d918e8d591ddfc3ae1a73a27d76d743affc93a2c13d1
# FROM tomcat:9-jdk21-temurin-jammy

# TODO: must provide gradle otherwise it downloads every restart??

# VULN: should probably not run as root

# initialize defaults for overriding through --env

# example
# ENV INFISICAL_TOKEN=''

# ENV PORT=8080

# create a user to run the app to prevent filesystem access conflicts

RUN addgroup --system tomcat-api-boilerplate && \
    adduser --system -G tomcat-api-boilerplate tomcat-api-boilerplate

RUN mkdir -p /home/tomcat-api-boilerplate

COPY . /home/tomcat-api-boilerplate
RUN chown -R tomcat-api-boilerplate:tomcat-api-boilerplate /home/tomcat-api-boilerplate


WORKDIR /home/tomcat-api-boilerplate

USER tomcat-api-boilerplate

# RUN ./gradlew war

# $CATALINA_HOME is at /usr/local/tomcat

# EXPOSE ${PORT}

# no cmd, we provide this in the compose.yml file
CMD ["./gradlew", "war"]
