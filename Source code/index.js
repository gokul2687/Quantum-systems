// service page function
  function showSection(id) {
    document.querySelectorAll('.row').forEach(el => el.classList.add('d-none'));
    document.getElementById(id).classList.remove('d-none');

    document.querySelectorAll('.tab-buttons .btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

 function showSection(sectionId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content-wrapper").forEach(el => {
    el.classList.add("d-none");
  });

  // Remove active state from buttons
  document.querySelectorAll(".btn-service").forEach(btn => {
    btn.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.remove("d-none");

  // Highlight the clicked button
  event.target.classList.add("active");

  // Ensure layout updates (scroll fix)
  window.dispatchEvent(new Event('resize'));
}
  function showGroup(num) {
    const groups = document.querySelectorAll('.testimonial-group');
    groups.forEach((group, i) => {
      group.classList.toggle('d-none', i !== num - 1);
    });
  }

  function setActive(btn) {
    const buttons = document.querySelectorAll('.btn-acer');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
 


  document.getElementById("inquiryForm").addEventListener("submit", function(e) {
  const phone = document.getElementById("phone").value;
  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phone)) {
    e.preventDefault();
    alert("Please enter a valid 10-digit phone number.");
  }
});
