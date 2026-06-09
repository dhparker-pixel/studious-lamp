function facultyTemplate(faculty) {

    const name = `
        ${faculty.firstname}
        ${faculty.middlename}
        ${faculty.lastname}
    `;

    const linkedName = faculty.link
        ? `<a href="${faculty.link}">${name}</a>`
        : name;

    return `       
    <div class="faculty row">
        <p class="names column">
            ${linkedName}
        </p>
        <p class="majors column">
            ${faculty.major}
        </p>
    </div><hr>
    `
}

function comparingFaculty(a, b) {
    if (a.lastname < b.lastname) {
        return -1;
    }
    if (a.lastname > b.lastname) {
        return 1;
    }
    return 0;
}

const facultyDataAlphabetized = [...facultyData].sort(comparingFaculty);
const facultyNames = `${facultyDataAlphabetized.map(facultyTemplate).join('')}`;
document.querySelector("#faculty").innerHTML = facultyNames;