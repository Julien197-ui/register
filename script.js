

//test2    
/*
function validation(event){
   
    const name = document.getElementById('name');
    const missName = document.getElementById('missName');
    const formField =document.getElementById('form-field');
    //Si le champ est vide
    if (name.validity == ""){
        formField.classList.add("error");
        event.preventDefault();
        missName.textContent = 'Nom manquant';
        missName.style.color = 'red';
        validation=false;
        
    }else{ validation=true;
    }
    return validation
}
var formValid = document.getElementById('boutonEnvoi');
formValid.addEventListener('click', validation);
*/








//test 1
/*
const nameEl = document.querySelector('#name');
const surNameEl = document.querySelector('#surName');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const checkUsername = () => {

        let valid = false;
        const name = nameEl.value.trim();
    
        if (!isRequired(username)) {
            showError(nameEl, 'Le champ du nom doit être rempli.');
            const showError = (input, message) => {
                const formField = input.parentElement;
                formField.classList.remove('success');
                formField.classList.add('error');
            
                const error = formField.querySelector('small');
                error.textContent = message;
            };
        } else {
            const showSuccess = (input) => {
                const formField = input.parentElement;
                formField.classList.remove('error');
                formField.classList.add('success');
                const error = formField.querySelector('small');
                error.textContent = '';
            }
            showSuccess(nameEl);
            valid = true;
        }
        return valid;
    }
    
});
*/
