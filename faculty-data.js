const facultyData = [
    {
        firstname: "Kereshmeh",
        middlename: "",
        lastname: "Afsari",
        major: "Construction Engineering and Management",
        link: "https://mlsoc.vt.edu/about/faculty-and-staff/kereshmeh-afsari.html"
    },
    {
        firstname: "Ashtarout",
        middlename: "",
        lastname: "Ammar",
        major: "Construction Engineering and Management",
        link: "https://mlsoc.vt.edu/about/faculty-and-staff/ashtarout-ammar.html"
    },
    {
        firstname: "A.K.",
        middlename: "Ward",
        lastname: "Bartlett",
        major: "Management",
        link: "https://management.pamplin.vt.edu/faculty/directory/ward-bartlett-a-k.html"
    },
    {
        firstname: "Edward",
        middlename: "",
        lastname: "Berger",
        major: "Engineering Education",
        link: "https://www.vt.edu/content/enge_vt_edu/en/People/researchfaculty/Edward_Berger.html"
    },
    {
        firstname: "Deborah",
        middlename: "",
        lastname: "Bradbard",
        major: "Boeing Center for Veteran Transition and Military Families",
        link: "https://www.linkedin.com/in/dbradbard/"
    },
    {
        firstname: "Isabel",
        middlename: "",
        lastname: "Bradburn",
        major: "Human Development and Family Sciences",
        link: "https://liberalarts.vt.edu/departments-and-schools/department-of-human-development-and-family-science/faculty/isabel-bradburn.html"
    },
    {
        firstname: "Doug",
        middlename: "",
        lastname: "Bowman",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/doug-bowman.html"
    },
    {
        firstname: "Chris",
        middlename: "",
        lastname: "Brown",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/chris-brown.html"
    },
    {
        firstname: "Abhilash",
        middlename: "",
        lastname: "Chandel",
        major: "Precision Agriculture and Data Management",
        link: "https://www.arec.vaes.vt.edu/arec/tidewater/people/faculty/abhilash-chandel.html"
    },
    {
        firstname: "Charles",
        middlename: "",
        lastname: "Calderwood",
        major: "Psychology",
        link: "https://support.psyc.vt.edu/users/ccharl2"
    },
    {
        firstname: "Brendan",
        middlename: "",
        lastname: "David-John",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/brendan-david-john.html"
    },
    {
        firstname: "Jamie",
        middlename: "",
        lastname: "Edgin",
        major: "Psychology",
        link: "https://support.psyc.vt.edu/users/esjamie"
    },
    {
        firstname: "Adrienne",
        middlename: "T.",
        lastname: "Edisis",
        major: "Public Administration and Policy",
        link: "https://spia.vt.edu/people/Faculty/edisis.html"
    },
    {
        firstname: "Fred",
        middlename: "",
        lastname: "Faltin",
        major: "Statistics",
        link: "htttps://www.linkedin.com/in/frederick-w-faltin-a220411/"
    },
    {
        firstname: "Brianna",
        middlename: "",
        lastname: "Felegi",
        major: "Economics",
        link: "https://www.briannafelegi.com/"
    },
    {
        firstname: "Andrew",
        middlename: "",
        lastname: "Gipe-Lazarou",
        major: "School of Architecture",
        link: "https://arch.vt.edu/people/blacksburg-faculty/gipe-andrew.html"
    },
    {
        firstname: "Denis",
        middlename: "",
        lastname: "Gracanin",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/denis-gracanin.html"
    },
    {
        firstname: "Kaveh",
        middlename: "Akbari",
        lastname: "Hamed",
        major: "Mechanical Engineering",
        link: "https://me.vt.edu/people/faculty/akbarihamed-kaveh.html"
    },
    {
        firstname: "Md",
        middlename: "Sami",
        lastname: "Hasnine",
        major: "Civil and Environmental Engineering",
        link: "https://www.webapps.cee.vt.edu/index.php?category=people&pagetype=bio&do=getprofile&user=hasnine.html"
    },
    {
        firstname: "Sarah",
        middlename: "",
        lastname: "Henry",
        major: "School of Education",
        link: "https://liberalarts.vt.edu/departments-and-schools/school-of-education/faculty/sarah-henry.html"
    },
    {
        firstname: "Ivan",
        middlename: "",
        lastname: "Hernandez",
        major: "Industrial Organizational Psychology",
        link: "https://support.psyc.vt.edu/users/ivanhernandez"
    },
    {
        firstname: "Gil",
        middlename: "",
        lastname: "Hersch",
        major: "Philosophy",
        link: "https://www.gilhersch.com/"
    },
    {
        firstname: "Louis",
        middlename: "",
        lastname: "Hickman",
        major: "Industrial-Organizational Psychology",
        link: "https://support.psyc.vt.edu/users/louishickman"
    },
    {
        firstname: "Jimmy",
        middlename: "",
        lastname: "Ivory",
        major: "Department of English",
        link: "https://liberalarts.vt.edu/departments-and-schools/department-of-english/faculty/Jimmy-ivory.html"
    },
    {
        firstname: "Bo",
        middlename: "",
        lastname: "Ji",
        major: "Computer Science",
        link: "https://people.cs.vt.edu/boji/"
    },
    {
        firstname: "David ",
        middlename: "",
        lastname: "Knight",
        major: "Engineering Education",
        link: "https://enge.vt.edu/People/researchfaculty/davidknight.html"
    },
    {
        firstname: "Alicia",
        middlename: "",
        lastname: "Johnson",
        major: "COE, Graduate and Professional Studies",
        link: "https://eng.vt.edu/about/biographies/alicia-johnson.html"
    },
    {
        firstname: "Andrew",
        middlename: "",
        lastname: "Katz",
        major: "Engineering Education",
        link: "https://enge.vt.edu/People/researchfaculty/andrewkatz.html"
    },
    {
        firstname: "Nathan",
        middlename: "",
        lastname: "Lau",
        major: "Industrial and Systems Engineering",
        link: "https://www.ise.vt.edu/people/faculty/lau.html"
    },
    {
        firstname: "Zhuofan",
        middlename: "",
        lastname: "Li",
        major: "Sociology",
        link: "https://liberalarts.vt.edu/departments-and-schools/department-of-sociology/faculty/zhuofan-li.html"
    },
    {
        firstname: "Sol",
        middlename: "",
        lastname: "Lim",
        major: "Industrial and Systems Engineering",
        link: "https://www.ise.vt.edu/people/faculty/lim.html"
    },
    {
        firstname: "Xu",
        middlename: "",
        lastname: "Lin",
        major: "Economics",
        link: "https://sites.google.com/vt.edu/xulin"
    },
    {
        firstname: "Dylan",
        middlename: "",
        lastname: "Losey",
        major: "Mechanical Engineering",
        link: "https://me.vt.edu/people/faculty/losey-dylan.html"
    },
    {
        firstname: "Kurt",
        middlename: "",
        lastname: "Luther",
        major: "Computer Science",
        link: "https://crowd.cs.vt.edu/kurt-luther/"
    },
    {
        firstname: "Tom",
        middlename: "",
        lastname: "Martin",
        major: "Electrical and Computer Engineering",
        link: "https://ece.vt.edu/people/profile/martin.html"
    },
    {
        firstname: "Sharon",
        middlename: "H.",
        lastname: "Mastracci",
        major: "Public Administration and Policy",
        link: "https://spia.vt.edu/people/Faculty/mastracci.html"
    },
    {
        firstname: "Arturia",
        middlename: "",
        lastname: "Melson-Silimon",
        major: "Psychology",
        link: "https://support.psyc.vt.edu/users/arturiam"
    },
    {
        firstname: "Na",
        middlename: "",
        lastname: "Meng",
        major: "Computer Science",
        link: "https://people.cs.vt.edu/nm8247/"
    },
    {
        firstname: "Margarita",
        middlename: "",
        lastname: "McGrath",
        major: "Architecture",
        link: "https://arch.vt.edu/people/blacksburg-faculty/mcgrath-margarita.html"
    },
    {
        firstname: "Lisa",
        middlename: "",
        lastname: "McNair",
        major: "Engineering Education",
        link: "https://enge.vt.edu/People/researchfaculty/lisamcnair.html"
    },
    {
        firstname: "David",
        middlename: "",
        lastname: "Moore",
        major: "Institute for Policy and Governance",
        link: "https://ipg.vt.edu/leadership-development/vmf-program/vision-team/davidmoore.html"
    },
    {
        firstname: "Jian",
        middlename: "",
        lastname: "Ni",
        major: "Marketing",
        link: "https://marketing.pamplin.vt.edu/people/faculty/ni-jian.html"
    },
    {
        firstname: "Sehrish",
        middlename: "Basir",
        lastname: "Nizamani",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/sehrish-basir.html"
    },
    {
        firstname: "Chris",
        middlename: "",
        lastname: "North",
        major: "Computer Science",
        link: "https://people.cs.vt.edu/north/"
    },
    {
        firstname: "Maury",
        middlename: "A.",
        lastname: "Nussbaum",
        major: "Industrial and Systems Engineering",
        link: "https://www.ise.vt.edu/people/faculty/nussbaum.html"
    },
    {
        firstname: "Besnik",
        middlename: "",
        lastname: "Pula",
        major: "Political Science",
        link: "https://liberalarts.vt.edu/departments-and-schools/department-of-political-science/faculty/besnik-pula.html"
    },
    {
        firstname: "Edward",
        middlename: "",
        lastname: "Raimundi",
        major: "Career Pathways and College Relations",
        link: "https://www.linkedin.com/in/eriii/"
    },
    {
        firstname: "Eugenia",
        middlename: "",
        lastname: "Rho",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/eugenia-rho.html"
    },
    {
        firstname: "Jessica",
        middlename: "",
        lastname: "Rich",
        major: "Center for Coastal Studies",
        link: "https://www.jessicarichphd.com/"
    },
    {
        firstname: "Nazila",
        middlename: "",
        lastname: "Roofigari-Esfahan",
        major: "Building Construction",
        link: "https://mlsoc.vt.edu/about/faculty-and-staff/nazila-roofigari-esfahan.html"
    },
    {
        firstname: "Angela",
        middlename: "",
        lastname: "Scarpa",
        major: "Psychology",
        link: "https://support.psyc.vt.edu/users/ascarpa"
    },
    {
        firstname: "Abhijit",
        middlename: "",
        lastname: "Sarkar",
        major: "VTTI",
        link: "https://www.vtti.vt.edu/staffdir/bio.php?&pn=119388"
    },
    {
        firstname: "Arianna",
        middlename: "Schuler",
        lastname: "Scott",
        major: "Management",
        link: "https://management.pamplin.vt.edu/faculty/directory/scott-arianna.html"
    },
    {
        firstname: "Lavinia",
        middlename: "",
        lastname: "Uscatescu",
        major: "Psychology",
        link: "https://support.psyc.vt.edu/users/luscatescu"
    },
    {
        firstname: "David",
        middlename: "",
        lastname: "Wang",
        major: "Economics",
        link: "https://econ.vt.edu/people/affiliates/david-wang.html"
    },
    {
        firstname: "Mary",
        middlename: "",
        lastname: "Wesley",
        major: "Medicine ",
        link: "https://wholehealth.isce.vt.edu/members-directory/wesley-mary-bio.html"
    },
    {
        firstname: "Christopher",
        middlename: "",
        lastname: "Williams",
        major: "Mechanical Engineering",
        link: "https://me.vt.edu/people/faculty/williams-christopher.html"
    },
    {
        firstname: "Daron",
        middlename: "",
        lastname: "Williams",
        major: "TLOS",
        link: "https://tlos.vt.edu/about/directory/personnel/williams_d.html"
    },
    {
        firstname: "Ihudiya",
        middlename: "Finda",
        lastname: "Williams",
        major: "Computer Science",
        link: "https://people.cs.vt.edu/iogburu/"
    },
    {
        firstname: "Ryan",
        middlename: "",
        lastname: "Williams",
        major: "Electrical and Computer Engineering",
        link: "https://ece.vt.edu/people/profile/williams.html"
    },
    {
        firstname: "Craig",
        middlename: "",
        lastname: "Woolsey",
        major: "Aerospace and Ocean Engineering",
        link: "https://www.aoe.vt.edu/people/faculty/woolsey.html"
    },
    {
        firstname: "Xiguang",
        middlename: "",
        lastname: "Xu",
        major: "Biomedical Sciences and Pathobiology",
        link: "https://vetmed.vt.edu/people/faculty/xu-xiguang.html"
    },
    {
        firstname: "Pearl",
        middlename: "",
        lastname: "Xie",
        major: "TLOS",
        link: "https://tlos.vt.edu/about/directory/personnel/xie_p.html"
    },
    {
        firstname: "Wenjie",
        middlename: "",
        lastname: "Xiong",
        major: "Electrical and Computer Engineering",
        link: "https://ece.vt.edu/people/profile/xiong.html"
    },
    {
        firstname: "Yaxing",
        middlename: "",
        lastname: "Yao",
        major: "Computer Science",
        link: "https://yaxingyao.cs.vt.edu/"
    },
    {
        firstname: "Yang",
        middlename: "Cindy",
        lastname: "Yi",
        major: "Electrical and Computer Engineering",
        link: "https://www.yangyi.ece.vt.edu/"
    },
    {
        firstname: "Mengxi",
        middlename: "",
        lastname: "Zhang",
        major: "Health System and Implementation Science",
        link: "https://experts.vt.edu/24861-mengxi-zhang"
    },
    {
        firstname: "Ruichuan",
        middlename: "",
        lastname: "Zhang",
        major: "Construction Engineering and Management ",
        link: "https://mlsoc.vt.edu/about/faculty-and-staff/ruichuan-zhang.html"
    },
    {
        firstname: "Dawei",
        middlename: "",
        lastname: "Zhou",
        major: "Computer Science",
        link: "https://website.cs.vt.edu/people/faculty/dawei-zhou.html"
    },
    {
        firstname: "Meng",
        middlename: "",
        lastname: "Zhu",
        major: "Marketing",
        link: "https://marketing.pamplin.vt.edu/people/faculty/zhu-meng.html"
    },
    {
        firstname: "Qin",
        middlename: "",
        lastname: "Zhu",
        major: "Engineering Education",
        link: "https://enge.vt.edu/People/researchfaculty/qinzhu.html"
    },
];