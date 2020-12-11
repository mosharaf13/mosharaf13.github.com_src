/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Mosharaf",
    title: "Hi all, I'm Mosharaf",
    subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web with Laravel, JavaScript and some other cool libraries and frameworks."),
    resumeLink: "https://drive.google.com/file/d/1m9qqcUt3xuo3uX0Qw5BKiVT8SQGPyvV0/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/mosharaf13",
    linkedin: "https://www.linkedin.com/in/mosharaf13/",
    gmail: "mosharafkuet@gmail.com",
    // gitlab: "https://gitlab.com/saadpasta",
    facebook: "https://www.facebook.com/mosharaf53",
    medium: "https://medium.com/@mosharafkuet",
    stackoverflow: "https://stackoverflow.com/users/6049005/mosharaf"
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "angularjs",
            fontAwesomeClassname: "fab fa-angular"
        },
        {
            skillName: "vue.js",
            fontAwesomeClassname: "fab fa-vuejs"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        // {
        //   skillName: "swift",
        //   fontAwesomeClassname: "fab fa-swift"
        // },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        // {
        //   skillName: "firebase",
        //   fontAwesomeClassname: "fas fa-fire"
        // },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        }
        // {
        //   skillName: "docker",
        //   fontAwesomeClassname: "fab fa-docker"
        // }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design",  //Insert stack or technology you have experience in
            progressPercentage: "70%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "80%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Software Engineer",
            company: "Sigma Solutions",
            companylogo: require("./assets/images/sigma2.png"),
            date: "March 2019 – Present",
            desc: "Worked on different projects listed below",
            descBullets: [
                "Pixmama",
                "Smart construction",
                "Weecare.life",
                "SigmaSolutions comopany portfolio site",
                "e-KYC",
                "Digitouch12",
                "Intelligent SOC"
            ]
        },
        {
            role: "Web Application Developer",
            company: "Hyper Systems Ltd.",
            companylogo: require("./assets/images/hslogo.png"),
            date: "May 2018 – February 2018",
            desc: "Developed features for myRADAR GPS based vehicle tracking system which allows users to track,\n" +
            "monitor and control their vehicles remotely."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    // githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    // githubUserName: "mosharaf13", // Change to your github username to view your profile in Contact Section.
    // showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Professional Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/pixmama_logo.png"),
            link: "https://pixmama.com/",
            title: "Pixmama",
            description: "Pixmama is currently bangladesh's biggest stock photo marketplace. It offers the best quality,\n" +
            "royality free stock images at the best prices to fill all creative needs."
        },
        {
            image: require("./assets/images/smart_construction_logo.png"),
            link: "http://nextu.se/",
            title: "Smart Construction",
            description: "Smart Construction is an end to end solution for managing construction work. " +
            "Key features includes tracking of inventory items, expenditure, work progress etc."
        }
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achivementsCards: [
        {
            title: "The Bits and Bytes of Computer Networking",
            subtitle: "an online course authorized by Google and offered through Coursera",
            image: require("./assets/images/coursera.png"),
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.coursera.org/account/accomplishments/verify/DA3PHQV8BHGE"
                }
            ]
        },
        {
            title: "Sports and Society",
            subtitle: "an online course authorized by Duke University and offered through Coursera.",
            image: require("./assets/images/coursera.png"),
            footerLink: [{
                name: "Certification",
                url: "https://www.coursera.org/account/accomplishments/verify/E658S3M67LAE"
            }]
        },
        {
            title: "Introduction to Psychology",
            subtitle: "an online course authorized by Yale University and offered through Coursera.",
            image: require("./assets/images/coursera.png"),
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.coursera.org/account/accomplishments/verify/LHM423MZZRK4"
                }
            ]
        }
    ]
};

// Series Section

const seriesSection = {

    title: "Series & Tutorials",
    subtitle: "In progress and completed learning series collection",

    tutorials: {
        in_progress: [

        ],
        completed: [
            {
                url: "https://laracasts.com/series/phpunit-testing-in-laravel",
                title: "Testing Laravel"
            },
            {
                url: "https://laracasts.com/series/php-for-beginners",
                title: "The PHP practitioner"
            },
            {
                url: "https://laracasts.com/series/design-patterns-in-php",
                title: "Design Patterns in PHP"
            }
        ]
    }
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ]
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+8801753773427",
    email_address: "mosharafkuet@gmail.com"
};

//Twitter Section

const twitterDetails = {
    userName: "MDMOSHARAFHOS15"//Replace "twitter" with your twitter username without @
};
export {
    greeting,
    socialMediaLinks,
    skillsSection,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    seriesSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
