// Configuração do Intersection Observer para animações
const setupIntersectionObserver = () => {
    try {
        const animatedElements = document.querySelectorAll('.section, .fade-in-element');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        entry.target.classList.add('visible');
                    });
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '-50px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } catch (error) {
        console.error('Error setting up IntersectionObserver:', error);
    }
};

// Configuração do menu mobile
const setupMobileMenu = () => {
    try {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const header = document.querySelector('.header');
        
        if (!navToggle || !navMenu || !header) {
            throw new Error('Required navigation elements not found');
        }

        // Fechar menu ao clicar em links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && navToggle.checked) {
                navToggle.checked = false;
            }
        });

        // Acessibilidade do teclado
        navToggle.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navToggle.checked = !navToggle.checked;
            }
        });
    } catch (error) {
        console.error('Error setting up mobile menu:', error);
    }
};

// Configuração do formulário de contato
const setupContactForm = () => {
    try {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validação básica
            if (!data.nome || !data.email || !data.mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (!isValidEmail(data.email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            try {
                // Aqui você adicionaria a lógica de envio do formulário
                console.log('Dados do formulário:', data);
                form.reset();
                alert('Mensagem enviada com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar formulário:', error);
                alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            }
        });
    } catch (error) {
        console.error('Error setting up contact form:', error);
    }
};

// Função para validar email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Função para garantir que as animações funcionem ao recarregar a página
const setupScrollFix = () => {
    try {
        const scrollPosition = window.scrollY;
        requestAnimationFrame(() => {
            window.scrollTo(0, scrollPosition + 1);
            requestAnimationFrame(() => {
                window.scrollTo(0, scrollPosition);
            });
        });
    } catch (error) {
        console.error('Error fixing scroll position:', error);
    }
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// Controle de visibilidade do footer
const handleFooterVisibility = () => {
    const footer = document.querySelector('footer');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Mostra o footer quando estiver próximo do final da página
    if (windowHeight + scrollTop >= documentHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
};

>>>>>>> 42c67a3 (Versão 0.2)
>>>>>>> 4bada72 (Versão 0.2)
// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    setupIntersectionObserver();
    setupMobileMenu();
    setupContactForm();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    
    // Adiciona o listener para o scroll
    window.addEventListener('scroll', handleFooterVisibility);
    // Chama uma vez para verificar o estado inicial
    handleFooterVisibility();
>>>>>>> 42c67a3 (Versão 0.2)
>>>>>>> 4bada72 (Versão 0.2)
});

// Fix para animações ao carregar a página
window.addEventListener('load', setupScrollFix);

// Otimização de performance para animações de fundo
const optimizeBackgroundAnimations = () => {
    try {
        const backgroundAnimation = document.querySelector('.background-animation');
        if (!backgroundAnimation) return;

        // Usar requestAnimationFrame para animações suaves
        let frame;
        const animate = () => {
            frame = requestAnimationFrame(animate);
            // Aqui você pode adicionar lógica de animação personalizada se necessário
        };

        // Iniciar animação
        animate();

        // Parar animação quando a página não está visível
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(frame);
            } else {
                animate();
            }
        });
    } catch (error) {
        console.error('Error optimizing background animations:', error);
    }
};

// Iniciar otimização de animações
optimizeBackgroundAnimations(); 