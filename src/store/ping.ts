import Axios from "axios";
export default {
    namespaced: true,
    state: {
        pong:null
    },
    mutations: {
        GET_PING(currentState:any, payload:any) {
            currentState.pong = payload.pong
        }
    },
    actions: {
        async GET_PING_ACTION(context:any) {
            new Promise((resolve, reject) => {
                const url = `http://localhost:5000/ping`
                Axios.get(url)
                    .then(res => {
                        const pong = res.data;
                        context.commit("GET_PING", { pong });
                        resolve(pong)
                    }).catch(err => console.log(err))
            });            
        }
    }
}