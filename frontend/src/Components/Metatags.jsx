/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

function Metatags({ title, description, path = "/", image }) {
  const siteUrl = "https://constructoranavarro.cl";
  const fullUrl = `${siteUrl}${path.startsWith("/") ? path : "/" + path}`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/og-default.jpg`;


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

      <meta name="robots" content="index, follow" />
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
      <meta property="og:image" content={imageUrl} />

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
        content={imageUrl}
      />

    </Helmet>
  );
}

export default Metatags;
