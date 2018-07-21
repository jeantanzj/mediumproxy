# A proxy to retrieve medium posts

Since Medium doesn't allow cross origin requests to its `@username?format=json` api, 
we can workaround it using a lambda function.

First, install the simple-get package - `npm install`

Zip up this folder, upload it to AWS Lambda.

Configure the API gateway to allow GET, and enable CORS.

