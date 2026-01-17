import { Helmet } from "react-helmet-async";

function Schema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ConstructionCompany",
        "name": "Constructora Navarro",
        "url": "https://constructoranavarro.cl",
        "logo": "https://constructoranavarro.cl/logo.png",
        "image": "https://constructoranavarro.cl/og-inicio.jpg",
        "description":
            "Constructora Navarro ofrece servicios de construccion, remodelaciones, ampliaciones y diseño de viviendas en Chile",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CL"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Chile"
        },
        "serviceType": [
            "Construccion de Viviendas",
            "Remodelaciones",
            "Ampliaciones",
            "Diseño de cocinas",
            "Obras Civiles"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
            {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
}

export default Schema;