import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { userContext } from "../../App";
import ProcessPayment from "./../Payment/ProcessPayment";
import Footer from "./../Footer/Footer";

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser] = useContext(userContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [shippingData, setShippingData] = useState(null);
  const [status] = useState("pending");

  const onSubmit = (data) => {
    setShippingData(data);
    console.log(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      product,
      shipment: shippingData,
      status,
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data, "order");
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/product/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <div className="container bg-white p-5">
        {!shippingData ? (
          <>
            <h4 class="mb-3 text-center">Billing address</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row g-3">
                <div class="col-12">
                  <label for="Name" class="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    defaultValue={loggedInUser.name || loggedInUser.displayName}
                    ref={register}
                    class="form-control"
                  />
                  {errors.name && (
                    <span className="error">Name is required</span>
                  )}

                  <div class="pt-3">
                    <label for="email" class="form-label">
                      Email <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="consumerEmail"
                      defaultValue={loggedInUser.email}
                      ref={register}
                      class="form-control"
                      id="consumerEmail"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="pt-3">
                    <label for="Name" class="form-label">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      pattern="[0-9]{11}"
                      ref={register}
                      class="form-control"
                      required
                    />
                    {errors.phone && (
                      <span className="error">Phone is required</span>
                    )}
                  </div>

                  <div class="pt-3">
                    <label for="address" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      ref={register}
                      class="form-control"
                      id="address"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="row pt-3">
                    <div class="col-md-5 mb-3">
                      <label for="division" class="form-label">
                        Division
                      </label>
                      <select
                        name="division"
                        class="custom-select d-block w-100"
                        ref={register}
                        id="division"
                        required
                      >
                        <option disabled value="">
                          Choose...
                        </option>
                        <option>Barishal</option>
                        <option>Chittagong</option>
                        <option>Dhaka</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Rajshahi</option>
                        <option>Rangpur</option>
                        <option>Sylhet</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid division.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="district" class="form-label">
                        District
                      </label>
                      <input
                        name="district"
                        ref={register}
                        class="form-control"
                        id="district"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="zip" class="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        name="zip"
                        ref={register}
                        class="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <div className="px-3 pt-2">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="save-info"
                    />
                    <label class="custom-control-label" for="save-info">
                      Save this information for next time
                    </label>
                  </div>
                </div>
              </div>

              <hr class="my-4" />

              <div className="text-center">
                <input className="btn btn-primary btn-lg px-5" type="submit" />
              </div>
            </form>
          </>
        ) : (
          <>
            <h4 class="mb-3 text-center">Payment</h4>
            <div class="my-3">
              <div class="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  checked
                  required
                />
                <label class="form-check-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="form-check">
                <input
                  id="bKash"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required
                />
                <label class="form-check-label" for="bKash">
                  bKash
                </label>
              </div>
            </div>
            <label for="cc-name" class="form-label">
              Name on card
            </label>
            <input
              type="text"
              class="form-control"
              id="cc-name"
              placeholder=""
              required
            />
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">Name on card is required</div>
            <br />
            <br />
            <label for="creditCard">Credit Card</label>
            <div className="mt-3">
              <ProcessPayment
                shippingData={shippingData}
                handlePayment={handlePaymentSuccess}
              ></ProcessPayment>
            </div>
          </>
        )}
      </div>
      <Footer className="container bg-dark" />
    </>
  );
};

export default Shipment;
