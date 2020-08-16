/*
The callback function on the post route in express server will have a fetch request for the meaningcloud API. So, if your endpoint is named '/analyzeUrl':

The frontend JS code would do a POST request to express server with endpoint '/analyzeUrl'.
The express server would accept the POST request for '/analyzeUrl'
The express server would then call the callback function that sends the URL to meaningcloud API for analysis. It would require the API keys at this point.
The express server would then get the response from the API and send it back to frontend JS
The frontend code would then output the response on the HTML page.
*/

const userInput = document.getElementById('userInput');
const validate = document.getElementById('validate');
const submit = document.getElementById('submit');
const retrieve = document.getElementById('retrieve');

  //Regex from https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
 const validateURL = (myURL) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    return pattern.test(myURL);
 };

 const checkValidURL = () => {
     let text = userInput.value;
    if(validateURL(text) == false){
        validate.style.color = 'red';
        validate.innerHTML = `Invalid URL format entered. Please enter a valid http or https URL.`;
        submit.style.pointerEvents = 'none';
        retrieve.style.pointerEvents = 'none';
    }
    else {
        validate.style.color = 'black';
        validate.innerHTML = '';
        submit.style.pointerEvents = 'auto';
        retrieve.style.pointerEvents = 'auto';
    }
 }

const sendData = async (url = '', data) => {

    fetch(url, {
        method: 'POST',
        body: data, //JSON.stringify(data),
    }).then((response) => {return response.text()})
    .then((text) => {console.log(text)})
    .catch((error) => {console.log(error)})
}

//ADD FORM VALIDATION!!!
const handleSubmit = async (e) => {
    const formData = new FormData(this);

    sendData('/test', formData);
        

};

export {
    checkValidURL,
    handleSubmit,
    sendData
}