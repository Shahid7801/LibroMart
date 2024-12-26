import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import QR from "../../assets/qr.jpg";
import { FaSpinner } from "react-icons/fa"; // Importing loading spinner icon
import { Link } from "react-router-dom"; //for update price
import { useLocation } from "react-router-dom";

const PaymentPage = () => {

  const location = useLocation(); // Use this to access the state passed from CartPage
  const totalAmount = location.state?.totalAmount || 0; // Default to 0 if totalAmount is not passed

  const [paymentMethod, setPaymentMethod] = useState(""); // Track selected payment method
  const [upi, setUpi] = useState(""); // Store UPI ID
  const [upiPin, setUpiPin] = useState(""); // Store UPI PIN
  const [upiValid, setUpiValid] = useState(false); // Track UPI validation state
  const [upiPinValid, setUpiPinValid] = useState(false); // Track UPI PIN validation state
  const [qrCodeVisible, setQrCodeVisible] = useState(false); // Show QR Code
  const [qrCodeTimer, setQrCodeTimer] = useState(30); // QR code timer
  const [orderConfirmed, setOrderConfirmed] = useState(false); // Track order confirmation
  const [isProcessing, setIsProcessing] = useState(false); // Track payment processing state
  const [qrProcessing, setQrProcessing] = useState(false); // Track QR code scan processing

  useEffect(() => {
    let timer;
    if (qrCodeVisible && qrCodeTimer > 0) {
      timer = setTimeout(() => setQrCodeTimer((prev) => prev - 1), 1000);
    } else if (qrCodeTimer === 0) {
      setQrCodeVisible(false);
      Swal.fire("QR Code Expired", "Please try to pay again.", "info");
    }
    return () => clearTimeout(timer);
  }, [qrCodeVisible, qrCodeTimer]);

  const validateUpi = () => {
    const upiRegex = /^[\w.-]+@[\w.-]+$/; // UPI ID validation regex
    if (upiRegex.test(upi)) {
      setUpiValid(true);
      Swal.fire("Valid UPI", `Please pay Rs. ${totalAmount} to ${upi}.`, "success");
    } else {
      setUpiValid(false);
      Swal.fire("Invalid UPI", "The UPI ID is not valid.", "error");
    }
  };

  const validateUpiPin = () => {
    // Simulating UPI PIN validation (you can replace this with real validation logic)
    const validPin = /^[0-9]{4}$/; // UPI PIN should be 6 digits
    if (validPin.test(upiPin)) {
      setUpiPinValid(true);
      Swal.fire("UPI PIN Valid", "Payment has been initiated for the given UPI PIN.", "success");
      handlePaymentProcessing(); // Simulate payment processing
    } else {
      setUpiPinValid(false);
      Swal.fire("Invalid UPI PIN", "The entered UPI PIN is not valid.", "error");
    }
  };

  const handlePaymentProcessing = () => {
    setIsProcessing(true); // Set processing state to true
    setTimeout(() => {
      handlePaymentSuccess(); // Simulate payment success after a delay
    }, 2000); // Simulate payment delay (2 seconds)
  };

  const handlePaymentSuccess = () => {
    setIsProcessing(true); // Set processing state to false after payment is complete
    setOrderConfirmed(true);
  
    // Show the success message and set a 5-second delay before redirecting
    Swal.fire({
      title: "Payment Successful",
      text: "Your payment has been successfully processed.",
      icon: "success",
      timer: 2000, // Show message for 5 seconds
      timerProgressBar: true, // Show progress bar
      didClose: () => {
        setTimeout(() => {
          window.location.href = "/orders"; // Redirect to orders page after 5 seconds
        }, 2000); // The timeout ensures navigation happens after Swal closes
      }
    });
  };

  const handleQrScan = () => {
    setQrProcessing(true); // Set QR code scan processing state
    setTimeout(() => {
      setQrProcessing(false); // Simulate QR scan completion after 2 seconds
      handlePaymentSuccess(); // Simulate successful payment after QR scan
    }, 5000); // Simulate scan delay (2 seconds)
  };

  const handleConfirmOrder = () => {
    Swal.fire({
      title: "Order Confirmed",
      text: "Your order has been placed successfully!",
      icon: "success",
    });
    setOrderConfirmed(true);
    setTimeout(() => {
      window.location.href = "/orders"; // Redirect to orders page after 2 seconds
    }, 2000);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setUpi(""); // Clear UPI input
    setUpiPin(""); // Clear UPI PIN input
    setUpiValid(false); // Reset UPI validation state
    setUpiPinValid(false); // Reset UPI PIN validation state
    setQrCodeVisible(false); // Hide QR code initially
    setQrCodeTimer(30); // Reset QR code timer
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="container max-w-lg p-6 bg-white shadow-lg rounded">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Select Payment Method
        </h2>

        {/* Show Total Amount */}
        <div className="text-lg font-semibold text-gray-700 mb-4">
          Total Amount: Rs. {totalAmount}.00
        </div>
        {/* Payment Method Selection */}
        {!paymentMethod && (
          <div>
            <label className="block mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
              />
              Cash on Delivery (COD)
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
              />
              UPI
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="qr"
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
              />
              QR Code
            </label>
          </div>
        )}

        {/* Cash on Delivery */}
        {paymentMethod === "cod" && (
          <div className="mt-4 text-center">
            <p className="text-gray-700">Please confirm your order:</p>
            <button
              onClick={handleConfirmOrder}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Confirm Order
            </button>
          </div>
        )}

        {/* UPI Payment */}
        {paymentMethod === "upi" && (
          <div className="mt-4">
            <label className="block text-gray-700">Enter UPI ID:</label>
            <input
              type="text"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
            />
            <button
              onClick={validateUpi}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Validate UPI
            </button>

            {upiValid && (
              <div className="mt-4">
                <label className="block text-gray-700">Enter UPI PIN:</label>
                <input
                  type="password"
                  value={upiPin}
                  onChange={(e) => setUpiPin(e.target.value)}
                  className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
                />
                <button
                  onClick={validateUpiPin}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Validate UPI PIN
                </button>
              </div>
            )}
          </div>
        )}

        {/* QR Code Payment */}
        {paymentMethod === "qr" && (
          <div className="mt-4 text-center">
            {!qrCodeVisible ? (
              <button
                onClick={() => setQrCodeVisible(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Show QR Code
              </button>
            ) : (
              <>
                <p className="text-gray-700">Scan this QR Code to Pay:</p>
                <img
                  src={QR} // Replace with your QR code URL
                  alt="QR Code"
                  className="mt-2 mx-auto w-1/2 items-center"
                />
                <p className="text-red-600 mt-2">
                  QR Code will expire in {qrCodeTimer} seconds.
                </p>
                <button
                  onClick={handleQrScan} // Simulate QR scan completion
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Confirm QR Scan
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Payment Processing or Success Message */}
      {isProcessing && !qrProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <FaSpinner className="animate-spin text-blue-500 text-4xl mb-4" />
            <p className="text-gray-700">Processing Payment...</p>
          </div>
        </div>
      )}

      {/* QR Code Scan Processing */}
      {qrProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <FaSpinner className="animate-spin text-blue-500 text-4xl mb-4" />
            <p className="text-gray-700">Scanning QR Code...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;










