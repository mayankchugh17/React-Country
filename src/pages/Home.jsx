import { FaArrowRight } from "react-icons/fa";
import Logo from "/Images/nasa.jpg";

export const Home = () =>{
    return (
        <>
            <div className="row mt-5">
                <div className="col-6">
                    <h1>Explore the World, One Country at a Time</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <button className="btn btn-primary">Get Started <FaArrowRight /></button>
                </div>
                <div className="col-6">
                    <img src={Logo} alt="Logo"  />
                </div>
            </div>
        </>
    )
}