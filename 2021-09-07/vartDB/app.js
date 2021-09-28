const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;

const connectionURL='mongodb://127.0.0.1:27017'; // DB vieta (serveris) 127.001

const dbName='varttotojai';     //DB pavadinimas

MongoClient.connect(connectionURL, (error, client)=>{
    if(error){
        return console.log("Nepavyksta prisijungti");
    }
    console.log("Sekmingai prisijungta prie DB");

    const db=client.db(dbName);     //jungiames prie db ( jei tokios nera, tada ja sukurs)

    /*  //vartotojo pridejimas i DB
    db.collection('vardai').insertOne({
        vardas:'Jonas',
        pavarde: 'Jonaitis',
        alga: 1200
    },(error, result)=>{
        if(error){
            return console.log('nepavyko');
        }
        console.log('viskas ok');
    });
    */

    //paimkime viena irasa kurio vardas Gediminas

    /*
    db.collection('vardai').findOne({
    //vardas:'Gediminas'
    _id: new ObjectId("6137a82465f3fe7af871a35e")   //id perkoduojamas su ObjectId
}, (error, users)=>{
    if(error) {return "klaida";
}
console.log(user);
});
*/

    db.collection('vardai').find({}).toArray((error, users)=>{
        if(error){
            return console.log("neina paimt irasu");
        }
        console.log(users);
    });

});








