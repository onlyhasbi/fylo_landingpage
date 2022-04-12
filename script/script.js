(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".validate-form");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity()) {
          form.classList.remove("invalidated");
        } else {
          form.classList.add("invalidated");
        }
      },
      false
    );
  });
})();
