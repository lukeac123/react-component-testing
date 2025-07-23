import { type HTMLAttributes, useState } from "react";
import { clsx } from "clsx";
import "./App.css";

export default function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const onLikeButtonClick = () => {
    setLikes(likes + 1);
    dislikes <= 0 ? setDislikes(0) : setDislikes(dislikes - 1);
    if (liked === false) {
      setLiked(true);
      setDisliked(false);
    }
  };

  const onDislikeButtonClick = () => {
    setDislikes(dislikes + 1);
    likes <= 0 ? setLikes(0) : setLikes(likes - 1);
    if (disliked === false) {
      setDisliked(true);
      setLiked(false);
    }
  };

  return (
    <div className="App">
      <LikeButton
        buttonText={"Likes"}
        click={likes}
        clickHandler={onLikeButtonClick}
        clicked={liked}
      />
      <DislikeButton
        buttonText={"Dislikes"}
        click={dislikes}
        clickHandler={onDislikeButtonClick}
        clicked={disliked}
      />
    </div>
  );
}

interface ButtonTypes extends HTMLAttributes<HTMLDivElement> {
  buttonText: string;
  click: number;
  clickHandler: () => void;
  clicked: boolean;
}

function LikeButton({ buttonText, click, clickHandler, clicked }: ButtonTypes) {
  const handleClick = () => {
    clickHandler();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx("button", { ["liked"]: clicked })}
    >
      {buttonText} {click}
    </button>
  );
}

function DislikeButton({
  buttonText,
  click,
  clickHandler,
  clicked,
}: ButtonTypes) {
  const handleClick = () => {
    clickHandler();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx("button", { ["disliked"]: clicked })}
    >
      {buttonText} {click}
    </button>
  );
}
