import { useState } from "react";
import { SketchPicker } from "react-color";

const Answers = ({ answer }) => {
  const [showColor, setShowColor] = useState(false);
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "255",
    g: "255",
    b: "255",
    a: "1",
  });
  const { r, g, b, a } = sketchPickerColor;

  const ClickColor = () => {
    setShowColor(!showColor);
  };

  return (
    <section className="Individual-answer">
      <section>
        <div
          className="Color-answer"
          onClick={ClickColor}
          style={{ background: `rgba(${r},${g},${b},${a})` }}
        ></div>
        {showColor ? (
          <div className="Color-picker">
            <SketchPicker
              onChange={(color) => {
                setSketchPickerColor(color.rgb);
              }}
              color={sketchPickerColor}
            />
            <p className="Button-color" onClick={ClickColor}>
              Aceptar
            </p>
          </div>
        ) : (
          ""
        )}
        <p>{answer}</p>
      </section>
      <span class="material-symbols-outlined">edit</span>
    </section>
  );
};

export default Answers;
