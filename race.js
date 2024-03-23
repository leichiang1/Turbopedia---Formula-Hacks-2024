// RACES SECTION

// FETCHING RACES DATA
const race_form = document.querySelector(".race_search");
const race_input = document.querySelector(".race_input");
const display_card = document.querySelector(".race_card");
const track_image = document.getElementById("track");
display_card.style.display = "none";

async function get_race_data(){
    const apiUrl = `https://api.openf1.org/v1/meetings`; // Directly include the driver's name
    const response = await fetch(apiUrl); // Assuming fetch is available in your environment

    if(!response.ok){
        throw new Error("Driver Data Not Found!");
    }
    return response.json();
}
console.log(get_race_data());


race_form.addEventListener("submit", async event => {
    event.preventDefault();
    const race = race_input.value;
    race_input.value = null;
    display_race(race);
})

async function display_race(race){
    let found = null;
    get_race_data().then(data => {
        for(const x of data){
            if (x.meeting_name.toUpperCase().trim() === race.toUpperCase().trim()){
                found = x;
            }
        }
        if (found == null){
            display_card.innerHTML = `<p style="color:red; background-color: white;">Please Enter a Valid Name for a 2023 Grand Prix</p>`;
            display_card.style.display = "flex";
            return;
        }
        const {meeting_name: meeting_name, location: location, country_code: country_code, country_name: country_name} = found;
        let flag;
        let track;

        switch(country_code) {
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
            case "BRN":
                flag = "images/bahrain.webp";
                break;
            case "KSA":
                flag = "images/saudi_arabia.webp";
                break;
            case "AZE":
                flag = "images/azerbaijan.webp";
                break;
            case "HUN":
                flag = "images/hungary.webp";
                break;
            case "BEL":
                flag = "images/belgium.png";
                break;
            case "ITA":
                flag = "images/italy.png";
                break;
            case "SGP":
                flag = "images/Singapore.png";
                break;
            case "QAT":
                flag = "images/QATAR.png";
                break;
            case "UAE":
                flag = "images/uae.webp";
                break;
            case "BRA":
                flag = "images/brazil.webp";
                break;
        }

        switch(location) {
            case "Suzuka":
                track = "images/japanesegp.avif";
                break;
            case "Sakhir":
                track = "images/sakhir.jpeg";
                break;
            case "Jeddah":
                track = "images/jeddah.webp";
                break;
            case "Melbourne":
                track = "images/melbourne.jpeg";
                break;
            case "Baku":
                track = "images/baku.jpeg";
                break;
            case "Miami":
                track = "images/miami.avif";
                break;
            case "Monaco":
                track = "images/monaco.webp";
                break;
            case "Barcelona":
                track = "images/barcelona.jpeg";
                break;
            case "Montréal":
                track = "images/montreal.jpeg";
                break;
            case "Silverstone":
                track = "images/silverstone.jpeg";
                break;
            case "Spa-Francorchamps":
                track = "images/spa.avif";
                break;
            case "Budapest":
                track = "images/budapest.png";
                break;
            case "Zandvoort":
                track = "images/dutch.jpeg";
                break;
            case "Monza":
                track = "images/monza.avif";
                break;
            case "Marina Bay":
                track = "images/marina.avif";
                break;
            case "Lusail":
                track = "images/lusail.webp";
                break;
            case "Austin":
                track = "images/austin.jpeg";
                break;
            case "Mexico City":
                track = "images/mexicocity.webp";
                break;
            case "São Paulo":
                track = "images/sp.jpeg";
                break;
            case "Las Vegas":
                track = "images/lv.jpeg";
                break;
            case "Yas Island":
                track = "images/yi.jpeg";
                break;

        }
        new_html = `<div class = "race_card">
                    <img id = "track" src = ${track}>
                    <div class = "description">
                    <h1 id = "race_name">${meeting_name}</h1>
                    <img id = "country" src = ${flag}>
                    <p>Country: ${country_name}</p>
                    <p>Location: ${location}</p>
                    </div>
                    </div>`
        display_card.innerHTML = new_html;
        display_card.style.display = "flex";
        display_card.style.animation = "glow_white 3s";
})}
        
// RESPONSIVE MENU
function show_sidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hide_sidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}