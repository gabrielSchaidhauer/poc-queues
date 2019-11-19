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
$ npm run dev
```

Call a POST to ```http://localhost:3000/nsq``` with the payload:

```JSON
{
	"message": ""
}
```

then you should read your message on the server logs.

Have a nice day! :)