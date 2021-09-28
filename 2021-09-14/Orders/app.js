const express=require('express');
require('./dbOrd/mongooseOrd');
const orderRoutes=require('./routes/orderRoutes');
const serviceRoutes=require('./routes/serviceRoutes');

const app=express();

app.use(express.json())
app.use(orderRoutes);
app.use(serviceRoutes);

app.listen(3030);