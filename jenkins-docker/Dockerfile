FROM ubuntu
RUN apt update && apt upgrade -y
RUN apt-get install -y gnupg1 gnupg2 wget default-jre docker.io systemd
RUN apt-get install --fix-missing
RUN wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | apt-key add -
RUN sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
RUN apt-get update
RUN apt-get install -y jenkins
RUN docker