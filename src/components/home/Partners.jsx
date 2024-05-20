import logo1 from "../../assets/kra.png"
import logo2 from '../../assets/windle.png'
import logo3 from "../../assets/whh.png"
import logo4 from "../../assets/uon.png"
import logo5 from "../../assets/fargo.png"
import logo6 from "../../assets/national.svg"
import logo7 from "../../assets/kwft.png"
import logo8 from "../../assets/airways.png"
import logo9 from "../../assets/jica.png"
import logo10 from "../../assets/coop.png"

import { useRef, useEffect } from "react"
const Partners = () => {
  const scrollerRef = useRef();

  useEffect(() => {
    const scrollerInner = scrollerRef.current.querySelector('.partners-logos')
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
    })
}, [])
  return (
    <div className="partners-section">
             <div className="partners-content">
                      <h3>Trusted By World Class Brands</h3>
                      <div ref={scrollerRef} className="partners-row">
                                <div className="partners-logos">
                                          <img src={logo1} alt="" />
                                          <img src={logo2} alt="" />
                                          <img src={logo3} alt="" />
                                          <img src={logo4} alt="" />
                                          <img src={logo5} alt="" />
                                          <img src={logo6} alt="" />
                                          <img src={logo7} alt="" />
                                          <img src={logo8} alt="" />
                                          <img src={logo9} alt="" />
                                          <img src={logo10} alt="" />
                                </div>
                      </div>
              </div>
    </div>
  )
}

export default Partners