import React, { useState } from 'react';
import HogDetails from './HogDetails';

function HogTile({ hog }) {
   const [detailsState, setDetailsState] = useState(false);
   const [isVisible, setIsVisible] = useState(true);

   function handleTileClick() {
      setDetailsState(!detailsState)
   }

   function handleDisplay() {
      setIsVisible(!isVisible)
   }

   return (
      <div>
         <h1>{hog.name}</h1>
         <img onClick={handleTileClick}
            src={hog.image}
            alt="Hog"
            height="300"
         />
         {detailsState ? <HogDetails  hog={hog} /> : ""}
         <button onClick={handleDisplay}>{isVisible ? "Hide Hog" : "Show Hog"}</button>
         {isVisible ? <HogTile hog={hog}/> : ""}
      </div>
   );
};

export default HogTile;
