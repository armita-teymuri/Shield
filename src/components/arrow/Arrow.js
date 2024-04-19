import "./Arrow.css";
import Block from "../block/Block";

const Arrow = ({r, c, size = 50, unit = "px", children }) => {
  return (
    <Block r={r} c={c} size={size} unit={unit} children={children}>
      <div className="Arrow"></div>
    </Block>
  );
};

export default Arrow;
