import axios from "axios";
export default  {
    getAllStates() {
        return axios.get('/api/states').then( resp => {
            return resp.data
        })
    },
    setVisited(stateName, visited) {
        let data = {visited:visited}
        return axios.patch("/api/states/" + stateName, data).then(resp => {
            return resp.data
        })
    },
    getOneState(stateName) {
        return axios.get('/api/state/'+stateName).then(resp => {
            return resp.data
        })
    }
}