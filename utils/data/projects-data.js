import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: "Portfólio Web Site",
        description: "Desenvolvi meu portfólio, utilizando Next.js, React e diversas bibliotecas para criar uma interface atraente e funcional. O portfólio apresenta meus projetos, habilidades e informações de contato de forma organizada e acessível.",
        tools: [
            "Next.js",
            "React",
            
            "Axios",
            "Lottie",          
            
            "Tailwind CSS",
            "Sass"
        ],
        code: "https://github.com/Henrique-Vital/henrique_vital_dev",
        demo: "https://henrique-vital-dev-five.vercel.app/",
        image: '/image/projetos-web.png',
        link: "https://henrique-vital-dev-five.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 2,
        name: 'Connect2Trade',
        description: "Desenvolvi o Connect2Trade, uma aplicação web para facilitar a conexão entre contas mt4 mt5 e ctrader, criada para fazer a copia de operações de uma conta principal para suas contas secundarias. Utilizando Next.js, React, e Tailwind CSS, o Connect2Trade oferece uma interface moderna e responsiva, permitindo aos usuários navegar por produtos e serviços de forma eficiente.",
        tools: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "React Modal Video",
            "Next Themes"
        ],
        code: "https://github.com/Henrique-Vital/connect2Trade",
        demo: "https://connect2-trade.vercel.app/",
        image: '/image/connect.png',
        link: "https://connect2-trade.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 3,
        name: 'GitHub User Search',
        description: 'Desenvolvi um aplicativo web de busca de usuários do GitHub. Utilizando HTML para a estrutura, CSS e Bootstrap para a estilização e JavaScript para a lógica e interatividade, o aplicativo permite que os usuários pesquisem perfis do GitHub e visualizem detalhes como repositórios, seguidores e contribuições.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        code: 'https://github.com/seu-usuario/buscadeusuarios-github',
        demo: 'https://buscadeusuarios-github.vercel.app/',
        image: '/image/github-user-search.png',
        link: 'https://buscadeusuarios-github.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 4,
        name: 'Disney+ Landing Page',
        description: 'Desenvolvi um clone da landing page da Disney+ durante meu curso na EBAC. Utilizando HTML para estruturação, Sass para estilização, JavaScript para interatividade e Gulp para automação de tarefas. O projeto incluiu sliders de carrossel e botões interativos, com foco em eficiência e organização do código.',
        tools: ['HTML', 'Sass', 'JavaScript', 'Gulp'],
        code: 'https://lnkd.in/dwjz5tMh',
        demo: 'https://disney-thor.vercel.app/',
        image: '/image/disney.png',
        link: 'https://disney-thor.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 5,
        name: 'Minhas Tarefas',
        description: 'Desenvolvi um aplicativo de gerenciamento de tarefas utilizando React. O aplicativo permite aos usuários criar, editar e excluir tarefas, bem como marcar tarefas como concluídas. A aplicação utiliza uma interface amigável e intuitiva, com React para a estrutura e lógica, e CSS para a estilização.',
        tools: ['React', 'CSS', 'JavaScript'],
        code: 'https://github.com/Henrique-Vital/minhas_tarefas_react',
        demo: 'https://minhas-tarefas-rust.vercel.app/',
        image: '/image/minhas-tarefas.png',
        link: 'https://minhas-tarefas-rust.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 6,
        name: 'Lista de Contato',
        description: 'Desenvolvi uma aplicação web para gerenciamento de contatos. Utilizando HTML, CSS, JavaScript e Bootstrap, o aplicativo permite adicionar, editar e remover contatos, além de visualizar uma lista organizada de contatos salvos. A interface é intuitiva e responsiva, garantindo uma boa experiência de usuário.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        code: 'https://github.com/seu-usuario/lista-de-contato',
        demo: 'https://lista-de-contato-main.vercel.app/',
        image: '/image/contato.png',
        link: 'https://lista-de-contato-main.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 7,
        name: 'EBAC Sports',
        description: 'Desenvolvi uma aplicação web chamada EBAC Sports, que oferece informações e funcionalidades relacionadas a esportes. A aplicação apresenta uma interface amigável e responsiva, permitindo aos usuários acessar dados e estatísticas esportivas de forma organizada e intuitiva.',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'React',
            'React-Dom',
            'React-Redux',
            'Redux Toolkit',
            'Styled-Components',
            'TypeScript',
            'Testing Library',
            'Eslint',
            'Prettier'
        ],
        code: 'https://github.com/Henrique-Vital/ebac_sports',
        demo: 'https://ebac-sports-main.vercel.app/',
        image: '/image/sports.png',
        link: 'https://ebac-sports-main.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 8,
        name: 'Cálculo IMC',
        description: 'Desenvolvi uma aplicação web para calcular o Índice de Massa Corporal (IMC). Utilizando React e TypeScript, a aplicação permite que os usuários insiram seus dados de peso e altura para obter o valor do IMC, juntamente com a classificação correspondente. A interface é simples e intuitiva, proporcionando uma boa experiência ao usuário.',
        tools: [
            'React',
            'React-Dom',
            'TypeScript',
            'Vite',
            'ESLint'
        ],
        code: 'https://github.com/Henrique-Vital/Calculo_Imc',
        demo: 'https://calculo-imc-pied.vercel.app/',
        image: '/image/imc.png',
        link: 'https://calculo-imc-pied.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 9,
        name: 'README.md do GitHub',
        description: 'Desenvolvi o README.md do meu perfil no GitHub para apresentar e documentar meus projetos e habilidades. O README.md inclui uma breve introdução, uma lista de projetos com links para repositórios e demos, bem como informações sobre minhas habilidades técnicas e contatos.',
        tools: [
            'Markdown'
        ],
        code: 'https://github.com/Henrique-Vital/henrique-vital',
        demo: 'https://github.com/Henrique-Vital/henrique-vital',
        image: '/image/readme.png',
        link: 'https://github.com/Henrique-Vital/henrique-vital',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 10,
        name: "efood",
        description: "Desenvolvi o efood, uma aplicação web para visualização e gerenciamento de restaurantes e menus. Utilizando React, Redux Toolkit, React Router, Styled Components e TypeScript, o efood oferece uma experiência interativa e responsiva aos usuários, permitindo navegar pelos restaurantes, visualizar menus e realizar pedidos.",
        tools: [
            "React",
            "Redux Toolkit",
            "React Router",
            "Styled Components",
            "TypeScript"
        ],
        code: "https://github.com/Henrique-Vital/efood",
        demo: "https://efood-navy.vercel.app/",
        image: '/image/efood.png',
        link: "https://efood-navy.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 11,
        name: "fintech",
        description: "Desenvolvi o fintech, uma aplicação web voltada para serviços financeiros. Utilizando React, TypeScript, React Router e Recharts, o fintech oferece funcionalidades para visualização e análise de dados financeiros, proporcionando uma experiência informativa e interativa aos usuários.",
        tools: [
            "React",
            "TypeScript",
            "React Router",
            "Recharts"
        ],
        code: "https://github.com/Henrique-Vital/fintech",
        demo: "https://fintech-xi-two.vercel.app/",
        image: '/image/fintech.png',
        link: "https://fintech-xi-two.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 13,
        name: "instasany",
        description: "Desenvolvi o instasany, uma aplicação web utilizando Next.js, GSAP e Tailwind CSS. O instasany oferece uma interface interativa e dinâmica para visualização de conteúdos diversos, utilizando tecnologias modernas como React, GSAP para animações e Tailwind CSS para estilização responsiva.",
        tools: [
            "Next.js",
            "GSAP",
            "React",
            "Tailwind CSS"
        ],
        code: "https://github.com/Henrique-Vital/instasany",
        demo: "https://instasany-delta.vercel.app/",
        image: '/image/instasany.png',
        link: "https://instasany-delta.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 14,
        name: "nubank",
        description: "Desenvolvi o nubank, uma aplicação web inspirada na interface do Nubank. Utilizando HTML para a estrutura, JavaScript para a lógica e interatividade, e SASS para estilização, o nubank oferece uma experiência similar à plataforma original, com funcionalidades simplificadas e uma interface intuitiva.",
        tools: [
            "HTML",
            "JavaScript",
            "SASS"
        ],
        code: "https://github.com/Henrique-Vital/nubank",
        demo: "https://nubank-one.vercel.app/",
        image: '/image/nubank.png',
        link: "https://nubank-one.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 15,
        name: "Calculadora de IMC",
        description: "Projeto de uma calculadora de Índice de Massa Corporal (IMC) desenvolvido com TypeScript, React e Styled-components. Permite alternar entre unidades métricas e imperiais, com interface responsiva e estados interativos. O projeto inclui classificações de peso e faixas saudáveis com base no IMC.",
        tools: [
            "TypeScript",
            "React",
            "Styled-components",
            "React Testing Library",
            "Prettier"
        ],
        code: "https://github.com/Henrique-Vital/body-mass-index-calculator-main",
        demo: "https://body-mass-index-calculator-main.vercel.app/",
        image: '/image/cimc.png',
        link: "https://body-mass-index-calculator-main.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 16,
        name: "EPLAY - E-commerce de Jogos",
        description: "Este repositório contém o desenvolvimento de um e-commerce fictício, chamado EPLAY, focado na venda de jogos digitais. O projeto simula uma plataforma de compras online funcional, com destaque para promoções, categorias de jogos e lançamentos futuros.",
        tools: [
            "React",
            "Redux Toolkit",
            "Styled-components",
            "React Router",
            "Yup",
            "Formik",
            "TypeScript"
        ],
        code: "https://github.com/Henrique-Vital/ecommerce-react-main",
        demo: "https://ecommerce-react-main.vercel.app/",
        image: '/image/eplay.png',
        link: "https://ecommerce-react-main.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 17,
        name: "Cafeteria Online",
        description: "Website de uma cafeteria desenvolvido com HTML5, CSS e Bootstrap. O projeto é responsivo e inclui funcionalidades interativas, como validação de formulários e máscaras para campos, utilizando jQuery e seus plugins. Ideal para demonstração de uma loja virtual no segmento de alimentos.",
        tools: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery"
        ],
        code: "https://github.com/Henrique-Vital/coffee-shop-main",
        demo: "https://coffee-shop-main.vercel.app/",
        image: '/image/coffe.png',
        link: "https://coffee-shop-main.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 18,
        name: "Clone HBO Max",
        description: "Clone da interface da plataforma de streaming HBO Max, desenvolvido utilizando apenas HTML e CSS. O projeto apresenta um design responsivo e recria elementos visuais da página inicial, incluindo menus e banners promocionais.",
        tools: [
            "HTML",
            "CSS"
        ],
        code: "https://github.com/Henrique-Vital/Clone-HBO-Max-master",
        demo: "https://clone-hbo-max-master.vercel.app/",
        image: '/image/hbo.png',
        link: "https://clone-hbo-max-master.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 19,
        name: "Figpro - Stickers Animados",
        description: "Desenvolvido com Next.js e Tailwind CSS, o Figpro é um site interativo onde usuários podem explorar, descobrir e se conectar com uma vasta coleção de stickers animados. Oferece uma experiência mágica e criativa com seções de destaques, biblioteca e histórias por trás de cada sticker.",
        tools: [
            "Next.js",
            "Tailwind CSS"
        ],
        code: "https://github.com/Henrique-Vital/fig_pro",
        demo: "https://fig-pro-coral.vercel.app/",
        image: '/image/fig.png',
        link: "https://fig-pro-coral.vercel.app/",
        role: "Desenvolvedor Front-end"
    }      
];
