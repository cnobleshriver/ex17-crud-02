const counterNameInput = document.getElementById("counterName");
const createBtn = document.getElementById("createBtn");
const readBtn = document.getElementById("readBtn");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const viewAllBtn = document.getElementById("viewAllBtn");
const counterResponse = document.getElementById("counters");

const URL = "http://localhost:3260"; // URL of our server

// TASK #4: Write event handler functions for each button
// Function to handle create counter action
async function createCounter() {
    const response = await fetch(`${URL}/create?name=${counterNameInput.value}`, { method: "POST"});
    const data = await response.text();
    counterResponse.innerHTML = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle read counter action
async function readCounter() {
    const response = await fetch(`${URL}/read?name=${counterNameInput.value}`, { method: "GET" });
    const data = await response.text();
    counterResponse.innerHTML = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle update counter action
async function updateCounter() {
    const response = await fetch(`${URL}/update?name=${counterNameInput.value}`, { method: "PUT" });
    const data = await response.text();
    counterResponse.innerHTML = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle delete counter action
async function deleteCounter() {
    const response = await fetch(`${URL}/delete?name=${counterNameInput.value}`, { method: "DELETE" });
    const data = await response.text();
    counterResponse.innerHTML = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle view all counters action
async function viewAll() {
    const response = await fetch(`${URL}/all?name=${counterNameInput.value}`, { method: "GET" });
    const data = await response.text();
    counterResponse.innerHTML = data;
}

// TASK #5: Add event listeners
createBtn.addEventListener("click", createCounter);
readBtn.addEventListener("click", readCounter);
updateBtn.addEventListener("click", updateCounter);
deleteBtn.addEventListener("click", deleteCounter);
viewAllBtn.addEventListener("click", viewAll);

// Load all counters in DB when page loads
viewAll();
