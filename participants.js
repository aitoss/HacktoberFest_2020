const participants = [
    {
        "id": 1,
        "name": "Satya Prakash",
        "img": "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        "title": "Organizer",
        "year": "BE - 2022",
        "linkedIn": "https://www.linkedin.com/in/satya-prakash-0a982a130/",
        "github": "https://www.github.com/satya9500",
        "skills": ['UI/UX', 'C++', 'JavaScript', 'Angular', 'MongoDB', 'SQL'],
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 1,
        "name": "Akshay Sharma",
        "img": "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        "title": "Organizer",
        "year": "BE - 2022",
        "linkedIn": "",
        "github": "",
        "skills": ['UI/UX', 'C++', 'JavaScript', 'Angular', 'MongoDB', 'SQL', 'React', 'Cloud Tech'],
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
