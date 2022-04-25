const form = document.getElementById('userForm');
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');

let articles = 0;
//document.getElementById('submitForm').disabled = true;

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const mail = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    const delivery = document.getElementById('freeDelivery').checked;
    
    if(userName && ValidateEmail(mail) && articles > 0){
        console.log('name: ', userName);
        console.log('email: ', mail);
        console.log('message: ', message);
        delivery ? console.log('free delivery') : console.log('no free delivery');
        console.log('article 1: ', numberOfArticles('labelA1'));
        console.log('article 2: ', numberOfArticles('labelA2'));
        console.log('article 3: ', numberOfArticles('labelA3'));  
    }
})


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    document.getElementById('errorMail').innerHTML = '';
    return (true)
  }
    document.getElementById('errorMail').innerHTML = 'Invalid email!';
    return (false)
}


function numberOfArticles(id){
    let array = document.getElementById(id).innerHTML.split(':');
    return parseInt(array[1]) || 0;
}


let addArticle = (id) => {
    let array = document.getElementById(id).innerHTML.split(':');
    let number = parseInt(array[1]) || 0;
    number++;
    articles++;
    document.getElementById(id).innerHTML = 'Quantity:' + number;
}


article1.onclick = addArticle.bind(this,'labelA1');
article2.onclick = addArticle.bind(this,'labelA2');
article3.onclick = addArticle.bind(this,'labelA3');