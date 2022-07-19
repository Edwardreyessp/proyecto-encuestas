const { Router } = require("express");
const router = new Router();
// const _ = require("underscore");

const questions = require("../sample.json");

router.get("/questions", (req, res) => {
  res.json(questions);
});

const question = {
  Q_3_1: {
    enunciado:
      "Si hoy fuera la elecci\u00f3n para elegir diputados federales, \u00bfpor cu\u00e1l partido votar\u00eda usted? ",
    respuestas: {
      1: "Partido Acci\u00f3n Nacional (PAN)",
      2: "Partido Revolucionario Institucional (PRI)",
      3: "Partido de la Revoluci\u00f3n Democr\u00e1tica (PRD)",
      4: "Partido del Trabajo (PT)",
      5: "Partido Verde Ecologista de M\u00e9xico (PVEM)",
      6: "Movimiento Ciudadano (MC)",
      7: "Morena",
      8: "Candidato Independiente",
      9: "Anular\u00eda",
      10: "Ninguno",
      11: "Prefiero no contestar",
    },
  },
};

router.post("/questions", (req, res) => {
  const { Q_3_1, enunciado, respuestas } = req.body;
  const newQuestion = { ...req.body };
  console.log(newQuestion);
  if (Q_3_1 && enunciado && respuestas) {
    // questions.push(newMovie);
    // res.json(questions);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
  res.send("received");
});

/* router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (id && title && director && year && rating) {
    _.each(questions, (movie, i) => {
      if (movie.id === id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(questions);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
}); */

/* router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    _.each(questions, (movie, i) => {
      if (movie.id == id) {
        questions.splice(i, 1);
      }
    });
    res.json(questions);
  }
}); */

module.exports = router;
