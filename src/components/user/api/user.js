import endpoint from '@/api/endpoint'
export default {
    getUser(id){
        return endpoint.http().get('user/'+id)
        .then(resp => {
            return resp.data;
        })
        .catch(
            err => {
                throw err;
            }
        )
    },
    delUser(id){
        return endpoint.http().get('user/del/'+id)
        .then(resp => {
            return resp.data;
        })
        .catch(
            err => {
                throw err;
            }
        )
    },
    getUserList(){
        return endpoint.http().get('user/list')
        .then(resp => {
            return resp.data;
        })
        .catch(
            err => {
                throw err;
            }
        )
    },
    saveUser(info){
        return endpoint.http().post('user/save',info)
        .then(resp => {
            return resp.data;
        })
        .catch(
            err => {
                throw err;
            }
        )
    },
    updateUser(info){
        return endpoint.http().post('user/' + info.id,info)
        .then(resp => {
            return resp.data;
        })
        .catch(
            err => {
                throw err;
            }
        )
    }
}