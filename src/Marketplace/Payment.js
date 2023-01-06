import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PaymentLogo from './svgs/Payment/PaymentLogo.png'
import QRCode from './svgs/Payment/QRCode.svg'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PaymentPurple8Star1 from './svgs/Payment/PaymentPurple8Star1.svg'
import PaymentBlue4Star1 from './svgs/Payment/PaymentBlue4Star1.svg'
import PaymentPurple4Star1 from './svgs/Payment/PaymentPurple4Star1.svg'
import PaymentYellow4Star1 from './svgs/Payment/PaymentYellow4Star1.svg'
import PaymentOrange8Star1 from './svgs/Payment/PaymentOrange8Star1.svg'
import PaymentWhite4Star1 from './svgs/Payment/PaymentWhite4Star1.svg'
import PaymentYellow4Star2 from './svgs/Payment/PaymentYellow4Star2.svg'
import PaymentBlue8Star1 from './svgs/Payment/PaymentBlue8Star1.svg'

import PaymentOrange8Star2 from './svgs/Payment/PaymentOrange8Star2.svg'
import PaymentPurple4Star2 from './svgs/Payment/PaymentPurple4Star2.svg'
import PaymentWhite4Star2 from './svgs/Payment/PaymentWhite4Star2.svg'
import PaymentYellow8Star1 from './svgs/Payment/PaymentYellow8Star1.svg'
import PaymentBlue4Star2 from './svgs/Payment/PaymentBlue4Star2.svg'
import PaymentOrange8Star3 from './svgs/Payment/PaymentOrange8Star3.svg'

import PaymentOrange8Star4 from './svgs/Payment/PaymentOrange8Star4.svg'
import PaymentBlue4Star3 from './svgs/Payment/PaymentBlue4Star3.svg'
import PaymentYellow8Star2 from './svgs/Payment/PaymentYellow8Star2.svg'
import PaymentPurple4Star3 from './svgs/Payment/PaymentPurple4Star3.svg'
import PaymentBlue8Star2 from './svgs/Payment/PaymentBlue8Star2.svg'
import PaymentOrange4Star1 from './svgs/Payment/PaymentOrange4Star1.svg'
import PaymentYellow4Star3 from './svgs/Payment/PaymentYellow4Star3.svg'
import PaymentBlue8Star3 from './svgs/Payment/PaymentBlue8Star3.svg'

import PaymentYellow8Star3 from './svgs/Payment/PaymentYellow8Star3.svg'
import PaymentOrange4Star2 from './svgs/Payment/PaymentOrange4Star2.svg'
import PaymentPurple8Star2 from './svgs/Payment/PaymentPurple8Star2.svg'
import PaymentBlue4Star4 from './svgs/Payment/PaymentBlue4Star4.svg'
import PaymentYellow8Star4 from './svgs/Payment/PaymentYellow8Star4.svg'
import PaymentOrange8Star5 from './svgs/Payment/PaymentOrange8Star5.svg'
import PaymentPurple4Star4 from './svgs/Payment/PaymentPurple4Star4.svg'
import PaymentBlue8Star4 from './svgs/Payment/PaymentBlue8Star4.svg'
import PaymentYellow4Star4 from './svgs/Payment/PaymentYellow4Star4.svg'

import PaymentBlueDot from './svgs/Payment/PaymentBlueDot.svg'
import PaymentOrangeDot from './svgs/Payment/PaymentOrangeDot.svg'
import PaymentWhiteDot from './svgs/Payment/PaymentWhiteDot.svg'
import PaymentYellowDot from './svgs/Payment/PaymentYellowDot.svg'
import PaymentPurpleDot from './svgs/Payment/PaymentPurpleDot.svg'



const Payment = () => {

  const orderForm = {
    "_id": {
      "$oid": "61f7cebaae0d253ed442e47c"
    },
    "name": "Jia Jia",
    "contactNumber": "96574796",
    "emailAddress": "jfoo027@e.ntu.edu.sg",
    "purchases": [],
    "total": 22,
    "buyer": {
      "$oid": "61f77c29ae0d253ed442e47a"
    },
    "datetime": "2022-01-31T19:57:46+08:00",
    "orderNumber": "GZ64JG",
    "verified": true
  }

  const classNames = {
    activeRadio: "inline-flex justify-between items-center p-3 w-full text-white bg-gray-400 rounded-lg border border-black cursor-pointer peer-checked:bg-NAFPurple",
    disabledRadio:
      "inline-flex justify-between items-center p-3 w-full text-gray-500 bg-gray-700 rounded-lg border border-black cursor-pointer peer-checked:bg-NAFPurple",

  };
  const state = useSelector((state) => {
    return state;
  });

  const [collection, setCollection] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name.includes("radio")) {
      setCollection(values => ({ ...values, [name]: value }))
    }
  }
  const [products, setProducts] = useState([]);
  const [subtotalPrice, setSubtotal] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(state.addedProducts)
    var total = 0;
    for (let oneProduct of state.addedProducts) {
      total += oneProduct.totalEarned;
    }
    setSubtotal(total > 0 ? total : 0)
    setTotalPrice(total > 0 ? total : 0);
  }, []);

  function updateOrderForm(data) {
    orderForm.name = data.name;
    orderForm.emailAddress = data.email;
    orderForm.contactNumber = data.contactnumber;
    var allPurchases = []
    for (var i = 0; i < state.addedProducts.length; i++) {
      var oneProduct = state.addedProducts[i]
      var purchase = {
        productId: oneProduct._id,
        vendorId: oneProduct.vendorId,
        quantityBought: oneProduct.quantityBought,
        collection: collection["radio" + i],
        collectionDate: "placeholder",
        datetime: "placeholder",
        productName: oneProduct.productName,
        colours: oneProduct.colours,
        sizes: oneProduct.sizes,
        price: oneProduct.price,
        vendorName: oneProduct.vendorName,
        totalQuantity: oneProduct.quantitySold,
        total: oneProduct.totalEarned
      }
      allPurchases.push(purchase)
    }
    orderForm.purchases = allPurchases;
  }


  const schema = yup.object().shape({
    name: yup.string().required("Name is required").min(6),
    contactnumber: yup.string().required("Contact Number is required").min(6,"Please enter a valid contact number"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  // on submit is only executed if the form is valid
  const onSubmit = (data, e) => {
    var collectionLength = Object.keys(collection).length;
    if (collectionLength != state.addedProducts.length) {
      alert("Please select delivery option for all products.")
    }
    else {
      updateOrderForm(data);
      console.log(orderForm);
    }

  };
  // console.log(errors);

  return (
    <div class="relative bg-NAFPink">
      <div class="relative">
        <img src={PaymentPurple8Star1} class="absolute top-[-0.5%] left-[0%] w-[12%]"></img>
        <img src={PaymentOrangeDot} class="absolute top-[18.3%] left-[18.6%] w-[1.7%]"></img>
        <img src={PaymentBlue4Star1} class="absolute top-[8.2%] left-[25.7%] w-[4.5%]"></img>
        <img src={PaymentYellowDot} class="absolute top-[16.8%] right-[19.5%] w-[1.7%]"></img>
        <img src={PaymentPurple4Star1} class="absolute top-[11%] right-[4.7%] w-[7.8%]"></img>
        <img src={PaymentWhiteDot} class="absolute top-[38%] right-[2.9%] w-[1.7%]"></img>
        <img src={PaymentYellow4Star1} class="absolute top-[37%] left-[14.1%] w-[6.4%]"></img>
        <img src={PaymentOrange8Star1} class="absolute top-[42.3%] right-[12%] w-[8.6%]"></img>
        <img src={PaymentWhite4Star1} class="absolute top-[64%] left-[5%] w-[6.7%]"></img>
        <img src={PaymentBlueDot} class="absolute top-[73.2%] left-[22%] w-[1.7%]"></img>
        <img src={PaymentYellow4Star2} class="absolute top-[80.2%] right-[23.8%] w-[4%]"></img>
        <img src={PaymentBlue8Star1} class="absolute top-[53.3%] right-[0%] w-[16%]"></img>

        <div class="py-28 mx-auto w-[70%] lg:w-[45%]">
          <img src={PaymentLogo} class="mx-auto"></img>
          <p class="py-4 font-syne text-white text-center text-4xl">Thank you for shopping with us!</p>
        </div>
      </div>

      <div class="relative overflow-hidden">
        {/* Left side */}
        <img src={PaymentPurpleDot} class="absolute top-[116px] left-[0.5%] w-[1.7%]"></img>
        <img src={PaymentOrange8Star4} class="absolute top-[210px] left-[0%] w-[11.1%]"></img>
        <img src={PaymentBlue4Star3} class="absolute top-[490px] left-[0%] w-[6%]"></img>
        <img src={PaymentWhiteDot} class="absolute top-[585px] left-[4%] w-[1.7%]"></img>
        <img src={PaymentYellow4Star3} class="absolute bottom-[360px] left-[0%] w-[6.87%]"></img>
        <img src={PaymentWhiteDot} class="absolute bottom-[315px] left-[3.33%] w-[1.7%]"></img>
        <img src={PaymentBlue8Star3} class="absolute bottom-[130px] left-[0%] w-[6.45%]"></img>
     
        {/* Right side */}
        <img src={PaymentYellow8Star3} class="absolute top-[150px] right-[0.5%] w-[10%]"></img>
        <img src={PaymentPurpleDot} class="absolute top-[310px] right-[1%] w-[1.7%]"></img>
        <img src={PaymentOrange4Star2} class="absolute top-[400px] right-[0%] w-[6.5%]"></img>
        <img src={PaymentPurple8Star2} class="absolute top-[620px] right-[0%] w-[8.1%]"></img>
        <img src={PaymentYellowDot} class="absolute bottom-[460px] right-[0.9%] w-[1.7%]"></img>
        <img src={PaymentBlue8Star4} class="absolute bottom-[240px] right-[0%] w-[9%]"></img>
        <img src={PaymentYellow4Star4} class="absolute bottom-[50px] right-[0%] w-[7.76%]"></img>
        



        <div class="relative w-[95%] lg:w-[85%] mx-auto h-fit bg-white border-4 border-black z-20">
          <div class="pt-6 lg:pt-16 pb-12 px-15 w-[90%] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 lg:mb-12">
                <label
                  className={`font-syneBold text-lg lg:text-3xl ${errors.name ? "text-red-400" : "text-black"}`}>Name:</label>
                <input
                  className={`outline-none border-3 w-[100%] px-2 mt-4 font-syne text-3xl leading-loose placeholder-gray-200 ${errors.name ? "border-red-400" : "border-black"}`}
                  type="text" name="name" placeholder="name"  {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-md lg:text-lg mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-6 lg:mb-12">
                <label className={`font-syneBold text-lg lg:text-3xl ${errors.contactnumber ? "text-red-400" : "text-black"}`}>Contact number:</label>
                <input className={`outline-none border-3 w-[100%] px-2 mt-4 font-syne text-3xl leading-loose placeholder-gray-200 ${errors.contactnumber ? "border-red-400" : "border-black"}`}
                  type="text" name="contactnumber" placeholder="contact number"{...register("contactnumber")} />
                {errors.contactnumber && (
                  <p className="text-red-500 text-md lg:text-lg mt-2">
                    {errors.contactnumber.message}
                  </p>
                )}
              </div>
              <div className="mb-6 lg:mb-12">
                <label className={`font-syneBold text-lg lg:text-3xl ${errors.email ? "text-red-400" : "text-black"}`}>Email address:</label>
                <input
                  className={`outline-none border-3 w-[100%] px-2 mt-4 font-syne text-3xl leading-loose placeholder-gray-200 ${errors.email ? "border-red-400" : "border-black"}`}
                  type="text" name="email" placeholder="email address" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-md lg:text-lg mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>



              <div class="mt-4">
                <p class="font-syneBold text-lg lg:text-3xl">Choose self-collection or delivery for each item:</p><br></br>
                <p class="font-syne text-md lg:text-2xl">
                  For self-collection, the vendor will be in contract with you.<br></br>
                  For delivery, check your email for delivery details.
                </p>
              </div>

              {/* insert data here */}
              {products.map((product, i) => {
                return <div class="mt-12 md:mt-8 lg:mt-4 flex items-center">
                  <div class="basis-2/4">
                    <div class="font-bold mb-3">{product.name}</div>
                    <div>Vendor: {product.vendorName}</div>
                    <div>Qty: {product.quantitySold > 0 ? product.quantitySold : 0}</div>
                    <div>Price: ${product.price}</div>
                  </div>
                  <div class="basis-2/4">
                    <ul class="grid gap-6 w-full md:grid-cols-2">
                      <li>
                        <input type="radio" id={"small" + i} name={"radio" + i} value={"self-collect"} class="hidden peer" disabled={product.canCollect ? false : true} onChange={handleChange}/>
                        <label for={"small" + i} className={product.canCollect ? classNames.activeRadio : classNames.disabledRadio} >
                          <div class="block text-center w-[100%]">
                            <div class="w-full text-m font-semibold">Self-Collection</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" id={"big" + i} name={"radio" + i} value={"delivery"} class="hidden peer" disabled={product.canDeliver ? false : true} onChange={handleChange}/>
                        <label for={"big" + i} className={product.canDeliver ? classNames.activeRadio : classNames.disabledRadio}>
                          <div class="block text-center w-[100%]">
                            <div class="w-full text-lg font-semibold">Delivery</div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>



                </div>
              })
              }
              


              <div class="flex flex-row  mt-20 lg:my-12 flex-wrap">
              <div class="w-[100%] md:hidden">
                  <img class="" src={QRCode}></img>
                </div>
                <div class="relative w-[100%] md:w-[50%]">
                  <p class="font-syne text-xl lg:text-3xl">Subtotal: ${subtotalPrice}</p><br></br>
                  <p class="font-syne text-xl lg:text-3xl">Shipping: $X.XX</p>
                  <p class="font-syneBold text-3xl lg:text-5xl mb-24 mt-12 lg:mb-24 lg:mt-24">Total: ${totalPrice}</p>
                  <button type="submit" class="absolute bottom-[0] bg-NAFBlue text-xl md:text-3xl font-syne text-white py-3 px-14 border-2 border-black rounded-lg">Submit</button>
                </div>

                <div class="hidden md:block w-[50%]">
                  <img class="float-right" src={QRCode}></img>
                </div>
              </div>
            </form>


          </div>


        </div>
      </div>


      <div class="relative py-24">
        <img src={PaymentOrange8Star2} class="absolute top-[-38%] left-[0%] w-[7.2%]"></img>
        <img src={PaymentPurple4Star2} class="absolute top-[20%] left-[10.6%] w-[7%]"></img>
        <img src={PaymentWhite4Star2} class="absolute top-[24.5%] left-[27.4%] w-[4.5%]"></img>
        <img src={PaymentBlueDot} class="absolute top-[47.4%] left-[39%] w-[1.7%]"></img>
        <img src={PaymentYellow8Star1} class="absolute top-[14%] left-[47.3%] w-[9%]"></img>
        <img src={PaymentOrangeDot} class="absolute top-[30%] left-[62.6%] w-[1.7%]"></img>
        <img src={PaymentBlue4Star2} class="absolute top-[30%] right-[22.5%] w-[6%]"></img>
        <img src={PaymentWhiteDot} class="absolute top-[36.6%] right-[11.1%] w-[1.7%]"></img>
        <img src={PaymentOrange8Star3} class="absolute top-[-12%] right-[0%] w-[11%]"></img>
      </div>
    </div >
  )
}

export default Payment