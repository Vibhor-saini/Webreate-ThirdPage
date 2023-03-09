import "./cards.css"

import Screenshot211 from "./img/Screenshot211.png";
function cards(){
    return <div>


<div class="last">
      <div class="seven">
        <p>Other Service</p>

        <div id="cards">
          <div class="card1">
            <div class="image">
              <img src={Screenshot211}/>
            </div>
            <div class="para">
              <p>Advertisement</p>
              <button class="Advertisement">Explore</button>
            </div>
          </div>
          <div class="card1">
            <div class="image">
            <img src={Screenshot211}/>
            </div>
            <div class="para">
              <p>Management</p>
              <button class="managed">Explore</button>
            </div>
          </div>
          <div class="card1">
            <div class="image">
            <img src={Screenshot211}/>
            </div>
            <div class="para">
              <p>Development</p>
              <button class="development">Explore</button>
            </div>
          </div>
          <div class="card1">
            <div class="image">
            <img src={Screenshot211}/>
            </div>
            <div class="para">
              <p>Marketing</p>
              <button class="marketing">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
}

export default cards;