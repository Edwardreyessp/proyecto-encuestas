const Card = ({ enunciado, respuestas }) => {
  return (
    <main className="Card">
      <div className="Statement">{enunciado}</div>
      <section className="Answers">
        {respuestas.map((answer, i) => (
          <section className="Individual-answer">
            <section>
              <div className="Color-answer"></div>
              <p key={i}>{answer}</p>
            </section>
            <span class="material-symbols-outlined">edit</span>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Card;
