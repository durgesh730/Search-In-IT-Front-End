import React, { useState } from 'react'
import '../style/dash.css';
import { FaShoppingBag } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

function Dash() {

  var [open] = useState(false);

  function handleOpen(){
      if(open === false ){
        document.getElementById("mySidenav").style.width = "0px";
        open = true;
      }
      else{
        document.getElementById("mySidenav").style.width = "250px";
        open = false;
      }
  }

  return (
    <>


      <div class="topnav">
        <form className='form' action="/action_page.php">
          <input type="text" placeholder="Search for.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <div className='righticons' >
          <a href='' className='desktop' ><IoMdNotificationsOutline /></a>
          <a href='' className='avatar desktop ' ><RxAvatar /></a>
          <span onClick={handleOpen} id='sideIcon' className='sideNavIcon' ><RxHamburgerMenu/></span>
        </div>
      </div>

      <div className='dashbord' >
        <div className='leftside' >
          <div className='icons' > <span style={{ color: "blue" }} > <FaShoppingBag /></span>  <a href=''>Search-In</a></div>
          <div><a href=''> Dashboard </a></div>
          <div><a href=''> Dispatch </a></div>
          <div><a href=''> Inventory Management </a></div>
          <div><a href=''> Live Update </a></div>
          <div><a href=''> Emplopee Admin </a></div>
          <div><a href=''> Formulate </a></div>
          <div><a href=''> POS Panel </a></div>
          <div><a href=''> Ledger Management </a></div>
          <div><a href=''> Barcode Linst </a></div>
        </div>
        <div className='topBody' >
        </div>
      </div>

      {/* ================== for phone nav =============== */}

      <div className='sidenav' id="mySidenav" >
          <div className='icons'  > <span style={{ color: "blue" }} > <FaShoppingBag /></span>  <a href=''>Search-In</a></div>
          <div><a href=''> Dashboard </a></div>
          <div><a href=''> Dispatch </a></div>
          <div><a href=''> Inventory Management </a></div>
          <div><a href=''> Live Update </a></div>
          <div><a href=''> Emplopee Admin </a></div>
          <div><a href=''> Formulate </a></div>
          <div><a href=''> POS Panel </a></div>
          <div><a href=''> Ledger Management </a></div>
          <div><a href=''> Barcode Linst </a></div>
      </div>

      {/* =============== Dispatch =========================== */}

      <div className='dispatch' >
        <div> <h2>Dispatch</h2></div>
        <div className='both'>
          <div className='tablerow' >
            <table className='firsttable' >
              <tr>
                <td className='head' >Order Id </td>
                <td className='head' >Mobile Number</td>
                <td className='head' >Date/Time </td>
                <td className='head' >LandMarks</td>
                <td className='head'>Address </td>
                <td className='head' >Status</td>
                <td className='head' > <div class="row">
                  <div class="col-25">
                    <label for="country">Emplopee Names</label>
                  </div>
                </div>
                </td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>


              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>

              <tr>
                <td>163</td>
                <td>7057315698</td>
                <td>2022-12-08</td>
                <td>Pune</td>
                <td>Pune...</td>
                <td className='status' > <BsFillCheckCircleFill /></td>
                <td><div class="col-75">
                  <select className='country' id="country" name="country">
                    <option value="australia">Durgesh</option>
                    <option value="canada">Umesh</option>
                    <option value="usa">Sayam</option>
                  </select>
                </div></td>
                <td> <div className='assign'> <span> Assign </span> </div></td>
              </tr>
            </table>
          </div>

          <div className='sidetable' >
            <div className='others' >
              <div> <span style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Date: <span style={{ fontSize: ".72rem", color: "black" }} >2022-12-08 </span>  </span> </div>
              <div>  <span style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Order Id:  <span style={{ fontSize: ".72rem", color: "black" }} >165 </span>    </span> </div>
              <div> <span style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Customer Name: <span style={{ fontSize: ".72rem", color: "black" }} > Ankit Patil </span>   </span> </div>
              <div><span style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Address: <span style={{ fontSize: ".72rem", color: "black", textAlign: "center" }} >   51A, wingC, phase, saiPujaBaaug, Akurdi </span>  </span> </div>
            </div>

            <div>
              <table className='lasttable'  >
                <tr>
                  <td style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Product Name</td>
                  <td style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Quality</td>
                  <td style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Price</td>
                  <td style={{ fontSize: ".68rem", color: "rgb(154, 154, 156)" }} >Total</td>
                </tr>
                <tr>
                  <td>Paper  Boat Chill <br /> 150MI </td>
                  <td>1</td>
                  <td>20.00</td>
                  <td>20.00</td>
                </tr>
                <tr>
                  <td>Paper  Boat Chill <br /> 150MI </td>
                  <td>1</td>
                  <td>20.00</td>
                  <td>20.00</td>
                </tr>
                <hr style={{ width: "240%", }} />
                <tr>
                  <td>Total</td>
                  <td>4</td>
                  <td></td>
                  <td>₹40.00</td>
                </tr>
              </table>
            </div>

            <div className='lastbtn' >
              <button>Print</button>
            </div>

          </div>

        </div>
      </div>

      <div className='footer2'>
        <span>Copyright @ Search-In </span>
      </div>

    </>
  )
}

export default Dash
