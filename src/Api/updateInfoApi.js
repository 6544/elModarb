class Api {
    infoUrl = "http://almodarrebalarabi.com/api/person/update/";
    professionalCardUrl="http://almodarrebalarabi.com/api/person/update/professionalcard/"
    formData;
    async updateInfo(infoData) {
        debugger;
        this.formData = new FormData();
        this.formData.append('name', infoData.name);
        this.formData.append('email', infoData.email);
        this.formData.append('prefix', infoData.prefix);
        this.formData.append('phone', infoData.phone);
        this.formData.append('country_id', parseInt(infoData.countryID));
        this.formData.append('city_id', parseInt(infoData.cityID));
        this.formData.append('state_id', parseInt(infoData.cityID));
        this.formData.append('nationality_id', parseInt(infoData.nationalityID));


        const response = await fetch(
            this.infoUrl + infoData.id,
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + infoData.token
                },
                body: this.formData
            }
        )
        const data = await response.json();
        return data;
    }
    async updateProfessionalCard(professionalData) {
        debugger;
        this.formData = new FormData();
        this.formData.append("card",professionalData.card);

        const response = await fetch(
            this.professionalCardUrl + professionalData.id,
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + professionalData.token
                },
                body: this.formData
            }
        )
        const data = await response.json();
        debugger;
        return data;
        
    }
}

export default api = new Api();