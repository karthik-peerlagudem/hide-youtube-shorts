// Instantly hide Shorts before they render
const style = document.createElement('style');
style.textContent = `
  ytd-rich-section-renderer, /* Shorts shelf on homepage */
  a[href^="/shorts"] /* Shorts link in sidebar */ {
    display: none !important;
  }
`;
document.head.appendChild(style);

// Remove Shorts dynamically if YouTube re-renders the page
const hideDynamicShorts = () => {
    document.querySelectorAll('ytd-rich-shelf-renderer').forEach((el) => {
        if (el.innerText.toLowerCase().includes('shorts')) el.remove();
    });

    document
        .querySelectorAll('a[href^="/shorts"]')
        .forEach((el) => el.remove());
};

// Debounce function to optimize performance
const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

const debouncedHideDynamicShorts = debounce(hideDynamicShorts, 300);

// Monitor DOM changes to remove Shorts dynamically
const observer = new MutationObserver(() => debouncedHideDynamicShorts());
observer.observe(document.body, { childList: true, subtree: true });

// Run initially to ensure Shorts are gone from the start
hideDynamicShorts();
