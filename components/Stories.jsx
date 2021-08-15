import React from "react";
import StoryCard from "./StoryCard";
const stories = [
  {
    id: 1,
    name: "Super Man",
    src: "https://i.ibb.co/KzBQGsd/my-Day-Super-Man.jpg",
    profile: "https://i.ibb.co/47RkBv6/superman-Lego.jpg",
  },
  {
    id: 2,
    name: "Spider Man",
    src: "https://i.ibb.co/dkkTyMX/Spider-man-My-Day.png",
    profile: "https://i.ibb.co/bFHr6sJ/Spiderman.jpg",
  },
  {
    id: 3,
    name: "Bad Man",
    src: "https://i.ibb.co/B3147s4/Badman-Myday.jpg",
    profile: "https://i.ibb.co/cg7nV0m/badMan.jpg",
  },
  {
    id: 4,
    name: "Iron Man",
    src: "https://i.ibb.co/kH25PvV/Iron-Man-Day.jpg",
    profile: "https://i.ibb.co/v4hsLVR/iron-man.png",
  },
];
const Stories = () => {
  return (
    <div className="flex justify-center space-x-6 lg:space-x-3  mx-auto">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
