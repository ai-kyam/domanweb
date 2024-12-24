import React from "react";

const CancellationRefundPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Cancellation & Refund Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last updated on 25-12-2024 02:05:54
        </p>

        <div className="space-y-6 text-gray-800">
          <p>
            <strong>SOUMYENDU DAS</strong> believes in helping its customers as
            far as possible, and has therefore a liberal cancellation policy.
            Under this policy:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Cancellations will be considered only if the request is made
              immediately after placing the order. However, the cancellation
              request may not be entertained if the orders have been
              communicated to the vendors/merchants and they have initiated the
              process of shipping them.
            </li>
            <li>
              <strong>SOUMYENDU DAS</strong> does not accept cancellation
              requests for perishable items like flowers, eatables, etc.
              However, refund/replacement can be made if the customer
              establishes that the quality of the product delivered is not
              good.
            </li>
            <li>
              In case of receipt of damaged or defective items, please report
              the same to our Customer Service team. The request will, however,
              be entertained once the merchant has checked and determined the
              same at their own end. This should be reported within the same
              day of receipt of the products.
            </li>
            <li>
              In case you feel that the product received is not as shown on the
              site or as per your expectations, you must bring it to the notice
              of our Customer Service within the same day of receiving the
              product. The Customer Service Team, after looking into your
              complaint, will take an appropriate decision.
            </li>
            <li>
              In case of complaints regarding products that come with a
              warranty from manufacturers, please refer the issue to them.
            </li>
            <li>
              In case of any refunds approved by <strong>SOUMYENDU DAS</strong>,
              it will take 6-8 days for the refund to be processed to the end
              customer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
