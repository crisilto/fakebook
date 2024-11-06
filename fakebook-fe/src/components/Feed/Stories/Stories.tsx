import React, { useEffect, useRef, useState } from "react";
import "./Stories.scss";
import Story from "./Story";

const Stories: React.FC = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const storyCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateArrows();
  }, []);

  const updateArrows = () => {
    if (storyCardRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = storyCardRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollStories = (direction: string) => {
    if (storyCardRef.current) {
      const scrollAmount = direction === 'right' ? 200 : -200;
      storyCardRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateArrows, 300);
    }
  };

  return (
    <div className="stories-feed">
      {canScrollLeft && (
        <button className="scroll-arrow left" onClick={() => scrollStories('left')}>{'<'}</button>
      )}
      <div className="story-card" ref={storyCardRef} onScroll={updateArrows}>
        <Story type="create" />
        {[...Array(11)].map((_, index) => (
          <Story key={index} index={index + 1} />
        ))}
      </div>
      {canScrollRight && (
        <button className="scroll-arrow right" onClick={() => scrollStories('right')}>{'>'}</button>
      )}
    </div>
  );
};

export default Stories;