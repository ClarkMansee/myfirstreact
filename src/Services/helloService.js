import httpCommon from "../Commons/http-common";

const getHello = () =>{

    return httpCommon.get('/hello');

}

export default {getHello};