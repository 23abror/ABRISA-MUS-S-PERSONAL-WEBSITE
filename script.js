document.addEventListener("DOMContentLoaded", () => {
    // =========================================================================
    // BAGIAN 1: DATA DAN KAMUS
    // =========================================================================
    const translations = {
        en: {
            page_title: "Portfolio | Abror Isa Mustakim", nav_about: "About Me", nav_experience: "Experience", nav_projects: "Projects", nav_contact: "Contact", blog_title: "From My Blog", name: "Abror Isa Mustakim", subtitle: "Final Year of Business Statistics Student at ITS | Data & Business Enthusiast", description: "I am currently pursuing my final year student of Business Statistics at Institut Teknologi Sepuluh Nopember (ITS) with a strong passion for 1. Business Analytics, 2. Product Development, 3. Machine learning, and 4. Human Capital.", skills_title: "Technical Skills", download_cv_button: "Download CV", experience_title: "Work Experience", exp1_title: "President", exp1_date: "April 2025 - Present", exp1_desc: "Oversees strategic planning and daily operations of the organization with 6 Directors and 13 Managers, aligns cross-departmental goals, and maintains performance consistency.", exp2_title: "Product Researcher (Freelance)", exp2_date: "May 2025 - Present", exp2_desc: "Conducted comparative research on major coffee brands by analyzing company profiles and customer sentiment using data extracted from Google Maps Reviews.", exp3_title: "Director of Human Resource Development", exp3_date: "Nov 2024 - March 2025", exp3_desc: "Conducted comparative research on major coffee brands by analyzing company profiles and customer sentiment using data extracted from Google Maps Reviews.", exp4_title: "Manager of Human Capital", exp4_date: "Feb 2025 - Present", exp4_desc: "Conducted comparative research on major coffee brands by analyzing company profiles and customer sentiment using data extracted from Google Maps Reviews.", exp5_title: "Incubation Team Associate (Product Officer Department)", exp5_date: "Nov 2024 - Apr 2025", exp5_desc: "Initiated and structured the Internship Mentoring Program for 400+ participants and developed a Management Trainee (MT) preparation program for 100+ participants.", projects_title: "My Projects", filter_all: "All", filter_dataviz: "Data Visualization", filter_ml: "Machine Learning", filter_web: "Website", p1_title: "Sales & Customer Dashboard", p1_desc: "An interactive dashboard built with Power BI to analyze sales performance and customer metrics.", p2_title: "Marketing Campaign Analysis", p2_desc: "A data visualization project using Google Looker Studio to track campaign performance.", p3_title: "Supply Chain Analytics", p3_desc: "A Tableau dashboard providing a comprehensive overview of supply chain operations.", p4_title: "Carbon Footprint Calculator", p4_desc: "A web application that uses an ML model to estimate carbon footprint.", p5_desc: "A personal website project, \"Notesku,\" created to share notes and information.", p6_desc: "A website for \"RenewPack Solutions,\" showcasing a business concept or project.", p7_title: "Interactive Stock Dashboard", p7_desc: "A web app to monitor and analyze real-time stock performance with interactive charts.", contact_title: "Get in Touch", contact_subtitle: "Have a question or want to work together? Leave a message below!", form_name: "Name", form_email: "Email", form_message: "Message", form_submit: "Send Message", footer_text: "© 2025 Abror Isa Mustakim. All Rights Reserved.", view_project_button: "View Project"
        },
        id: {
            page_title: "Portofolio | Abror Isa Mustakim", nav_about: "Tentang Saya", nav_experience: "Pengalaman", nav_projects: "Proyek", nav_contact: "Kontak", blog_title: "Dari Blog Saya", name: "Abror Isa Mustakim", subtitle: "Mahasiswa Tingkat Akhir Statistika Bisnis di ITS | Penggiat Data & Bisnis", description: "Saya adalah mahasiswa tingkat akhir Statistika Bisnis di Institut Teknologi Sepuluh Nopember (ITS) dengan minat yang kuat pada 1. Analitika Bisnis, 2. Pengembangan Produk, 3. Machine learning, dan 4. Human Capital.", skills_title: "Keahlian Teknis", download_cv_button: "Unduh CV", experience_title: "Pengalaman Kerja", exp1_title: "President", exp1_date: "April 2025 - Sekarang", exp1_desc: "Mengawasi perencanaan strategis dan operasional harian organisasi dengan 6 Direktur dan 13 Manajer, menyelaraskan tujuan antar-departemen, dan menjaga konsistensi kinerja.", exp2_title: "Peneliti Produk (Lepas)", exp2_date: "Mei 2025 - Sekarang", exp2_desc: "Melakukan riset komparatif pada merek kopi besar dengan menganalisis profil perusahaan dan sentimen pelanggan menggunakan data dari ulasan Google Maps.", exp3_title: "Direktur Pengembangan Sumber Daya Manusia", exp3_date: "Nov 2024 - Maret 2025", exp3_desc: "Melakukan riset komparatif pada merek kopi besar dengan menganalisis profil perusahaan dan sentimen pelanggan menggunakan data dari ulasan Google Maps.", exp4_title: "Manajer Human Capital", exp4_date: "Feb 2025 - Sekarang", exp4_desc: "Melakukan riset komparatif pada merek kopi besar dengan menganalisis profil perusahaan dan sentimen pelanggan menggunakan data dari ulasan Google Maps.", exp5_title: "Rekan Tim Inkubasi (Departemen Product Officer)", exp5_date: "Nov 2024 - Apr 2025", exp5_desc: "Memulai dan menyusun Program Mentoring Magang untuk 400+ peserta dan mengembangkan program persiapan Management Trainee (MT) untuk 100+ peserta.", projects_title: "Proyek Saya", filter_all: "Semua", filter_dataviz: "Visualisasi Data", filter_ml: "Machine Learning", filter_web: "Situs Web", p1_title: "Dasbor Penjualan & Pelanggan", p1_desc: "Dasbor interaktif yang dibuat dengan Power BI untuk menganalisis kinerja penjualan dan metrik pelanggan.", p2_title: "Analisis Kampanye Pemasaran", p2_desc: "Proyek visualisasi data menggunakan Google Looker Studio untuk melacak kinerja kampanye.", p3_title: "Analitik Rantai Pasokan", p3_desc: "Dasbor Tableau yang memberikan gambaran umum komprehensif tentang operasi rantai pasokan.", p4_title: "Kalkulator Jejak Karbon", p4_desc: "Aplikasi web yang menggunakan model ML untuk memperkirakan jejak karbon.", p5_desc: "Proyek situs web pribadi, \"Notesku,\" dibuat untuk berbagi catatan dan informasi.", p6_desc: "Situs web untuk \"RenewPack Solutions,\" yang menampilkan konsep atau proyek bisnis.", p7_title: "Dasbor Saham Interaktif", p7_desc: "Aplikasi web untuk memantau dan menganalisis kinerja saham secara real-time dengan grafik interaktif.", contact_title: "Hubungi Saya", contact_subtitle: "Punya pertanyaan atau ingin bekerja sama? Tinggalkan pesan di bawah ini!", form_name: "Nama", form_email: "Email", form_message: "Pesan", form_submit: "Kirim Pesan", footer_text: "© 2025 Abror Isa Mustakim. Hak Cipta Dilindungi.", view_project_button: "Lihat Proyek"
        }
    };
    const projectDetails = {
        // ... (Objek projectDetails Anda yang sudah ada bisa ditaruh di sini) ...
    };
    const chatResponses = {
        'contact': {
            question: "Can I get your contact info?",
            answer: "Of course! You can reach me via Email <a href='mailto:abrorisamustakim@gmail.com' target='_blank'>abrorisamustakim@gmail.com</a> atau kunjungi profil <a href='http://www.linkedin.com/in/abrorisamustakim' target='_blank'>LinkedIn</a> saya."
        },
        'portfolio': {
            question: "I would like to see your portfolio.",
            answer: "You're in the right place! All of my projects are listed in the 'My Projects' section above. Feel free to click on any project to see the details."
        },
        'collaboration': {
            question: "Are you open to collaboration?",
            answer: "Absolutely! I'm always open to discussing collaboration opportunitities, freelance projects, competitions, or new ideas in my backgrounds. Please send the details via email or my LinkedIn account, thank you."
        },
        'other': {
            question: "I have another questions.",
            answer: "For any other specific questions, please feel free to send me a message directly using the contact form of the page. I'll get back to you shortly."
        }
    };

    // =========================================================================
    // BAGIAN 2: DEKLARASI ELEMEN DOM (TERPUSAT)
    // =========================================================================
    const body = document.body;
    // Elemen Umum
    const themeToggleButton = document.getElementById('theme-toggle');
    const langEnButton = document.getElementById('lang-en');
    const langIdButton = document.getElementById('lang-id');
    // Elemen Proyek & Modal
    const projectModal = document.getElementById('project-modal');
    const modalCloseButton = document.querySelector('.close-button');
    const allProjectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Elemen Chatbot
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotOptions = document.getElementById('chatbot-options');
    const chatIcon = chatbotToggle.querySelector('svg:not(#chatbot-close-icon)');
    const closeIcon = document.getElementById('chatbot-close-icon');

    // =========================================================================
    // BAGIAN 3: FUNGSI-FUNGSI
    // =========================================================================

    // -- Fungsi Dark Mode --
    const applyTheme = (theme) => {
        body.classList.remove('dark-mode');
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        }
        localStorage.setItem('theme', theme);
    };

    // -- Fungsi Bahasa --
    const setLanguage = (language) => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        langEnButton.classList.toggle('active', language === 'en');
        langIdButton.classList.toggle('active', language === 'id');
    };

    // -- Fungsi Chatbot --
    function displayMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}`;
        messageElement.innerHTML = text;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function showMainMenu() {
        chatbotOptions.innerHTML = `
            <button data-key="contact">Contact Info</button>
            <button data-key="portfolio">View Portfolio</button>
            <button data-key="collaboration">Work Together</button>
            <button data-key="other">Ask Something Else</button>
        `;
    }

    function showBackButton() {
        chatbotOptions.innerHTML = `<button id="back-to-menu">« Back to Main Menu</button>`;
        const backButton = document.getElementById('back-to-menu');
        if(backButton) {
            backButton.addEventListener('click', () => {
                displayMessage("Returning to the main menu.", 'user');
                setTimeout(displayInitialGreeting, 500);
            }, { once: true }); // Pastikan event listener hanya berjalan sekali
        }
    }

    function handleOptionClick(event) {
        const targetButton = event.target.closest('button');
        if (!targetButton) return;
        
        const key = targetButton.dataset.key;
        if (!key) return;

        const response = chatResponses[key];
        displayMessage(response.question, 'user');
        chatbotOptions.innerHTML = '';

        setTimeout(() => {
            displayMessage(response.answer, 'bot');
            showBackButton();
        }, 800);
    }

    function displayInitialGreeting() {
        chatbotMessages.innerHTML = '';
        displayMessage("Hi there! I'm Abror Isa's AI assistant. How can I help you today?", 'bot');
        showMainMenu();
    }

    // =========================================================================
    // BAGIAN 4: EVENT LISTENERS & INISIALISASI
    // =========================================================================

    // Listener Tema
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // Listener Bahasa
    langEnButton.addEventListener('click', () => setLanguage('en'));
    langIdButton.addEventListener('click', () => setLanguage('id'));

    // Listener Modal Proyek
    allProjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            if (!projectId) return;

            const currentLang = localStorage.getItem('language') || 'en';
            const details = projectDetails[projectId]?.[currentLang];
            
            if (details && projectModal) {
                projectModal.querySelector('#modal-title').innerText = details.title;
                projectModal.querySelector('#modal-img').src = card.querySelector('img').src;
                projectModal.querySelector('#modal-description').innerText = details.description;
                projectModal.querySelector('#modal-role').innerText = details.role;
                projectModal.querySelector('#modal-link').href = details.link;

                const techContainer = projectModal.querySelector('#modal-tech');
                techContainer.innerHTML = '';
                details.tech.forEach(t => {
                    const techSpan = document.createElement('span');
                    techSpan.innerText = t;
                    techContainer.appendChild(techSpan);
                });
                
                projectModal.style.display = 'block';
            }
        });
    });

    if (modalCloseButton) {
        modalCloseButton.onclick = () => { projectModal.style.display = "none"; };
    }
    window.onclick = (event) => { 
        if (event.target == projectModal) { 
            projectModal.style.display = "none"; 
        }
    };

    // Listener Filter Proyek
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            allProjectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (category) {
                    if (filter === 'all' || category.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Listener Chatbot
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            const isActive = chatbotWindow.classList.contains('active');
            
            chatIcon.style.display = isActive ? 'none' : 'block';
            closeIcon.style.display = isActive ? 'block' : 'none';
    
            if (isActive && chatbotMessages.children.length === 0) {
                displayInitialGreeting();
            }
        });
    }

    if (chatbotOptions) {
        chatbotOptions.addEventListener('click', handleOptionClick);
    }
    
    // Inisialisasi Halaman Awal
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    applyTheme(savedTheme);
    setLanguage(savedLanguage);
});