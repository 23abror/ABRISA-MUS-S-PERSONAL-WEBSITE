document.addEventListener("DOMContentLoaded", () => {
    // =========================================================================
    // BAGIAN 1: DATA DAN KAMUS
    // =========================================================================
    
    // GANTI DENGAN KODE firebaseConfig DARI PROYEK FIREBASE ANDA
    const firebaseConfig = {
        apiKey: "AIzaSyAWOavGb3tDGdZOfU3k7Pa-T6AO5LqdrnU",
        authDomain: "personal-website-df0a2.firebaseapp.com",
        projectId: "personal-website-df0a2",
        storageBucket: "personal-website-df0a2.firebasestorage.app",
        messagingSenderId: "96462725176",
        appId: "1:96462725176:web:789e31285cf064eff206cd",
        measurementId: "G-BY58ZXHGTD"
    };

    // Inisialisasi Firebase
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        var db = firebase.firestore();
    } else {
        console.error("Firebase SDK not loaded. Analytics will not work.");
    }
    
    const translations = {
        en: {
            page_title: "Portfolio | Abror Isa Mustakim", nav_about: "About Me", nav_experience: "Experience", nav_projects: "Projects", nav_contact: "Contact", blog_title: "From My Blog", name: "Abror Isa Mustakim", subtitle: "Final Year of Business Statistics Student at ITS | Data & Business Enthusiast", description: "I am currently pursuing my final year student of Business Statistics at Institut Teknologi Sepuluh Nopember (ITS) with a strong passion for 1. Business Analytics, 2. Product Development, 3. Machine learning, and 4. Human Capital.", skills_title: "Technical Skills", download_cv_button: "Download CV", experience_title: "Work Experience", exp1_title: "President", exp1_date: "April 2025 - Present", exp1_desc: "Oversees strategic planning and daily operations of the organization with 6 Directors and 13 Managers, aligns cross-departmental goals, and maintains performance consistency.", exp2_title: "Product Researcher (Freelance)", exp2_date: "May 2025 - Present", exp2_desc: "Conducted comparative research on major coffee brands by analyzing company profiles and customer sentiment using data extracted from Google Maps Reviews.", exp3_title: "Director of Human Resource Development", exp3_date: "Nov 2024 - March 2025", exp3_desc: "Conducted comparative research on major coffee brands by analyzing company profiles and customer sentiment using data extracted from Google Maps Reviews.", exp4_title: "Manager of Human Capital", exp4_date: "Feb 2025 - Present", exp4_desc: "Conducted comparative research on major coffee brands by analyzing company profiles and customer sentiment using data extracted from Google Maps Reviews.", exp5_title: "Incubation Team Associate (Product Officer Department)", exp5_date: "Nov 2024 - Apr 2025", exp5_desc: "Initiated and structured the Internship Mentoring Program for 400+ participants and developed a Management Trainee (MT) preparation program for 100+ participants.", projects_title: "My Projects", filter_all: "All", filter_dataviz: "Data Visualization", filter_ml: "Machine Learning", filter_web: "Website", p1_title: "Healthcare Management Dashboard", p1_desc: "An interactive dashboard built with Power BI to analyze sales performance and customer metrics.", p2_title: "Student Performance Score Analysis", p2_desc: "A data visualization project using Google Looker Studio to track campaign performance.", p3_title: "Global Billionaire Wealth Dashboard", p3_desc: "A Tableau dashboard providing a comprehensive overview of supply chain operations.", p4_title: "Carbon Footprint Calculator", p4_desc: "A web application that uses an ML model to estimate carbon footprint.", p5_desc: "A personal website project, \"Notesku,\" created to share notes and information.", p6_desc: "A website for \"RenewPack Solutions,\" showcasing a business concept or project.", p7_title: "Interactive Stock Dashboard", p7_desc: "A web app to monitor and analyze real-time stock performance with interactive charts.", contact_title: "Get in Touch", contact_subtitle: "Have a question or want to work together? Leave a message below!", form_name: "Name", form_email: "Email", form_message: "Message", form_submit: "Send Message", footer_text: "© 2025 Abror Isa Mustakim. All Rights Reserved.", view_project_button: "View Project"
        },
        id: {
            page_title: "Portofolio | Abror Isa Mustakim", nav_about: "Tentang Saya", nav_experience: "Pengalaman", nav_projects: "Proyek", nav_contact: "Kontak", blog_title: "Dari Blog Saya", name: "Abror Isa Mustakim", subtitle: "Mahasiswa Tingkat Akhir Statistika Bisnis di ITS | Penggiat Data & Bisnis", description: "Saya adalah mahasiswa tingkat akhir Statistika Bisnis di Institut Teknologi Sepuluh Nopember (ITS) dengan minat yang kuat pada 1. Analitika Bisnis, 2. Pengembangan Produk, 3. Machine learning, dan 4. Human Capital.", skills_title: "Keahlian Teknis", download_cv_button: "Unduh CV", experience_title: "Pengalaman Kerja", exp1_title: "President", exp1_date: "April 2025 - Sekarang", exp1_desc: "Mengawasi perencanaan strategis dan operasional harian organisasi dengan 6 Direktur dan 13 Manajer, menyelaraskan tujuan antar-departemen, dan menjaga konsistensi kinerja.", exp2_title: "Peneliti Produk (Lepas)", exp2_date: "Mei 2025 - Sekarang", exp2_desc: "Melakukan riset komparatif pada merek kopi besar dengan menganalisis profil perusahaan dan sentimen pelanggan menggunakan data dari ulasan Google Maps.", exp3_title: "Direktur Pengembangan Sumber Daya Manusia", exp3_date: "Nov 2024 - Maret 2025", exp3_desc: "Melakukan riset komparatif pada merek kopi besar dengan menganalisis profil perusahaan dan sentimen pelanggan menggunakan data dari ulasan Google Maps.", exp4_title: "Manajer Human Capital", exp4_date: "Feb 2025 - Sekarang", exp4_desc: "Melakukan riset komparatif pada merek kopi besar dengan menganalisis profil perusahaan dan sentimen pelanggan menggunakan data dari ulasan Google Maps.", exp5_title: "Rekan Tim Inkubasi (Departemen Product Officer)", exp5_date: "Nov 2024 - Apr 2025", exp5_desc: "Memulai dan menyusun Program Mentoring Magang untuk 400+ peserta dan mengembangkan program persiapan Management Trainee (MT) untuk 100+ peserta.", projects_title: "Proyek Saya", filter_all: "Semua", filter_dataviz: "Visualisasi Data", filter_ml: "Machine Learning", filter_web: "Situs Web", p1_title: "Dasbor Penjualan & Pelanggan", p1_desc: "Dasbor interaktif yang dibuat dengan Power BI untuk menganalisis kinerja penjualan dan metrik pelanggan.", p2_title: "Analisis Kampanye Pemasaran", p2_desc: "Proyek visualisasi data menggunakan Google Looker Studio untuk melacak kinerja kampanye.", p3_title: "Analitik Rantai Pasokan", p3_desc: "Dasbor Tableau yang memberikan gambaran umum komprehensif tentang operasi rantai pasokan.", p4_title: "Kalkulator Jejak Karbon", p4_desc: "Aplikasi web yang menggunakan model ML untuk memperkirakan jejak karbon.", p5_desc: "Proyek situs web pribadi, \"Notesku,\" dibuat untuk berbagi catatan dan informasi.", p6_desc: "Situs web untuk \"RenewPack Solutions,\" yang menampilkan konsep atau proyek bisnis.", p7_title: "Dasbor Saham Interaktif", p7_desc: "Aplikasi web untuk memantau dan menganalisis kinerja saham secara real-time dengan grafik interaktif.", contact_title: "Hubungi Saya", contact_subtitle: "Punya pertanyaan atau ingin bekerja sama? Tinggalkan pesan di bawah ini!", form_name: "Nama", form_email: "Email", form_message: "Pesan", form_submit: "Kirim Pesan", footer_text: "© 2025 Abror Isa Mustakim. Hak Cipta Dilindungi.", view_project_button: "Lihat Proyek"
        }
    };

    // Objek projectDetails yang sudah diisi lengkap dengan link
    const projectDetails = {
        "1": { 
            en: { title: "Healthcare Management Dashboard", tech: ["Power BI", "DAX"], description: "This project involved creating a dynamic, interactive dashboard to track Key Performance Indicators (KPIs) related to sales figures, customer demographics, and product performance. It helps management to make data-driven decisions quickly.", role: "My Role: I was responsible for the entire process, from data cleaning and transformation to designing the visuals and writing complex DAX measures for calculations.", link: "https://app.powerbi.com/groups/me/reports/aceb82c4-6bd7-46b8-bb68-504c345942cc/ReportSection?experience=power-bi" }, 
            id: { title: "Dasbor Manajemen Kesehatan", tech: ["Power BI", "DAX"], description: "Proyek ini melibatkan pembuatan dasbor dinamis dan interaktif untuk melacak Indikator Kinerja Utama (KPI) terkait angka penjualan, demografi pelanggan, dan kinerja produk. Ini membantu manajemen membuat keputusan berbasis data dengan cepat.", role: "Peran Saya: Saya bertanggung jawab atas seluruh proses, mulai dari pembersihan dan transformasi data hingga merancang visual dan menulis ukuran DAX yang kompleks untuk perhitungan.", link: "https://app.powerbi.com/groups/me/reports/aceb82c4-6bd7-46b8-bb68-504c345942cc/ReportSection?experience=power-bi" }
        },
        "2": { 
            en: { title: "Student Performance Score Analysis", tech: ["Google Looker Studio", "Google Analytics"], description: "A comprehensive report that visualizes data from various digital marketing campaigns. It analyzes metrics like click-through rate (CTR), conversion rate, and cost per acquisition (CPA) to evaluate campaign effectiveness.", role: "My Role: I connected data sources from Google Analytics, designed the report layout, and created calculated fields to present actionable insights for the marketing team.", link: "https://lookerstudio.google.com/s/rpt3ELYh6xs" }, 
            id: { title: "Analisis Skor Performa Siswa", tech: ["Google Looker Studio", "Google Analytics"], description: "Laporan komprehensif yang memvisualisasikan data dari berbagai kampanye pemasaran digital. Menganalisis metrik seperti rasio klik-tayang (CTR), tingkat konversi, dan biaya per akuisisi (CPA) untuk mengevaluasi efektivitas kampanye.", role: "Peran Saya: Saya menghubungkan sumber data dari Google Analytics, merancang tata letak laporan, dan membuat bidang terhitung untuk menyajikan wawasan yang dapat ditindaklanjuti bagi tim pemasaran.", link: "https://lookerstudio.google.com/s/rpt3ELYh6xs" }
        },
        "3": { 
            en: { title: "Global Billionaire Wealth Dashboard", tech: ["Tableau", "SQL"], description: "A comprehensive dashboard that provides an overview of supply chain operations, from inventory management to logistics and delivery times.", role: "My Role: I designed the dashboard layout, created various charts to visualize the supply chain process, and connected it to a data source.", link: "https://drive.google.com/file/d/1L2tKowDsiiJSP2H5nkhBrZThVv5YRtFa/view?usp=drive_link" }, 
            id: { title: "Dasbor Kekayaan Orang Terkaya di dunia", tech: ["Tableau", "SQL"], description: "Dasbor komprehensif yang memberikan gambaran umum tentang operasi rantai pasokan, mulai dari manajemen inventaris hingga logistik dan waktu pengiriman.", role: "Peran Saya: Saya merancang tata letak dasbor, membuat berbagai bagan untuk memvisualisasikan proses rantai pasokan, dan menghubungkannya ke sumber data.", link: "https://drive.google.com/file/d/1L2tKowDsiiJSP2H5nkhBrZThVv5YRtFa/view?usp=drive_link" }
        },
        "4": { 
            en: { title: "Carbon Footprint Calculator", tech: ["Python", "Streamlit", "Scikit-learn"], description: "This is a web application that predicts a user's carbon footprint. It uses a machine learning regression model trained on various lifestyle data points to provide an estimate.", role: "My Role: I developed the machine learning model using Python and Scikit-learn, and then built the interactive web interface using the Streamlit library to deploy the model.", link: "https://carbon-footprint-calculator-app.streamlit.app" }, 
            id: { title: "Kalkulator Jejak Karbon", tech: ["Python", "Streamlit", "Scikit-learn"], description: "Ini adalah aplikasi web yang memprediksi jejak karbon pengguna. Menggunakan model regresi machine learning yang dilatih pada berbagai titik data gaya hidup untuk memberikan perkiraan.", role: "Peran Saya: Saya mengembangkan model machine learning menggunakan Python dan Scikit-learn, lalu membangun antarmuka web interaktif menggunakan pustaka Streamlit untuk menerapkan model tersebut.", link: "https://carbon-footprint-calculator-app.streamlit.app" }
        },
        "5": { 
            en: { title: "Notesku Website", tech: ["Wix Platform"], description: "A personal website project created to practice web design and content management using a website builder platform.", role: "My Role: I designed the layout, structured the content, and published the site using Wix's tools.", link: "https://abrorisamusta2005.wixsite.com/notesku"}, 
            id: { title: "Situs Web Notesku", tech: ["Platform Wix"], description: "Proyek situs web pribadi yang dibuat untuk melatih desain web dan manajemen konten menggunakan platform website builder.", role: "Peran Saya: Saya merancang tata letak, menyusun konten, dan menerbitkan situs menggunakan alat dari Wix.", link: "https://abrorisamusta2005.wixsite.com/notesku"}
        },
        "6": { 
            en: { title: "RenewPack Solutions", tech: ["Wix Platform"], description: "A proof-of-concept website for a business idea, showcasing product information and a brand concept.", role: "My Role: I developed the site structure and visual branding to present the business case effectively.", link: "https://abrorisamusta2005.wixsite.com/renewpacksolutions"}, 
            id: { title: "Solusi RenewPack", tech: ["Platform Wix"], description: "Situs web bukti konsep untuk sebuah ide bisnis, yang menampilkan informasi produk dan konsep merek.", role: "Peran Saya: Saya mengembangkan struktur situs dan branding visual untuk menyajikan studi kasus bisnis secara efektif.", link: "https://abrorisamusta2005.wixsite.com/renewpacksolutions"}
        },
        "7": { 
            en: { title: "Interactive Stock Dashboard", tech: ["Python", "Streamlit", "Pandas", "yfinance"], description: "An interactive web application built with Streamlit to monitor and analyze the performance of various stocks in real-time. Users can select multiple stocks to compare historical data, closing prices, and trading volumes through dynamic charts.", role: "My Role: I developed the entire application, from fetching real-time stock data using the yfinance library to creating the interactive visualizations and deploying it as a web app on Streamlit Cloud.", link: "https://23abror-streamlit-eas-finance-br6ylg.streamlit.app/" }, 
            id: { title: "Dasbor Saham Interaktif", tech: ["Python", "Streamlit", "Pandas", "yfinance"], description: "Aplikasi web interaktif yang dibuat dengan Streamlit untuk memantau dan menganalisis kinerja berbagai saham secara real-time. Pengguna dapat memilih beberapa saham untuk membandingkan data historis, harga penutupan, dan volume perdagangan melalui grafik yang dinamis.", role: "Peran Saya: Saya mengembangkan seluruh aplikasi, mulai dari mengambil data saham real-time menggunakan pustaka yfinance hingga membuat visualisasi interaktif dan mendeploy-nya sebagai aplikasi web di Streamlit Cloud.", link: "https://23abror-streamlit-eas-finance-br6ylg.streamlit.app/" }
        }
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

    // Panggil fungsi analytics
    recordVisit();
    displayVisitorChart();
});
