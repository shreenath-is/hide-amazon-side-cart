console.log("Content script loaded for Amazon domains.");

let hideCount = 0

function hideCartSidebar() {
  const cartSidebar = document.querySelector('#nav-flyout-ewc');
  if (cartSidebar) {
    cartSidebar.style.display = 'none';

    hideCount++

    const parent = cartSidebar.parentNode;
    if (parent) {
      parent.style.margin = '0';
      parent.style.padding = '0';
      parent.style.height = 'auto';
      parent.style.overflow = 'visible';
    }

    console.log("Cart sidebar hidden.");
  }
}

hideCartSidebar();

const observer = new MutationObserver(() => {
  hideCartSidebar();
});

const parent = document.querySelector('#navbar')

observer.observe(parent, {
  childList: true,
  subtree: true,
});


if (hideCount > 1) {
  console.log('Removing sidebar observer')
  observer.disconnect();
}

