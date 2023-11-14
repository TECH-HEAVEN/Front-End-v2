import { Carousel } from "@material-tailwind/react";
import NASAImg1 from "../assets/images/nasa-S3hQU-5_yjg-unsplash.jpg";
import NASAImg2 from "../assets/images/nasa-yZygONrUBe8-unsplash.jpg";
export function CarouselCustomNavigation() {
  return (
    <>
      <Carousel
        className="rounded-2xl w-full h-[500px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={NASAImg1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={NASAImg2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={NASAImg1}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
}
