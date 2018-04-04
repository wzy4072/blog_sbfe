import endpoint from '@/api/endpoint'
export default {
    getPetList(){
        return endpoint.http().get('pets')
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