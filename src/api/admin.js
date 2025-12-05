import { axios } from '@/libs/request'
import Dispatch from '../libs/dispatch'

// 获取用户列表
// const getUserList = (params) => axios.get('/admin/users?' + qs.stringify(params))
// const updateUserById = (data) => axios.post('/admin/update-user', data)
// const updateUserBatchById = (data) => axios.post('/admin/update-user-settings', data)
// const deleteUserById = (ids) => axios.post('/admin/delete-user', { ids })
// const checkUsername = (username) => axios.get('/admin/checkname?username=' + username)
// const addUser = (data) => axios.post('/admin/add-user', data)
export const userDispatch = new Dispatch({
    get: ['/v1/admin/users', 'get'],
    update: ['/v1/admin/updateUser', 'post'],
    batch: ['/v1/admin/updateUserSettings', 'post'],
    delete: ['/v1/admin/deleteUser', 'post'],
    check: ['/v1/admin/checkname', 'get'],
    add: ['/v1/admin/addUser', 'post']
})

// const addMenu = (data) => axios.post('/admin/add-menu', data)
// const getMenu = () => axios.get('/admin/get-menu')
// const updateMenu = (data) => axios.post('/admin/update-menu', data)
// const deleteMenu = (data) => axios.post('/admin/delete-menu', data)
export const menuDispatch = new Dispatch({
    add: ['/v1/admin/addMenu', 'post'],
    get: ['/v1/admin/getMenu', 'get'],
    update: ['/v1/admin/updateMenu', 'post'],
    delete: ['/v1/admin/deleteMenu', 'post'],
    route: ['/v1/admin/getRoutes', 'get']
})

// const addRole = (data) => axios.post('/admin/add-role', data)
// const getRoles = () => axios.get('/admin/get-roles')
// const getRoleNames = () => axios.get('/admin/get-roles-names')
// const updateRole = (data) => axios.post('/admin/update-role', data)
// const deleteRole = (data) => axios.post('/admin/delete-role', data)
export const roleDispatch = new Dispatch({
    add: ['/v1/admin/addRole', 'post'],
    get: ['/v1/admin/getRoles', 'get'],
    roles: ['/v1/admin/getRolesNames', 'get'],
    update: ['/v1/admin/updateRole', 'post'],
    delete: ['/v1/admin/deleteRole', 'post']
})

// const getErrorList = (params) =>
//   axios.get('/admin/get-error?' + qs.stringify(params))
// const deleteErrors = (data) => axios.post('/admin/delete-error', data)
export const errorDispatch = new Dispatch({
    get: ['/v1/admin/getError', 'get'],
    delete: ['/v1/admin/deleteError', 'post']
})

// 封装一层，更加简练
export const commentsDispatch = new Dispatch({
    get: ['/v1/admin/getComments', 'get'],
    // update: ['/admin/updateComments', 'post'],
    batch: ['/v1/admin/updateCommentsBatch', 'post'],
    delete: ['/v1/admin/deleteComments', 'post']
})

export const getStatData = () => axios.get('/v1/admin/getstat')
