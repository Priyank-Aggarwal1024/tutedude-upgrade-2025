import '../../styles/SpecialOffer.css'
import so1 from '../../assets/so1.svg'
import so2 from '../../assets/so2.svg'
import sol1 from '../../assets/sol1.svg'
import sol2 from '../../assets/sol2.svg'
import half from '../../assets/half.svg'
import figma from '../../assets/figma.svg'
function SpecialOffer() {
    return (
        <section className="alac-pack-section">
            <div className="alac-pack-so">
                <div className="alac-pack-so-left">
                    <div className="alac-pack-so-left-design">
                        <img src={half} alt="Half" />
                    </div>
                    <div className="alac-pack-so-left-top">
                        <img src={figma} alt="Figma" />
                        <p>UI/UX Designing</p>
                    </div>
                    <div className="alac-pack-so-left-middle">Your previous Purchase</div>
                    <div className="alac-pack-so-left-bottom">
                        <div className="alac-pack-so-left-bottom-div">
                            <img src={sol1} alt="sol1" />
                            <p>Purchased One course: <b>₹699</b> </p>
                        </div>
                        <div className="alac-pack-so-left-bottom-div">
                            <img src={sol2} alt="sol2" />
                            <p>100% Refund Validity : <b>3Month</b> </p>
                        </div>
                    </div>
                </div>
                <div className="alac-pack-so-right">
                    <div className="alac-pack-so-right-top">Special Offer for you</div>
                    <div className="alac-pack-so-right-middle">
                        <div className="alac-pack-so-right-middle-div">
                            <img src={so1} alt="so1" />
                            <p>Purchase any 3 course:  <b>₹799</b> </p>
                        </div>
                        <div className="alac-pack-so-right-middle-div">
                            <img src={so2} alt="so2" />
                            <p>100% Refund Validity : <b>1 Year</b> </p>
                        </div>
                    </div>
                    <div className="alac-pack-so-right-bottom">Select Course</div>
                </div>
            </div>
        </section>
    );
}

export default SpecialOffer;