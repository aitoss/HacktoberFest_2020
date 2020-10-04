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
        "name": "Shuvam Kumar",
        "img": "https://avatars0.githubusercontent.com/u/42249560?s=400&u=13aa2a8074b01629278602bc5ca640367ecf0b6e&v=4",
        "title": "Participant",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/in/shuvam-kumar-09512a168/",
        "github": "https://github.com/shuvamk",
        "skills": ['All Open Source Technologies','Philosophy'],
        "description": "Student at AIT"
    },
    {
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
    },
    {
        "name": "Sri Vaishnav",
        "img": "https://scontent.fhyd10-1.fna.fbcdn.net/v/t1.0-9/71271545_760268247727477_8001833249963769856_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=4HkkLbkxEuwAX8WaoKp&_nc_ht=scontent.fhyd10-1.fna&oh=16f860e42d2fd6c1c06d47bb7cbc4381&oe=5F9F90D2",
        "title": "Student",
        "year": "BE - 2023",
        "linkedIn": "https://www.linkedin.com/in/sri-vaishnav-vutukuri-3220ab192/",
        "github": "https://github.com/sri-vaishnav",
        "skills": ['Python','Php','Android Studio'],
        "description": "A student intreseted in developing softwares at AIT, Pune."
    },
    {
        "name": "Akash Saxena",
        "img": "https://avatars3.githubusercontent.com/u/54790554?s=60&v=4",
        "title": "OSS Jt Sec",
        "year": "SE - 2023",
        "linkedIn": "https://www.linkedin.com/company/open-source-software-club/",
        "github": "https://github.com/aitoss",
        "skills": ['ReactJs','Bootstrap','JS','HTML','CS'],
        "description": "A student driven Open Source Community at AIT, Pune."
    },
    {
        "name": "Aman Singh",
        "img": "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115909667/original/7d79dd80b9eecaa289de1bc8065ad44aa03e2daf/do-a-simple-but-cool-profile-pic-or-logo-for-u.jpeg",
        "title": "Open Source Enthusiast",
        "year": "BE - 2023",
        "linkedIn": "https://www.linkedin.com/company/open-source-software-club/",
        "github": "https://github.com/aitoss",
        "skills": ['Not afraid of learning new technologies'],
        "description": ". code"
    },
    {
        "name":"Sachin Choudhary",
        "img":"https://avatars2.githubusercontent.com/u/54989437?s=460&u=b0a939329e8daa072469b228349c1e9927a29a30&v=4",
        "title":"Noobie",
        "year":"BE-2023",
        "linkedIn":"https://www.linkedin.com/in/sachin-choudhary-7037381a9/",
        "github":"https://github.com/sachin-611",
        "skills":['C++','python'],
        "description":"Student at AIT"
    },
    {
        "name": "Ayush Pawar",
        "img": "https://avatars0.githubusercontent.com/u/55341566?s=460&u=0508e5f4b2f2260826778add4a8ca8c185576a70&v=4",
        "title": "Enthusiast",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/in/ayush-p-959701111/",
        "github": "https://github.com/swift1719",
        "skills": ['C/C++' ,'Java', 'MERN stack','Golang','CP'],
        "description": "Open to Learn."
    },
    {
        "name": "Rohit Kumar",
        "img": "https://avatars3.githubusercontent.com/u/54764235?s=400&u=2e370122d903ce7073fd3419f33d43a602d83995&v=4",
        "title": "Open Source Enthusiast",
        "year": "BE - 2023",
        "linkedIn": "https://www.linkedin.com/in/rohitkumar-yadav/",
        "github": "https://github.com/The-Fuse",
        "skills": ['C++' ,'Android development'],
        "description": "Breaking the chain through the fuse"
    },
    {
        "name": "Ankit Kumar",
        "img": "https://avatars0.githubusercontent.com/u/56212417?s=460&amp;u=95a0155aade927a25bdc8d516d54c872a21ce1a0&amp;v=4",
        "title": "OSS club Member",
        "year": "SE 2020",
        "linkedIn": "https://www.linkedin.com/in/ankit-kumar-706243125/",
        "github": "https://github.com/cnarte",
        "skills": ['Tensorflow' ,'GCP', 'Flask','IBM-Qiskit'],
        "description": "Open to Learn."
    }
]

function loadParticipants() {
    participants.forEach((participant) => {
        let listed='';
        participant.skills.forEach((skill)=>{
            listed += `<li>${skill}</li>`;
        })
        const card = `<div class="col-sm-12 col-md-6 col-lg-4 mt-3">
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
