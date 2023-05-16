import { useEffect, useState } from "react";
import { slideShowItems } from "./assets";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previous = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slideShowItems.length - 1);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const next = () => {
    if (currentSlide === slideShowItems.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const controlSlideshow = (typeOfControl: string) => {
    switch (typeOfControl) {
      case "previous":
        previous();
        break;
      case "next":
        next();
        break;
    };
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      next();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  return (
    <div className="container">
      <button
        type="button"
        title="Previous"
        name="A button to go back to previous slide"
        id="previous_slide_button"
        onClick={() => controlSlideshow('previous')}
      >
        Previous
      </button>
      <button
        type="button"
        title="Next"
        name="A button to go forward to next slide"
        id="next_slide_button"
        onClick={() => controlSlideshow('next')}
      >
        Next
      </button>

      <div className="slideshow_container">
        {
          slideShowItems.map((item, index) => (
            <div
              key={index}
              className={`slider ${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <img
                src={item}
                alt=''
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};



export default App;