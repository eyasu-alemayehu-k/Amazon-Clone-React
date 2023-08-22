const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NcVfcAQWGsjubv7DloKGY0bW7RrNWrAr3cilP4KqPbGKaizFO4P1gu1inWVuZiSrqvCh0LMhaQrBzLMqgcUhW5r00qgLwSKhm"
);

const app = express();

app.use(cors({ origni: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // console.log("Payment Request Received!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// To start command = firebase emulators:start
// Command to deploy the backend = firebase deploy --only functions
// Command to deploy the frontend = firebase deploy --only hosting

// http://127.0.0.1:5001/clone-695d6/us-central1/api
