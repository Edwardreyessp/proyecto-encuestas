import { useState } from "react";
import Answers from "./Answers";

const Card = ({ enunciado, respuestas }) => {
  /* const question = {
    enunciado: enunciado,
    respuestas: respuestas,
    color: "#fff",
  }; */

  const [statement, setStatement] = useState(false);

  const ClickStatement = () => {
    setStatement(!statement);
  };

  return (
    <main className="Card">
      <div
        className={statement ? "Statement" : "Statement-no-answers"}
        onClick={ClickStatement}
      >
        {enunciado}
      </div>
      <section className={statement ? "Answers" : "Hide-answers"}>
        {statement
          ? Object.values(respuestas).map((answer, index) => {
              return (
                <div key={index}>
                  <Answers answer={answer} />
                </div>
              );
            })
          : ""}
      </section>
    </main>
  );
};

export default Card;
