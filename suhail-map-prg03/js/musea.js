window.addEventListener('load', init);

const apiUrl = 'http://localhost/webservice/suhail-map-prg03';
let section;
let list;
let saveitems = [];
let detailpage;
let museaData = [];

function init()
{
    list = document.getElementById("content")
    list.addEventListener('click', ItemWasClicked)

    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(parkenSuccesHandler)
        .catch(ajaxErrorHandler)

    createdetailpagina()
}

//create detail popup pagina
function createdetailpagina(){
    const detailpageholder = document.createElement('section')
    detailpageholder.classList.add('detailpageholder')
    detailpage = document.createElement('section')
    detailpage.classList.add('detailpage')
    detailpage.id = 'hide'

    document.body.appendChild(detailpageholder)
    detailpageholder.appendChild(detailpage)
    detailpage.addEventListener('click', ItemWasClicked)
}

//create een section waar de detail in word geladen
function parkenSuccesHandler(data){
    for (let musea of data) {
        const newmuseumdiv = document.createElement('section')
        newmuseumdiv.classList.add("content-holder")
        newmuseumdiv.dataset.name = musea.name;
        list.appendChild(newmuseumdiv)

        fetch(apiUrl + '?id=' + musea.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(detailSuccesHandler)
            .catch(ajaxErrorHandler);
    }
}

//zet de detail van musea in de section
function detailSuccesHandler(museum){
    let museumCard = document.querySelector(`.content-holder[data-name='${museum.name}']`);
    //logo inladen
    let logoimg = document.createElement("img")
    logoimg.src = museum.img
    logoimg.alt = museum.imgalt
    logoimg.classList.add("content-vak")
    museumCard.appendChild(logoimg)

    //create mid content
    let midcontent = document.createElement('section')
    midcontent.classList.add('content-vak')
    museumCard.appendChild(midcontent)

    //title inladen
    let title = document.createElement('h2');
    title.innerHTML = museum.name;
    midcontent.appendChild(title);

    //link inladen
    let link = document.createElement("a")
    link.innerHTML = museum.linktext
    link.href = museum.link
    link.setAttribute('target', '_blank');
    midcontent.appendChild(link);

    // criteria title inladen
    let list2h3 = document.createElement("h3")
    list2h3.innerHTML = 'Criteria'
    midcontent.appendChild(list2h3);

    //criteria list inladen
    let list2 = document.createElement("ul")
    midcontent.appendChild(list2);

    //criteria inladen
    for (let t = 0; t < 4; t++) {
        let list2item = document.createElement("li")
        list2item.innerHTML = museum.criteria[t]
        list2.appendChild(list2item)
    }

    //create right content
    let rightcontent = document.createElement('section')
    rightcontent.classList.add('content-vak')
    museumCard.appendChild(rightcontent)

    //openings tijden title inladen
    let openingstijdenh3 = document.createElement("h3")
    openingstijdenh3.innerHTML = 'Openingstijden'
    rightcontent.appendChild(openingstijdenh3);

    //openings tijden list inladen
    let openingstijdenlijst = document.createElement("table")
    rightcontent.appendChild(openingstijdenlijst);

    //openings tijden inladen
    for (let t = 0; t < 7; t++) {
        let tijdenlistitem = document.createElement("tr")

        let dag = document.createElement("td")
        dag.innerHTML = "<b>" + museum.openingsdagen[t] + "</b>"

        let tijd = document.createElement("td")
        tijd.innerHTML = museum.openingstijden[t]

        tijdenlistitem.appendChild(dag)
        tijdenlistitem.appendChild(tijd)

        openingstijdenlijst.appendChild(tijdenlistitem)
    }

    //creat lees button
    let leesmeerbutton = document.createElement("button")
    leesmeerbutton.innerHTML = 'Lees meer'
    leesmeerbutton.classList.add("lees")
    leesmeerbutton.dataset.id = museum.id;
    rightcontent.appendChild(leesmeerbutton)

    //creat save button
    let savenbutton = document.createElement("button")
    savenbutton.innerHTML = 'save ' + museum.name
    savenbutton.id = museum.name
    savenbutton.classList.add("save")
    savenbutton.classList.add("notsaved")
    rightcontent.appendChild(savenbutton)

    //save het museum info in museaData
    museaData[museum.id] = museum

    loadSaves(museum.name)
}

//kijk of het museum is opgeslagen
function loadSaves(museumname) {
    if(localStorage.getItem("savelist-musea")){
        saveitems = JSON.parse(localStorage.getItem("savelist-musea"));
        for (let i = 0; i < saveitems.length; i++){
            if(saveitems[i] === "save " + museumname){
                let button = document.getElementById(museumname)
                button.classList.add("saved")
                button.classList.remove("notsaved")
                button.innerHTML = button.innerHTML.replace("save", "unsave");
            }
        }
    }
}

//laad de data in detail pagina
function showditail(id){
    //find detailcontent
    const  detailcontent = document.getElementsByClassName('detailpage')[0]
    //empty detailcontent
    detailcontent.innerHTML = ''

    //create button
    let closebutton = document.createElement("button")
    closebutton.innerHTML = 'Lees minder'
    closebutton.classList.add("lees")
    detailcontent.appendChild(closebutton)

    //ingeladen banner neerzetten
    let bannerimg = document.createElement("img")
    bannerimg.src = museaData[id].bannerimg
    bannerimg.alt = museaData[id].bannerimgalt
    bannerimg.classList.add("banner-museum")
    detailcontent.appendChild(bannerimg)

    //create text container
    let textcontainer  = document.createElement("section")
    textcontainer.classList.add("textcontainer")
    detailcontent.appendChild(textcontainer)

    //create top atracties container
    let toplistcontainer  = document.createElement("section")
    toplistcontainer.classList.add("topattractiescontainer")
    textcontainer.appendChild(toplistcontainer)

    //create title voor top lijst
    let toplisth3 = document.createElement("h3")
    toplisth3.innerHTML = 'Criteria'
    toplistcontainer.appendChild(toplisth3);

    //create ul item
    let toplist = document.createElement("ul")
    toplistcontainer.appendChild(toplist);

    //criteria lijst neerzetten
    for (let t = 0; t < 4; t++) {
        let toplistitem = document.createElement("li")
        toplistitem.innerHTML = museaData[id].criteria[t]
        toplist.appendChild(toplistitem)
    }

    //create een container voor de info
    let infocontainer  = document.createElement("section")
    textcontainer.appendChild(infocontainer)

    //create een titel voor detail pagina
    let infotitle = document.createElement('h3')
    infotitle.innerHTML = "Over het museum"
    infocontainer.appendChild(infotitle);

    //ingeladen info voor detail neerzetten
    let infotext = document.createElement('p')
    infotext.innerHTML = museaData[id].info
    infocontainer.appendChild(infotext);

}

//klik function
function ItemWasClicked(e) {
    //save action
    if (e.target.classList.item(0) === "save") {
        if (e.target.classList.item(1) === "notsaved") {
            e.target.classList.add("saved")
            e.target.classList.remove("notsaved")
            console.log(e.target.innerHTML)
            saveitems.push(e.target.innerHTML)
            e.target.innerHTML = e.target.innerHTML.replace("save", "unsave");
            localStorage.setItem("savelist-musea", JSON.stringify(saveitems));
        } else if (e.target.classList.item(1) === "saved") {
            e.target.classList.add("notsaved")
            e.target.classList.remove("saved")
            console.log(e.target.innerHTML)
            let remove = saveitems.indexOf(e.target.innerHTML.replace("unsave", "save"))
            saveitems.splice(remove, 1)
            e.target.innerHTML = e.target.innerHTML.replace("unsave", "save");
            localStorage.setItem("savelist-musea", JSON.stringify(saveitems));
        }
    }
    //lees function
    if (e.target.classList.item(0) === "lees") {
        if (detailpage.id === "hide") {
            detailpage.id = "show"
            document.body.classList.add("noscroll")
            showditail(e.target.dataset.id)
        } else if (detailpage.id === "show") {
            detailpage.id = "hide"
            document.body.classList.remove("noscroll")
        }
    }
}

//error code
function ajaxErrorHandler(error){
    console.error(error)
}
