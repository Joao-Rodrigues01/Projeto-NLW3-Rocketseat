import User from '../models/Users';

export default {
    render(user: User) {
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        };
    },
}

