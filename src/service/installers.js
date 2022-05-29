import {httpConnet} from './config'
const axios = require('axios').default;

export default {
	listFullInstallers:() => {
		return httpChallenge.get('/installers');
	},
	listInstallers:(plan_id) => {
		return httpChallenge.get('/installers?plan='+ plan_id);
	},
  createInstaller:(installerId) => {
    return httpChallenge.post('/installers',{
      headers: {
        id: installerId
      }
    })
  },
  loginInstaller:(user, pass) => {
    return httpConnet.post('/installers/login', {
      headers: {
        id: parseInt(user),
        password: pass
      }
    })
  },
}

