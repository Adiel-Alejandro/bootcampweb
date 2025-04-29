
class UserModel {
    constructor() {
        this.users = [];
    }

    fetchUsers(callback) {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: (data) => {
                this.users = data;
                if (callback) callback(this.users);
            },
            error: (error) => {
                console.error("Error al obtener los usuarios:", error);
            }
        });
    }
}
