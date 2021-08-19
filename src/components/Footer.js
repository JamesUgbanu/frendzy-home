import React from "react";

function Footer() {
  return (
    <div class="border-t border-solid border-gray-600 bg-gray-900 py-4 pt-4">
      <div class="container px-4 mx-auto">
        <div class="md:flex md:-mx-4 md:items-center">
          <div class="md:flex-1 md:px-4 text-center md:text-left">
            <p class="text-white">
              &copy; <strong>Frendzy 2021</strong>
            </p>
          </div>
          <div class="md:flex-1 md:px-4 text-center md:text-right">
            <a
              href="/privacy"
              class="py-2 px-4 text-white inline-block hover:underline"
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
