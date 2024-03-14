import { faqs } from "../../../data/faqs"
import SingleFaq from "./SingleFaq"

const FaqSection = () => {
  return (
    <div className="faq-section">
              <div className="inner-row">
                       <div className="faq-section-content">
                                   <div className="faq-intro-text">
                                             <h3>Questions & Answers</h3>
                                             <h1>Still have questions about <span>Mecol</span></h1>
                                             <p>Here are several common questions and answers that could help you understand our software before you use it.</p>
                                   </div>
                                   <div className="faq-wrapper">
                                            { faqs.map(item => <SingleFaq key={item.id} data={item} />)}
                                   </div>
                       </div>
              </div>
    </div>
  )
}

export default FaqSection