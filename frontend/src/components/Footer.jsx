import React from 'react'

const Footer = () => {
  return (
    <div>
        
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">MyLMS</h4>
            <p className="text-sm">
              A modern learning management system to help you grow skills anytime, anywhere.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
            
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3">Support</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3">Contact</h5>
            <p className="text-sm">Email: support@mylms.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center text-sm py-4">
          © 2026 MyLMS. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer



