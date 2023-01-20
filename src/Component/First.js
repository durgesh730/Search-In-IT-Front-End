import React from 'react'
import pic from '../image/16.png'
import '../style/First.css'
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const First = () => {
    return (
        <> 
        <div className='body'>

          <div className=' navigate'>
               <Link to='/dash' >Dashboard</Link>
          </div>

            <div className='payments' >
                <div className='startPay' >
                    <div className='paymentItemfirst'>
                        <div> <span>Name</span> </div>
                        <div> <span>Qantity</span> </div>
                        <div> <span>Cost</span> </div>
                    </div>

                    <div className='paymentItemsecond'>

                        <div>
                            <div> <span>Godrej Cinthol Cool</span> </div>
                            <div> <span>Soap 75*3gm </span> </div>
                        </div>
                        <div className='right' >
                            <div> <span>1</span> </div>
                            <div> <span>₹ 102 </span> </div>
                            <div> <span> <AiTwotoneDelete /> </span> </div>
                        </div>

                    </div>

                    <div className='paymentItemThird'>
                        <div className='pay' > <span> Discount: ₹20 </span> </div>
                        <div className='pay' > <span>Tax: ₹ 10 </span> </div>
                        <div> <span> Total Cost: ₹ 102 </span> </div>
                        <div className='pay' > <span> Total Quantity: ₹ 1 </span> </div>
                    </div>

                    <div className='button'>
                        <button className='btn2' > Conform Order</button></div>

                </div>
            </div>

            <div className='container' >
                <div className='cards' >
                    <div className='cardsline' >
                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>

                            <div> <button className='btn' >add</button> </div>
                        </div>

                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>
                    </div>

                    <div className='cardsline2' >
                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                    </div>

                    <div className='cardsline2' >
                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                        <div className='cardfirst' >
                            <div><img src={pic} alt="img" /></div>
                            <div className='ItemName' ><span>Godrej Cinthol</span></div>
                            <div> <small>Lime Soap 75*3 </small> </div>
                            <div><span> ₹114.0 </span> </div>
                            <div> <button className='btn' >add</button> </div>
                        </div>

                    </div>
                </div>

                <div className='payment' >
                    <div className='startPay' >
                        <div className='paymentItemfirst'>
                            <div> <span>Name</span> </div>
                            <div> <span>Qantity</span> </div>
                            <div> <span>Cost</span> </div>
                        </div>

                        <div className='paymentItemsecond'>

                            <div>
                                <div> <span>Godrej Cinthol Cool</span> </div>
                                <div> <span>Soap 75*3gm </span> </div>
                            </div>
                            <div className='right' >
                                <div> <span>1</span> </div>
                                <div> <span>₹ 102 </span> </div>
                                <div> <span> <AiTwotoneDelete /> </span> </div>
                            </div>

                        </div>

                        <div className='paymentItemThird'>
                            <div className='pay' > <span> Discount: ₹20 </span> </div>
                            <div className='pay' > <span>Tax: ₹ 10 </span> </div>
                            <div> <span> Total Cost: ₹ 102 </span> </div>
                            <div className='pay' > <span> Total Quantity: ₹ 1 </span> </div>
                        </div>

                        <div className='button'>
                            <button className='btn2' > Conform Order</button></div>

                    </div>
                </div>
            </div>

            <div className='footer'>
                <span>Copyright @ Search-In </span>
            </div>

            </div> 
        </>
    )
}

export default First
