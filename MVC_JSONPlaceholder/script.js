
$(document).ready(function () {
    const model = new UserModel();
    const view = new UserView('#user-container');
    const controller = new UserController(model, view);

    controller.fetchAndDisplayUsers();
});
