(function() {
    // Main navbar pages meta info
    const metaData = {
        "index.php": {
            title: "Vcreate Tech Global / Vcreate Technologies - Home",
            description: "Website Development Company in London, Dubai, Mumbai, Pune, Nagpur.",
            url: "https://aldubaiproperty.com/vcreatetech/index.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/main-slider/vcreatetech_bg1.png"
        },
        "contact-us.php": {
            title: "Vcreate Tech Global / Vcreate Technologies - Contact Us",
            description: "Get in touch with Vcreate Tech Global. Contact us for Website Development Services.",
            url: "https://aldubaiproperty.com/vcreatetech/contact-us.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/contactus/vcreatetech_contactbg.png"
        },
        "career.php": {
            title: "Vcreate Tech Global / Vcreate Technologies - Careers",
            description: "Explore career opportunities at Vcreate Tech Global. Join our team today!",
            url: "https://aldubaiproperty.com/vcreatetech/career.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/career/vcreatetech-bg1.png"
        },
      
     // Products / Services pages
        "ai-dev.php": {
            title: "Vcreate Tech Global - AI Development Services",
            description: "Professional AI Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/ai-dev.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-aibg1.png"
        },
        "productdev.php": {
            title: "Vcreate Tech Global - Product Development Services",
            description: "Custom Product Development Solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/productdev.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-productdevbg.png"
        },
        "mobiledev.php": {
            title: "Vcreate Tech Global - Mobile Applications Development",
            description: "Mobile App Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/mobiledev.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-mobileapp.png"
        },
        "ecommersedev.php": {
            title: "Vcreate Tech Global - Ecommerce Development",
            description: "Build professional ecommerce platforms with Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/ecommersedev.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-ecombg.png"
        },
        "realestate.php": {
            title: "Vcreate Tech Global - Real Estate Development",
            description: "Real Estate Development Solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/realestate.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-realbg.png"
        },
        "softwaredev.php": {
            title: "Vcreate Tech Global - Software Development Services",
            description: "Custom Software Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/softwaredev.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-softbg.png"
        },
        "blockchain.php": {
            title: "Vcreate Tech Global - Blockchain Development Services",
            description: "Blockchain Development Solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/blockchain.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-blockbg.png"
        },

        // Designing
        "web-designing.php": {
            title: "Vcreate Tech Global - Web Designing Services",
            description: "Creative Web Designing Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/web-designing.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-webbg.png"
        },
        "graphic-designing.php": {
            title: "Vcreate Tech Global - Graphics Design Services",
            description: "Professional Graphics Design Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/graphic-designing.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-graphicbg1.png"
        },
        "website.php": {
            title: "Vcreate Tech Global - Website Maintenance Services",
            description: "Website Maintenance Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/website.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-websitebg.png"
        },
        "logo-designing.php": {
            title: "Vcreate Tech Global - Logo Designing Services",
            description: "Professional Logo Designing Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/logo-designing.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-logobg.png"
        },

        // Digital Marketing
        "seo.php": {
            title: "Vcreate Tech Global - SEO Services",
            description: "Search Engine Optimization Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/seo.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-seobg1.png"
        },
        "smo.php": {
            title: "Vcreate Tech Global - Social Media Optimization",
            description: "Social Media Optimization Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/smo.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-smobg.png"
        },
        "movie-promotion.php": {
            title: "Vcreate Tech Global - Movie Promotion Services",
            description: "Movie Promotions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/movie-promotion.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-aibg1.png"
        },
        "product-brading.php": {
            title: "Vcreate Tech Global - Product Branding Services",
            description: "Product Branding Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/product-brading.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-moviebg.png"
        },

        // CMS
        "cms-webdev.php": {
            title: "Vcreate Tech Global - CMS Based Web Development",
            description: "CMS Web Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/cms-webdev.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-cmsbg.png"
        },
        "wordpressweb.php": {
            title: "Vcreate Tech Global - Wordpress Web Development",
            description: "Wordpress Web Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/wordpressweb.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-wordpressbg.png"
        },
        "joomla-web.php": {
            title: "Vcreate Tech Global - Joomla Web Development",
            description: "Joomla Web Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/joomla-web.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-joomlabg1.png"
        },
        "drupal.php": {
            title: "Vcreate Tech Global - Drupal Web Development",
            description: "Drupal Web Development Services by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/drupal.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/development/vcreatetech-drupalbg1.png"
        },

        // products
        "hospital-mangement.php": {
            title: "Vcreate Tech Global - Hospital Management System",
            description: "Comprehensive Hospital Management System solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/hospital-mangement.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-hmsbg.png"
        },
        "school-mangement.php": {
            title: "Vcreate Tech Global - School Management System",
            description: "Efficient School Management System solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/school-mangement.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-smsbg1.png"
        },
        "ims.php": {
            title: "Vcreate Tech Global - Inventory Management System",
            description: "Advanced Inventory Management System by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/ims.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-imsbg2.png"
        },
        "online-examination.php": {
            title: "Vcreate Tech Global - Online Examination System",
            description: "Robust Online Examination System solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/online-examination.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-oembg2.png"
        },
        "appointment.php": {
            title: "Vcreate Tech Global - Appointment Management System",
            description: "Efficient Appointment Management System solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/appointment.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-amsbg3.png"
        },
        "newsportal.php": {
            title: "Vcreate Tech Global - News Portal Management System",
            description: "Advanced News Portal Management System by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/newsportal.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-newsbg.png"
        },
        "marriageportal.php": {
            title: "Vcreate Tech Global - Marriage Portal Management System",
            description: "Custom Marriage Portal Management System solutions by Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/marriageportal.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-marriagebg.png"
        },

        // About Us pages
        "aboutus.php": {
            title: "Vcreate Tech Global - About Us",
            description: "Learn about Vcreate Tech Global, our mission, vision, and team.",
            url: "https://aldubaiproperty.com/vcreatetech/aboutus.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/aboutus/vcreatetech-bg2.png"
        },
        "ourteam.php": {
            title: "Vcreate Tech Global - Our Team",
            description: "Meet the dedicated team behind Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/ourteam.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/products/vcreatetech-ourteambg.png"
        },
        "faq.php": {
            title: "Vcreate Tech Global - Frequently Asked Questions",
            description: "Find answers to common questions about Vcreate Tech Global services.",
            url: "https://aldubaiproperty.com/vcreatetech/faq.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/vcreatetech-faqbg.png"
        },

        // Other pages
        "portfolio.php": {
            title: "Vcreate Tech Global - Portfolio",
            description: "Explore the portfolio of Vcreate Tech Global' projects and solutions.",
            url: "https://aldubaiproperty.com/vcreatetech/portfolio.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/portfolio/vcreatetech-portbg.png"
        },
        "blog.php": {
            title: "Vcreate Tech Global - Blog",
            description: "Read the latest updates, news, and insights from Vcreate Tech Global.",
            url: "https://aldubaiproperty.com/vcreatetech/blog.php",
            image: "https://aldubaiproperty.com/vcreatetech/images/blog/vcreatetech-blogbg.png"
        }
    };


    function updateMetaTags() {
        const path = window.location.pathname.split("/").pop();
        const pageMeta = metaData[path] || metaData["index.php"];
        document.title = pageMeta.title;

        function setMeta(nameOrProperty, content, isProperty = false) {
            const selector = isProperty ? `meta[property='${nameOrProperty}']` : `meta[name='${nameOrProperty}']`;
            document.querySelectorAll(selector).forEach(tag => tag.remove());
            const tag = document.createElement("meta");
            if (isProperty) tag.setAttribute("property", nameOrProperty);
            else tag.setAttribute("name", nameOrProperty);
            tag.setAttribute("content", content);
            document.head.appendChild(tag);
        }

        // Standard meta
        setMeta("description", pageMeta.description);

        // Open Graph
        setMeta("og:title", pageMeta.title, true);
        setMeta("og:description", pageMeta.description, true);
        setMeta("og:url", pageMeta.url, true);
        setMeta("og:image", pageMeta.image, true);

        // Twitter
        setMeta("twitter:title", pageMeta.title);
        setMeta("twitter:description", pageMeta.description);
        setMeta("twitter:image", pageMeta.image);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateMetaTags);
    } else {
        updateMetaTags();
    }
})();
