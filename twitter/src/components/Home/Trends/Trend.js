import  './Trend.css';
function Trend(props){
    return(
<div className="trend">
   
    <p className="header">{props.header}</p>
    <p className="trend-text">{props.text}</p>
    <p className="retweet">{props.retweet}</p>
</div>

    );
}
export default Trend;