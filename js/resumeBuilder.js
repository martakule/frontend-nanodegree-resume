// Objects with my information that is used in the resume.


var bio = {
	"name": "Marta Kule",
  "skills": ["HTML", "CSS", "JavaScript & jQuery", "InDesign", "Photoshop", "MS Office"],
	"role": "Beginner coder",
	"contacts": {
		"mobile": "416.123.4567",
		"email": "marta.kule@somemail.com",
		"github": "martakule",
		"twitter": "@MartaKule",
		"location": "Toronto, ON"
	},
	"welcomeMessage": "I work in educational publishing, and I'm starting out in front-end development.",
	"biopic": "images/marta.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Oxford University Press",
			"title": "Editorial Assistant",
			"location": "North York, ON",
			"dates": "April 2015 to present",
			"description": "Use HTML, CSS, and JavaScript to build online study tools to accompany textbooks.",
			"url": "http://oupcanada.com/"
		},
		{
			"employer": "Torontoist.com",
			"title": "Copy Editor",
			"location": "Etobicoke, ON",
			"dates": "April 2014 to April 2015",
			"description": "Worked in WordPress on editing text, managing photos, and troubleshooting the HTML.",
			"url": "http://torontoist.com/"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Static website",
			"dates": "October 2016",
			"description": "A simple website that uses basic CSS",
			"images": ["images/css1.jpg", "images/css2.jpg"],
			"url": "https://martakule.github.io/photo_research/"
		},
		{
			"title": "Simon Says",
			"dates": "November 2016",
			"description": "A simple game that uses basic JavaScript and jQuery",
			"images": ["images/javas1.jpg", "images/javas2.jpg"],
			"url": "https://github.com/martakule/SimonSays"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "University of Toronto",
			"location": "Toronto, ON",
			"degree": "M.A.",
			"dates": "2010 to 2012",
			"url": "http://www.eas.utoronto.ca/",
			"majors": ["East Asian Studies"]
		},
		{
			"name": "Ryerson University",
			"location": "Toronto, ON",
			"degree": "Certificate in Publishing",
			"dates": "2013 to present",
			"url": "http://ce-online.ryerson.ca/ce/default.aspx?id=2000",
			"majors": ["Publishing"]
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": "September 2016 to present",
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title": "Microeconomics Principles",
			"school": "University of Illinois via Coursera",
			"dates": "November 2014",
			"url": "https://www.coursera.org/learn/microeconomics"
		}
	]
}

// Pulls bio information from an object above and appends it to header and footer.
bio.display = function () {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
	var allContacts = formattedTwit + formattedGit + formattedEmail + formattedMobile + formattedLoc;

	$("#header").prepend(formattedName + formattedRole);
	$("#topContacts").append(allContacts);
	$("#header").append(formattedImage + formattedWelcome);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill){
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	}

	$("#footerContacts").append(allContacts);
}

bio.display();


// Pulls employment info from an object above and appends it to the workExperience div in the resume.
work.display = function () {
	work.jobs.forEach (function (job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
	});
};

work.display();

// Pulls projects info from an object above and appends it to the projects div in the resume.

projects.display = function () {
	projects.projects.forEach (function (project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

		if (project.images.length > 0) {
			project.images.forEach(function(project){
				var formattedImage = HTMLprojectImage.replace("%data%", project);
				$(".project-entry:last").append(formattedImage);
			});
		}
	});
};

projects.display();

// Pulls education info from an object above and appends it to the education div in the resume.
education.display = function () {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

		$(".education-entry:first").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation);

		//I'm not using "if length>0" here because there must be at least one major, like there is a school name.
		school.majors.forEach(function(major){
				var formattedschoolMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry:first").append(formattedschoolMajor);
		});
	});

	if (education.onlineCourses.length > 0){
		$(".education-entry:first").after(HTMLonlineClasses);
		education.onlineCourses.forEach(function(course) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			//I moved the URL to the title and dates. There was a link placeholder. Plus, it looks better.
			//But I woud have written it thus (and "+ formattedURL" to append with other variables.)
			//var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
			$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates);
		});
	}
}

education.display();

// The internationalize button that was part of the course.
$("#main").append(internationalizeButton);
var name = bio.name

function inName(name) {
    var old_name = name;
    var names = old_name.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
};

$("#mapDiv").append(googleMap);
initializeMap();
