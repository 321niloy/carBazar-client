import { useContext, useEffect, useState } from "react";
import Axios from "../Axios";
import { Authcontext } from "../../context/AuthProvider";

 const PaymentId = () =>{
    const [payments,setPayment] = useState([])
    const {user} =useContext(Authcontext)

    useEffect(() =>{
      if (user && user.email) {
        const url = `/payment?email=${encodeURIComponent(user.email)}`
        Axios.get(url)
        .then(res =>{
            console.log("payment",res)
            setPayment(res)
        })
        .catch(error=>{
            console.log(error)
        })
      }
    },[user])
    return (
        <div>
            <h1 className="my-7 text-center text-5xl text-orange-500">Payment Id number</h1>
            <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr>
    <th>Email</th>
    <th>Total</th>
    <th>Transaction Id</th>
  </tr>
</thead>
<tbody>
  {/* */}
{
payments?.map(payment =>      <tr>
<td>
  <div className="flex items-center space-x-3">
    <div>
      <div className="font-bold">{payment.email}</div>
     
    </div>
  </div>
</td>
<td>
  {payment.total}

</td>
<td>{payment.transactionId}</td>


</tr>)
}
{/*  */}

</tbody>

</table>
</div>
        </div>
    )
}

export default PaymentId;