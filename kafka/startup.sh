#!/usr/bin/env bash
function finish() {
        rm -rf kafka_2.12-2.3.0 & 
        rm -rf /tmp/kafka-logs
        rm zookeeper.log & 
        rm kafka.log
}

trap finish EXIT

tar -xzf kafka_2.12-2.3.0.tgz
(nohup kafka_2.12-2.3.0/bin/zookeeper-server-start.sh kafka_2.12-2.3.0/config/zookeeper.properties>zookeeper.log &) &&
(nohup kafka_2.12-2.3.0/bin/kafka-server-start.sh kafka_2.12-2.3.0/config/server.properties>kafka.log &) &&
tail -f kafka.log




