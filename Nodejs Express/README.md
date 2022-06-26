code to deploy on heroku =>

1st step write -> 
// const PORT = process.env.PORT || 8080 
// app.listen(PORT, ()=>{ 
// console.log("server started on localhost:8080") 
// })

// 2nd step -> 
// create Procfile and write inside that file -> web: node index.js 
// 3rd create -> "gitignore" file insidethat write -> node_modules/

// 4th -> 
// npm i -g heroku 
// heroku login 
// heroku git:clone -a app name 
// cd rahulsingh-backend-app 
// git add . 
// git commit -am "make it better" 
// git push heroku master

