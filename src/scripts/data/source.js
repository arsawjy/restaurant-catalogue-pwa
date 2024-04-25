import ENDPOINT from "./end-point";

class sourceData {
    static async listRestaurant() {
        const response = await fetch(ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson;
    }
    
    static async detailRestaurant(id) {
        const response = await fetch(ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default sourceData;