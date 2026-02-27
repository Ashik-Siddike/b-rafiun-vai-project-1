// Script file for dynamic behaviors

// Tab Switching for Licensing Page
function showTab(tabName) {
    const btnCategory = document.getElementById('btn-category');
    const btnAgency = document.getElementById('btn-agency');
    const tabCategory = document.getElementById('tab-category');
    const tabAgency = document.getElementById('tab-agency');

    if (!btnCategory || !btnAgency || !tabCategory || !tabAgency) return;

    if (tabName === 'category') {
        tabCategory.classList.remove('hidden');
        tabAgency.classList.add('hidden');

        btnCategory.style.backgroundColor = '#1a7ab7';
        btnCategory.style.color = 'white';
        btnAgency.style.backgroundColor = 'white';
        btnAgency.style.color = '#1a7ab7';
    } else {
        tabCategory.classList.add('hidden');
        tabAgency.classList.remove('hidden');

        btnAgency.style.backgroundColor = '#1a7ab7';
        btnAgency.style.color = 'white';
        btnCategory.style.backgroundColor = 'white';
        btnCategory.style.color = '#1a7ab7';
    }
}

// Accordion Toggling for Licensing Page and FAQs
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    if (!content) return;

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (icon) {
            icon.classList.remove('fa-caret-right', 'fa-angle-right');
            icon.classList.add(icon.classList.contains('fa-angle-right') ? 'fa-angle-down' : 'fa-caret-down');
            // Hardcode swap for angle vs caret based on initial class presence isn't reliable.
            // Just swap what is there.
            if (icon.classList.contains('fa-caret-right') || icon.classList.contains('fa-caret-down')) {
                icon.classList.remove('fa-caret-right');
                icon.classList.add('fa-caret-down');
            } else {
                icon.classList.remove('fa-angle-right');
                icon.classList.add('fa-angle-down');
            }
        }
    } else {
        content.classList.add('hidden');
        if (icon) {
            if (icon.classList.contains('fa-caret-right') || icon.classList.contains('fa-caret-down')) {
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-right');
            } else {
                icon.classList.remove('fa-angle-down');
                icon.classList.add('fa-angle-right');
            }
        }
    }
}

// Tab Switching for FAQ Page
function showFaqTab(tabName) {
    const tabs = ['faqs', 'didyouknow', 'notices'];

    tabs.forEach(tab => {
        const btn = document.getElementById(`btn-${tab}`);
        const content = document.getElementById(`tab-${tab}`);

        if (!btn || !content) return;

        if (tab === tabName) {
            content.classList.remove('hidden');
            // Active styling
            btn.classList.add('bg-[#1a7ab7]', 'text-white');
            btn.classList.remove('bg-white', 'text-[#1a7ab7]', 'hover:bg-gray-50');
        } else {
            content.classList.add('hidden');
            // Inactive styling
            btn.classList.remove('bg-[#1a7ab7]', 'text-white');
            btn.classList.add('bg-white', 'text-[#1a7ab7]', 'hover:bg-gray-50');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Business Licensing Platform Loaded");

    // Mobile Menu Toggle Logic (using event delegation for reliability)
    document.addEventListener('click', (e) => {
        // Open Menu
        if (e.target.closest('#open-mobile-menu')) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                document.body.style.overflow = 'hidden';
            }
        }

        // Close Menu
        if (e.target.closest('#close-mobile-menu')) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.style.overflow = '';
            }
        }
    });
});
