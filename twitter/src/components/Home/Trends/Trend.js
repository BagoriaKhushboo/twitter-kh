import  './Trend.css';
function Trend(props){
    const tdata=props.content;
    return(
<div className="trend">
   
    <p className="header">{tdata.header}</p>
    <p className="trend-text">{tdata.text}</p>
    <p className="retweet">{tdata.retweet}</p>
 
</div>

    );
}
export default Trend;