import { handleSubmit } from './js/formHandler';
import { checkValidURL } from './js/formHandler';
import { updateUI } from './js/updateUI';


import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

alert('I exist!')

//export so that webpack can add it to the Client library
export { 
    checkValidURL,
    handleSubmit,
    updateUI,
}
