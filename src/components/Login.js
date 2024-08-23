import { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";

function Login(){
    const [isShowPassWord,setIsShowPassWord] =useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    const navigate = useNavigate();
    const [waitLoading,setWaitLoading] = useState(false);
    
    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token){
            navigate('/');
            toast.warning("you are already loged in")
        }
    },[])

    const handleLogin = async ()=>{
        setWaitLoading(true);
        let res = await loginApi(email,password)
        if (res && res.token){
            localStorage.setItem("token",res.token)
            toast.success('welcome')
            navigate('/users')
        }else{
            if(res && res.status === 400){
                toast.error(res.data.error)
              }
        }

        setWaitLoading(false);
    }


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
                <button disabled={email && password && !waitLoading? false:true} 
                        className={`login-btn ${email && password && !waitLoading? 'active':''}`} 
                        onClick={()=>handleLogin()}>
                        {waitLoading && <i className="fa-solid fa-sync fa-spin"></i>}
                        &nbsp; Login
                        </button>
                <div  className="back-btn"
                      onClick={()=>navigate('/')} > 
                    <i className="back-icon fa-solid fa-chevron-left"></i> <span className="back-text">Go back</span>  
                    </div>
            </div>

    

        </>
    )
}

export default Login;