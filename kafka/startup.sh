#!/usr/bin/env bash
(nohup kafka_2.12-2.3.0/bin/zookeeper-server-start.sh kafka_2.12-2.3.0/config/zookeeper.properties>zookeeper.log &) &&
(nohup kafka_2.12-2.3.0/bin/kafka-server-start.sh kafka_2.12-2.3.0/config/server.properties>kafka.log &) &&
tail -f kafka.log



