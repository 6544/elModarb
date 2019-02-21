class Api {
   // add_updateSocialUrl = "http://modarrebarabi.sailaway-eg.com/api/socials/user/6";
    createSocialUrl="http://almodarrebalarabi.com/api/socials/user/"
    socialFormData;
    async Add_UpdateSocialIntegration(socialData) {
        this.socialFormData = new FormData();
        this.socialFormData.append(`socials[${socialData.letter}]`, socialData.url);
       // debugger;

        const response = await fetch(
            this.createSocialUrl+socialData.id
            , {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + socialData.token
                },
                body: this.socialFormData

            });
           // debugger;
        const data = await response.json();
       // debugger;

        console.log(data);

        return data;
    }
}
export default api = new Api();