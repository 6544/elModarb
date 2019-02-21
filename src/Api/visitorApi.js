
export class Api {
    formData;
    loginUrl = "http://almodarrebalarabi.com/api/login";
    registerUrl = "http://almodarrebalarabi.com/api/register/user";
    logoutUrl = "http://almodarrebalarabi.com/api/logout";

    async visitorLogin(visitorData) {
       // debugger;
        this.formData = new FormData();
        this.formData.append("email", visitorData.email);
        this.formData.append("password", visitorData.password);
        var response = await fetch(this.loginUrl,
            {
                method: 'POST',
                body: this.formData
            })
        var data = await response.json();
       // debugger;

        return data;

    }
    async visitorRegister(visitorData) {
       // debugger;
        this.formData = new FormData();
        this.formData.append("name", visitorData.name);
        this.formData.append("email", visitorData.email)
        this.formData.append("prefix", visitorData.prefix)
        this.formData.append("phone", visitorData.phone)
        this.formData.append("password", visitorData.password)
        this.formData.append("confirmPassword", visitorData.confirmPassword)
        this.formData.append("country_id", visitorData.countryID)
        this.formData.append("state_id", visitorData.stateID)
        this.formData.append("nationality_id", visitorData.nationality)
        this.formData.append("city_id", visitorData.cityID)
        this.formData.append("gcm",visitorData.fcmToken);

        const response = await fetch(this.registerUrl,
            {
                method: 'POST',
                body: this.formData
            });
        const data = await response.json();
       // debugger;
        console.log("api data " + data);
        return data;

    }

    async logout(userData) {
       // alert(userData.token);
        const response = await fetch(this.logoutUrl,
            {
                method:'GET',
                headers: {
                    Authorization: 'Bearer ' + userData.token
                }
            })
        const data = await response.json();
       
        return data;
    }

}



