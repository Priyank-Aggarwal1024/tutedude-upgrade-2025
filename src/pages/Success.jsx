import '../styles/Success.css'
import logo from '../assets/logo2.png'
import success from '../assets/success.svg'
import gift from '../assets/gift.svg'
import percent from '../assets/percent.svg'
import rightarrow from '../assets/rightarrow.svg'
import { Link } from 'react-router-dom'
function Success() {
    return (
        <div className="alac-pack-success">
            <div className="alac-pack-success-nav">
                <img src={logo} alt="Logo" />
            </div>
            <div className="alac-pack-success-main">
                <div className="alac-pack-success-main-inner">
                    <div className="alac-pack-success-main-top">
                        <img src={success} alt="Success" />
                        <p className="alac-pack-success-main-top-price">₹699</p>
                        <p className="alac-pack-success-main-top-enrollment">Enrollment Successful!</p>
                        <p className="alac-pack-success-main-top-enrolled">You’ve successfully enrolled in the</p>
                        <p className="alac-pack-success-main-top-head">UI/UX Design Course</p>
                    </div>
                    <div className="alac-pack-success-main-middle">
                        <img src={gift} alt="Gift" className="alac-pack-success-main-middle-gift" />
                        <div className="alac-pack-success-main-middle-reward">Your Reward</div>
                        <div className="alac-pack-success-main-middle-head">Add 3 courses for ₹799. </div>
                        <div className="alac-pack-success-main-middle-limited">
                            <img src={percent} alt="Percent" />
                            <p className="">Limited Time Offer</p>
                        </div>
                        <div className="alac-pack-success-main-middle-line"></div>
                        <div className="alac-pack-success-main-middle-benefits">Benefits of this smart value:</div>
                        <div className="alac-pack-success-main-middle-benefits-div">
                            <p className="alac-pack-success-main-middle-benefit">1. 3 extra courses of your choice</p>
                            <p className="alac-pack-success-main-middle-benefit">2. Feesback validity increase from 3 months to l year</p>
                            <p className="alac-pack-success-main-middle-benefit">3. Lifetime access on all the extra courses</p>
                            <p className="alac-pack-success-main-middle-benefit">4. Mentorship facility on each course</p>
                        </div>
                        <div className="alac-pack-success-main-middle-claim">Claim Now</div>
                    </div>
                </div>
                <Link to={"/"} className="alac-pack-success-main-bottom">
                    <p className="">Go to dashboard</p>
                    <img src={rightarrow} alt="Right Arrow" />
                </Link>
            </div>
        </div>
    );
}

export default Success;