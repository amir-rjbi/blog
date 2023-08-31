
export const UserStore = defineStore('test', {
state:()=> ({
    usersFilter: {},
    singleUser: {}
}),

getters: {},
actions: {
    setUsers(state: any, users: any) {
        state.usersFilter = users;
    },
    setSingleUser(state: any, user: any) {
        state.singleUser = user;
    }
},})