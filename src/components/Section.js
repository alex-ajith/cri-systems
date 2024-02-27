import '../components/style.css';
import One from '../images/1.png';
import Two from '../images/2.png';

function Section() {
    return(
        <div className="Section">
            <div className="Trophy">
                <img src={One} alt="logo" />
            </div>
            <div className="Content">
                <div className="Content-Text1">
                    <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                    <ul>
                        <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
                        </li>
                    </ul>
                </div>
                <img src={Two} alt="logo" />
                <div className="Content-Text2">
                    <p>
                    Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section;