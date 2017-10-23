function checkForBracket() {
    var regExp = new RegExp('<');
    var name = document.getElementById('name').value;

    if (regExp.test(name)) {
        console.log('contains illegal characters');
        document.getElementById('name').style.backgroundColor='red';
    } else {
        document.getElementById('name').style.backgroundColor = '';
    }
}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var age = document.getElementById('age').value;

    if(regEx.test(age)) {
        console.log('contains illegal characters' + document.getElementById('age').value);
        document.getElementById('age').style.backgroundColor='red';
    } else {
        document.getElementById('age').style.backgroundColor='';
    }
}

function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function myAjaxCall() {
    alert("I made my AJAX Call");
}

function validate() {
    if(checkEmail(document.getElementById('email').value)) {
        myAjaxCall();

        var inputs = document.getElementsByClassName('input');
        for(var i=0; i<inputs.length; i++) {
            inputs[i].value = '';
        }
        } else {
            alert('I failed to validate. Check information');
        }
}