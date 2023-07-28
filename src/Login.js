import "./assets/app.css"
export default function login(){
    return(
        
        <div className=" d-flex justify-content-center my-4 mx-2 shadow-sm ">
           
            <img src="https://workplacelearning.ial.edu.sg/images/default-source/default-album/wab-lab-image-card---cropped-v2.png?sfvrsn=c0157bd3_0" className="vh-4 w-auto mx-4"width={200} height={340}/>
       
            
             <form className=" my-2">
             <h3 className="text-center ">Book Your Table</h3>
            <input type="text" placeholder="Your Name" className="mx-4   "></input>
            <input type="text" placeholder="Your E-mail" className="mx-4  "></input>
            <input type="text" placeholder=" Subject" className="mx-4  "></input>
            <div className="form-floating py-4">
            <input type="Date" placeholder="Your Name" className="mx-5   "></input>
            <input type="Time" placeholder="Your E-mail" className="mx-5  "></input>
            <input type="Text" placeholder=" # of People" className="mx-5  "></input>
            <div className="form-floating py-4"> </div>
  <textarea className="form-control "  id="floatingTextarea2 " ></textarea>
  <label for="floatingTextarea2 text-secondery  mx-5" ></label>
</div>
<button type="button" className="btn btn-danger rounded-pill  shadow-sm  mx-5 ">Send Message</button>
        </form>
       
        </div>
        
    )
}