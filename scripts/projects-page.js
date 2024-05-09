const projects = [
    {
        img: 'forum-web.png',
        name: 'Forum',
        desc: 'a forum website.',
        tags: ['tailwind', 'laravel', 'livewire'],
        link: 'https://github.com/Althaf-Budiman/Forum',
    },
    {
        img: 'museumJawa-web.png',
        name: 'MuseumJawa',
        desc: 'a java culture showcase website.',
        tags: ['tailwind', 'react'],
        link: 'https://github.com/maazshakeel/devdynasty_project',
    },
    {
        img: 'atopClean-web.png',
        name: 'Atop Clean',
        desc: 'a laundry management website.',
        tags: ['tailwind', 'laravel', 'inertia', 'react'],
        link: 'https://github.com/Althaf-Budiman/atop-clean',
    },
    {
        img: 'sta-web.png',
        name: 'Super Tasko Aria Company Web',
        desc: 'an official Super Tasko Aria company website.',
        tags: ['tailwind', 'laravel', 'inertia', 'react'],
        link: 'still in progress',
    },
    {
        img: 'itFest-web.png',
        name: 'IDN IT FEST 2023 Website',
        desc: 'a laundry management website.',
        tags: ['tailwind'],
        link: 'https://itfest2023.netlify.app/',
    },
    {
        img: 'dishRecipe-api.png',
        name: 'Dish Recipe API',
        desc: 'api for dish recipe sharing website.',
        tags: ['laravel'],
        link: 'https://github.com/Althaf-Budiman/api-resep-masakan',
    },
]

window.addEventListener('load', () => {
    const container = document.querySelector('.projects-container')

    projects.forEach(project => {
        const projectItem = document.createElement('div')
        projectItem.classList.add('project-item')

        const itemContent = `
            <a href="${project.link}" target="_blank" class="project-item fly-hover">
                <!-- img -->
                <div class="project-item-img">
                    <img src="assets/img/${project.img}" />
                </div>

                <!-- body -->
                <div class="project-item-body">
                    <div>
                        <h2 class="font-semibold">${project.name}</h2>
                        <p class="font-light">${project.desc}</p>
                    </div>
                    <div class="tags">
                        ${project.tags.map(tag => `<div class="tag ${tag}"><span style="text-transform: capitalize;">${tag}</span></div>`).join(' ')}
                    </div>
                </div>
            </a>
        `

        projectItem.innerHTML = itemContent
        container.appendChild(projectItem)
    })

})