const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://jinxi:jinxi@cluster0.kwj59.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('item');

//     //read
//     const query = { name: 'Neapolitan pizza' };
//     const result = await collection.findOne(query);
//     console.log(result);

     // //insert
     // const pizzaDocument = {
     //      name: "Neapolitan pizza",
     //      shape: "round",
     //      toppings: [ "San Marzano tomatoes", "mozzarella di bufala cheese" ],
     // };
     // const result = await collection.insertOne(pizzaDocument);
     // console.log(result);

     // // delete
     // const doc = { name: "Neapolitan pizza" };
     // const result = await collection.deleteOne(doc);
     // console.log(result);

     // // update
     // const filter = { name: "Neapolitan pizza" };
     // const updateDocument = {  $set: { Description: "pizza with cheese" } };
     // const result = await collection.updateOne(filter, updateDocument);
     // console.log(result);
     
  } finally {
    await client.close();
  }
}
run().catch(console.dir);