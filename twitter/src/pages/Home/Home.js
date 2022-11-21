import CenterContent from '../../components/Home/Center/CenterContent';
import LeftContent from '../../components/Home/Left/LeftContent';
import RightContent from '../../components/Home/Right/RightContent';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';

function Home() {
  function NewTweetRecived(newTweet){
    console.log("I am Home logo component");
    console.log(newTweet);
  }
    
    return (
      <div className='home'>
        <div className='leftContainer'>
          <LeftContent  notifynewtweet={ NewTweetRecived}/>
        </div>
        <div className='centerContainer'>
          <CenterContent/>
        </div>
        <div className='rightContainer'>
          <RightContent/>
        </div>
      </div>
    );

}
   
  
  
  export default Home;