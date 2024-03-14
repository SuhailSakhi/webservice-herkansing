window.addEventListener('load', init);

const apiUrl = 'http://localhost/webservice/suhail-map-prg03';
let section;
let list;
let saveitems = [];
let detailpage;
let fighterData = [];

function init() {
    list = document.getElementById("content");
    list.addEventListener('click', ItemWasClicked);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(fighterSuccesHandler)
        .catch(ajaxErrorHandler);

    createdetailpagina();

// Voeg event listener toe aan de Saved fighters knop
    document.querySelector('.navbar-item').addEventListener('click', showSavedFighters);
}
function showSavedFighters() {
    list.innerHTML = ''; // Leeg de huidige inhoud van de lijst

    // Laad en toon de opgeslagen fighters
    if (localStorage.getItem("savelist-fighter")) {
        saveitems = JSON.parse(localStorage.getItem("savelist-fighter"));
        for (let i = 0; i < saveitems.length; i++) {
            const fighterName = saveitems[i].replace("save ", "");
            if (fighterData[fighterName]) { // Controleer of de fighter in de data beschikbaar is
                const newfighterdiv = document.createElement('section');
                newfighterdiv.classList.add("content-holder");
                newfighterdiv.dataset.name = fighterData[fighterName].name;
                newfighterdiv.id = 'fighter_' + fighterData[fighterName].id;
                list.appendChild(newfighterdiv);
                detailSuccesHandler(newfighterdiv, fighterData[fighterName]);
            }
        }
    }
}



function fighterSuccesHandler(data) {
    for (let fighter of data) {
        const newfighterdiv = document.createElement('section');
        newfighterdiv.classList.add("content-holder");
        newfighterdiv.dataset.name = fighter.name;
        newfighterdiv.id = 'fighter_' + fighter.id; // Set unique ID for each fighter detail page
        list.appendChild(newfighterdiv);

        fetch(apiUrl + '?id=' + fighter.id)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(fighterDetail => {
                detailSuccesHandler(newfighterdiv, fighterDetail);
            })
            .catch(ajaxErrorHandler);
    }
}




// Define the scrollToFighter function
function scrollToFighter(fighterId) {
    // Find the fighter's detail page element by its ID
    const fighterDetail = document.getElementById('fighter_' + fighterId);

    // Scroll to the fighter's detail page using smooth scrolling behavior
    fighterDetail.scrollIntoView({ behavior: 'smooth' });
}


function createdetailpagina() {
    const detailpageholder = document.createElement('section');
    detailpageholder.classList.add('detailpageholder');
    detailpage = document.createElement('section');
    detailpage.classList.add('detailpage');
    detailpage.id = 'hide';

    document.body.appendChild(detailpageholder);
    detailpageholder.appendChild(detailpage);
    detailpage.addEventListener('click', ItemWasClicked);
}

function detailSuccesHandler(fighterCard, fighter) {
    // fighter foto inladen
    let fighterimg = document.createElement("img");
    fighterimg.src = fighter.img;
    fighterimg.alt = fighter.imgalt;
    fighterimg.classList.add("content-vak");
    fighterCard.appendChild(fighterimg);

    // create mid content
    let midcontent = document.createElement('section');
    midcontent.classList.add('content-vak');
    fighterCard.appendChild(midcontent);

    // title inladen
    let title = document.createElement('h2');
    title.innerHTML = fighter.name;
    midcontent.appendChild(title);


    // create lees button
    let leesmeerbutton = document.createElement("button");
    leesmeerbutton.innerHTML = 'info  ' + fighter.name;
    leesmeerbutton.classList.add("lees");
    leesmeerbutton.dataset.id = fighter.id;
    midcontent.appendChild(leesmeerbutton);

    // create save button
    let savenbutton = document.createElement("button");
    savenbutton.innerHTML = 'save ' + fighter.name;
    savenbutton.id = fighter.name;
    savenbutton.classList.add("save");
    savenbutton.classList.add("notsaved");
    midcontent.appendChild(savenbutton);

    // save the fighter info in fighterData
    fighterData[fighter.id] = fighter;

    loadSaves(fighter.name);
}

function loadSaves(fightername) {
    if (localStorage.getItem("savelist-fighter")) {
        saveitems = JSON.parse(localStorage.getItem("savelist-fighter"));
        for (let i = 0; i < saveitems.length; i++) {
            if (saveitems[i] === "save " + fightername) {
                let button = document.getElementById(fightername);
                button.classList.add("saved");
                button.classList.remove("notsaved");
                button.innerHTML = button.innerHTML.replace("save", "unsave");
            }
        }
    }
}



function showSavedPopup(fighterName) {
    // Creëer een pop-upbericht
    alert("Je hebt " + fighterName + " opgeslagen!");
}

function ItemWasClicked(e) {
    const targetClassList = e.target.classList;

    // Toggle save status
    if (targetClassList.contains("save")) {
        if (targetClassList.contains("notsaved")) {
            targetClassList.replace("notsaved", "saved");
            saveitems.push(e.target.innerHTML);
            // Laat een pop-upbericht zien wanneer een fighter wordt opgeslagen
            showSavedPopup(e.target.innerHTML.replace("save ", ""));
        } else if (targetClassList.contains("saved")) {
            targetClassList.replace("saved", "notsaved");
            const removeIndex = saveitems.indexOf(e.target.innerHTML.replace("unsave", "save"));
            if (removeIndex !== -1) {
                saveitems.splice(removeIndex, 1);
            }
        }
        e.target.innerHTML = e.target.innerHTML.includes("save") ? e.target.innerHTML.replace("save", "unsave") : e.target.innerHTML.replace("unsave", "save");
        localStorage.setItem("savelist-fighter", JSON.stringify(saveitems));
    }

    // Toggle detail page visibility
    if (targetClassList.contains("lees")) {
        detailpage.id = (detailpage.id === "hide") ? "show" : "hide";
        document.body.classList.toggle("noscroll");
        showdetail(e.target.dataset.id);
    }
}
function ajaxErrorHandler(error) {
    console.error(error);
}


// Define the showdetail function
function showdetail(id) {
    const detailcontent = document.getElementsByClassName('detailpage')[0];
    detailcontent.innerHTML = '';

    // create button
    let closebutton = document.createElement("button");
    closebutton.innerHTML = 'close';
    closebutton.classList.add("lees");
    detailcontent.appendChild(closebutton);

    // create text container
    let textcontainer = document.createElement("section");
    textcontainer.classList.add("textcontainer");
    detailcontent.appendChild(textcontainer);

    let infolistcontainer = document.createElement("section");
    infolistcontainer.classList.add("infolistcontainer");
    textcontainer.appendChild(infolistcontainer);

    let infolisth3 = document.createElement("h3");
    infolisth3.innerHTML = fighterData[id].name;
    infolistcontainer.appendChild(infolisth3);

// create ul item
    let infolist = document.createElement("ul");
    infolistcontainer.appendChild(infolist);

    for (let t = 0; t < 8; t++) {
        let infolistitem = document.createElement("li");
        infolistitem.innerHTML = fighterData[id].bio[t];
        infolist.appendChild(infolistitem);
    }
}
