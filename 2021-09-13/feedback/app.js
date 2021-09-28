const express=require('express');
require('./db/mongoose');
const bcrypt=require('bcrypt');
const feedbackRoutes=require('./routes/feedbackRoutes');
const userRoutes=require('./routes/userRoutes');

const app=express();

app.use(express.json())
app.use(feedbackRoutes);
app.use(userRoutes);

// bcrypt.hash("Labas", 10).then((code)=>{
//     console.log(code);
// });

// bcrypt.compare("Labas", "$2b$10$W8JiVz13ll4lrYqz1uKs5.cWb0UWy756IqTFCUnLakoKXDIW0ONVu").then((result)=>{
//     console.log(result);
// });


app.listen(3120);