function showSection(id) {
    const sections = document.querySelectorAll("main section");
    const buttons = document.querySelectorAll(".tab-button");
  
    sections.forEach(s => s.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));
  
    document.getElementById(id).classList.add("active");
    event.target.classList.add("active");
  }