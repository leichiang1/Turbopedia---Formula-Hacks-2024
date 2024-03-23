// Driver Data Formula 1 
async function get_driver_data(){
    const apiUrl = `https://api.openf1.org/v1/drivers`; // Directly include the driver's name
    const response = await fetch(apiUrl); // Assuming fetch is available in your environment

    if(!response.ok){
        throw new Error("Driver Data Not Found!");
    }
    return response.json();
}

async function fetchData() {
    try {
        const data = await get_driver_data();
        const selectedData = data.slice(900 , 2499);
        return selectedData
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

console.log(fetchData());



// RESPONSIVE MENU

function show_sidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hide_sidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

// DATA READER FOR DRIVERS

const driver_form = document.querySelector(".driver_search");
const driver_input = document.querySelector(".driver_input");
const display_card = document.querySelector(".data_card");
const profile_pic = document.getElementById("profile");
const description = document.querySelector(".description");

driver_form.addEventListener("submit", async event => {
    event.preventDefault();
    const driver = driver_input.value;
    driver_input.value = null;
    display_driver(driver);

})

async function display_driver(driver){
    let found = null;
    fetchData().then(data => {
        for(const x of data){
            if (x.full_name.toUpperCase().trim() === driver.toUpperCase().trim()){
                if (x.driver_number == null || x.headshot_url == null|| x.country_code == null || x.team_name == null){
                    continue;
                }
                found = x;
            }
        }
        if (found == null){
            display_card.innerHTML = `<p style="color:red; background-color: white;">Please Enter a Valid Name for a Current F1 Driver</p>`;
            display_card.style.display = "flex";
            return;
        }
        else{
            const {driver_number: driver_no, full_name: name, headshot_url: photo, country_code: country, team_name: team} = found;
            let logo;
            let flag;
            switch(team){
                case "Aston Martin":
                    logo = "images/aston_martin.jpeg";
                    break;
                case "Alpine":
                    logo = "images/alpine.png";
                    break;
                case "Ferrari":
                    logo = "images/ferrari.jpg";
                    break;
                case "Kick Sauber":
                    logo = "images/kick.jpeg";
                    break;
                case "McLaren":
                    logo = "images/mclaren.png";
                    break;
                case "RB":
                    logo = "images/visarb.jpeg";
                    break;
                case "Mercedes":
                    logo = "images/mercedes.png";
                    break;
                case "Red Bull Racing":
                    logo = "images/red_bull.jpeg";
                    break;
                case "Williams":
                    logo = "images/williams.jpeg";
                    break;
            }

            switch(country) {
                case "USA":
                    flag = "images/america.svg";
                    break;
                case "AUS":
                    flag = "images/australia.svg";
                    break;
                case "GBR":
                    flag = "images/britain.svg";
                    break;
                case "CAN":
                    flag = "images/canada.webp";
                    break;
                case "THA":
                    flag = "images/thailand.webp";
                    break;
                case "CHN":
                    flag = "images/china.webp";
                    break;
                case "DEN":
                    flag = "images/denmark.png";
                    break;
                case "FRA":
                    flag = "images/france.webp";
                    break;
                case "JPN":
                    flag = "images/japan.webp";
                    break;
                case "FIN":
                    flag = "images/finland.webp";
                    break;
                case "NED":
                    flag = "images/netherlands.svg";
                    break;
                case "MON":
                    flag = "images/monaco.png";
                    break;
                case "GER":
                     flag = "images/germany.png";
                     break;
                case "MEX":
                     flag = "images/mexico.webp";
                     break;
                case "ESP":
                     flag = "images/spain.webp";
                     break;
                case "CAN":
                    flag = "images/canada.webp";
                    break;
            }
            
            
            
            new_html = `<img id = "profile" src = ${photo}>
                        <div class = "description">
                        <h1 id = "full_name">${name}</h1>
                        <img id = "country" src = ${flag}>
                        <p>Country: ${country}</p>
                        <p>Team: ${team}</p>
                        <img id = "team" src = "${logo}">
                        <p id = "driver_number">Driver Number: ${driver_no}</p>`
            console.log(photo);
            display_card.innerHTML = new_html;
            display_card.style.display = "flex";
            profile.style.animation = "glow_white 5s, slide_from_Left 3s";
        }
    }  
    )
}
