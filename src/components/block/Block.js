import "./Block.css";

const Block = ({ r, c, size = 50, unit = "px", children }) => {
  return (
    <div
      className="Block"
      style={{
        width: size + unit,
        height: size + unit,
        top: size * r + unit,
        left: size * c + unit,
      }}
    >
      {children}
    </div>
  );
};

export default Block;
