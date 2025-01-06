import '../../styles/courses.css'
import CourseCard from '../../components/reusable/CourseCard';
import { business, creative, tech } from '../../courses';

function Courses() {
    return (
        <section className="alac-pack-section alac-pack-course-section">
            <h2 className="alac-pack-f-48 alac-pack-fw-400 alac-pack-text-black alac-pack-text-center">Choose{" "} <span className="alac-pack-fw-700 alac-pack-text-pink">Your Courses</span></h2>
            <div className="alac-pack-courses">
                <div className="alac-pack-course">
                    <div className="alac-pack-course-heading">Technical Courses </div>
                    <div className="alac-pack-course-div-outer">
                        <div className="alac-pack-course-div">
                            {
                                tech.map((item, index) => <CourseCard item={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="alac-pack-course">
                    <div className="alac-pack-course-heading">Creative/Art Course</div>
                    <div className="alac-pack-course-div-outer">
                        <div className="alac-pack-course-div">
                            {
                                creative.map((item, index) => <CourseCard item={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="alac-pack-course">
                    <div className="alac-pack-course-heading">Business Course</div>
                    <div className="alac-pack-course-div-outer">
                        <div className="alac-pack-course-div">
                            {
                                business.map((item, index) => <CourseCard item={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Courses;