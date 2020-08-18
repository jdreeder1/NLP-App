This project uses Natural Language Processing via a Sentiment Analysis API developed by MeaningCloud to analyze the language used on user-entered websites. 
This project heavily relies on asynchronous functions using the fetch API and numerous loaders and plug-ins to optimize run-time and user experience, 
including Babel, CSS  optimization plug-ins, and Service Workers. Webpack is used as a build tool for all of the included js and css files (for organizational 
and efficieny purposes), and as a pre-processor for scss files. The user interface is simple, most of the work is done behind-the-scenes: the user enters 
a url in the form provided, submits that url, the client-side form-handling function posts that url to the local server, the local server makes a 
request to the Sentiment Analysis API using the posted url and the API key (hidden in a .env file), stores the API's response as JSON, and displays that response to the
user (in readable, full sentences) after the user clicks "get results." 