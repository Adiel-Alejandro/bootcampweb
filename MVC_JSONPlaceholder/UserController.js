
class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    fetchAndDisplayUsers() {
        this.model.fetchUsers((users) => {
            this.view.displayUsers(users);
        });
    }
}
