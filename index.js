const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const Charity =require('./db/models')

app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

//show list with all charities
app.get("/", (req, res) => {
  Charity.find()
    .then(charities => {
      res.json(charities);
    })
    .catch(err => {
      console.log(err);
    });
});

//create a new charity
app.post("/giving/newcharity", (req, res) => {
  Charity.create(req.body)
    .then(charities => {
      res.json(charities);
    })
    .catch(err => {
      console.log(err);
    });
});

//show details of single charity
app.get("/giving/:id", (req, res) => {
  Charity.findById(req.params.id)
    .then(charity => {
      res.json(charity);
    })
    .catch(err => {
      console.log(err);
    });
});



//update charity
app.put('/charity/:id', (req, res) => {
  console.log(req.body)
 Charity.findByIdAndUpdate(req.params.id, req.body)
 .then(charity => {
   charity.save()
   res.json(charity)
 })
 .catch(err => {
   console.log(err)
 })
});

//delete charity
app.delete("/charity/:id", (req, res) => {
  Charity.findOneAndRemove({ _id: req.params.id })
    .then(charity => {
      res.json(charity);
    })
    .catch(err => {
      console.log(err);
    });
 });

//user logout

