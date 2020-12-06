var database, form, user, personCount;



function setup() {
	createCanvas(1500,1000);
	
	database = firebase.database();
	form = new Form();
	user = new User();
	user.getCount();

}


function draw() {
  
  background("lightgreen");


  form.display();
 
  
  drawSprites();
 
}

