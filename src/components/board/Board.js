import { useEffect, useState } from "react";
import Block from "../block/Block";
import Arrow from "../arrow/Arrow";

const Board = () => {
  const [data, setData] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  return (
    <>
      {data.map((row, r) =>
        data.map((cel, c) => 
          cel === 0 ? <Block r={r} c={c} /> : <Arrow r={r} c={c} />
        )
      )}
    </>
  );
};

export default Board;
