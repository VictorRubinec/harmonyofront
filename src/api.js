import axios from "axios";

// Variáveis de ambiente para conexão com o Back-End Local ou de Produção (AWS - Docker)
// const ENV_PRODUCAO = "54.81.42.147:80";
// const ENV_PRODUCAO_LAB02 = "3.222.182.26:80"
const ENV_DESENVOLVIMENTO = "177.62.25.8:3001"


const api = axios.create({
  baseURL: `http://${ENV_DESENVOLVIMENTO}`
});


export default api;