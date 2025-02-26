// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import MusicCard from "../Card/MusicCard";
// import leftNav from "./../../assets/navigation-Left.png";
// import rightNav from "./../../assets/navigation-Right.png";

// const Carousel = ({ albumData }) => {
//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

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
//           modules={[Navigation]}
//           spaceBetween={100}
//           breakpoints={breakpoints}
//         >
//           {albumData && albumData.length > 0 ? (
//             albumData.map((album, index) => (
//               <SwiperSlide key={album.id || `album-${index}`}>
//                 <MusicCard album={album} />
//               </SwiperSlide>
//             ))
//           ) : (
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MusicCard from "../Card/MusicCard";
import "./Carousel.css";

const Carousel = ({ albumData }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      breakpoints={{
        640: { slidesPerView: 4 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 7 },
      }}
    >
      {albumData.map((album) => (
        <SwiperSlide key={album.id}>
          <MusicCard album={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

