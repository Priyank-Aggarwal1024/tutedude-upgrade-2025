import '../../styles/refund.css'
import O1 from '../../assets/offer1.png'
import O2 from '../../assets/offer2.png'
import O3 from '../../assets/offer3.png'
import RefundImg from '../../assets/RefundImg.png'

function Refund() {
    return (

        <section className="alac-pack-section alac-pack-backoffer">
            <div className="alac-pack-back-offer-heading">
                <p className="alac-pack-f-48 alac-pack-fw-400 alac-pack-text-white alac-pack-text-center">Limited time deal</p>
                <p className="alac-pack-f-48 alac-pack-fw-400 alac-pack-text-white alac-pack-text-center"><span className="alac-pack-fw-700"> Refund Offer Explained</span></p>
            </div>
            <div className="alac-pack-backoffer-bottom">
                <div className="alac-pack-backoffer-left">
                    <div className="alac-pack-bol-card alac-pack-bol-card1">
                        <div className="alac-pack-bol-card-left">
                            <img src={O1} alt="Enroll" />
                        </div>
                        <div className="alac-pack-bol-card-middle">
                            <div className="alac-pack-bol-card-heading">Enroll </div>
                            <div className="alac-pack-bol-card-text">Enroll any <span className="alac-pack-fw-700">3 Courses</span> of Your Choice At <span className="alac-pack-fw-700">₹799</span> </div>
                        </div>
                        <div className="alac-pack-bol-card-right">1</div>
                    </div>
                    <div className="alac-pack-bol-card alac-pack-bol-card2">
                        <div className="alac-pack-bol-card-left">
                            <img src={O2} alt="Course" />
                        </div>
                        <div className="alac-pack-bol-card-middle">
                            <div className="alac-pack-bol-card-heading">Upskill</div>
                            <div className="alac-pack-bol-card-text alac-pack-bol-screen">
                                Complete that <span className="alac-pack-fw-700">All Course </span>  and Assignments anytime with life time refund validity</div>

                        </div>
                        <div className="alac-pack-bol-card-right">2</div>
                    </div>
                    <div className="alac-pack-bol-card alac-pack-bol-card3">
                        <div className="alac-pack-bol-card-left">
                            <img src={O3} alt="Payment" />
                        </div>
                        <div className="alac-pack-bol-card-middle">
                            <div className="alac-pack-bol-card-heading">Refund</div>
                            <div className="alac-pack-bol-card-text">Get <span className="alac-pack-fw-700">₹799</span> Full <span className="alac-pack-fw-700">REFUND</span> On Your <span className="alac-pack-fw-700">Bank Account.</span></div>
                        </div>
                        <div className="alac-pack-bol-card-right">3</div>
                    </div>
                </div>
                <div className="alac-pack-backoffer-right">
                    <div className="alac-pack-bor-top">
                        <img src={RefundImg} alt="Refund Tick Image" />
                    </div>
                    <div className="alac-pack-bor-bottom">
                        <p className="alac-pack-refund-right-para">
                            <svg className='alac-pack-va-mid' xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                                <path d="M0 9.33532L6.73204 16L8.43011 14.307L1.71011 7.65425M26.2899 0L13.5484 12.6259L8.53849 7.65425L6.81634 9.33532L13.5484 16L28 1.693M21.1837 1.693L19.4856 0L11.8383 7.57079L13.5484 9.25186L21.1837 1.693Z" fill="url(#paint0_linear_181_230)" />
                                <defs>
                                    <linearGradient id="paint0_linear_181_230" x1="0" y1="7.99999" x2="28.0001" y2="7.99999" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#D0D0D0" />
                                        <stop offset="0.431" stopColor="#DBDBDB" />
                                        <stop offset="0.621" stopColor="#DFDFDF" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>Get Lifetime course access</span>
                        </p>
                        <p className="alac-pack-refund-right-para">
                            <svg className='alac-pack-va-mid' xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                                <path d="M0 9.33532L6.73204 16L8.43011 14.307L1.71011 7.65425M26.2899 0L13.5484 12.6259L8.53849 7.65425L6.81634 9.33532L13.5484 16L28 1.693M21.1837 1.693L19.4856 0L11.8383 7.57079L13.5484 9.25186L21.1837 1.693Z" fill="url(#paint0_linear_181_230)" />
                                <defs>
                                    <linearGradient id="paint0_linear_181_230" x1="0" y1="7.99999" x2="28.0001" y2="7.99999" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#D0D0D0" />
                                        <stop offset="0.431" stopColor="#DBDBDB" />
                                        <stop offset="0.621" stopColor="#DFDFDF" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>Get 1 Year refund validity</span>
                        </p>
                        <p className="alac-pack-refund-right-para alac-pack-refund-right-para">
                            <svg className='alac-pack-va-mid' xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                                <path d="M0 9.33532L6.73204 16L8.43011 14.307L1.71011 7.65425M26.2899 0L13.5484 12.6259L8.53849 7.65425L6.81634 9.33532L13.5484 16L28 1.693M21.1837 1.693L19.4856 0L11.8383 7.57079L13.5484 9.25186L21.1837 1.693Z" fill="url(#paint0_linear_181_230)" />
                                <defs>
                                    <linearGradient id="paint0_linear_181_230" x1="0" y1="7.99999" x2="28.0001" y2="7.99999" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#D0D0D0" />
                                        <stop offset="0.431" stopColor="#DBDBDB" />
                                        <stop offset="0.621" stopColor="#DFDFDF" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>Certificate on course completion </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Refund;