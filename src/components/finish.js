import "./finish.css";
import Logo from './img/WebreateLogo.png';

function finish(){
    return  <div>

<div id="finish">
      <div className="left">
        <div className="image">
        <img src={Logo}/>
        </div>

        <p className="nine">
          Webreate, A young team of passionate minds delivering the best result
          driven strategies to enhance your Online appearance with the best
          COMPANY Creation, Development, Optimisation, Management, And
          Marketing.
        </p>
        <div className="ten">
          <h2>ADDRESS</h2>
          <br />
          <p>
            2nd Floor, SK Tower <br />
            Behind Reliance Market, Niranjan Pur <br />
            Dehradun, India
          </p>

          <br />
          <h3>MOBILE NO.</h3>
          <p>1234-567-890</p>
        </div>
      </div>

      <div className="right">
        <h2>FOLLOW US ON</h2>
        
        <a href='/'><i id="facebook" class="fa fa-facebook-f"></i></a> 
        <a href='/'><i id="insta" class="fa fa-instagram" ></i></a>
        <a href='/'> <i  id="youtube" className="fa fa-youtube-play"></i></a>
       
         <br/> <br/> 
       
        <h2>COMPANY</h2>
        
        <p>About US | Privacy Policy</p>

        <h2>SERVICE WE OFFER</h2>
         

         <div className="anchor">
         <pre>
         <a href="/">Creation</a>  
         <a href="/">Development |</a> 
         <a href="/">Management |</a>        
        <a href="/">Optimization |</a>   
        <a href="/">Market |</a>
        </pre>
       
         </div>
        
        
        <h2>OUR PROJECTS</h2>
        <p>Celereate | Mehandi Hub | EasyCamScan | RIYO</p>
      </div>
    </div>

    <div className="footer">
      <p>Copyright &#169; 2022 Webreate. Privacy Policies| Do not sell my info.</p>
    </div>


    </div>
    
}
export default finish;