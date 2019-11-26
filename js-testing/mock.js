// import { Permissions } from 'abc' | Since we don't have access to this dependency, we will create a mockup of it - a dummy for testing
// mock = alternative implementation of a dependency (side-stepping the dependency to ensure our code is calling it correctly)

let args = []
//all permissions does is push our arguments into an array

const Permissions = {
    granted(...params) {
        args.push([...params])
    }
}

class User {}

const user = new User();

function isUserAdmin() {
    return Permissions.granted(user, 'standard');
}

const test = function () {
    isUserAdmin();
    return JSON.stringify(args[0]) === JSON.stringify([user, 'admin']);
    // if 'admin' is passed in, then true, else false;
}

console.log(test());