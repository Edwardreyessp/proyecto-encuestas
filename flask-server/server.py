from flask import Flask

app = Flask(__name__)

# Member API route
@app.route("/questions")
def questions():
  return {
    "questions": [
      {
        "id": "Q_3_1",
        "enunciado": "enunciado",
        "respuestas": ["a", "b", "c"]
      },
      {
        "id": "Q_3_11",
        "enunciado": "enunciado2",
        "respuestas": ["a2", "b2", "c2"]
      }
    ]
  }

if __name__ == "__main__":
    app.run(debug = True)