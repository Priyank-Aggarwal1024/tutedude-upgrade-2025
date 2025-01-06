import '../../styles/hero.css'
import HeroImg from '../../assets/HeroImg.svg'
function Hero() {
    return (
        <section className="alac-pack-section alac-pack-hero-section">
            <svg className='alac-pack-hero-design' xmlns="http://www.w3.org/2000/svg" width="571" height="738" viewBox="0 0 571 738" fill="none">
                <g opacity="0.4">
                    <path d="M904.091 681.616C819.673 715.203 730.31 733.956 641.105 736.804C551.9 739.652 464.599 726.538 384.187 698.212C303.775 669.886 231.827 626.903 172.451 571.716C113.074 516.529 67.4317 450.219 38.1299 376.573C8.82808 302.926 -3.55953 223.386 1.67438 142.492C6.90829 61.5981 29.6612 -19.0644 68.6341 -94.8901C107.607 -170.716 162.036 -240.22 228.815 -299.434C295.593 -358.648 373.413 -406.412 457.831 -440L680.961 120.808L904.091 681.616Z" fill="url(#paint0_linear_181_166)" fillOpacity="0.3" />
                    <path d="M898.341 667.164C816.099 699.886 729.039 718.155 642.133 720.93C555.226 723.704 470.175 710.928 391.836 683.332C313.496 655.736 243.402 613.86 185.555 560.096C127.709 506.331 83.2428 441.73 54.696 369.981C26.1493 298.233 14.0809 220.742 19.18 141.933C24.279 63.1238 46.4456 -15.46 84.4141 -89.3317C122.383 -163.203 175.41 -230.916 240.467 -288.604C305.525 -346.293 381.339 -392.826 463.581 -425.548L680.961 120.808L898.341 667.164Z" fill="url(#paint1_linear_181_166)" fillOpacity="0.3" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_181_166" x1="38.1299" y1="376.573" x2="293.129" y2="249.421" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_181_166" x1="38.1299" y1="376.573" x2="293.129" y2="249.421" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="alac-pack-hero-top">
                <div className="alac-pack-ht-left">
                    <h1 className="alac-pack-hero-heading alac-pack-fw-400 alac-pack-f-55 alac-pack-text-black">Unlocks 3 Extra Courses at <span className='alac-pack-text-pink alac-pack-fw-700'>Just ₹799</span></h1>
                    <div className="alac-pack-hero-afteryou">After You Buy the ₹699 Course</div>
                    <div className="alac-pack-hero-purchase">Purchase any 3 course and increase REFUND validity to1 Year</div>
                    <div className="alac-pack-htl-bottom">
                        <div className="alac-pack-htl-bottom-left">
                            <div ><span className="alac-pack-f-34 alac-pack-fw-700 alac-pack-text-black">₹ 799</span>{" "}<span className="alac-pack-f-20 alac-pack-fw-400 alac-pack-td-lt" style={{ color: "#585858" }}>₹2197</span><p className="alac-pack-f-16 alac-pack-fw-700" style={{
                                color: "#04BD00"

                            }}>Flat 40% OFF</p></div>
                            <p className="alac-pack-enroll-now">Enroll Now</p>
                        </div>
                    </div>
                </div>
                <div className="alac-pack-ht-right">
                    <img src={HeroImg} alt="Hero Image" />
                </div>
            </div>
        </section>
    );
}

export default Hero;