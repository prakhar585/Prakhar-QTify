// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation ,Virtual} from "swiper/modules";
// import "swiper/css";
// import MusicCard from "../Card/MusicCard";
// import leftNav from "./../../assets/navigation-Left.png";
// import rightNav from "./../../assets/navigation-Right.png";

// const Carousel = ({ albumData }) => {
//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [visibleSlides, setVisibleSlides] = useState([]);
//   const [isMounted, setIsMounted] = useState(false);

//   // Set mounted after component mounts to avoid hydration issues
//   useEffect(() => {
//     setIsMounted(true);

//     // Update navigation when component mounts
//     return () => {
//       setIsMounted(false);
//     };
//   }, []);

//   // Handle navigation manually
//   const handlePrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const handleSlideChange = (swiper) => {
//     // Get the current visible slide indices
//     const activeIndex = swiper.activeIndex;
//     const slidesPerView = swiper.params.slidesPerView;
    
//     // Calculate which slides are visible
//     const visible = [];
//     for (let i = activeIndex; i < activeIndex + slidesPerView && i < albumData.length; i++) {
//       visible.push(i);
//     }
    
//     setVisibleSlides(visible);
//   };

//   const breakpoints = {
//     320: { slidesPerView: 2, spaceBetween: 10 },
//     480: { slidesPerView: 3, spaceBetween: 20 },
//     768: { slidesPerView: 5, spaceBetween: 30 },
//     1024: { slidesPerView: 7, spaceBetween: 40 },
//     1280: { slidesPerView: 8, spaceBetween: 50 },
//   };

//   return (
//     <div className="carousel-container relative">
//       <div
//         className="carousel-container"
//         style={{  position: 'relative', 
//           margin: 0,
//           padding: 0,
//           overflow: 'hidden',
        
//         }}
//       >
//         {/* Left Navigation Button */}
//         <button
//           onClick={handlePrev}
//           style={{
//             height:"10px",
//             width:"10px",
//             position: "absolute",
//             left: "0",
//             top: "50%",
//             transform: "translateY(-50%)",
//             zIndex: "10",
//             background: "transparent",
//             border: "none",
//             cursor: "pointer",
//             padding: 0,
//             backgroundColor: "black",
//             border: "black",
//             cursor: "pointer",
            
//           }}
//           className="nav-button opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
//           aria-label="Previous slide"
//         >
//           <img src={leftNav} alt="Previous" width="32" height="32" />
//         </button>

//         <Swiper
//           ref={swiperRef}
//           modules={[Navigation, Virtual]} // Add Virtual module
//           virtual={true} // Enable virtual slides
//           spaceBetween={100}
//           breakpoints={breakpoints}
//           onSlideChange={handleSlideChange} // Add slide change handler
//           observer={true} // React to changes
//           observeParents={true}
//           updateOnWindowResize={true}
//         >
//           {albumData && albumData.length > 0 ? (
//             albumData.map((album, index) => (
//               <SwiperSlide key={album.id || `album-${index}`} virtualIndex={index}>
//                 {({ isVisible, isActive }) => {
//                   // Only render if the slide is visible
//                   // This ensures first slides are removed from DOM after navigation
//                   if (index < 2 && !visibleSlides.includes(index)) {
//                     return null; // Don't render anything for first two slides if not visible
//                   }
//                   return <MusicCard album={album} />;
//                 }}
//               </SwiperSlide>
//             ))
//           )  : (
//             <SwiperSlide className="flex items-center justify-center h-48">
//               <div className="flex flex-col items-center gap-2">
//                 <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-blue-500"></div>
//                 <p>Loading...</p>
//               </div>
//             </SwiperSlide>
//           )}
//         </Swiper>

//         {/* Right Navigation Button */}
//         <button
//           onClick={handleNext}
//           style={{
//             position: "absolute",
//             right: "0",
//             top: "50%",
//             transform: "translateY(-50%)",
//             zIndex: "10",
//             backgroundColor: "black",
//             border: "black",
//             borderRadius:"50%",
//             cursor: "pointer",
//           }}
//           className="nav-button opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
//           aria-label="Next slide"
//         >
//           <img src={rightNav} alt="Next" width="32" height="32" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import "swiper/css";
import MusicCard from "../Card/MusicCard";
import leftNav from "./../../assets/navigation-Left.png";
import rightNav from "./../../assets/navigation-Right.png";
import "./Carousel.css"; // Import your CSS

const Carousel = ({ albumData }) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(8);
  const [leftButtonPressed, setLeftButtonPressed] = useState(false);
  const [rightButtonPressed, setRightButtonPressed] = useState(false);

  // Set mounted after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
    
    // Initialize visible slides on mount
    const calculateVisibleSlides = () => {
      let viewCount = 8; // Default
      const width = window.innerWidth;
      if (width < 480) viewCount = 2;
      else if (width < 768) viewCount = 3;
      else if (width < 1024) viewCount = 5;
      else if (width < 1280) viewCount = 7;
      
      setSlidesPerView(viewCount);
    };
    
    calculateVisibleSlides();
    window.addEventListener('resize', calculateVisibleSlides);
    
    return () => {
      setIsMounted(false);
      window.removeEventListener('resize', calculateVisibleSlides);
    };
  }, []);

  // Handle navigation manually with animation
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setLeftButtonPressed(true);
      swiperRef.current.swiper.slidePrev();
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setLeftButtonPressed(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setRightButtonPressed(true);
      swiperRef.current.swiper.slideNext();
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setRightButtonPressed(false);
      }, 300);
      
      // Track slides that should be removed after navigation
      if (swiperRef.current.swiper.activeIndex > 3) {
        setActiveIndex(swiperRef.current.swiper.activeIndex);
      }
    }
  };

  const handleSlideChange = (swiper) => {
    // Only update active index if we've moved significantly
    if (swiper.activeIndex > 3) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  const breakpoints = {
    320: { slidesPerView: 2, spaceBetween: 10 },
    480: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 5, spaceBetween: 30 },
    1024: { slidesPerView: 6, spaceBetween: 40 },
    1280: { slidesPerView: 7, spaceBetween: 50 },
  };

  // Function to determine if a slide should be rendered
  const shouldRenderSlide = (index) => {
    // Always render slides on initial load (activeIndex is 0)
    if (activeIndex <= 3) return true;
    
    // After significant navigation, don't render the first two slides
    if (index < 2 && activeIndex > 3) return false;
    
    return true;
  };

  return (
    <div className="carousel-container">
      <div
        style={{  
          position: 'relative', 
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          style={{
            height: "32px",
            width: "32px",
            position: "absolute",
            left: "0",
            top: "50%",
            transform: `translateY(-50%) ${leftButtonPressed ? 'scale(0.9)' : 'scale(1)'}`,
            zIndex: "10",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "transform 0.2s ease",
          }}
          className="nav-button opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
          aria-label="Previous slide"
        >
          <img src={leftNav} alt="Previous" width="32" height="32" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Virtual]}
          virtual={true}
          spaceBetween={100}
          breakpoints={breakpoints}
          onSlideChange={handleSlideChange}
          observer={true}
          observeParents={true}
          updateOnWindowResize={true}
        >
          {albumData && albumData.length > 0 ? (
            albumData.map((album, index) => (
              <SwiperSlide key={album.id || `album-${index}`} virtualIndex={index}>
                {({ isVisible }) => {
                  // Only apply our custom logic for the first two slides
                  if (!shouldRenderSlide(index)) {
                    return null;
                  }
                  
                  // For all other slides, render normally
                  return <MusicCard album={album} />;
                }}
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="flex items-center justify-center h-48">
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-blue-500"></div>
                <p>Loading...</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        {/* Right Navigation Button - Removed black background */}
        <button
          onClick={handleNext}
          style={{
            height: "32px",
            width: "32px",
            position: "absolute",
            right: "0",
            top: "50%",
            transform: `translateY(-50%) ${rightButtonPressed ? 'scale(0.9)' : 'scale(1)'}`,
            zIndex: "10",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "transform 0.2s ease",
          }}
          className="nav-button opacity-80 hover:opacity-100 transition-opacity focus:outline-none"
          aria-label="Next slide"
        >
          <img src={rightNav} alt="Next" width="32" height="32" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
