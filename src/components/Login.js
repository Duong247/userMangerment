import { useState } from "react";
import { useLocation,useNavigate  } from 'react-router-dom';


function Login(){
    const [isShowPassWord,setIsShowPassWord] =useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    const navigate = useNavigate();
    
    return(
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="login-title" >Login</div>
                <div className="text">Email or username</div>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/> 
                <div className="password-container">
                    <input className="password-input" type={isShowPassWord ?'text':'password'}  value={password} onChange={(e)=>setPassWord(e.target.value)}  placeholder="Password"/>
                    <i className={`show-password-icon fa-solid ${isShowPassWord?'fa-eye':'fa-eye-slash'}`}
                        onClick={()=>setIsShowPassWord(!isShowPassWord)}
                    ></i>
                </div>
                <button disabled={email && password? false:true} className={`login-btn ${email && password? 'active':''}`} >Login</button>
                <div  className="back-btn"
                      onClick={()=>navigate('/')} > 
                    <i className="back-icon fa-solid fa-chevron-left"></i> <span className="back-text">Go back</span>  
                    </div>
            </div>

    

        </>
    )
}

export default Login;