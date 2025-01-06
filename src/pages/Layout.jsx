import './layout.css';
import Navbar from './home/Navbar';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
import Footer from './home/Footer';
import Hero from './home/Hero';
import Refund from './home/Refund';
import Courses from './home/Courses';
import SpecialOffer from './home/SpecialOffer';
import OtherCourses from './home/OtherCourses';

function Layout() {
    return (
        <>
            <div className="alac-pack-layout">
                <Navbar />
                <Hero />
                <SpecialOffer />
                <Refund />
                <Courses />
                <OtherCourses />
                <Testimonials />
                <Faq />
                <Footer />
            </div>
            <div className="alac-pack-layout-bottom">
                <div className="alac-pack-hm-left">
                    <p className="alac-pack-fw-700 alac-pack-layout-price-bottom alac-pack-text-pink alac-pack-text-center">
                        <span className="alac-pack-layout-bottom-large">3</span>
                        <span className="alac-pack-layout-bottom-small">3</span>
                    </p>
                    <p className="alac-pack-fw-700 alac-pack-f-16 alac-pack-text-pink alac-pack-text-center" style={{ color: "#263238" }}>Selected Course</p>
                </div>
                <div className="alac-pack-hm-middle">
                    <p className="alac-pack-fw-700 alac-pack-layout-price-bottom alac-pack-text-pink alac-pack-text-center">
                        <span className="alac-pack-layout-bottom-large">₹799</span>
                        <span className="alac-pack-layout-bottom-small">₹799</span>
                    </p>
                    <p className="alac-pack-fw-700 alac-pack-f-16 alac-pack-text-pink alac-pack-text-center" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="alac-pack-hm-right">
                    <div className="alac-pack-proceed alac-pack-layout-proceed alac-pack-text-white">Proceed</div>
                </div>
            </div>
        </>
    );
}

export default Layout;
