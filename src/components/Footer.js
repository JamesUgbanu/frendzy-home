import React from "react";

function Footer() {
  return (
    <div className="border-t border-solid border-gray-300 bg-red-600 py-4 pt-4">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:-mx-4 md:items-center">
          <div className="md:flex-1 md:px-4 text-center md:text-left">
            <p className="text-white">
              &copy; <strong>Frendzy 2021</strong>
            </p>
          </div>
          <div className="md:flex-1 md:px-4 text-center md:text-right">
            <a
              href="/privacy"
              className="py-2 px-4 text-white inline-block hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
