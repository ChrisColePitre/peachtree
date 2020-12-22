import React, { useState } from "react";

const Item = (object) => {
  return (
    <>
      <p>{object.id}</p>  
      <p>{object.name}</p>  
      <p>{object.age}</p>  
    </>
  );
};

export default {Item}