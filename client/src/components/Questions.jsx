import React, { useState, useEffect } from "react";
import Card from "./Card";

const Questions = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/questions")
      .then((res) => res.json())
      .then((data) => {
        setData(data.questions);
      });
  }, []);

  return (
    <main className="Questions">
      <section className="Cards">
        {typeof data === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.map((question, i) => {
            return (
              <section key={i}>
                <Card
                  enunciado={question.enunciado}
                  respuestas={question.respuestas}
                />
              </section>
            );
          })
        )}
      </section>
      <section>
        <section className="Graphics">
          <h1>GRÁFICAS</h1>
          <section className="nameGraphic">
            <div className="Name">
              <p>Gráfico de barras</p>
              <p>Gráfico de histograma</p>
              <p>Gráfico de barras</p>
            </div>
            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </section>
        </section>
        <button>Crear gráficas</button>
      </section>
    </main>
  );
};

export default Questions;
