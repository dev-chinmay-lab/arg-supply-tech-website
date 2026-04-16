document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("l80BpXka0QG87YHlH");
  } else {
    console.error("EmailJS not loaded");
  }
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot spam protection
    if (this.company_website && this.company_website.value) {
      return; // bot detected, stop submission
    }

    emailjs.sendForm("service_3yy0bsp", "template_qosmynb", this).then(
      () => {
        alert("Form submitted successfully!");
        contactForm.reset();
      },
      (error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      },
    );
  });
}

const consultationForm = document.getElementById("consultationForm");

if (consultationForm) {
  consultationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot spam protection
    if (this.company_website && this.company_website.value) {
      return; // bot detected, stop submission
    }

    emailjs.sendForm("service_3yy0bsp", "template_qosmynb", this).then(
      () => {
        alert("Form submitted successfully!");
        consultationForm.reset();
      },
      (error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      },
    );
  });
}

const demoForm = document.getElementById("demoForm");

if (demoForm) {
  demoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot spam protection
    if (this.company_website && this.company_website.value) {
      return; // bot detected, stop submission
    }

    emailjs.sendForm("service_3yy0bsp", "template_qosmynb", this).then(
      () => {
        alert("Form submitted successfully!");
        demoForm.reset();
      },
      (error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      },
    );
  });
}

const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

(function () {
  const nav = document.querySelector("#site-header .navbar");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 18) nav.classList.add("shadow-sm", "navbar-scrolled");
    else nav.classList.remove("shadow-sm", "navbar-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("DOMContentLoaded", onScroll);
})();

// ===== COMMON IMAGE MODAL FUNCTION (reusable) =====
function openImageModal(src) {
  const modal = document.getElementById("flowchartModal");
  const modalImg = modal.querySelector("img");

  if (!modal || !modalImg) return;

  modal.style.display = "flex";
  modalImg.src = src;
}

//erfq block
document.addEventListener("DOMContentLoaded", () => {
  const flowchart = document.querySelector(".flowchart");
  const modal = document.getElementById("flowchartModal");
  const closeBtn = document.querySelector(".close-modal");

  if (!flowchart || !modal || !closeBtn) return;

  flowchart.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

//etender block
