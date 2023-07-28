import "./assets/app.css"
export default function Navbar(){
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
   <h4 className="navbar-brand  fs-3  mx-5">Yummy</h4>
   <div className="container-fluid justify-content-center ">
  {/* < a className="navbar-brand  fs-3 " href="#">Yummy</a> */}
 
   <ul className="nav ">
    <li className="nav-item">
 <a className="nav-link active text-secondary " aria-current="page" href="#"> Home</a>
    </li>
    <li className="nav-item">
 <a className="nav-link active text-secondary" aria-current="page" href="#"> About</a>
    </li>
    <li className="nav-item">
 <a className="nav-link active text-secondary" aria-current="page" href="#"> Menu</a>
    </li>
    <li className="nav-item">
 <a className="nav-link active text-secondary" aria-current="page" href="#"> Events</a>
    </li>
    <li className="nav-item text-secondary">
 <a className="nav-link active text-secondary" aria-current="page" href="#"> Chefs</a>
    </li>
    <li className="nav-item">
 <a className="nav-link active text-secondary" aria-current="page" href="#"> Gallery</a>
    </li>
    <li className="nav-item dropdown text-secondary">
          <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
    <li className="nav-item">
 <a className="nav-link active text-secondary" aria-current="page" href="#"> Contact</a>
    </li>
   </ul>
   <button type="button" className="btn btn-danger rounded-pill  mx-5">Book a Table</button>
    
   </div>

   </nav>

    </>
  )
}