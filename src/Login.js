import "./assets/app.css"
export default function login(){
    return(
        
        <div className="d-flex justify-content-center my-4  shadow-sm bg-light">
           
            <img src="https://workplacelearning.ial.edu.sg/images/default-source/default-album/wab-lab-image-card---cropped-v2.png?sfvrsn=c0157bd3_0" className="mx-4 my-4" width="200px"   style={{ borderRadius: '9px'}}/>
       
            
             <form className="my-3">
             <h3 className="text-center">Book Your Table</h3>
            <div className="row my-3">
            <div className="col-md-4">
            <input type="text" placeholder="Your Name" className="form-control"/>
            </div>
           <div className="col-md-4">
           <input type="text" placeholder="Your E-mail" className="form-control"/>
           </div>
            <div className="col-md-4">
            <input type="text" placeholder=" Subject" className="form-control"/>
            </div>
            </div>
            <div className="row my-3">
                <div className="col-md-4">
                <input type="Date" placeholder="Your Name" className="form-control"/>
                </div>
            
           <div className="col-md-4">
           <input type="Time" placeholder="Your E-mail" className="form-control"></input>
           </div>
           <div className="col-md-4">
           <input type="Text" placeholder=" # of People" className="form-control"></input>
           </div>
           
       
        </div>
        <div className="row mb-3">
            <textarea className="form-control"  id="floatingTextarea2 " ></textarea>
            </div>
       <div className="text-center">
       <button type="button" className="btn btn-danger rounded-pill mybtn shadow-sm  mx-auto" >Send Message</button>
       </div>
        </form>
       
        </div>
        
    )
}