

let slideIndex = 0;
showSlides();

// validation();
// closeForm();
// openForm();

switchForm();

showPreview(event);

function switchForm(){
  document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
}

//for home

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//for upload image

function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
}


//for admin login
function openForm() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
}

function validation() {
        var email = 'admin@gmail.com'
        var password ='admin'

        var eMail = document.getElementById('emailnasad').value;
        var passWord = document.getElementById('pswdaw').value;

        if ((email == eMail) && (password == passWord)) {
          alert("\n Welcome Admin")
          document.getElementById('form').setAttribute("action", "admindashboard.component.html");

        }
        else {
            alert("\nWrong Entry!")
            // document.getElementsByClassName('formContainer').setAttribute('class','form');
        }
    }
