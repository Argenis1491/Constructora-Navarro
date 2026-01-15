/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

function Metatags({ title, description, path = "/", image }) {
  const siteUrl = "https://www.constructoranavarro.cl";
  const fullUrl = `${siteUrl}${path.startsWith("/") ? path : "/" + path}`;

  return (
    <Helmet>
      <title>{title || "Constructora Navarro"}</title>
      <meta
        name="description"
        content={
          description ||
          "Constructora Navarro - Obras y remodelaciones en Chile"
        }
      />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "Constructora Navarro"} />
      <meta
        property="og:description"
        content={
          description ||
          "Constructora Navarro — remodelaciones y obras en Chile."
        }
      />
      <meta property="og:url" content={fullUrl} />
      <meta
        property="og:image"
        content={image || `${siteUrl}/og-default.jpg`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Constructora Navarro"} />
      <meta
        name="twitter:description"
        content={
          description ||
          "Constructora Navarro — remodelaciones y obras en Chile."
        }
      />
      <meta
        name="twitter:image"
        content={image || `${siteUrl}/og-default.jpg`}
      />
    </Helmet>
  );
}

export default Metatags;
