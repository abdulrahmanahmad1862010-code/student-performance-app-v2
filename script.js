document.addEventListener("DOMContentLoaded", function() {
const addStudentBtn = document.getElementById("addStudentBtn");
const studentNameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("score");
const tableBody = document.getElementById("tableBody");

addStudentBtn.addEventListener("click"
     , function () {
        const studentName =
        studentNameInput.value;
        const score = Number(scoreInput.value);
        const passMark = 50;

        if (studentName === "" ||
        isNaN(score)) {
            alert("Please enter a valid name and score");
            return;
        }
        let status = "";
        if (score >= passMark) {
            status = "PASS";
        } else {
            status = "FAIL"
        }
        const row =
         document.createElement("tr");
         row.innerHTML = `
         <td>${studentName}</td>
         <td>${score}</td>
         <td>${status}</td>
         `;
         tableBody.appendChild(row);
         console.log("Status:", status);
    }); 
});
