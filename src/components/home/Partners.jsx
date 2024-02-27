import logo1 from "../../assets/sanfrancisco.png"
import logo2 from '../../assets/snowflake.png'
import logo3 from "../../assets/vancouver.png"
import logo4 from "../../assets/trace.png"
import logo5 from "../../assets/springfield.png"

const Partners = () => {
  return (
    <div className="partners-section">
             <div className="partners-content">
                      <h3>Trusted By World Class Brands</h3>
                      <div className="partners-logos">
                                <img src={logo1} alt="" />
                                <img src={logo2} alt="" />
                                <img src={logo3} alt="" />
                                <img src={logo4} alt="" />
                                <img src={logo5} alt="" />
                      </div>
              </div>
    </div>
  )
}

export default Partners