import React, { useState } from 'react';
import HogTile from "./HogTile";

function HogsContainer({ hogsInfo }) {
   const [myHogs, setMyHogs] = useState(hogsInfo);
   const [filteredState, setFilteredState] = useState(false);
   const [sortState, setSortState] = useState(false);
   const [isVisible, setIsVisible] = useState(true);

   const renderingHogs = myHogs.map(hog =>
      <HogTile
         key={hog.name}
         hog={hog}
      />
   );

   function handleFilter(event) {
      setFilteredState(!filteredState)
      if (event.target.checked) {
         const hogsFiltered = myHogs.filter(hog => hog.greased === true)
         setMyHogs(hogsFiltered)
      } else {
         setMyHogs(hogsInfo)
      }

   };

   function handleSort(event) {
      setSortState(!sortState)
      if (event.target.checked) {
         const hogsSorted = myHogs.slice().sort((a, b) => { // Sort is destructive. Slice makes it nondestructive because state cannot
            if (a.name < b.name) { // Sort A to Z
               return -1
            }
         })
         setMyHogs(hogsSorted)
      } else {
         setMyHogs(hogsInfo)
      }

   };

   function handleDisplay() {
      setIsVisible(!isVisible)
   }

   return (
      <div>
         <div>Only Greased: <input
            id="filter"
            type="checkbox"
            onClick={handleFilter}
         ></input></div>
         <div>Sort by Name: <input
            id="sort"
            type="checkbox"
            onClick={handleSort}
         ></input></div>
         {renderingHogs}
         {isVisible ? <HogTile hog={hog}/> : ""}
      </div>
   );
};

export default HogsContainer;
