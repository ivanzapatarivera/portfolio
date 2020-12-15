function frontEnd() {
  var parsArr = [
    "Hi, and thank you for taking your time to read a bit about me as a web developer and individual.",

    "Recently, I finished Rutger's University Full Stack Flex web developer certification. Through this course, I've earned knowledge on HTML5, CSS, JavaScript (Vanilla, jQuery and Sequelize), MySQL, and MERN (MongoDB, Express, React.js, and Node.js). I've created online and offline apps using these technologies, which are available in my portfolio.",

    "After finishing my certification, I've grown enthusiastic about bringing these skills over and join a leading organization where I can grow as a web developer.",

    "My professional background is pretty diverse, with experience in the transportation and financial industries. Prior to joining Rutger's University, I had different roles at United Airlines as part of Inflight Services Department, which included supervising a team of more than 200 employees and assisting for an on-time operation. Before being part of United's team, I was part of the Organization Department (under Means) at Banco Santander where I had the role of Policies and Procedures Officer.",

    "I invite you to visit my GitHub, browse through my profile and see the different projects I've developed along with the team of experts and now graduates from Rutgers.",

    "Yours truly,",
  ];

  const signatureObj = {
    name: "Iv&aacute;n J. Zapata-Rivera",
    className: "signature",
    id: "signature",
  };

  const signatureTitlesObj = {
    name: "Iv&aacute;n J. Zapata-Rivera",
    certification: "Web Developer Full Stack Flex (Rutgers University)",
    mba:
      "MBA, International Enterprises (Polytechnic University of Puerto Rico)",
    className: "col-sm-12 title",
  };

  const elPObj = {
    className: "bodytext mr-2",
    id: "p",
  };

  // Darkmode or Light Mode
  const profilePicture = document.querySelector(".radius15");
  const body = document.querySelector("body");

  const darkLightModeBtnEl = `  
                            <div class="container">
                                <button class="btn btn-dark mx-auto mt-2 p-1 px-2" id="darkModeBtn" style="font-size: .75rem">Dark Mode ?</button>
                            </div>`;

  profilePicture.insertAdjacentHTML("afterend", darkLightModeBtnEl);
  const darkModeBtn = document.querySelector("#darkModeBtn");
  const toplinkone = document.querySelector("#toplinkone");
  const toplinktwo = document.querySelector("#toplinktwo");
  const toplinkthree = document.querySelector("#toplinkthree");
  const toplinkfour = document.querySelector("#toplinkfour");
  const footer = document.querySelector("#footer");
  const footerEmail = document.querySelector("#footerEmail");
  const footerPhone = document.querySelector("#footerPhone");
  darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
    profilePicture.classList.toggle("theme");
    profilePicture.classList.toggle("themeDarkMode");
    toplinkone.classList.toggle("themeDarkMode");
    toplinktwo.classList.toggle("themeDarkMode");
    toplinkthree.classList.toggle("themeDarkMode");
    toplinkfour.classList.toggle("themeDarkMode");
    footer.classList.toggle("themeDarkMode");
    footerEmail.classList.toggle("themeDarkMode");
    footerPhone.classList.toggle("themeDarkMode");
  });

  // Page title
  const briefing = document.getElementById("briefing");
  const title =
    '<h2 id="welcome" class="text-center my-3">Welcome to my Profile</h2>';
  briefing.innerHTML = title;

  // Summary
  for (var i = 0; i < parsArr.length; i++) {
    var elP = document.createElement("p");
    elP.className = elPObj.className;
    elP.id = elPObj.id + [i];
    elP.innerHTML = parsArr[i];
    briefing.append(elP);
  }

  // Signature
  const lastP = parsArr.length - 1;
  const signature = document.createElement("p");
  signature.className = signatureObj.className;
  signature.id = signatureObj.id;
  const signaureText = signatureObj.name;
  signature.innerHTML = signaureText;
  briefing.append(signature);

  const createRow = document.createElement("div");
  createRow.className = "row";
  createRow.id = "title";
  briefing.append(createRow);

  const degreeCertificate = document.getElementById("title");
  const createCol = document.createElement("div");
  createCol.className = signatureTitlesObj.className;
  createCol.innerHTML =
    signatureTitlesObj.certification + "</br>" + signatureTitlesObj.mba;
  degreeCertificate.append(createCol);
}

export { frontEnd };
