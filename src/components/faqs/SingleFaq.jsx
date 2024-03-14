/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const SingleFaq = ({ data }) => {
    const [status, setStatus] = useState(false)

    const toggleFaq = () => setStatus(!status)
  return (
    <div className={ status ? "single-faq-body active" : "single-faq-body"}>
               <div className="single-faq-header" onClick={toggleFaq}>
                          <h3>{data.question}</h3>
                          <span className="plus"><FiPlus /></span>
                          <span className="minus"><FiMinus /></span>
               </div>
               <div className="single-faq-answer">
                          <div className="single-faq-inner">
                                   <p>{data.answer}</p>
                          </div>
               </div>
    </div>
  )
}

export default SingleFaq