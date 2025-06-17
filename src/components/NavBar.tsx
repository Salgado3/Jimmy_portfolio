import style from "./navBar.module.css";

export const NavBar = ({
  setView,
}: {
  setView: React.SetStateAction<string>;
}) => {
  const handleClick = (e) => {
    setView(e.target.value);
  };
  return (
    <div className={style.container}>
      <button onClick={(e) => handleClick(e)} value="about">
        About
      </button>
      <button onClick={(e) => handleClick(e)} value="portfolio">
        Portfolio
      </button>
      <button onClick={(e) => handleClick(e)} value="resume">
        Resume
      </button>
      <button onClick={(e) => handleClick(e)} value="photography">
        photography
      </button>
    </div>
  );
};
