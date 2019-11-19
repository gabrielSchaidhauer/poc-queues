FROM openjdk:8

COPY startup.sh startup.sh
COPY kafka_2.12-2.3.0.tgz kafka.tgz

RUN tar -xvzf kafka.tgz

CMD ["chmod", "+x", "./startup.sh"]

EXPOSE 9092
EXPOSE 9093
EXPOSE 9094

ENTRYPOINT [ "./startup.sh" ]