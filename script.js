const form = document.querySelector(".needs-validation");

form.addEventListener(
	"submit",
	(event) => {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}

		form.classList.add("was-validated");
	},
	false
);

// Collapse hamburger navigation after clicking a .nav-link
const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
			toggle: false,
		});
		bsCollapse.hide();
	});
});
