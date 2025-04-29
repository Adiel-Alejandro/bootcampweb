
class UserView {
    constructor(containerSelector) {
        this.container = $(containerSelector);
    }

    displayUsers(users) {
        this.container.empty();

        users.forEach(user => {
            const userCard = $(`
                <div class="user-card">
                    <p><strong>Nombre:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Teléfono:</strong> ${user.phone}</p>
                </div>
            `);
            this.container.append(userCard);
        });
    }
}
