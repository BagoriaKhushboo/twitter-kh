import './LeftContent.css';
function LeftContent(){
    return (
<div class="row">
    <div class="col-6 offset-3">
        <div className="content-in">
    <div className="logo">
      <a href=""><i class="bi bi-twitter tw"></i></a>
    </div>
    <div className="info">
      <a href="">
        <div className="info-in">
         <i class="bi bi-hash ex-icon"></i>
         <span className="fwex-span">Explore</span>
        </div>
      </a>
    </div>
    <div className="info">
            <a href="">
                <div className="info-in">
                <i class="bi bi-gear ex-icon"></i>
                <span className="fw-span">Settings</span>
                </div>
            </a>
    </div>
</div>
</div>
</div>
    );
}
export default LeftContent;