const participants = [
    {
        "name": "AIT-OSS",
        "img": "https://avatars3.githubusercontent.com/u/47062438?s=400&u=ab4cb37695763efe4297b2da4b7f97cd8f6f888b&v=4",
        "title": "Organizer",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/company/open-source-software-club/",
        "github": "https://github.com/aitoss",
        "skills": ['All Open Source Technologies'],
        "description": "A student driven Open Source Community at AIT, Pune."
    },
    {
     HEAD
        "name": "Shuvam Kumar",
        "img": "https://avatars0.githubusercontent.com/u/42249560?s=400&u=13aa2a8074b01629278602bc5ca640367ecf0b6e&v=4",
        "title": "Participant",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/in/shuvam-kumar-09512a168/",
        "github": "https://github.com/shuvamk",
        "skills": ['All Open Source Technologies','Philosophy'],
        "description": "Student at AIT"
    },
        "name": "Akshay Sharma",
        "img": "https://avatars0.githubusercontent.com/u/47213544?s=400&u=2ead5be2dba2c7cea9fe1f7a6db53d25fa517d72&v=4",
        "title": "Organizer",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/in/akshaysharma008/",
        "github": "https://github.com/AkshaySharma008",
        "skills": ['Angular', 'Nodejs' ,'Docker' , 'GCP'],
        "description": "Secretary OSS Club and DSC Lead"
    },
    {
        "name": "Deepshikha Tripathi",
        "img": "https://avatars1.githubusercontent.com/u/47073154?s=400&v=4",
        "title": "OSS Sec",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/company/open-source-software-club/",
        "github": "https://github.com/aitoss",
        "skills": ['All Open Source Technologies'],
        "description": "A student driven Open Source Community at AIT, Pune."
    }
]

function loadParticipants() {
    participants.forEach((participant) => {
        let listed='';
        participant.skills.forEach((skill)=>{
            listed += `<li>${skill}</li>`;
        })
        const card = `<div class="col-md-3 mt-3">
        <div class="card-container">
            <span class="pro">${participant.title}</span>
            <img
                    class="round"
                    src=${participant.img}
                    alt="user"
            />
            <h3>${participant.name}</h3>
            <h6>${participant.year}</h6>
            <p>
                ${participant.description}
            </p>
            <div class="buttons">
                <button onclick="location.href='${participant.linkedIn}';" class="primary">
                    LinkedIn
                </button>
                <button onclick="location.href='${participant.github}';" class="primary ghost">
                    Github
                </button>
            </div>
            <div class="skills">
                <h6>Skills</h6>
                <ul>
                    ${listed}
                </ul>
            </div>
        </div>
    </div>`;

        $(".outer-div").append(card);
    })
}

loadParticipants();
