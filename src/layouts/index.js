import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: "fr" }}
      title="entrer: cinq architectures en belgique"
      meta={[
        {
          name: "description",
          content:
            "entrer: est une invitation à déambuler à travers les traces de cinq architectures engagées qui ponctuent depuis peu le paysage belge. S’y retrouvent: une ancienne chapelle accueillant les réserves des musées de Mons (par Atelier Gigogne + L’Escaut), un équipement sportif recomposant un paysage à Spa (par Baukunst), une reconversion industrielle renforçant le centre de Dison (par Baumans-Deffet), une passerelle métamorphosant un espace public à Bruxelles (par MSA + Ney & Partners), et un pavillon de jardin à Renaix articulant cuisine professionnelle et collection d’œuvres d’art (par Vers.A)."
        },
        { name: "robots", content: "index,follow" },
        {
          property: "og:title",
          content: "entrer: cinq architectures en belgique"
        },
        {
          property: "og:description",
          content:
            "entrer: est une invitation à déambuler à travers les traces de cinq architectures engagées qui ponctuent depuis peu le paysage belge. S’y retrouvent: une ancienne chapelle accueillant les réserves des musées de Mons (par Atelier Gigogne + L’Escaut), un équipement sportif recomposant un paysage à Spa (par Baukunst), une reconversion industrielle renforçant le centre de Dison (par Baumans-Deffet), une passerelle métamorphosant un espace public à Bruxelles (par MSA + Ney & Partners), et un pavillon de jardin à Renaix articulant cuisine professionnelle et collection d’œuvres d’art (par Vers.A)."
        },
        { property: "og:url", content: "https://entrer.be" }
      ]}
    />
    <div className="lang">
      <Link to="/">fr</Link>
      <Link to="/en/">en</Link>
    </div>
    {children()}
  </div>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};
