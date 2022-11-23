import './LeftContent.css';
import NewTweet from '../NewTweet/NewTweet';
function LeftContent(props){
  function NewTweetRecived(newTweet){
    console.log("I am leftside logo component");
    console.log(newTweet);
    props.notifynewtweet(newTweet);
  }
    return (
<div className="row">
    <div className="col-6 offset-3">
        <div className="content-in">
    <div className="logo">
      <a href="/"><i className="bi bi-twitter tw"></i></a>
    </div>
    <div className="info">
      <a href="/profile">
        <div className="info-in">
        <i class="bi bi-person-fill ex-icon"></i>
         <span className="fwex-span">Profile</span>
        </div>
      </a>
      
    </div>
    <div className="info">
      <a href="">
        <div className="info-in">
         <i className="bi bi-hash ex-icon"></i>
         <span className="fwex-span">Explore</span>
        </div>
      </a>
      
    </div>
    <div className="info">
            <a href="">
                <div className="info-in">
                <i className="bi bi-gear ex-icon"></i>
                <span className="fw-span">Settings</span>
                </div>
            </a>
    </div>

    <div className="tweet">
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Tweet
        </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <NewTweet notifynewtweet={ NewTweetRecived}/>
      </div>
    </div>
    
</div>
</div>
</div>
    );
}
export default LeftContent;