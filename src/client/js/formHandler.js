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
//verfies user enters website url in valid format
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
//posts url input by user to local server
const sendData = async (url = '', data) => {

    fetch(url, {
        method: 'POST',
        body: data, 
    })
    .catch(error => {
        console.log(error)
    })
}
//posts user input url to server on submit
const handleSubmit = async (e) => {
    const formData = new FormData(this);

    sendData('/test', formData);        

};

export {
    validateURL,
    checkValidURL,
    handleSubmit,
    sendData
}