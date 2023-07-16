document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    function updateUserList() {
      userList.innerHTML = ""; 
  
      users.forEach(function(user) {
        const userDiv = document.createElement("div");
        userDiv.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          users = users.filter(function(u) {
            return u.email !== user.email;
          });
          localStorage.setItem("users", JSON.stringify(users));
          updateUserList();
        });
  
        userDiv.appendChild(deleteButton);
  
        userList.appendChild(userDiv);
      });
    }
  
    updateUserList(); 
  
    userForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
  
      users.push({ name: name, email: email, phone: phone });
      localStorage.setItem("users", JSON.stringify(users));
  
      userForm.reset();
  
      updateUserList();
    });
  });
  