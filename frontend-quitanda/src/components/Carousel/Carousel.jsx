import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import { CarouselContainer, Inner } from "./style";

const Carousel = forwardRef(({ children, move, carouselRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= (React.Children.count(children) / 2) + 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useImperativeHandle(
    carouselRef,
    () => ({
      getActiveIndex: () => {
        return activeIndex;
      },
    }),
    [activeIndex]
  );

  useEffect(() => {
    updateIndex(move);
  }, [move]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2200);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <CarouselContainer
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Inner style={{ transform: `translateX(-${activeIndex * 250}px)` }}>
        {children}
      </Inner>
    </CarouselContainer>
  );
});

export default Carousel;
