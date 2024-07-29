import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from "swiper/modules";


const swiperData = [
      {
               id: 0,
               idText: 'one',
               part1: "We Create ",
               part2: "and",
               part3: "Design Furniture",
               spanned: ["Unique", "Modern"],
               description: "With over 4 decades of experience, we specialize in manufacture of Office, School, Hospital, Library and Shelving furniture."
      },
      {
               id: 1,
               idText: 'two',
               part1: "We Create ",
               part2: "and",
               part3: "Design Furniture",
               spanned: ["Unique", "Modern"],
               description: "With over 4 decades of experience, we specialize in manufacture of Office, School, Hospital, Library and Shelving furniture."
      },
      {
        id: 2,
        idText: 'three',
        part1: "We Create ",
        part2: "and",
        part3: "Design Furniture",
        spanned: ["Unique", "Modern"],
        description: "With over 4 decades of experience, we specialize in manufacture of Office, School, Hospital, Library and Shelving furniture."
     },
     {
      id: 3,
      idText: 'four',
      part1: "We Create ",
      part2: "and",
      part3: "Design Furniture",
      spanned: ["Unique", "Modern"],
      description: "With over 4 decades of experience, we specialize in manufacture of Office, School, Hospital, Library and Shelving furniture."
   },
]
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="slides-container">
                   <Swiper
                          slidesPerView={1}
                          loop={true}
                          effect={'fade'}
                          speed={1000}
                          autoplay= {{
                                delay: 3500,
                                disableOnInteraction: false
                          }}
                        // onSwiper={(swiper) => setSwiperRef(swiper) }
                        modules={[Autoplay, EffectFade]}
                     >
                      { swiperData.map(item => 
                              <SwiperSlide key={item.id}>
                                     { ({ isActive }) => (
                                                <div className={`slide-moja ${item.idText}`}>
                                                        <div className="slide-moja-inner">
                                                               <div className={ isActive ? "hero-texts active" : "hero-texts"}>
                                                                        <h1>{item.part1}<span>{item.spanned[0]} </span>{item.part2} <span>{item.spanned[1]}</span> {item.part3}</h1>
                                                                       <p>{item.description}</p>
                                                    
                                                                     <div className="hero-btn">
                                                                               <Link to={'/'}>Explore <span><LuChevronRight /></span></Link>
                                                                     </div>
                                                             </div>
                                                      </div>
                                               </div>
                                          )}
                              </SwiperSlide>
                       )}
                    </Swiper>
              </div>
              {/* <div className="inner-row">
                       <div className="hero-section-content">
                                   <div className="hero-texts">
                                              <h3></h3>
                                              <h1>We Create <span>Unique</span> and <span>Modern</span> Design Furniture.</h1>
                                              <p>With over 4 decades of experience, we specialize in manufacture of Office, School, Hospital, Library and Shelving furniture.</p>
                                              <Link to={'/'}>Explore <span><LuChevronRight /></span></Link>
                                   </div>
                       </div>
              </div> */}
    </div>
  )
}

export default HeroSection