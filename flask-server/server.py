from flask import Flask

app = Flask(__name__)

# Member API route
@app.route("/questions")
def questions():
  return {
    "Q_3_1": {
      "enunciado": "Si hoy fuera la elecci\u00f3n para elegir diputados federales, \u00bfpor cu\u00e1l partido votar\u00eda usted? ",
      "respuestas": {
        "1": "Partido Acci\u00f3n Nacional (PAN)",
        "2": "Partido Revolucionario Institucional (PRI)",
        "3": "Partido de la Revoluci\u00f3n Democr\u00e1tica (PRD)",
        "4": "Partido del Trabajo (PT)",
        "5": "Partido Verde Ecologista de M\u00e9xico (PVEM)",
        "6": "Movimiento Ciudadano (MC)",
        "7": "Morena",
        "8": "Candidato Independiente",
        "9": "Anular\u00eda",
        "10": "Ninguno",
        "11": "Prefiero no contestar"
      }
    },
    "Q_3_11": {
      "enunciado": "\u00bfUsted dir\u00eda que es una persona que se interesa mucho, algo, poco o nada en la pol\u00edtica?",
      "respuestas": {
        "1": "Mucho",
        "2": "Algo",
        "3": "Poco",
        "4": "Nada",
        "5": "Ns/Nc (esp)"
      }
    },
  }

if __name__ == "__main__":
    app.run(debug = True)