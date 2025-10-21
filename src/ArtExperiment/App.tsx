import "./App.css";

export const App = () => {
  const squares = new Array(9).fill("");
  console.log(squares);
  return (
    <div className="app">
      <div className="box">
        {squares.map((square) => {
          return <div className="square" />;
        })}
      </div>
    </div>
  );
};
