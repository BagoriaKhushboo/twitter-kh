import Trend from '../Trends/Trend';
import './CenterContent.css';
import { useState , useEffect}  from 'react'
import Post from '../Post/Post';

function CenterContent(){
  
    // trendData[0].header
    // Read data from json file/api/os/external resources.
    // fetch function takes some to communicate with external resources.
const[ trendData, setTrendData]=useState([]);
// const[click , setClick]=useState(0);
 // 1. read data from trend.json file.
 useEffect(()=>{
  fetch("trend.json")
 // 2. Data is retrived.
   .then(res=> {
     console.log("Raw Data");
     console.log(res);
     return res.json();
   })
   // 3. Data is converted.
     .then(convertedData=> {
       // trendData = convertedData;
       setTrendData(convertedData);
   
     });
 },[])//inside []--> we use [click] because we define click variable
// ******************************
const[dataPost , setPost]=useState([]);
useEffect(()=>{
  fetch("post.json")
  .then(getresp=>{
    console.log(getresp);
    return getresp.json();
  })
  .then(convertres=>{
    setPost(convertres);
  });
},[])
// **********************************
// const[DoTweet, setDotweet]=useState("newTweet");
// console.log('center page');
// console.log(DoTweet);
// *********************************
    return (
        <div>
         
<div className="CenterContentIn">
{/* <button onClick={()=>{setClick(click+1)}}>Click</button> */}
{/* <button onClick={()=>{setClick(click2+1)}}>Click</button> */}
    <div className="searchBox">
    <svg width="20px" height="20" viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
    <input placeholder="Search Twitter" type="text" />
    </div>
<div className="gear">
<svg width="20px" height="20" viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg>
</div>
    
</div>
{/* navbar */}
      <nav>
          <ul>
            <li>
              <a href="#">For you</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Entertainment</a>
            </li>
          </ul>
        </nav>
        {/* banner */}
        <div className="banner">
            <span className='tag'>War in Ukraine·LIVE</span>
            <p className='text'>Latest updates on the war in Ukraine</p>
        </div>
        {/* trends */}
        <h3 className="headng">Trends for you</h3>
        {
          trendData.map(data=> 
          <Trend content={data}/>)
        }
        {

          dataPost.map(getpost=> 
             <Post postContent={getpost} />)
        }
      
      
</div>
    );
}
export default CenterContent;