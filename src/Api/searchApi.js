searchUrl="http://almodarrebalarabi.com/api/search";
async function searchByNameFromApi(newObject){
   // debugger;
    var tempbody=new FormData();
   if(newObject.type=="name")
   {
      // debugger;
    tempbody.append("name",newObject.name);
    console.log(tempbody);
   }
   else 
   {
        tempbody.append("country_id",newObject.country_id.id);
        tempbody.append("state_id",newObject.city_id.id);
        tempbody.append("city_id",newObject.state_id.id);
        console.log(tempbody);
   }
   tempbody.append("type",newObject.type);

     
    var response=await fetch(searchUrl,{
        method:'POST',
        body:tempbody
    });
   // debugger;
    const data=await response.json();
    debugger
    console.log(data);
    return data;
}

export const Api={
 searchByNameFromApi,
//  searchByPlaceFromApi

}