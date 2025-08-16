// service page function
  function showSection(id) {
    document.querySelectorAll('.row').forEach(el => el.classList.add('d-none'));
    document.getElementById(id).classList.remove('d-none');

    document.querySelectorAll('.tab-buttons .btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
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
