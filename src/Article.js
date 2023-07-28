import "./assets/app.css"


function article(){
    return(
       <>
       <div className=" Container bg-Secondary d-flex justify-content-end shadow-sm " >
        <div className="justify-content-center my-5 fst-italic "> <h1 className="">Save Water Save Earth</h1>
        <p className="text-secondary ">Take the background out of a picture faster than ever. It’s as easy as selecting your image</p>
        <p className="text-secondary">Take the background out of a picture faster than ever. It’s as easy as selecting your image</p>  
        <button type="button" className="btn btn-danger rounded-pill mx-5 ">Book a Table</button>
        <button type="button" className="btn btn-transperent">
        <i className="bi bi-caret-left-curcile">Play Video</i> 
      </button>
        </div>
         <img src="https://th.bing.com/th/id/OIP.3fT7G6QhCucjKE-s0n_wWgHaHa?pid=ImgDet&rs=1"  className="img-fluid img-transperent mx-5 my-4 h-25 w-25 " />
       </div>
       </> 
    )
}
export default article