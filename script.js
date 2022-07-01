/* .js files add interaction to your website */
var mountainDew = "Mountain Dew: Mountain Dew contains Brominated Vegetable Oil (BVO).This additive has been known to irritate the skin and mucus membranes. It can also cause headache and memory loss. This ingredient is banned in the E.U., Indian and Japan.";
var Skittles = "Skittles:  Skittles contains the food dye yellow 5 and yellow 6. They have been found to have an adverse effect on the acivity and attention of children.";
var breadP = "Bread Products: some bread products that are found on store shelves (Jimmy Dean Delights Turkey Sausage, Pillsbury Breaksticks, etc) have azodicarbonamide, a chemical that is used in yoga mats and flip-flops. It is used as a whitening agent and conditoner in bread.This substance is banned in Europe and Australlia, as it has been linked to respiratory problems. In Singapore, using this substance can cost you jail time. "
var instMasPot = "Instant Mashed Potatoes: It contains Butylated Hydroxyanisole (BHA). This is found in cereal, potato chips, and chewing gum. However, it also found in rubber. It is banned in the European Union, Australlia, Japan, and other countries because it is potentially a human carcinogen."
var rollsAndBuns = "Rolls and Buns: Some pre-made products contain a food additive called potassium bromate. This chemical is used during the flour processing to get higher-rising, whiter dough. In a study by the EWG, this additive has been linked to cancer. It is banned in many countries including South Korea and Peru"

var factArray = [mountainDew, Skittles, breadP, instMasPot, rollsAndBuns];

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "assets/mtndew.jpg";
imgArray[1] = new Image();
imgArray[1].src = "assets/skittles.jpg";
imgArray[2] = new Image();
imgArray[2].src = "assets/breadA.jpg";
imgArray[3] = new Image();
imgArray[3].src = "assets/instmasp.jpg";
imgArray[4] = new Image();
imgArray[4].src = "assets/breadroll.jpg";

var count = 0;
var fact = document.getElementById("foodDanger");
var myBtn = document.getElementById("myBtn");
  
myBtn.addEventListener("click", generate);

function generate(){
  fact.innerHTML = factArray[count];
  document.getElementById("FDA").src = imgArray[count].src;
  count++;
  if (count == factArray.length){
    count = 0;
  }
}
