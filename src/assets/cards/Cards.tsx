import AlbumCard from "./Album-card";
import MicroCard from "./Micro-card";
import MoreCard from "./More-card";


export const Cards = () => {
    return (
      <div className="d-flex">
        <MicroCard />
        <AlbumCard />
        <MoreCard />
      </div>
    );
  };
  

  export default Cards