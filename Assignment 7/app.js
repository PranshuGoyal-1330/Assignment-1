const form=document.querySelector('form');
const result=document.getElementById('result');




function getWeather(searchText){
 
   
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    
const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=307d3f200239fe7ecf0d074a7fbf6f8d`;

console.dir(result);
fetch(url)
.then((res)=>{
    return res.json();
})

.then((data)=>{
    console.log(data);

    const card=document.createElement('div');
    const list=document.createElement('li');
    const img=document.createElement('img');
    list.classList.add('c1');
    list.innerText=data.name;
    
    const list2=document.createElement('li');
    let temp=Math.round(data.main.temp-273.15);
    list2.classList.add('c2');
    list2.innerText=(temp)+'\u00B0C';


    const x=data.weather[0].icon;
    img.src = `http://openweathermap.org/img/wn/${x}@2x.png`;
    if(data.name=='Delhi')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1587474260584-136574528ed5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
    }

    else if(data.weather[0].description=='clear sky')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
    }
    else if(data.weather[0].description=='few clouds')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
    }
    else if(data.weather[0].description=='overcast clouds')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
    }

    else if(data.weather[0].description=='scattered clouds')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
    }
    else if(data.weather[0].description=='broken clouds')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
    }

    else if(data.weather[0].description=='shower rain')
    {
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    else if(data.weather[0].description=='rain')
    {
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    else if(data.weather[0].description=='light rain')
    {
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    else if(data.weather[0].description=='very heavy rain')
    {
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    else if(data.weather[0].description=='moderate rain')
    {
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    else if(data.weather[0].description=='thunderstorm')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80')";
    }
    else if(data.weather[0].description=='snow')
    {
        document.body.style.backgroundImage="url('https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?cs=srgb&dl=pexels-simon-berger-688660.jpg&fm=jpg')";
    }
     
    else if(data.weather[0].description=='mist')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1490590292518-2a52bd885754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80')";
    }
    else if(data.weather[0].description=='haze')
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1590415000895-04ab80fcd2da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
    }
   
        
    
    


    const list3=document.createElement('li');
    list3.classList.add('c3');
    list3.innerText=data.weather[0].description;


    const list4=document.createElement('li');
    let max=Math.round(data.main.temp_max-273.15);
    let min=Math.round(data.main.temp_min-273.15);
    list4.classList.add('c4');
    list4.innerText=(min)+'\u00B0C'+'(min) '+(max)+'\u00B0C'+'(max)';
    

    const list5=document.createElement('li');
    let feel=Math.round(data.main.feels_like-273.15);
    list5.classList.add('c6');
   
    list5.innerHTML='<i class="bi bi-thermometer-half" style="color:yellow"></i>'+" "+feel+'\u00B0C'+'(real feel)';

    const list6=document.createElement('li');
    let hum=data.main.humidity;
    list6.classList.add('c5');
    list6.innerHTML='<i class="fas fa-tint" style="color:blue"></i>'+" "+hum+'%';

    const list7=document.createElement('li');
    let speed=Math.round(data.wind.speed);
    list7.classList.add('c7');
    list7.innerHTML='<i class="fas fa-wind" style="color:#caf0f8"></i>'+" "+speed+'km/h';


    

    result.append(list);
    result.append(img);
    result.append(list2);
    result.append(list3);
    result.append(list4);
    result.append(list6);
    result.append(list7);
    result.append(list5);
  
    

   
})

.catch((err)=>{
    console.log(err.message);
})
}







form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchText=form.elements[0].value;
    getWeather(searchText);
    form.elements[0].value="";

})