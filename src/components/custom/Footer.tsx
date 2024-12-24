import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <div className="space-y-4">
          <p className="text-lg font-semibold">© 2024 DOMAN. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/terms-and-conditions">
              <div className="text-gray-300 hover:text-blue-500">Terms and Conditions</div>
            </Link>
            <Link href="/cancellation-refund-policy">
              <div className="text-gray-300 hover:text-blue-500">Cancellation & Refund Policy</div>
            </Link>
            <Link href="/contact-us">
              <div className="text-gray-300 hover:text-blue-500">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
