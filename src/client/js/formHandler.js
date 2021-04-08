function handleSubmit(event){
    event.preventDefault()
    const city = document.getElementById('city').value

    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let daysRemaining = Client.countDown(startDate,endDate)

    Client.geonamesData(city)        
    .then(data=>{
        let weather = {}
        let photo;              
 
        Client.init = () => {
            Client.postData({
                city: data.name, 
                country: data.countryName, 
                lat: data.lat, 
                lng: data.lng, 
                dateStart:startDate, 
                dateEnd:endDate, 
                date: daysRemaining,
                high: weather.high_temp,
                low: weather.low_temp,
                weather: weather.weather.description,
                imgURL: photo                
            })
            Client.addData()
        }
        Client.weatherbitData(data.lat, data.lng).then(result =>{
            weather = result
            Client.init()
        })
        Client.pixabayData(data.name).then(result =>{
            photo = result
            Client.init()
        })   
    })
    
}
export{handleSubmit}