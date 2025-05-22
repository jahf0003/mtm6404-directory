// Generate HTML list of clients
function list(clients) {
    return clients.map((client, index) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            <strong>${client.name}</strong> <strong>$${client.balance.toFixed(2)}</strong>
        </li>
    `).join(''); 
}

// Sorting clients by property (name, balance, index)

function order(clients, property) {
    return clients.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}

// Calculate total balance of all clients
function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}

// Find client by index
function info(index) {
    return clients.find((client) => client.index === index);
}

// Search clients by name (case-insensitive)
function search(query) {
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
}