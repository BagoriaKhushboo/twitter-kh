import CenterContent from "../../components/Home/Center/CenterContent";
import LeftContent from "../../components/Home/Left/LeftContent";
import RightContent from "../../components/Home/Right/RightContent";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import { useState } from "react";

function Home() {
  const [tweets, setNewTweets] = useState([]);
  function NewTweetRecived(newTweet) {
    console.log("I am Home logo component now enter new tweets");
    tweets.push(newTweet);
    setNewTweets([...tweets]);
    console.log(newTweet);
  }

  return (
    <div className="home">
      <div className="leftContainer">
        <LeftContent notifynewtweet={NewTweetRecived} />
      </div>
      <div className="centerContainer">
        <CenterContent tweetsContent={tweets} />
      </div>
      <div className="rightContainer">
        <RightContent />
      </div>
    </div>
  );
}

export default Home;
