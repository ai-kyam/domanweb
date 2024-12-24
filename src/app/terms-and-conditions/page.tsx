import React from 'react';

const DomainTermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-8">
          Terms & Conditions
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our domain services. By using our domain registration,
          renewal, transfer, or other related services, you agree to abide by
          these terms and conditions. Please read them carefully.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Registration Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Domain Registration
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Domain availability is determined on a first-come, first-served
                basis. We do not guarantee the availability of a domain until
                payment is successfully processed.
              </li>
              <li>
                Users must provide accurate and up-to-date information during
                the registration process. Incorrect information may result in
                cancellation of the registration.
              </li>
              <li>
                Registered domains must comply with applicable local, national,
                and international laws.
              </li>
            </ul>
          </section>

          {/* Renewal Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Domain Renewal
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Domain renewals must be completed before the expiry date to
                avoid losing ownership of the domain.
              </li>
              <li>
                Reminder emails will be sent to the registered email address
                before the domain expiration. It is the user&apos;s responsibility
                to ensure timely renewal.
              </li>
              <li>
                We are not liable for the loss of a domain due to non-renewal.
              </li>
            </ul>
          </section>

          {/* Transfer Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Domain Transfer
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Domain transfers to or from our platform are subject to ICANN
                policies and may require an authorization code (EPP code).
              </li>
              <li>
                Users must ensure their domain is unlocked and eligible for
                transfer before initiating the process.
              </li>
              <li>
                Transferred domains must meet all compliance requirements of the
                receiving registrar.
              </li>
            </ul>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cancellation and Refunds
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Domain registrations and renewals are non-refundable once
                processed.
              </li>
              <li>
                Cancellation requests for domains must be submitted in writing
                via our support email.
              </li>
              <li>
                Any domains violating our Acceptable Use Policy will be
                terminated without notice.
              </li>
            </ul>
          </section>

          {/* Acceptable Use Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Acceptable Use Policy
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Domains must not be used for illegal activities, including but
                not limited to phishing, spamming, or distributing malicious
                software.
              </li>
              <li>
                Violation of this policy may result in immediate suspension or
                termination of the domain.
              </li>
              <li>
                Users are responsible for the content hosted on their domains.
              </li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dispute Resolution
            </h2>
            <p className="text-gray-700">
              Any disputes regarding domains will be resolved according to ICANN
              policies. Users agree to submit to arbitration or mediation as
              required by governing authorities.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 border-t border-gray-300 text-center">
          <p className="text-gray-600">
            By using our services, you agree to these Terms & Conditions. For
            further assistance, contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainTermsAndConditions;
