var briefing = document.getElementById("briefing");
var title = '<h2 id="title" class="text-center mb-3">Welcome to my Profile</h2>'

briefing.innerHTML = title;

var pars = [

    "Hi, and thank you for taking your time to read a bit about me as a developer and individual.",

    "Currently, I am a Rutger's University Full Stack Flex Bootcamp web development student out of the State of New Jersey. Through this course, I've expanded my knowledge on HTML5, CSS, JavaScript (including jQuery), MongoDB, mySQL, Express, React.js, and Node.js. I have developed online and offline apps using these technologies, which are available in my portfolio.", 

    "Due my professional aspirations, I grew enthusiastic on expanding my career spectrum by updating my knowledge in technolgies that I've used both professional and personally. It's my goal to become a team member of a leading organization that's most suited for my goals as a web developer.",

    "My professional background is pretty diverse, with experience in the transportation and financial indistries. Prior to joining Rutger's University's bootcamp, I had different roles at United Airlines as part of Inflight Services Department, including supervising inflight operations (reports and on the field) and leading a team of more than 200 successful employees. Before working at United, I was part the Organization team at Banco Santander where I had the role of Policies and Procedures Officer.", 

    "I invite you to browse through my profile page and see the different projects I've developed along with the team of experts at Rutgers.",

    "Yours truly,"

];

for(var i = 0; i < pars.length; i++) {
    var elP = document.createElement('p');
        elP.className = ('p' + [i] + " bodytext");
        elP.innerHTML = pars[i];
    briefing.append(elP);
}

var lengthP = '"p' + (pars.length - 1) + '"';
console.log(lengthP)
var lastP = document.getElementById('"p' + (pars.length - 1) + '"')

var elImg = document.createElement('img');
    elImg.className = ('signature');
    elImg.setAttribute = ('src', 'assets/images/signature.png');
    elImg.setAttribute = ('width', '100px');
    elImg.setAttribute = ('height', 'auto');

    lastP.append(elImg);