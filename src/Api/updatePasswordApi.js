 class Api {
    passwordUrl = 'http://almodarrebalarabi.com/api/person/update/password/'
    formData;
    async updatePassword(passwordData) {
        this.formData = new FormData();
        this.formData.append('old_password', passwordData.oldPassword);
        this.formData.append('password', passwordData.password);
        this.formData.append('confirmPassword', passwordData.confirmPassword);

        const response = await fetch(this.passwordUrl + passwordData.id,
            {
                method: 'POST',
                headers: {
                    Authorization:'Bearer '+passwordData.token
                },
                body: this.formData

            });
            const data=await response.json();
           // debugger;
            return data;
    }
}
export default api=new Api()
