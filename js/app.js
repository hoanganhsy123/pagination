  $("a.page").on("click", showPage)
  function showPage(event){
    let removeClass = $(".active");
    removeClass[0].classList.remove("active") 
    event.target.classList.add("active");
  }
function next(){
  if($("a.active").text() == $("a.page").length){
    $(".active").removeClass("active");
    let pageFirst = $("a.page")
    $(pageFirst[0]).addClass("active");
  } else{
    $(".pagination").find('.page.active').next().addClass('active');
    $(".pagination").find('.page.active').prev().removeClass('active');
  }  
 }
 function previous(){
  let pageFirst = $("a.page")
  let textPage =  $("a.active").text();
  let indexPage = $(pageFirst[0]).text();
  console.log($(pageFirst[0]).text());
  if(textPage == indexPage){
    $(".active").removeClass("active");
    let pageMax = $("a.page")
    $(pageMax[pageMax.length-1]).addClass("active");
  }else{
    $(".pagination").find('.page.active').prev().addClass('active');
    $(".pagination").find('.page.active').next().removeClass('active');
  }
 } 
// khi ở page 1, click next thì chuyển qua page 2 và remove page 1
// khi demoText bằng độ dài của mảng thì add class active vào page 1 và remove class actice ở page 4

 