FROM nsqio/nsq

COPY startup.sh startup.sh

EXPOSE 4151
EXPOSE 4150
EXPOSE 4160
EXPOSE 4161
EXPOSE 4171

CMD ["chmod", "+x", "./startup.sh"]
ENTRYPOINT [ "./startup.sh" ]
