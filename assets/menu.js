class SidebarNavigation extends HTMLElement {
  connectedCallback() {
    // Get the current page filename to determine which link is active
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    // Define the menu links
    const menuItems = [
      { href: "index.html", text: "ようこそ" },
      { href: "chats.html", text: "対話ログ (ICQ)" },
      { href: "exps.html", text: "経験値ログ (Exp)" },
      { href: "issue.html", text: "思考ログ (Memo)" }
    ];

    // Build the list items
    let listHtml = "";
    menuItems.forEach(item => {
      const isActive = currentPath === item.href;
      // If it's the active page, apply styling identical to the hover state for clear visual cue
      const activeStyle = isActive 
        ? 'style="background-color: #000080; color: #ffffff; border: 1px inset #fff; text-decoration: none;"' 
        : '';
      listHtml += `<li><a href="${item.href}" ${activeStyle}>${item.text}</a></li>`;
    });

    this.innerHTML = `
      <nav>
        <div class="nav-title">MENU</div>
        <ul>
          ${listHtml}
        </ul>
      </nav>
    `;
  }
}

// Define the custom element
customElements.define('sidebar-navigation', SidebarNavigation);
