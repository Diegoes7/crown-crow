import React from "react";
import {
  MapContainer,
  MapContainerInner,
  ContactContainer,
  ParagraphContainer
} from "./contact-page.styles";

const ContactPage = () => {
  return (
    <ContactContainer>
      <h1>CONTACT US: </h1>
      <h2> FULL NAME: </h2>
      <h2>MibilePhone: </h2>
      <span>+0054654645890</span>
      <h2>Address:</h2> <br />
      <p>
        {" "}
        FASDFASfasfaaaaaaaaaaaaafasdfasdf,fasdfafasdfasfasf
        fasffasdfsdafasdfsdafjasdinof[adsf89a8ara6t9yaehtaega
        gadgadgdfgdsfgdfsg.agalgpadgadgadga
      </p>
      <MapContainer>
        <MapContainerInner>
          <iframe title={'diego'}
            width="300"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://www.whatismyip-address.com/nordvpn-coupon/">
            <br/>The Place
          </a>
        </MapContainerInner>
      </MapContainer>
      <ParagraphContainer>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
        </ParagraphContainer>
    </ContactContainer>
  );
};

export default ContactPage;
