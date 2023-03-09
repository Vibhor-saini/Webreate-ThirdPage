import "./footer.css";


function footer() {
  return  <div>   
    <footer>
      <div class="left">
        <p>A  <br/>  PLACE <br/> WHERE <br/> GROWTH <br/> MATTERS.</p>
        

      </div>

      <div class="right">
      

        <p>
          Make an <br />
          <span>Appointment</span>
        </p>
        <p class="first">
          Just make an appointment to get help from our experts.
        </p>

        <form action="backend.php">
          <label for="name"></label>
          <input
            type="text"
            id="userid"
            name="userid"
            placeholder="Name"
          /><br />
          <label for="mobile"></label>
          <input type="mobile" id="mobile" name="mobile" placeholder="Mobile" />
          <br />
          <label for="service"></label>
          <input
            type="service"
            id="service"
            name="service"
            placeholder="Select Service you want to help with"
          />
          <br />
          <textarea
            name="message"
            rows="5"
            cols="30"
            placeholder="Message(Optional)"
          ></textarea>
          <br />

          <button>Book A Call</button>
        </form>
      </div>
    </footer>
    </div> ;
  
}
export default footer;
