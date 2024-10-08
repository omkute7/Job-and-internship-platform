import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { Button } from './button';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 text-white py-8 bottom-0  w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/jobs" className="hover:text-gray-300">Jobs</Link></li>
              <li><Link href="/internships" className="hover:text-gray-300">Internships</Link></li>
              <li><Link href="/companies" className="hover:text-gray-300">Companies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link href="/post-job" className="hover:text-gray-300">Post a Job</Link></li>
              {/* <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li> */}
              <li><Link href="/resources" className="hover:text-gray-300">Employer Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
           <Button>
           <Link href='https://github.com/omkute7/Job-and-internship-platform' target='blank' >
            <p>Github</p>
            <FaGithub/>
           </Link>
           </Button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <hr className=' text-white h-8' />
          <p>&copy; 2024 CarrierConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;