export default class AdvertismentApi {
    addAdvertismentURL = 'http://almodarrebalarabi.com/api/advertisements';
    async addAdvertisment(advData) {
        var advFormData = new FormData();
        advFormData.append("user_id", advData.userID);
        advFormData.append("title", advData.title);
        advFormData.append("content", advData.content);
        advFormData.append("publish_date", advData.date);

        const response = await fetch(this.addAdvertismentURL,
            {
                method: 'POST',
                body: advFormData
            });
        const data = await response.json();

        return data;
    }
    async getAllAdvertisments() {
    const AllAdvertisments="http://almodarrebalarabi.com/api/advertisements";

        debugger;
        const response=await fetch(AllAdvertisments,
            {
                method:'GET'
            });
        debugger;
        const data=await response.json();
        return data;
    }

}