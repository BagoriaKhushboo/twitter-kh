import CenterContent from '../../components/Home/Center/CenterContent';
import LeftContent from '../../components/Home/Left/LeftContent';
import RightContent from '../../components/Home/Right/RightContent';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    return (
      <div className='home'>
        <div className='leftContainer'>
          <LeftContent/>
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