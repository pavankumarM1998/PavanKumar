document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ==========================================================================
       2. HEADER SCROLL EFFECT
       ========================================================================== */
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       3. MOBILE NAVIGATION MENU TOGGLE
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link, .btn-contact');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.className = 'bi bi-x';
        } else {
            icon.className = 'bi bi-list';
        }
    });

    // Close menu when a link is clicked (mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'bi bi-list';
            }
        });
    });

    /* ==========================================================================
       4. DYNAMIC TYPING EFFECT
       ========================================================================== */
    const roles = ["Senior Data Engineer", "BI Specialist", "Data Analyst", "Database Developer"];
    const rolesText = document.getElementById('roles-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Delete characters
            rolesText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Speed up deleting
        } else {
            // Write characters
            rolesText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            // End of word, pause before deleting
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Word deleted, move to next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Small pause before writing new word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start the typing animation
    typeEffect();

    /* ==========================================================================
       5. PROJECT DETAILS MODAL & CAROUSEL SYSTEM
       ========================================================================== */
    const projectsData = [
        {
            badge: "ADF & Cloud Project",
            toolIcon: '<i class="bi bi-cloud" style="font-size: 24px; color: var(--color-primary);"></i>',
            title: "Advanced ADF Data Pipelines",
            domain: "Cloud Integration & ETL",
            desc: "An enterprise-ready Azure Data Factory repository featuring Change Data Capture (CDC) watermarks, dynamic schema mappings, REST pagination offset ranges, switch-based file routing, and Logic App notifications.",
            details: "This project establishes a production-grade orchestration framework inside Azure Data Factory (ADF) for enterprise ETL/ELT pipelines.\n\nIt implements Change Data Capture (CDC) via watermark database tables to load delta data incrementally, ensuring efficient database synchronization. It features dynamic schema mapping, allowing a single pipeline to load multiple tables dynamically by fetching mapping metadata. The pipeline handles REST API data ingestion with dynamic offset pagination, routes files dynamically to landing/archive storage based on validation rules, and triggers automated email notifications using Azure Logic Apps webhooks on pipeline completion or failure.",
            github: "https://github.com/pavankumarM1998/ADF-Project",
            linkedin: "",
            tech: ["Azure Data Factory", "Azure SQL", "ADLS Gen2", "Logic Apps", "ETL/ELT", "REST APIs", "CDC"],
            screenshots: [
                { url: "adf_pipeline_architecture.png", caption: "Azure Data Factory ELT pipeline architecture workflow" }
            ],
            youtube: "",
            powerbi: ""
        },
        {
            badge: "PowerBI Project",
            toolIcon: '<img src="https://files.codebasics.io/v3/images-webp/tools/pow-b.png" alt="Power BI Icon" />',
            title: "Business Insights 360 Dashboard",
            domain: "Business & Data Domains",
            desc: "I implemented a Power BI solution for AtliQ Hardwares, replacing Excel reports with interactive dashboards and robust data models to deliver real-time insights and support informed business decisions.",
            details: "The goal of this project was to create a single Power BI report usable by stakeholders from sales, marketing, finance, and the executive team. The focus was on robust data modeling, user-centric report design, and enabling drillable insights for deeper analysis.\n\nThroughout the project, I gained experience with Power Query (basic and advanced), developed both basic and complex DAX formulas, and managed data modeling involving over 10 tables. I also honed skills in selecting appropriate visuals, applying dashboard design principles, using bookmarks, deploying reports on Power BI Service, and incorporating stakeholder feedback. Additionally, I worked with key sales, marketing, finance, and supply chain metrics.",
            github: "https://github.com/pavankumarM1998",
            linkedin: "",
            tech: ["Power BI", "Power Query", "DAX", "MySQL", "Excel", "Data Modeling", "Star Schema"],
            screenshots: [
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68b4025a1b813/69069e9b05.png", caption: "Design a user-centric, empathetic landing page integrated within the dashboard to enhance user experience and engagement." },
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68b4025a3238a/60c9fc169e.png", caption: "Data modelling involving 10+ tables" }
            ],
            youtube: "https://www.youtube.com/embed/fCODzCKFaA4",
            powerbi: "https://app.powerbi.com/view?r=eyJrIjoiMjY1ODE4MjQtNGQyNS00ZGI4LWIyMjctNGE2MjAxMjUyZDYyIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
        },
        {
            badge: "PowerBI Project",
            toolIcon: '<img src="https://files.codebasics.io/v3/images-webp/tools/pow-b.png" alt="Power BI Icon" />',
            title: "Travel & Hotel Insights",
            domain: "Travel and Hotel",
            desc: "Provides deep analytics into 2021 travel/hotel booking performance. Evaluates user demographics, trip revenues, flight performances, and room occupancies to drive revenue management.",
            details: "This Power BI dashboard provides comprehensive insights into travel and hotel booking performance for the year 2021. It assists stakeholders in understanding key business metrics related to trip revenues, user demographics, flight performance, and operations.\n\nThe dashboard enables detailed analysis by month, company, gender, age, flight and hotel details, supporting data-driven decisions in the travel and hospitality domain.",
            github: "https://github.com/pavankumarM1998/Travel-Hotel-Booking-Insights-Dashboard",
            linkedin: "https://www.linkedin.com/posts/m-pavan-kumar-235878168_powerbi-datavisualization-businessintelligence-activity-7378073514903293952-_rpp",
            tech: ["SQL", "Excel", "Python", "Pandas", "Power BI", "DAX", "Data Analysis"],
            screenshots: [
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68dd4b7236ab1/5d71db93f2.png", caption: "Executive Summary: This tab offers a high-level summary of the overall travel business performance" },
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68dd4b723f84d/bd5f7d52b3.png", caption: "Travel Insights (Flight Details): This tab dives into flight-specific performance metrics" }
            ],
            youtube: "",
            powerbi: "https://app.powerbi.com/view?r=eyJrIjoiZGNiYzgwNGItMTAzZC00MjMwLTgyMjctYTQzMWU1YTBlNWEzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
        },
        {
            badge: "PowerBI Project",
            toolIcon: '<img src="https://files.codebasics.io/v3/images-webp/tools/pow-b.png" alt="Power BI Icon" />',
            title: "Snitch Clothing Sales Overview",
            domain: "Clothing & Retail",
            desc: "An interactive sales dashboard consolidating e-commerce KPIs (revenue, orders, YoY growth, product categories performance, and client segment analysis) from raw database engines.",
            details: "Summary:\nThis interactive Power BI dashboard was designed to empower decision-makers with a data-driven view of key metrics and trends. By focusing on user-centric design and drillable insights, the dashboard allows stakeholders from sales, marketing, finance, and operations to make informed decisions that drive business growth.\n\nTools Used:\nPower BI, DAX, Data Modeling, Data Visualization. Through the use of advanced data modeling techniques, DAX formulas, and a careful selection of data visualizations, this dashboard brings complex datasets to life, turning raw data into actionable insights.\n\nProject Outcome:\nThis project showcases how data, when visualized effectively, tells the story of business performance and growth. By leveraging key metrics across multiple dimensions, stakeholders can understand both current performance and forecast future trends, unlocking opportunities for scaling and long-term success.",
            github: "https://github.com/pavankumarM1998/Snitch-.git",
            linkedin: "https://www.linkedin.com/posts/m-pavan-kumar-235878168_powerbi-dataanalytics-businessintelligence-activity-7372831374585589761-C61-",
            tech: ["SQL Server", "MySQL", "Python", "Power BI", "DAX", "Sales KPIs", "E-commerce Analytics"],
            screenshots: [
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68d0ad22968ec/d311716626.png", caption: "Insights into best-selling categories, product contributions, and identification of slow-moving items." },
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68d0ad22a1d25/1f32c36e8b.png", caption: "Tracked throughout the dashboard to provide a clear view of financial performance, helping stakeholders optimize strategies for growth." }
            ],
            youtube: "https://www.youtube.com/embed/jvnoa2tez3Y",
            powerbi: "https://app.powerbi.com/reportEmbed?reportId=d450661b-4284-437e-99ef-e999c80104f2"
        },
        {
            badge: "PowerBI Project",
            toolIcon: '<img src="https://files.codebasics.io/v3/images-webp/tools/pow-b.png" alt="Power BI Icon" />',
            title: "T20 World Cup 2024 Analysis",
            domain: "Sports Analytics",
            desc: "Sports analytics platform categorizing tournament performers into squad roles (finishers, power hitters, anchors, fast bowlers) to provide dynamic insights for managers and teams.",
            details: "This Power BI dashboard offers a comprehensive analysis of team and player performances in the Men’s T20 World Cup 2024. Designed for sports analysts, fans, and fantasy league players, the dashboard provides interactive insights into squad selection, player roles, and tournament statistics.\n\nUsers can explore player data by team and analyze performance across five distinct roles: Power Hitters, Anchors, Finishers, All-rounders, and Specialist Fast Bowlers, based on well-defined statistical conditions. It also features a Best Performers section, showcasing top players and aggregated tournament stats.",
            github: "https://github.com/pavankumarM1998/Men-s-T20-WC-2024?tab=readme-ov-file",
            linkedin: "https://www.linkedin.com/posts/m-pavan-kumar-235878168_t20worldcup2024-cricketinsights-sportsdata-activity-7251056425664192513-DR2D",
            tech: ["Power BI", "Power Query", "Data Modeling", "DAX", "Sports Visualization"],
            screenshots: [
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68b59b0ce8da0/ffec98c405.png", caption: "Players who qualify as Power Hitters based on specific performance criteria. It combines both statistical and visual analysis to assess batting impact" },
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68b59b0d1030b/a74e64ea28.png", caption: "This will show overall tournament stats, and the points table." }
            ],
            youtube: "https://www.youtube.com/embed/UAhjld_kEdk",
            powerbi: "https://app.powerbi.com/view?r=eyJrIjoiNWViMDY2MTYtMDE4Yy00OWQ4LWJiNGMtMzkyY2I1NDkwNzM3IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
        },
        {
            badge: "Excel Project",
            toolIcon: '<img src="https://files.codebasics.io/v3/images-webp/tools/exl-b.png" alt="Excel Icon" />',
            title: "Sales Analytics (FMCG)",
            domain: "Sales Domain",
            desc: "Customer performance evaluations and market performance reports utilizing Excel, Power Query, pivot tables, and DAX to optimize product distributions with respect to targets.",
            details: "I created a sales report in Excel using Pivot Tables, Power Query, and basic DAX to help businesses analyze sales performance and make data-driven decisions.\n\nThe report focuses on identifying effective customer discount strategies, supporting negotiations, and uncovering opportunities for market expansion. It provides insights into key sales metrics such as revenue, customer segments, and regional performance. With conditional formatting and a clean design, the dashboard is easy to navigate and visually highlights important trends and outliers. Users can interact with the report to filter data by product, region, or customer type, enabling a tailored analysis experience. The tool supports strategic planning while also offering value for day-to-day sales tracking.\n\nOutcome:\nThis project provides a reliable, scalable tool for sales analysis, helping businesses enhance customer satisfaction, increase revenue, and uncover new growth opportunities.",
            github: "https://github.com/pavankumarM1998/Sales-Analytics-FMCG-",
            linkedin: "",
            tech: ["Excel", "Power Query", "Pivot Tables", "DAX", "Sales Reporting", "Target Comparison"],
            screenshots: [
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68b3dfb7533a6/6bbd1e8fe4.png", caption: "Customer Performance Report: Provides net sales performance of each customer across years" },
                { url: "https://images.codebasics.io/filters:format(webp)/fit-in/650x650/uploads/learner-portfolio/projects/screenshot/579515/68b3dfb765227/fbdbde466f.png", caption: "Market performance vs Target report across years: Enables stakeholders to assess the country's performance and compare it to set targets." }
            ],
            youtube: "",
            powerbi: ""
        }
    ];

    const projectModal = document.getElementById('project-modal');
    const modalDynamicContent = document.getElementById('modal-dynamic-content');
    const modalClose = document.getElementById('modal-close');
    let currentSlide = 0;
    let modalScreenshots = [];

    // Trigger details modal open
    function openProjectModal(index) {
        const project = projectsData[index];
        if (!project) return;

        currentSlide = 0;
        modalScreenshots = project.screenshots || [];

        // Build tech tags HTML
        const techTagsHtml = project.tech.map(t => `<span class="modal-tool-tag">${t}</span>`).join('');

        // Build screenshots carousel HTML
        let carouselHtml = '';
        if (modalScreenshots.length > 0) {
            const slidesHtml = modalScreenshots.map((shot, idx) => `
                <div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                    <img src="${shot.url}" alt="${project.title} screenshot ${idx + 1}" loading="lazy" />
                    <div class="carousel-caption">${shot.caption}</div>
                </div>
            `).join('');

            const navButtons = modalScreenshots.length > 1 ? `
                <button class="carousel-btn prev" id="carousel-prev" aria-label="Previous image"><i class="bi bi-chevron-left"></i></button>
                <button class="carousel-btn next" id="carousel-next" aria-label="Next image"><i class="bi bi-chevron-right"></i></button>
            ` : '';

            carouselHtml = `
                <div class="modal-carousel">
                    <div class="carousel-slides">
                        ${slidesHtml}
                    </div>
                    ${navButtons}
                </div>
            `;
        }

        // Build links HTML
        let linksHtml = '';
        if (project.github) {
            linksHtml += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="modal-btn-link github"><i class="bi bi-github"></i> GitHub Repository</a>`;
        }
        if (project.linkedin) {
            linksHtml += `<a href="${project.linkedin}" target="_blank" rel="noopener noreferrer" class="modal-btn-link linkedin"><i class="bi bi-linkedin"></i> LinkedIn Post</a>`;
        }

        // Build Video Embed HTML
        let videoHtml = '';
        if (project.youtube) {
            videoHtml = `
                <div class="media-embed-section">
                    <h4>Project Walkthrough Video</h4>
                    <div class="embed-responsive-container">
                        <iframe src="${project.youtube}" title="${project.title} video preview" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            `;
        }

        // Build Power BI Embed HTML
        let powerBiHtml = '';
        if (project.powerbi) {
            powerBiHtml = `
                <div class="media-embed-section">
                    <h4>Live Interactive Dashboard</h4>
                    <div class="embed-responsive-container">
                        <iframe src="${project.powerbi}" title="${project.title} Live Dashboard" allowfullscreen></iframe>
                    </div>
                </div>
            `;
        }

        // Combine left column (info) and right column (visuals/media)
        modalDynamicContent.innerHTML = `
            <div class="modal-grid">
                <!-- Left Column -->
                <div class="modal-info-col">
                    <div class="modal-header-section">
                        <div class="modal-badge-row">
                            <span class="modal-project-badge">${project.badge}</span>
                            <div class="modal-tool-icon">${project.toolIcon}</div>
                        </div>
                        <h2 class="modal-title">${project.title}</h2>
                        <p class="modal-domain">Domain/Function: <span>${project.domain}</span></p>
                    </div>

                    <div class="modal-desc-section">
                        <h4>Summary</h4>
                        <p class="modal-desc-text">${project.desc}</p>
                    </div>

                    <div class="modal-details-section">
                        <h4>Project Details</h4>
                        <p class="modal-details-text">${project.details}</p>
                    </div>

                    <div class="modal-tools-section">
                        <h4>Tools & Technologies</h4>
                        <div class="modal-tools-list">
                            ${techTagsHtml}
                        </div>
                    </div>

                    ${linksHtml ? `<div class="modal-links-row">${linksHtml}</div>` : ''}
                </div>

                <!-- Right Column -->
                <div class="modal-visuals-col">
                    ${carouselHtml}
                    ${videoHtml}
                    ${powerBiHtml}
                </div>
            </div>
        `;

        // Add event listeners for carousel buttons if they exist
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', showPrevSlide);
            nextBtn.addEventListener('click', showNextSlide);
        }

        // Open modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling main page
    }

    // Carousel transition controls
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPrevSlide() {
        showSlide(currentSlide - 1);
    }

    // Close details modal
    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // restore scrolling

        // Crucial: clear embed iframe sources to stop video playback and loading
        const iframes = modalDynamicContent.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            iframe.src = '';
        });

        // Delay clearing HTML to allow fade animation to complete
        setTimeout(() => {
            if (!projectModal.classList.contains('active')) {
                modalDynamicContent.innerHTML = '';
            }
        }, 400);
    }

    // Setup event listeners for card clicks
    document.querySelectorAll('[data-project-index]').forEach(element => {
        element.addEventListener('click', (e) => {
            // If user clicked an external repository/post anchor, don't open modal
            if (e.target.closest('a') && !e.target.closest('.btn-view-details')) {
                return;
            }
            e.preventDefault();
            const index = parseInt(element.getAttribute('data-project-index'));
            openProjectModal(index);
        });
    });

    // Close modal event listeners
    modalClose.addEventListener('click', closeProjectModal);

    // Close on overlay backdrop click
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal || e.target.classList.contains('modal-wrapper')) {
            closeProjectModal();
        }
    });

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
});
