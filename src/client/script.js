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
    const counterName = document.getElementById("counterName").value;
    const response = await fetch(`${URL}/create?name=${counter_name}`, { method: "POST"});
    const data = await response.text();
    document.getElementById("counters").innerText = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle read counter action
async function readCounter() {
    const counterName = document.getElementById("counterName").value;
    const response = await fetch(`${URL}/read?name=${counterName}`, { method: "GET" });
    const data = await response.text();
    document.getElementById("counters").innerText = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle update counter action
async function updateCounter() {
    const counterName = document.getElementById("counterName").value;
    const response = await fetch(`${URL}/update?name=${counterName}`, { method: "PUT" });
    const data = await response.text();
    document.getElementById("counters").innerText = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle delete counter action
async function deleteCounter() {
    const coutnerName = document.getElementById("counterName").value;
    const response = await fetch(`${URL}/delete?name=${counterName}`, { method: "DELETE" });
    const data = await response.text();
    document.getElementById("counters").innerText = data;
}

// TASK #4: Write event handler functions for each button
// Function to handle view all counters action
async function viewAll() {
    const coutnerName = document.getElementById("counterName").value;
    const response = await fetch(`${URL}/all?name=${counterName}`, { method: "GET" });
    const data = await response.text();
    document.getElementById("counters").innerText = data;
}

// TASK #5: Add event listeners
document.getElementById('createBtn').addEventListener("click", createCounter);
document.getElementById('readBtn').addEventListener("click", readCounter);
document.getElementById('updateBtn').addEventListener("click", updateCounter);
document.getElementById('deleteBtn').addEventListener("click", deleteCounter);
document.getElementById('viewAllBtn').addEventListener("click", viewAll);


// Load all counters in DB when page loads
viewAll();
