export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-4 flex justify-center item-center">
        <div>
          <h5 className="mb-6 font-bold uppercase">About Us</h5>
          <ul className="space-y-4">
            <li>
              <a className="hover:underline" href="#partners">
                Partners
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-bold uppercase">Terms & Conditions</h5>
          <ul className="space-y-3">
            <li>
              <a className="hover:underline" href="#">
                Report Bugs
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Policy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-bold uppercase">Our Office</h5>
          <address>
            <p>Hackathon Inter-Universitaire</p>
            <p>Madagascar, Antananarivo.</p>
            <p>ZIP: 101</p>
          </address>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center">2024 © HIU - Hack-IO.</p>
      </div>
    </footer>
  );
};
