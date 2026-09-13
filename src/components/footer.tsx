import NavLogo from "../assets/logo-text.png"
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-16">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div>
           <img src={NavLogo}alt="" />

            <p className="mt-4 max-w-md text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-6 flex gap-5 text-sm text-gray-700">
              <a href="#" className="transition hover:text-purple-500">
                GitHub
              </a>

              <a href="#" className="transition hover:text-purple-500">
                Twitter
              </a>

              <a href="#" className="transition hover:text-purple-500">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-100"></div>
        <div className="flex items-center justify-between pt-7 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



