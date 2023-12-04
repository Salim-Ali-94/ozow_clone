const express = require("express");
const { FieldValue } = require("firebase-admin/firestore");


const app = express();
const port = 1234;
const { db } = require("./firebase.js");
app.use(express.json());

app.get("/", async (request, response) => {

    response.status(200).send({ message: "Lift off", id: "a0b1c2d3" });

});

app.post("/storeUser", async (request, response) => {

    const user = request.body;
    const users = db.collection("users");
    await users.doc(user.id).set(user);

});

app.get("/user/:id", async (request, response) => {

    const { id } = request.params;
    const doc = db.collection("users").doc(id);
    const user = await doc.get();
    response.status(200).send(user.data());

});

app.patch("/updateBalance", async (request, response) => {

    const { id, balance } = request.body;
    const doc = db.collection("users").doc(id);
    await doc.update({ balance: balance });

});

app.patch("/registerTransaction", async (request, response) => {

    const { id, transaction } = request.body;
    const doc = db.collection("users").doc(id);
    await doc.update({ transactions: FieldValue.arrayUnion(transaction) });

});

app.patch("/registerStock", async (request, response) => {

    const { id, stock } = request.body;
    const doc = db.collection("users").doc(id);
    await doc.update({ portfolio: FieldValue.arrayUnion(stock) });

});

app.listen(port, () => console.log(`Server running on port: ${port}`))
