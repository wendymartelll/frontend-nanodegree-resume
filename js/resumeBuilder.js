
 var bio = {
   "name":"Wendy Martell ",
   "role":"Web Developer",
   "contacts":{
     "mobile": 3108490454,
     "email" : "wendymartelll@gmail.com",
     "github": "wendymartelll",
     "twitter":"@wendymartell",
     "location" :"Mountain View"
     } ,
   "welcomeMessage":"Im here ready to help you",
   "skills":["C++", "JavaScript", "Assembly", "Swift"," HTML-Css", "Web Development"],
   "biopic":"http://i44.photobucket.com/albums/f1/wendymartell/Profile_zpsu42berua.jpg",
 };

bio.display = function(){

  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedNameRole = formattedName + formattedRole;
  $("#header").prepend(formattedNameRole);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
  var formattedGit = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedContact = formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation;
  $("#topContacts").append(formattedContact);
  $("#footerContacts").append(formattedContact);

  var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
  $("#header").append(formattedPic);
  var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $("#header").append(welcomeMessage);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for( var i = 0; i < bio.skills.length; i++){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
};

 var education = {
   "schools" : [
       {
         "name" : "UCLA",
         "location" : "Los Angeles",
         "degree": "Certificate",
         "majors":["International Trade and Commerce"],
         "dates":2011,
         "url" :"http://business.uclaextension.edu/international-trade-and-commerce/"},

       {
         "name" : "De Anza",
         "location" : "Cupertino",
         "degree": "AA",
         "majors" : ["Computer Science"],
         "dates":2016,
         "url" :"https://www.deanza.edu/cis/"
       }
     ],

   "onlineCourses": [
       { "title" :"Front End Development",
         "school" : "Udacity",
         "dates" : 2017,
         "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
       }
     ],
 };

education.display = function(){
  for( var i = 0; i < education.schools.length; i++){
    	$("#education").append(HTMLschoolStart);
    	 	var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    	 	var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[i].degree);
    		var formattedNameDegree = formattedName + formattedDegree;
    		$(".education-entry:last").append(formattedNameDegree);
    		var formattedDates = HTMLschoolDates.replace("%data%" , education.schools[i].dates);
    		$(".education-entry:last").append(formattedDates);
    		var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[i].location);
    		$(".education-entry:last").append(formattedLocation);
    		var formattedMajor = HTMLschoolMajor.replace("%data%" , education.schools[i].majors);
    		$(".education-entry:last").append(formattedMajor);
     }

    	$("#education").append(HTMLonlineClasses);
      for(var x = 0; x < education.onlineCourses.length; x++){
    		$("#education").append(HTMLschoolStart);
    		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[x].title);
		    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[x].school);
		    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
		    $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
		    var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[x].dates);
		    $(".education-entry:last").append(formattedOnlineDates);
		    var formattedOnlineUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[x].url);
		    $(".education-entry:last").append(formattedOnlineUrl);
    	}
    };


 var work = {
   "jobs":[
   {
     "employer":"Miss Dandy",
     "title":"Founder",
     "location":"Beverly Hills ",
     "dates":"2012-2014",
     "description":"E-commerce : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   },
   {
     "employer":"Cottoniere",
     "title":"Store buyer",
     "location":"Beverly Hills",
     "dates":2012,
     "description":"Off line sales and buying for the store. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   }
  ]
 };

work.display = function(){
  for( var i = 0; i < education.schools.length; i++){
       $("#workExperience").append(HTMLworkStart);
       var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
       var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
       var formattedEmployerTitle = formattedEmployer + formattedTitle ;
       $(".work-entry:last").append(formattedEmployerTitle);
       var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
       $(".work-entry:last").append(formattedDates);
       var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
       $(".work-entry:last").append(formattedLocation);
       var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
       $(".work-entry:last").append(formattedDescription);
   }
 };


 var projects = {
   "projects" :[
     {
       "title":"Media1",
       "dates": 2017,
       "description":"Learning about media simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles",
       "images": ["images/w_final-800_large_1x.png",""]
     },
     {
       "title":"Media2",
       "dates": 2017,
       "description":"Learning about media simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. ",
       "images": ["images/w_pictures-800_large_1x.png",""]
     },
     {
       "title":"Media3",
       "dates": 2017,
       "description":"Learning about media simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.",
       "images": ["",""]
     }
   ]
 };

 projects.display = function(){
   for( var y = 0; y < projects.projects.length; y++){
       $("#projects").append(HTMLprojectStart);
       var formattedProjectTittle = HTMLprojectTitle.replace("%data%", projects.projects[y].title);
       $(".project-entry:last").append(formattedProjectTittle);
       var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[y].dates);
       $(".project-entry:last").append(formattedProjectDates);
       var formattedProjectDescription  = HTMLprojectDescription.replace("%data%", projects.projects[y].description);
       $(".project-entry:last").append(formattedProjectDescription);

       if (projects.projects[y].images.length > 0) {
         for (var image in projects.projects[y].images){
           var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[y].images[image]);
           $(".project-entry:last").append(formattedProjectImage);
         }
       }
     }
   };

bio.display();
education.display();
work.display();
projects.display();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

});

  function inName(name){

    name = name.trim().split(" "); // trim removes blank space at the end and the front of the string
  //  var name = bio.name.split(" "); // splits into an array of words ["Wendy" , "Martell"]
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    //intName = name.join(' ');
    return name[0] + " " +name[1];
  }
  $("#main").append(internationalizeButton);
  $("#mapDiv").append(googleMap);
