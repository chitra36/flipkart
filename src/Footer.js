import "./assets/app.css"

const Footer = () => {
    return (
      <footer className="footer  py-3 bg-dark justify-content-center ">
        <div className="container text-center d-flex  ">
           <ul className="mx-5 ">

        <li > 
            <a className="text-white text-decoration-none" >Address</a>
        </li>
        <li>
            <a className="text-white text-decoration-none">A108 adamStreet</a>
           
        </li>
        <li>
            <a className="text-white text-decoration-none">Address</a>
        </li>
           </ul>
     <ul className="mx-5">

<li>
    <a className="text-white text-decoration-none">Reservation</a>
</li>
<li>
    <a className="text-white text-decoration-none">Phone:+1 55895548855</a>
</li>
<li>
    <a className="text-white text-decoration-none">Email:info@example.com</a>
</li>
   </ul>
           
   <ul className="mx-5">

<li>
    <a className="text-white text-decoration-none">Opening Hours</a>
</li>
<li>
    <a className="text-white text-decoration-none">Mon-Sat:11AM-23PM</a>
</li>
<li>
    <a className="text-white text-decoration-none">Sunday:Closed</a>
</li>
   </ul>
   <ul className="mx-4">

        <li className="mx-4">
            <a className="text-decoration-none text-white">Folow Us</a>
        </li>
        
           </ul>
           
        </div>
        <hr className="my-2 bg-secondery" />
          <span className="text-white  mx-5 text-center ">© 2023 Your Company. All rights reserved.</span>
      </footer>
    );
  };
  
  export default Footer;