// Generate HTML list of clients
function list(clients) {
    return clients.map((client, index) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            <strong>${client.name}</strong> <strong>$${client.balance.toFixed(2)}</strong>
        </li>
    `).join(''); 
}