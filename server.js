const express = require("express");

const app = express();

const db = require("./models");

const PORT = 5000;

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/customers", (req, res) => {
  db.Burger.findAll({}).then(results => {
    const burgers = results;
    res.json(burgers);
  });
});

app.post("/api/burgers", function(req, res) {
  console.log(
    `from inside the server, here's the incoming data req.body: `,
    req.body
  );
  db.Burger.create({
    burger_name: req.body.name,
    devoured: req.body.devoured
  }).then(results => res.json({ id: results.insertId }));
});

app.put("/api/burgers/:id", function(req, res) {
  console.log(`here's the req.body inside the router.put method: `, req.body);

  db.Burger.update(
    {
      devoured: req.body.devoured
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(results => {
    if (results.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

app.delete("/api/burgers/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(results => {
    if (results.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
});
