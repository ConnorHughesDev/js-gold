
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json'; // Define baseUrl endpoint
const key = '71UmAGsR8GRdEsLaBBKooZmOKHTrb5tX'; // please include your own key. Defining the key to access the API
let url; // Declaring url variable

const searchTerm = document.querySelector('.search'); // defining a variable to access HTML class
const startDate = document.querySelector('.start-date'); // defining a variable to access HTML class
const endDate = document.querySelector('.end-date'); // defining a variable to access HTML class
const searchForm = document.querySelector('form'); // defining a variable to access HTML class
const submitBtn = document.querySelector('.submit'); // defining a variable to access HTML class
const nextBtn = document.querySelector('.next'); // defining a variable to access HTML class
const previousBtn = document.querySelector('.prev'); // defining a variable to access HTML class
const nav = document.querySelector('nav'); // defining a variable to access HTML class
const section = document.querySelector('section'); // defining a variable to access HTML class

nav.style.display = 'none'; //style reset on Nav to none
let pageNumber = 0; // Declaring and initializing the variable to 0
// console.log('PageNumber:', pageNumber);

searchForm.addEventListener('submit', fetchResults); //listens for submit and calls fetchResults
nextBtn.addEventListener('click', nextPage); //listens for the nextBtn then runs NextPage
previousBtn.addEventListener('click', previousPage);// listens for the previousBtn then runs previousPage

function fetchResults(e) { //declaring function fetchResults "e is accessing the submit button"
    // console.log(e);
    e.preventDefault(); // prevent submit from refreshing the browser

    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //putting detailed url together
    // console.log('URL:', url);

    if (startDate.value !== '') { //checks if startDate is NOT empty
        console.log(startDate.value)//logs to console
        url += '&begin_date=' + startDate.value; //re-initializes url to include start date
        console.log('URL:', url); //logs to console
    }

    if (endDate.value !== '') { //checks if endDate is NOT empty
        console.log(endDate.value)//logs to console
        url += '&end_date=' + endDate.value;//re-initializes url to include endDate
        console.log('URL:', url);//logs to console
    }

// GROUP TWO

    fetch(url)//get results from our search url
        .then(function (result) {//promise resolver
            console.log(result) //logs to console
            return result.json(); //returns our data in JSON format JSON-ify
        })
        .then(function (json) { //chaining promise resolver
            console.log(json); //logs to console
            displayResults(json); //grabs the json-ified results and feeds (argument) to displayResults function
        })
}

function displayResults(json) { //function for displaying data accepting a parameter
    console.log('Display Results', json); //logs to console
    // console.log(json.response.docs);

    while (section.firstChild) { //while previous data is there (while section has firstChild)
        section.removeChild(section.firstChild); //removes previous search data (remove the section firstChild). prevents displaying more info if info is already present
    }

    let articles = json.response.docs;//declaring and initializing articles variable to json-ified results
    // console.log("Articles: ",articles);

    if (articles.length === 0) { //checking the length of the array for empty results
        alert('No results'); //alerts that there are no results
    } else {
        for (let i = 0; i < articles.length; i++) { //numbering articles' index
            // console.log(i);
            let article = document.createElement('article'); //creating a article element called article
            let heading = document.createElement('h2'); //creating a heading2 element called heading
            let link = document.createElement('a'); //creating an a-tag element called link
            let img = document.createElement('img'); //creating an img tag called img
            let para = document.createElement('p'); //creating a p tag called para
            // let clearfix = document.createElement('div');
            let current = articles[i]; //defining what index article is in results

            console.log('Current:', current); //logs to console

            link.href = current.web_url; //defines url for the corresponding article
            link.textContent = current.headline.main; //asigns headline to link
            para.textContent = 'Keywords: '; //adds the word Keywords to format

            for (let j = 0; j < current.keywords.length; j++) { //determines how many keywords
                let span = document.createElement('span'); // create span tag
                span.textContent += current.keywords[j].value + ' '; //adds, keywords. seperated by a space to span tag
                para.appendChild(span); //adds span to p tag with keyword in it
            }

// GROUP THREE

            if (current.multimedia.length > 0) { //checks if there is multimedia
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //sets src url for first item img
                img.alt = current.headline.main; //sets alt tag to headline.main
            }

            // clearfix.setAttribute('class', 'clearfix');
            heading.appendChild(link); //adds link to heading
            article.appendChild(heading);//adds heading to article
            article.appendChild(img); //adds img to article
            article.appendChild(para); //adds para to article
            // article.appendChild(clearfix);

            link.className("article-hHeader")
            link.setAttribute("id", "articleHeader")
            section.appendChild(article); //adds article to section in HTML
        }
    }

    if (articles.length === 10) { //if there are exactly 10 articles 
        nav.style.display = 'block';//show the nav
    } else {                        // otherwise
        nav.style.display = 'none';//dont show the nav
    }
}

function nextPage(e) { //sets function nextPage to change pageNuber
    // console.log('Next button clicked');
    pageNumber++; //adds one to page number
    fetchResults(e); //update url for next page of results
    console.log('Page Number:', pageNumber); //logs to console
}

function previousPage(e) { //sets function previousPage to change PageNumber
    // console.log('Previous button clicked');
    if (pageNumber > 0) { // tests if pageNumber is > 0
        pageNumber--; //if so, subtract 1 from pageNumber
    } else {            //otherwise
        return;         //do nothing 
    }

    fetchResults(e); //update url for results
    console.log('Page:', pageNumber); //logs to console
}