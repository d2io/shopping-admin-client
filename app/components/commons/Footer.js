import React from 'react';
import { MDBFooter } from 'mdbreact';

const Footer = () => (
  <MDBFooter color="blue" className="text-center font-small darken-2">
    <p className="footer-copyright mb-0 py-3 text-center">
      &copy; {new Date().getFullYear()} Copyright: <a href=""> HD </a>
    </p>
  </MDBFooter>
);

export default Footer;
