import React from "react";
import Cards from "./cards";
import "../cards/card.css";

const Gallery = () => {
  const pics = [
    {
      name: "Ashish",
      URL: "https://th.bing.com/th/id/OIP.bQ2QQnHpEa9HTp579X4RIQHaHZ?w=157&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt: "A beautiful landscape with mountains and rivers.",
    },
    {
      name: "Sanjana",
      URL: "https://th.bing.com/th/id/OIP.2bE7h1OJA8NDr9F9PmnCRQHaJ4?w=152&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt: "A beautiful landscape with mountains and rivers.",
    },
    {
      name: "Tharun",
      URL: "https://th.bing.com/th/id/OIP.t33aN-nhHOYweBVml52wRwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt: "A beautiful landscape with mountains and rivers.",
    },

    {
      name: "Pavani",
      URL: "https://th.bing.com/th/id/OIP.3nV9cBLo7vebui72y09AtAHaHa?w=202&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt: "A beautiful landscape with mountains and rivers.",
    },
  ];
  return (
    <>
      {pics.map((image, i) => (
        <Cards
          title={image.name}
          image={image.URL}
          description={image.alt}
          key={i}
        />
      ))}
    </>
  );
};
export default Gallery;
