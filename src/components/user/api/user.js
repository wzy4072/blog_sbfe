import endpoint from '@/api/endpoint'
export default {
    getUserInfo(id){
        return endpoint.http().get('user?id='+id)
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
    }
}