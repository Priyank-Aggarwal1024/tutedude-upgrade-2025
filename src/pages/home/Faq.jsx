import React, { useState } from 'react';
import '../../styles/faq.css'
import check from '../../assets/checked.png'
import uncheck from '../../assets/uncheck.png'
function Faq(props) {
    const [checkout, setCheckout] = useState([
        {
            checked: true,
            ques: "How does the package course offer work?",
            ans: "When you select 4 or more courses, you'll get a discount of 45% on each course. You can complete these courses at your own pace, within the given time period according to the number of courses."
        },
        {
            checked: false,
            ques: "Can I mix and match courses for the package offer?",
            ans: "When you select 4 or more courses, you'll get a discount of 45% on each course. You can complete these courses at your own pace, within the given time period according to the number of courses."
        },
        {
            checked: false,
            ques: "Is there a time limit to complete courses in the package?",
            ans: "When you select 4 or more courses, you'll get a discount of 45% on each course. You can complete these courses at your own pace, within the given time period according to the number of courses."
        },
        {
            checked: false,
            ques: "How do I qualify for the refund offer?",
            ans: "When you select 4 or more courses, you'll get a discount of 45% on each course. You can complete these courses at your own pace, within the given time period according to the number of courses."
        }
    ])
    const [refund, setRefund] = useState([
        {
            checked: true,
            ques: "How will I know that 100% Refund offer has been applied ?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
        {
            checked: false,
            ques: "How will receive my 100% Refund amount ?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
        {
            checked: false,
            ques: "How can I access my Mentors?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
        {
            checked: false,
            ques: "Why don't you provide live classes and why should I prefer recorded lectures?",
            ans: "t commodo non. Convallis ultricies mattis bibendum quam. Purus vel velit turpis fringilla fringilla elit eget. Neque scelerisque sit vulputate dolor tellus. Nisi aliquam interdum condimentum quis est vitae iaculis sed. Quisque etiam turpis lorem sodales id. Donec famcus. Ut aliquam aen"
        },
    ])
    const checkoutCallback = (idx) => {
        const temp = checkout.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setCheckout(temp)

    }
    const refundCallback = (idx) => {
        const temp = refund.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setRefund(temp)

    }
    return (
        <section className="alac-pack-section alac-pack-section-faq">
            <h2 className="alac-pack-faq-heading alac-pack-fw-500 alac-pack-f-48 alac-pack-text-black alac-pack-text-center">
                Frequently Asked <span className="alac-pack-text-pink alac-pack-fw-700">Questions</span>
            </h2>
            <div className="alac-pack-faq">
                <div className="alac-pack-faq-left">
                    <h3 className="alac-pack-checkout-faq-heading ">Check Out Our FAQs!</h3>
                    {
                        checkout.map((item, idx) => {
                            return (
                                <div className="alac-pack-faq-item" key={idx}>
                                    <input type="checkbox" value={item.checked} name={`alac-pack-checkout-${idx}`} className='alac-pack-checkbox' />
                                    <label className='alac-pack-ques' htmlFor={`alac-pack-checkout-${idx}`} onClick={() => checkoutCallback(idx)}>
                                        <p>{item.ques}</p>
                                        <div className="alac-pack-faq-icon">
                                            {
                                                item.checked ? <img src={uncheck} alt="UnCheck" /> : <img src={check} alt="Check" />
                                            }
                                        </div>
                                    </label>
                                    <div className="alac-pack-ans" style={{ display: item.checked ? "block" : "none" }}>
                                        {
                                            item.ans
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="alac-pack-faq-right">
                    <h3 className="alac-pack-refund-faq-heading">
                        TuteDude and Refund
                    </h3>
                    {
                        refund.map((item, idx) => {
                            return (
                                <div className="alac-pack-faq-item" key={idx}>
                                    <input type="checkbox" value={item.checked} name={`alac-pack-checkout-${idx}`} className='alac-pack-checkbox' />
                                    <label className='alac-pack-ques' htmlFor={`alac-pack-checkout-${idx}`} onClick={() => refundCallback(idx)}>
                                        <p>{item.ques}</p>
                                        <div className="alac-pack-faq-icon">
                                            {
                                                item.checked ? <img src={uncheck} alt="UnCheck" /> : <img src={check} alt="Check" />
                                            }
                                        </div>
                                    </label>
                                    <div className="alac-pack-ans" style={{ display: item.checked ? "block" : "none" }}>
                                        {
                                            item.ans
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    );
}

export default Faq;