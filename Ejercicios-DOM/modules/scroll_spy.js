const d = document;

export default function scrollSpy() {

   const $section = d.querySelectorAll("section[data-scroll-spy]");

   const callb = (entries) => {

      entries.forEach((entry) => {

         const id = entry.target.getAttribute("id");

         if (entry.isIntersecting) {

            let selector = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
            selector.classList.add("active");
         } else {

            let selector = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
            selector.classList.remove("active");
         }
      });
   }

   const observer = new IntersectionObserver(callb, {
      // rootMargin: "-250px",
      threshold: [0.5, 0.75],//maximos y minimos
   });

   $section.forEach(el => observer.observe(el));
}