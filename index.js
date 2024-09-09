/* simple backend express http server, adding dockerFile to containerize it in node.js 
    and then deploy it on kubernetes cluster using Minikube.
 */
const express = require('express');  
const port = 443;  
const app = express(); 


// Define a route for the root URL
app.get('/', function(req, res){
    res.send('Hello World!')     

})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});