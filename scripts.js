document.addEventListener('DOMContentLoaded', function() {
    const projectSection = document.getElementById('projects');

    // Define project links, names, and images
    const projectData = [
        {
            url: "https://replit.com/join/beqohevrsn-claygitobu",
            name: "QR Code",
            image: "https://images.unsplash.com/photo-1595079835357-a94a13cab10c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image URL
        },
        {
            url: "https://replit.com/join/rumuxnricn-claygitobu",
            name: "The Weather App",
            image: "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/tnjyqczofd-claygitobu",
            name: "Currency Converter",
            image: "https://images.unsplash.com/photo-1523759724146-4ce060fff7be?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://replit.com/join/vbbgvbuige-claygitobu",
            name: "BMI Calculator",
            image: "https://img.freepik.com/free-vector/flat-infographic-metabolism-level-scale-with-arrow-measurement-value_88138-934.jpg?w=996&t=st=1713688991~exp=1713689591~hmac=40d066bf7bac1f8e1eea43bde1ba9a46a9c7157ae8e1dfaaa9a177d094090b4e"
        },
        {
            url: "https://replit.com/join/fidchpuzuj-claygitobu",
            name: "Email Sender",
            image: "https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148309696.jpg?t=st=1713689085~exp=1713692685~hmac=342940f573f048b3265ecd2847d9ac08a86c1632c5961482cd78732af10e2e4b&w=996"
        },
        {
            url: "https://replit.com/join/nvmztwpfeq-claygitobu",
            name: "Tic Tac Toe",
            image: "https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg?t=st=1713689180~exp=1713692780~hmac=14a235afc2e01a92fea6d6d5d37194c64782fc5e5e74f3d332bfbd8eddec2e49&w=360"
        },
        {
            url: "https://replit.com/join/qncundwfyz-claygitobu",
            name: "Simple Alarm Clock",
            image: "https://img.freepik.com/free-photo/alarm-clock-showing-5-o-clock-against-black-background_23-2147943598.jpg?t=st=1713689317~exp=1713692917~hmac=e92fd2b96a54bc9d4c538dc197713c1143c00cffe064242c11b134e5096ea29a&w=996"
        },
        {
            url: "https://replit.com/join/elaflgavmw-claygitobu",
            name: "Character Generator",
            image: "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136887.jpg?t=st=1713689384~exp=1713692984~hmac=e596ba02f2a95c27fe979014ae52df3cb7536aad2d3b37d601b1bcfb0c48381e&w=996"
        }
    ];

    // Dynamically generate project links with names and images
    projectData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        // Create project image
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.name + ' Image';
        projectImage.classList.add('project-image');
        projectItem.appendChild(projectImage);

        // Create project link
        const projectLink = document.createElement('a');
        projectLink.href = project.url;
        projectLink.textContent = project.name;
        projectLink.classList.add('btn');
        projectLink.target = '_blank';
        projectItem.appendChild(projectLink);

        projectSection.appendChild(projectItem);
    });

});
