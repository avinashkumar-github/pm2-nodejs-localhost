# pm2-nodejs-localhost
Implement PM2 with nodejs app in localhost :  <a href="https://motionknowledge.blogspot.com/2021/07/setup-pm2-for-nodejs-app-in-localhost.html" target="_blank"> Blog reference</a>

#### app.js have a sample node js code , which creates a server on port 80 in localhost and render the content.
```
const http = require("http");

const server = http.createServer((req, res) => {
  const payload = JSON.stringify({
    app: "Node js App with PM2",
    "process manager": "pm2",
    "process Id": process.pid
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(payload);
});
server.listen(80);
```

### pm2
#### pm2 is a process manager, which manages the running process in nodejs application. pm2 is provides load balancing, zero downtime, and auto scalling of cluster based on the size of the processor. pm2 provides rich interface to monitor the status of process & logs of the process.
```
To install the pm2 package globally
npm install pm2 -g
```

```
To start a process 
pm2 start app.js // by default a single instance of process gets created 
pm2 start app.js -i 2 // here we can specify the number of instances, that we need to create for the node js app to run
pm2 start app.js -i -1  // specify -1, creates n number of instances, that a CPU processor are capable of. 
```
<img width="766" alt="1" src="https://user-images.githubusercontent.com/59990479/124494116-13355680-ddd4-11eb-983f-8af4209567da.png">




```
To list the instances of node app
pm2 list
```
<img width="739" alt="2" src="https://user-images.githubusercontent.com/59990479/124494623-b5553e80-ddd4-11eb-8d5d-f5f6b1956b64.png">

<img width="739" alt="3" src="https://user-images.githubusercontent.com/59990479/124494658-bb4b1f80-ddd4-11eb-9e70-78426b20ac84.png">



```
To stop the running instance
pm2 stop app.js
```
<img width="744" alt="4" src="https://user-images.githubusercontent.com/59990479/124494739-c4d48780-ddd4-11eb-9ed6-7bf832b9e253.png">



```
To delete the instance
pm2 delete app.js
```
<img width="753" alt="5" src="https://user-images.githubusercontent.com/59990479/124494748-c9993b80-ddd4-11eb-9827-88d443544ede.png">



#### Using pm2 also can do auto scalling and balancing the load distribution among multiple instances.
##### To check load test, can install another npm package loadtest
```
npm install loadtest -g
```

```
Simulate 30000 traffic to specific node js app
loadtest -n 30000 http://localhost
```
<img width="750" alt="6" src="https://user-images.githubusercontent.com/59990479/124497472-850f9f00-ddd8-11eb-93ea-0e03d591c15b.png">

<img width="738" alt="7" src="https://user-images.githubusercontent.com/59990479/124497486-8771f900-ddd8-11eb-8c64-7ae44aa6c414.png">



```
Monitor the pm2 process
pm2 monit
```
<img width="804" alt="8" src="https://user-images.githubusercontent.com/59990479/124497504-8d67da00-ddd8-11eb-95b3-7897fd089316.png">




