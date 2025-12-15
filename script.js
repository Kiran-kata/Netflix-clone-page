// ============================================
// NETFLIX CLONE - JAVASCRIPT
// Professional Interactivity & Dynamic Content
// Using official TMDB movie posters
// ============================================

// Mock Data for Content - Official Movie/Series Posters
const mockContent = [
    // ===== FEATURED CONTENT =====
    {
        id: 1,
        title: "Stranger Things",
        year: 2016,
        duration: "4 Seasons",
        rating: "4.8",
        genres: ["sci-fi", "drama", "mystery"],
        description: "When a young boy disappears, his friends, family and local police uncover a mystery involving secret government experiments, terrifying supernatural forces and a strange little girl.",
        image: "https://image.tmdb.org/t/p/w500/x2lpQiD3NvBVDo1rr9k8XCQP9hU.jpg",
        category: "trending",
        featured: true,
        contentType: "series"
    },
    {
        id: 2,
        title: "The Crown",
        year: 2016,
        duration: "5 Seasons",
        rating: "4.7",
        genres: ["drama", "biography", "history"],
        description: "This drama series explores the political rivalries and romance of Queen Elizabeth II's reign, showing the tensions between her public duties and personal relationships.",
        image: "https://image.tmdb.org/t/p/w500/qYW0GIMMfkTIDhZqPD2kGJpMPRe.jpg",
        category: "original",
        featured: true,
        contentType: "series"
    },
    {
        id: 3,
        title: "Breaking Bad",
        year: 2008,
        duration: "5 Seasons",
        rating: "4.9",
        genres: ["crime", "drama", "thriller"],
        description: "A high school chemistry teacher turned meth cook partners with a former student to produce crystal methamphetamine and distribute it.",
        image: "https://image.tmdb.org/t/p/w500/ggJllCiGV5mXdBhN6yCLwQ2BNPX.jpg",
        category: "trending",
        featured: false,
        contentType: "series"
    },
    {
        id: 4,
        title: "The Witcher",
        year: 2019,
        duration: "3 Seasons",
        rating: "4.6",
        genres: ["fantasy", "adventure", "drama"],
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
        image: "https://image.tmdb.org/t/p/w500/REFtR3mAVPz2bEtPJ9nSc35x_5o.jpg",
        category: "original",
        featured: false,
        contentType: "series"
    },
    {
        id: 5,
        title: "Dark",
        year: 2017,
        duration: "3 Seasons",
        rating: "4.8",
        genres: ["sci-fi", "mystery", "thriller"],
        description: "A missing child sets off a chain of events that exposes the fractured relationships among four families in a small German town.",
        image: "https://image.tmdb.org/t/p/w500/ThQZI1hLhyUt1lQQ5qKKs47NZSQ.jpg",
        category: "trending",
        featured: false,
        contentType: "series"
    },
    {
        id: 6,
        title: "Peaky Blinders",
        year: 2013,
        duration: "6 Seasons",
        rating: "4.7",
        genres: ["crime", "drama"],
        description: "A gangster family epic set in 1920s Birmingham, England, and centered on a gang of local racketeers and illegal bookmakers.",
        image: "https://image.tmdb.org/t/p/w500/sWSNM8lMIw7HVlLhsBwvkGzC1fR.jpg",
        category: "original",
        featured: false,
        contentType: "series"
    },
    {
        id: 7,
        title: "Wednesday",
        year: 2022,
        duration: "2 Seasons",
        rating: "4.5",
        genres: ["comedy", "crime", "fantasy"],
        description: "Wednesday Addams is sent to Nevermore Academy, a mysterious boarding school where she attempts to master her psychic powers and solve her parents' murder.",
        image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        category: "trending",
        featured: true,
        contentType: "series"
    },
    {
        id: 8,
        title: "Squid Game",
        year: 2021,
        duration: "1 Season",
        rating: "4.6",
        genres: ["drama", "thriller", "survival"],
        description: "Hundreds of cash-strapped players accept an invitation to compete in children's games for a massive prize, but the stakes are deadly.",
        image: "https://image.tmdb.org/t/p/w500/ap8V8zBBa2efsEGBP32wZW137at.jpg",
        category: "original",
        featured: true,
        contentType: "series"
    },

    // ===== ACTION MOVIES =====
    {
        id: 9,
        title: "The Matrix",
        year: 1999,
        duration: "2h 16m",
        rating: "4.7",
        genres: ["action", "sci-fi", "thriller"],
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXqfAC.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 10,
        title: "Inception",
        year: 2010,
        duration: "2h 28m",
        rating: "4.8",
        genres: ["action", "sci-fi", "thriller"],
        description: "A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDMNUwin5qgWQijwW4f.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 11,
        title: "Interstellar",
        year: 2014,
        duration: "2h 49m",
        rating: "4.9",
        genres: ["sci-fi", "action", "drama"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Directed by Christopher Nolan.",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCu244gwI5Ad.jpg",
        category: "action",
        featured: true,
        contentType: "movie"
    },
    {
        id: 12,
        title: "The Avengers",
        year: 2012,
        duration: "2h 23m",
        rating: "4.6",
        genres: ["action", "adventure", "sci-fi"],
        description: "Earth's mightiest heroes must come together and learn to fight as a team to defeat a threat to the world.",
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCnd8kKuNyI78GwLQkHW.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 13,
        title: "Dune",
        year: 2021,
        duration: "2h 42m",
        rating: "4.7",
        genres: ["action", "adventure", "sci-fi"],
        description: "Paul Atreides, a brilliant young man, travels to the dangerous planet Arrakis to ensure the future of his family and people in this epic sci-fi adaptation.",
        image: "https://image.tmdb.org/t/p/w500/d5NXSklXo96JBkSKCOzLKwQaesz.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 14,
        title: "Top Gun: Maverick",
        year: 2022,
        duration: "2h 11m",
        rating: "4.8",
        genres: ["action", "drama", "thriller"],
        description: "After thirty years, Maverick is drawn back into the cockpit to train a new generation of fighter pilots for a dangerous mission.",
        image: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvjgcj7jzVgHAzm8.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 15,
        title: "Mad Max: Fury Road",
        year: 2015,
        duration: "2h 0m",
        rating: "4.7",
        genres: ["action", "adventure", "sci-fi"],
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
        image: "https://image.tmdb.org/t/p/w500/kqjEMsmXI8xjiuzFiYo7Yq4n41G.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 16,
        title: "John Wick",
        year: 2014,
        duration: "1h 41m",
        rating: "4.6",
        genres: ["action", "crime", "thriller"],
        description: "An ex-hit-man comes out of retirement when his son's friend steals his car and kills his dog, leading to a path of vengeance and redemption.",
        image: "https://image.tmdb.org/t/p/w500/2OMB0ynKlyIenMJWI2Dy9IY4NjV.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },

    // ===== ADDITIONAL NETFLIX ORIGINALS =====
    {
        id: 17,
        title: "Bridgerton",
        year: 2020,
        duration: "3 Seasons",
        rating: "4.5",
        genres: ["drama", "romance", "period"],
        description: "Daphne Bridgerton seeks a suitable husband in London high society, but her romantic plans take a turn when she catches the eye of the city's most desirable and controversial bachelor.",
        image: "https://image.tmdb.org/t/p/w500/luTzvy1d4s0KQjgF0f0x3jLLqFR.jpg",
        category: "original",
        featured: false,
        contentType: "series"
    },
    {
        id: 18,
        title: "Ozark",
        year: 2017,
        duration: "4 Seasons",
        rating: "4.6",
        genres: ["crime", "drama", "thriller"],
        description: "A financial planner is forced to move his family to the Ozarks when his money laundering scheme is discovered by a Mexican drug lord's enforcer.",
        image: "https://image.tmdb.org/t/p/w500/i4aD5hhpABWL5wVcK2wYrX3GdAb.jpg",
        category: "original",
        featured: false,
        contentType: "series"
    },
    {
        id: 19,
        title: "The Irishman",
        year: 2019,
        duration: "3h 29m",
        rating: "4.7",
        genres: ["crime", "drama"],
        description: "An aging hitman recalls his past as he works for a crime boss, examining his violent career and the powerful mob connections he maintained over decades.",
        image: "https://image.tmdb.org/t/p/w500/ja3zj01s7304tFEU4LjBMLplDon.jpg",
        category: "action",
        featured: false,
        contentType: "movie"
    },
    {
        id: 20,
        title: "The Platform",
        year: 2020,
        duration: "1h 34m",
        rating: "4.3",
        genres: ["sci-fi", "thriller", "drama"],
        description: "A man imprisoned in a futuristic vertical prison must adapt to a system where social hierarchy is literally stacked vertically, with food distributed only from above.",
        image: "https://image.tmdb.org/t/p/w500/8OD5M0E9s5XbKpCeOW7F7b1KnwP.jpg",
        category: "original",
        featured: false,
        contentType: "movie"
    }
];

// ============================================
// DOM ELEMENTS
// ============================================

const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('videoModal');
const closeModalBtn = document.getElementById('closeModal');
const trendingCarousel = document.getElementById('trendingCarousel');
const originalsCarousel = document.getElementById('originalsCarousel');
const actionCarousel = document.getElementById('actionCarousel');
const searchResults = document.getElementById('searchResults');
const resultsGrid = document.getElementById('resultsGrid');

// ============================================
// WATCHLIST & FAVORITES MANAGEMENT
// ============================================

class WatchlistManager {
    constructor() {
        this.storageKey = 'netflix_watchlist';
        this.watchlist = this.loadWatchlist();
    }

    loadWatchlist() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.warn('Failed to load watchlist:', e);
            return [];
        }
    }

    saveWatchlist() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.watchlist));
        } catch (e) {
            console.warn('Failed to save watchlist:', e);
        }
    }

    addToWatchlist(item) {
        if (!this.isInWatchlist(item.id)) {
            this.watchlist.push(item);
            this.saveWatchlist();
            return true;
        }
        return false;
    }

    removeFromWatchlist(itemId) {
        const index = this.watchlist.findIndex(item => item.id === itemId);
        if (index > -1) {
            this.watchlist.splice(index, 1);
            this.saveWatchlist();
            return true;
        }
        return false;
    }

    isInWatchlist(itemId) {
        return this.watchlist.some(item => item.id === itemId);
    }

    getWatchlist() {
        return this.watchlist;
    }
}

const watchlistManager = new WatchlistManager();

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    attachEventListeners();
});

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

function attachEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close menu on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', toggleSearch);
    searchInput.addEventListener('keyup', handleSearch);

    // Modal close
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navbar scroll effect with debounce
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 10);
    }, { passive: true });

    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function toggleSearch() {
    searchInput.classList.toggle('active');
    searchInput.focus();
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function handleSearch(e) {
    const query = e.target.value.toLowerCase();

    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const results = mockContent.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    displaySearchResults(results);
}

function displaySearchResults(results) {
    searchResults.style.display = 'block';
    resultsGrid.innerHTML = '';

    if (results.length === 0) {
        resultsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #808080;">No results found</p>';
        return;
    }

    results.forEach(item => {
        const card = createContentCard(item);
        resultsGrid.appendChild(card);
    });
}

// ============================================
// FILTERING FUNCTIONS
// ============================================

function filterByGenre(genre) {
    return mockContent.filter(item => 
        item.genres && item.genres.includes(genre)
    );
}

function filterByContentType(type) {
    return mockContent.filter(item => item.contentType === type);
}

function filterByRating(minRating) {
    return mockContent.filter(item => parseFloat(item.rating) >= minRating);
}

function getUniqueGenres() {
    const genres = new Set();
    mockContent.forEach(item => {
        if (item.genres) {
            item.genres.forEach(genre => genres.add(genre));
        }
    });
    return Array.from(genres).sort();
}

// ============================================
// CAROUSEL INITIALIZATION
// ============================================

function initializeCarousels() {
    const trendingContent = mockContent.filter(item => item.category === 'trending');
    const originalsContent = mockContent.filter(item => item.category === 'original');
    const actionContent = mockContent.filter(item => item.category === 'action');

    populateCarousel(trendingCarousel, trendingContent);
    populateCarousel(originalsCarousel, originalsContent);
    populateCarousel(actionCarousel, actionContent);
}

function populateCarousel(carousel, content) {
    carousel.innerHTML = '';
    content.forEach(item => {
        const card = createContentCard(item);
        carousel.appendChild(card);
    });
}

function createContentCard(item) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" onerror="this.src='https://via.placeholder.com/250x350?text=${encodeURIComponent(item.title)}'">
        <div class="card-info">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-rating">★ ${item.rating}</div>
            <p class="card-description">${item.description}</p>
        </div>
    `;

    card.addEventListener('click', () => openModal(item));
    return card;
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

// Modal currently displayed item
let currentModalItem = null;

function openModal(item) {
    currentModalItem = item;
    
    const modalImage = document.getElementById('modalImage');
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalImage.onerror = function() { 
        this.src = `https://via.placeholder.com/400x600?text=${encodeURIComponent(item.title)}`; 
    };
    
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalRating').textContent = `★ ${item.rating}`;
    document.getElementById('modalYear').textContent = item.year;
    document.getElementById('modalDuration').textContent = item.duration;
    document.getElementById('modalDescription').textContent = item.description;
    
    // Display genres
    const genresContainer = document.getElementById('modalGenres');
    genresContainer.innerHTML = '';
    if (item.genres && item.genres.length > 0) {
        item.genres.forEach(genre => {
            const genreTag = document.createElement('span');
            genreTag.className = 'genre-tag';
            genreTag.textContent = genre;
            genresContainer.appendChild(genreTag);
        });
    }

    // Update watchlist button state
    const watchlistBtn = document.getElementById('watchlistBtn');
    if (watchlistManager.isInWatchlist(item.id)) {
        watchlistBtn.innerHTML = '<i class="fas fa-check"></i> Added to List';
        watchlistBtn.style.backgroundColor = 'rgba(229, 9, 20, 0.5)';
    } else {
        watchlistBtn.innerHTML = '<i class="fas fa-plus"></i> Add to List';
        watchlistBtn.style.backgroundColor = '';
    }

    // Attach event listener to watchlist button
    watchlistBtn.onclick = (e) => {
        e.stopPropagation();
        if (watchlistManager.isInWatchlist(item.id)) {
            watchlistManager.removeFromWatchlist(item.id);
            watchlistBtn.innerHTML = '<i class="fas fa-plus"></i> Add to List';
            watchlistBtn.style.backgroundColor = '';
        } else {
            watchlistManager.addToWatchlist(item);
            watchlistBtn.innerHTML = '<i class="fas fa-check"></i> Added to List';
            watchlistBtn.style.backgroundColor = 'rgba(229, 9, 20, 0.5)';
        }
    };

    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// ============================================
// CAROUSEL SCROLL FUNCTIONALITY
// ============================================

function scrollSection(button, direction) {
    const carousel = button.closest('.section-controls').parentElement.nextElementSibling;

    if (!carousel) return;

    const scrollAmount = carousel.offsetWidth * 0.8;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }

    // Close search with Escape key
    if (e.key === 'Escape' && searchInput.classList.contains('active')) {
        searchInput.classList.remove('active');
        searchInput.value = '';
        searchResults.style.display = 'none';
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================

function observeImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Image already loaded from mock data, just trigger animation
                img.style.animation = 'fadeIn 0.6s ease';
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px' // Start loading 50px before image enters viewport
    });

    document.querySelectorAll('.card-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// Optimize hero image loading
function optimizeHeroImage() {
    const heroImg = document.querySelector('.hero-background img');
    if (heroImg) {
        heroImg.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        heroImg.style.opacity = '0.9';
    }
}

// Observe images after carousels are populated
setTimeout(observeImages, 100);
setTimeout(optimizeHeroImage, 100);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce scroll event
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll handler logic already in main listener
    });
}, { passive: true });

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Detect touch device for better UX
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// Console message
console.log('%cNetflix Clone Page', 'color: #e50914; font-size: 20px; font-weight: bold;');
console.log('%cMade with ❤️ using HTML, CSS & JavaScript', 'color: #f5f5f5; font-size: 14px;');
