#!/bin/sh
nsqlookupd &
nsqd --lookupd-tcp-address=127.0.0.1:4160 --broadcast-address=127.0.0.1 &
nsqadmin --lookupd-http-address=127.0.0.1:4161
