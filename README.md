# Poc Ques
It represents 3 POC on queue applications:

* NSQ
* Kafka
* ZeroMQ

## NSQ
To run this poc with nsq first the nsq image should be build:

```
$ cd nsq && docker build -t [image-name] .
```

After that if it succeeds the image must be run.

```
$ docker run -t -d -p 4151:4151 -p 4150:4150 -p 4160:4160 -p 4161:4161 -p 4171:4171 [image-name]
```

Install dependencies:

```
$ npm install
```

And then you can run the development server:

```
$ npm run dev -- --nsq
```

Call a POST to ```http://localhost:3000/nsq``` with the payload:

```JSON
{
	"message": ""
}
```

then you should read your message on the server logs.

## KAFKA

This POC doesn`t run inside docker, I was not able to run it on docker however I created a script that should handle it all. Follow these steps and everything should work

Run the Kafka script

```
$ npm run kafka
```

Then create the topic (it may tell it already exists, just ignore)

```
$ npm run create-topic
```

then run the applicaiton

```
$ npm run dev -- --kafka
```

At last call a POST to ```http://localhost:3000/kafka``` with the payload:

```JSON
{
	"message": ""
}
```

then you should read your message on the server logs.

## ZeroMQ

Run install

```
$ npm install
```

then run the applicaiton

```
$ npm run dev -- --zero
```

At last call a POST to ```http://localhost:3000/zero``` with the payload:

```JSON
{
	"message": ""
}
```

Have a nice day! :)