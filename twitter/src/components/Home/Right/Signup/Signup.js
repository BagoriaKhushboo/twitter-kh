import './Signup.css';
import{useState} from 'react';
function Signup(){
    const[user ,setUserName]=useState("");
    const[email ,setEmail]=useState("");
    const[pwd ,setPassword]=useState("");
    const[cpwd ,setCpassword]=useState("");
   

    const changeOnName=(event)=>{
     setUserName(event.target.value);

     }
    const changeOnEmail=(event)=>{
        setEmail(event.target.value); 
    }
    const changeOnPwd=(event)=>{
        setPassword(event.target.value); 
    }
    const changeOnCpwd=(event)=>{
        setCpassword(event.target.value);
    }
   
    function submit(){
        console.log(user);
        console.log(email);
        console.log(pwd);
        console.log(cpwd);
        
    }
    return(
        <>
  <div className="modal-dialog" >
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Create an Account </h1>
       
      </div>
      <div className="modal-body">
      <div className="signUpForm" >
      <form action="">
        <div className="username">
        <input type="text" value={user} onChange={changeOnName} placeholder="Username" />
        </div>
       
        <div className="email">
        <input type="email" value={email} onChange={changeOnEmail} placeholder="Email Address" />
        </div>
        <div className="password">
        <input type="password" value={pwd} onChange={changeOnPwd} placeholder="Password" />
        </div>
        <div className="confirmpwd">
        <input type="password" value={cpwd} onChange={changeOnCpwd} placeholder="Confirm Password" />
        </div>
      </form>
  
   </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btnwidth" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success btnwidth" onClick={submit}>Sign Up</button>
      </div>
    </div>
  </div>


</>
    );
}
export default Signup;