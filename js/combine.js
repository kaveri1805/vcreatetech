// for loader
window.onload = function () {
  const loader = document.getElementById("pre-loader");
  loader.classList.add("hide");
  setTimeout(() => loader.style.display = "none", 500); // wait for fade
};

document.addEventListener("DOMContentLoaded", function () {
  // Sidebar open/close
  document.getElementById("toggleSidebar")?.addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "0";
  });

  document.getElementById("closeSidebar")?.addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "-300px";
  });

  // Submenu toggle
  const submenuItems = document.querySelectorAll(".sidebar .has-submenu");

  submenuItems.forEach(item => {
    item.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});


// for navbar scrolling hide
// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".header");
//   if (window.scrollY > 50) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  const sections = document.querySelectorAll("section");

  let isWhiteBg = false;

  // Check if any section under header is white
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom > 1) {
      const bgColor = window.getComputedStyle(section).backgroundColor;
      if (bgColor === "rgb(255, 255, 255)") {
        isWhiteBg = true;
      }
    }
  });

  // Apply white-bg class for logo/icon color
  if (isWhiteBg) {
    header.classList.add("white-bg");
  } else {
    header.classList.remove("white-bg");
  }

  // Menu hide logic on scroll >50px
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



// for toogle sidebar menus
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");

  if (toggleBtn && sidebar && closeBtn) {
    toggleBtn.addEventListener("click", function () {
      sidebar.style.right = "0";
    });

    closeBtn.addEventListener("click", function () {
      sidebar.style.right = "-300px";
    });
  } else {
    console.warn("Toggle or sidebar elements not found.");
  }
});


//   //  for mobile navbar toogle btn for services menulink
document.addEventListener("DOMContentLoaded", function () {
  const servicesLink = document.querySelector(".services-toggle");
  const dropdown = document.querySelector(".services-dropdown");

  if (servicesLink && dropdown) {
    servicesLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) { // only mobile
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }
});


// for sections scolling sidenav
// const sections = document.querySelectorAll("section[id^='section']");
// const navItems = document.querySelectorAll(".sticky-left-nav li");

// window.addEventListener("scroll", () => {
//   let activeIndex = -1;

//   sections.forEach((section, index) => {
//     const rect = section.getBoundingClientRect();
//     const sectionTop = rect.top;
//     const sectionBottom = rect.bottom;

//     // Check if section is in the middle of viewport
//     if (sectionTop <= window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
//       activeIndex = index;
//     }
//   });

//   if (activeIndex !== -1) {
//     // Reset all
//     navItems.forEach(li => li.classList.remove("nav-active", "darkText"));

//     // Set active one
//     navItems[activeIndex].classList.add("nav-active");

//     if (activeIndex === 0) {
//       // Mainslider stays white
//       navItems[activeIndex].classList.remove("darkText");
//     } else {
//       // All others → dark
//       navItems[activeIndex].classList.add("darkText");
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Select all sections that start with id="section"
  const sections = document.querySelectorAll("section[id^='section']");
  // Select all nav items
  const navItems = document.querySelectorAll(".sticky-left-nav li");

  if (!sections.length || !navItems.length) return; // Exit if nothing found

  // Scroll event listener
  window.addEventListener("scroll", () => {
    let activeIndex = -1;

    // Determine which section is in the middle of the viewport
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      if (sectionTop <= window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
        activeIndex = index;
      }
    });

    // Safely handle navItems
    navItems.forEach(li => li.classList.remove("nav-active", "darkText")); // Reset all

    if (activeIndex !== -1 && navItems[activeIndex]) {
      navItems[activeIndex].classList.add("nav-active");

      if (activeIndex === 0) {
        navItems[activeIndex].classList.remove("darkText"); // First section stays white
      } else {
        navItems[activeIndex].classList.add("darkText"); // Others → dark
      }
    }
  });

  // Optional: highlight first section on load
  if (navItems[0]) {
    navItems[0].classList.add("nav-active");
    navItems[0].classList.remove("darkText");
  }
});


// top scrolling btn
$(document).ready(function () {
  var $backToTop = $('#back-to-top');

  // Show/hide button on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $backToTop.addClass('show');
    } else {
      $backToTop.removeClass('show');
    }
  });

  // Scroll to top on click
  $backToTop.on('click', 'a', function (e) {
    e.preventDefault();

    // Hide button immediately
    $backToTop.removeClass('show');

    // Animate scroll (fast)
    $('html, body').animate({
      scrollTop: 0
    }, 200);
  });
});


// contactus
// on hover change social icons
// document.addEventListener('DOMContentLoaded', function () {
//   const card = document.querySelector('.contact-card');
//   const icons = card.querySelectorAll('.social-icons img');

//   card.addEventListener('mouseenter', () => {
//     icons.forEach(img => {
//       img.dataset.original = img.src; // store original
//       img.src = img.dataset.hover; // swap to hover version
//     });
//   });

//   card.addEventListener('mouseleave', () => {
//     icons.forEach(img => {
//       img.src = img.dataset.original; // revert back
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // ---- Social icons hover ----
  const card = document.querySelector('.contact-card');
  if (card) {
    const icons = card.querySelectorAll('.social-icons img');
    if (icons.length) {
      card.addEventListener('mouseenter', () => {
        icons.forEach(img => {
          img.dataset.original = img.src; // store original
          if (img.dataset.hover) img.src = img.dataset.hover; // swap to hover version
        });
      });

      card.addEventListener('mouseleave', () => {
        icons.forEach(img => {
          if (img.dataset.original) img.src = img.dataset.original; // revert back
        });
      });
    }
  }
});

// on country name click change that country
document.querySelectorAll('.location-card').forEach(card => {
  card.addEventListener('click', function () {
    // Get data attributes
    const mapSrc = this.getAttribute('data-map');
    const title = this.getAttribute('data-title');
    const country = this.getAttribute('data-country');
    const address = this.getAttribute('data-address');
    const phone = this.getAttribute('data-phone');

    // Update iframe and text dynamically
    document.getElementById('mapFrame').src = mapSrc;
    document.getElementById('mapTitle').innerText = title;
    document.getElementById('mapCountry').innerText = country;
    document.getElementById('mapAddress').innerText = address;
    document.getElementById('mapPhone').innerText = phone;
  });
});


// for career page dropdown close select option
document.querySelectorAll('.career-dropdown details ul li').forEach(function (item) {
  item.addEventListener('click', function () {
    const details = this.closest('details');
    details.removeAttribute('open'); // closes the dropdown
  });
});

// for career page searching functionality
// document.addEventListener("DOMContentLoaded", function () {
//   const searchBtn = document.querySelector(".search-btn");
//   const jobTitleDropdowns = document.querySelectorAll(".job-title");
//   const accordionItems = document.querySelectorAll(".accordion-item");

//   // Mapping cities/states to countries
//   const indiaCities = ["pune", "mumbai", "nagpur"]; // cities in accordion for India

//   function getSelectedText(detailsElem) {
//     const selected = detailsElem.querySelector("li.selected");
//     return selected ? selected.textContent.trim().toLowerCase() : "";
//   }

//   // Dropdown selection
//   jobTitleDropdowns.forEach(details => {
//     const lis = details.querySelectorAll("li");
//     lis.forEach(li => {
//       li.addEventListener("click", function () {
//         lis.forEach(item => item.classList.remove("selected"));
//         li.classList.add("selected");
//         details.querySelector("summary").childNodes[0].textContent = li.textContent;
//       });
//     });
//   });

//   searchBtn.addEventListener("click", function () {
//     const selectedJob = getSelectedText(jobTitleDropdowns[0]);
//     const selectedLocation = getSelectedText(jobTitleDropdowns[1]); // country
//     const selectedCategory = getSelectedText(jobTitleDropdowns[2]);
//     let matched = false;

//     accordionItems.forEach(item => {
//       const text = item.textContent.toLowerCase();

//       // Job match
//       const jobMatch = !selectedJob || text.includes(selectedJob);

//       // Category match
//       const categoryMatch = !selectedCategory || text.includes(selectedCategory);

//       // Location match
//       let locationMatch = false;
//       if (!selectedLocation) {
//         locationMatch = true; // no filter
//       } else if (selectedLocation === "india") {
//         // match if any Indian city is in text
//         locationMatch = indiaCities.some(city => text.includes(city));
//       } else {
//         // for USA/UK/UAE → match country name
//         locationMatch = text.includes(selectedLocation);
//       }

//       if (jobMatch && categoryMatch && locationMatch) {
//         // Close other accordions
//         accordionItems.forEach(o => {
//           const c = o.querySelector(".accordion-collapse");
//           if (c?.classList.contains("show")) new bootstrap.Collapse(c, { toggle: true });
//         });

//         // Open matched accordion
//         const collapse = item.querySelector(".accordion-collapse");
//         if (collapse && !collapse.classList.contains("show")) {
//           new bootstrap.Collapse(collapse, { toggle: true });
//           setTimeout(() => {
//             const y = item.getBoundingClientRect().top + window.scrollY - 100;
//             window.scrollTo({ top: y, behavior: "smooth" });
//           }, 350);
//         } else {
//           const y = item.getBoundingClientRect().top + window.scrollY - 100;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         }

//         matched = true;
//       }
//     });

//     if (!matched) alert("No jobs found with your selected filters!");
//   });
// });

const searchBtn = document.querySelector(".search-btn");
  const jobTitleDropdowns = document.querySelectorAll(".job-title");
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (searchBtn && jobTitleDropdowns.length && accordionItems.length) {
    const indiaCities = ["pune", "mumbai", "nagpur"]; // cities in accordion for India

    function getSelectedText(detailsElem) {
      const selected = detailsElem.querySelector("li.selected");
      return selected ? selected.textContent.trim().toLowerCase() : "";
    }

    // Dropdown selection
    jobTitleDropdowns.forEach(details => {
      const lis = details.querySelectorAll("li");
      if (lis.length) {
        lis.forEach(li => {
          li.addEventListener("click", function () {
            lis.forEach(item => item.classList.remove("selected"));
            li.classList.add("selected");
            details.querySelector("summary").childNodes[0].textContent = li.textContent;
          });
        });
      }
    });

    // Search button click
    searchBtn.addEventListener("click", function () {
      const selectedJob = getSelectedText(jobTitleDropdowns[0]);
      const selectedLocation = getSelectedText(jobTitleDropdowns[1]);
      const selectedCategory = getSelectedText(jobTitleDropdowns[2]);
      let matched = false;

      accordionItems.forEach(item => {
        const text = item.textContent.toLowerCase();

        const jobMatch = !selectedJob || text.includes(selectedJob);
        const categoryMatch = !selectedCategory || text.includes(selectedCategory);
        let locationMatch = false;

        if (!selectedLocation) {
          locationMatch = true;
        } else if (selectedLocation === "india") {
          locationMatch = indiaCities.some(city => text.includes(city));
        } else {
          locationMatch = text.includes(selectedLocation);
        }

        if (jobMatch && categoryMatch && locationMatch) {
          // Close other accordions
          accordionItems.forEach(o => {
            const c = o.querySelector(".accordion-collapse");
            if (c?.classList.contains("show")) new bootstrap.Collapse(c, { toggle: true });
          });

          // Open matched accordion
          const collapse = item.querySelector(".accordion-collapse");
          if (collapse && !collapse.classList.contains("show")) {
            new bootstrap.Collapse(collapse, { toggle: true });
            setTimeout(() => {
              const y = item.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }, 350);
          } else {
            const y = item.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
          }

          matched = true;
        }
      });

      if (!matched) alert("No jobs found with your selected filters!");
    });
  }

// for apply now modelpopup form
// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("jobApplyForm");

//     form.addEventListener("submit", function(e) {
//         e.preventDefault();

//         const formData = new FormData(form);

//         fetch("PHPMailer-master/apply-now.php", {
//             method: "POST",
//             body: formData
//         })
//         .then(res => res.text())
//         .then(data => {
//             alert(data); // Success message
//             form.reset();
//             const modal = bootstrap.Modal.getInstance(document.getElementById("applyModal"));
//             modal.hide();
//         })
//         .catch(err => {
//             alert("Error submitting form, please try again.");
//             console.error(err);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Use event delegation in case the form is dynamically loaded inside modal
    document.addEventListener("submit", function(e) {
        // Check if the submitted form is our target form
        if (e.target && e.target.id === "jobApplyForm") {
            e.preventDefault(); // prevent default form submission

            const form = e.target;
            const formData = new FormData(form);

            fetch("PHPMailer-master/apply-now.php", {
                method: "POST",
                body: formData
            })
            .then(res => res.text())
            .then(data => {
                alert(data); // Show success message
                form.reset(); // Reset form fields

                // Hide the Bootstrap modal safely
                const modalEl = document.getElementById("applyModal");
                if (modalEl) {
                    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
                    modal.hide();
                }
            })
            .catch(err => {
                alert("Error submitting form, please try again.");
                console.error(err);
            });
        }
    });
});


// for searching icon
// Open and close modal
document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector('.fa-search');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    const pages = [
        { name: "Home", url: "index.php" },
        { name: "Careers", url: "career.php" },
        { name: "Contact Us", url: "contact-us.php" },
        { name: "About Us", url: "aboutus.php" },
        { name: "UK", url: "uk.php" },
        { name: "Our Team", url: "ourteam.php" },
        { name: "Products - HMS", url: "hms.php" },
        { name: "Products - SMS", url: "sms.php" },
        { name: "Services - AI Development", url: "ai-dev.php" },
        { name: "Services - Product Development", url: "productdev.php" },
        { name: "Services - Mobile Applications Development", url: "mobiledev.php" },
        { name: "Services - BlockChain Development", url: "blockchain.php" },
        { name: "Blog", url: "blog.php" },
        { name: "Portfolio", url: "portfolio.php" },
        { name: "Services - Web Designing", url: "index.php#webdesign" }
    ];

    // 🔹 Open search modal
    searchIcon.addEventListener("click", e => {
        e.preventDefault();
        searchModal.style.display = "block";
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchInput.focus();
    });

    // 🔹 Close modal (X, outside click, back navigation, ESC)
    const closeModal = () => searchModal.style.display = "none";
    closeSearch.addEventListener("click", closeModal);
    window.addEventListener("click", e => e.target === searchModal && closeModal());
    window.addEventListener("pageshow", closeModal);
    document.addEventListener("keydown", e => e.key === "Escape" && closeModal());

    // 🔹 Show results while typing
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";
        pages.filter(p => p.name.toLowerCase().includes(query))
             .forEach(p => {
                 searchResults.innerHTML += `<li><a href="${p.url}" style="color:#fff;text-decoration:none;">${p.name}</a></li>`;
             });
    });

    // 🔹 Enter key → go to first result
    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            const first = pages.find(p => p.name.toLowerCase().includes(searchInput.value.toLowerCase()));
            if (first) window.location.href = first.url;
        }
    });
});


