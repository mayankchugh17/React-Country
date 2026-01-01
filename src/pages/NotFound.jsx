import { useNavigate } from "react-router-dom"

export const NotFound = () =>{
    
    const navigate = useNavigate();
    function GoLogin()
    {
        navigate("/");
    }

    return (<div>
        <button onClick={GoLogin} >Go Login</button>
    </div>)

}