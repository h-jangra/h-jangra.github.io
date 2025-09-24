
let blogs = [];
const content = document.getElementById("content");
const maxVisible = 4;

// Load blogs.json
async function loadBlogList() {
    try {
        content.innerHTML = '<div class="loading"></div>';

        const res = await fetch("blogs.json");
        blogs = await res.json();

        // Check if there's a hash in the URL
        if (location.hash) {
            const hash = location.hash.substring(1);
            if (hash.toLowerCase() === "about") {
                loadAboutPage();
            } else {
                loadBlog(hash.replaceAll('-', ' '));
            }
        } else {
            showHome();
        }
    } catch (error) {
        content.innerHTML = "<p>Error loading blog list. Please check if blogs.json exists.</p>";
    }
}

// Load a blog post
async function loadBlog(blogId) {
    const bid = blogId.replaceAll('-', ' ');
    const blog = blogs.find(b => b.title.toLowerCase() === bid.toLowerCase());

    if (!blog) {
        showHome();
        return;
    }

    try {
        content.innerHTML = '<div class="loading"></div>';
        const res = await fetch(blog.file);
        const text = await res.text();
        content.innerHTML = marked.parse(text);
    } catch (err) {
        content.innerHTML = "<p>Error loading blog post. Check if the file exists.</p>";
    }
}

// Show list of blog posts
function showHome() {
    content.innerHTML = "<h2>Posts</h2><section id='blog-index'></section>";
    const ul = document.getElementById("blog-index");

    blogs.forEach((b) => {
        const id = b.title.replaceAll(' ', '-');
        const li = document.createElement("article");
        const a = document.createElement("a");
        a.href = "#" + id;
        a.textContent = b.title;
        a.addEventListener("click", (e) => {
            e.preventDefault();
            loadBlog(id);
            history.pushState({ id: id }, "", "#" + id);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
}

// Load About page
async function loadAboutPage() {
    try {
        content.innerHTML = '<div class="loading"></div>';
        const res = await fetch("blogs/About.md"); // Make sure this file exists
        const text = await res.text();
        content.innerHTML = marked.parse(text);
    } catch (err) {
        content.innerHTML = "<p>Error loading About page. Check if About.md exists.</p>";
    }
}

// Handle back/forward buttons
window.addEventListener("popstate", (e) => {
    if (e.state && e.state.id) {
        if (e.state.id.toLowerCase() === "about") {
            loadAboutPage();
        } else {
            loadBlog(e.state.id.replaceAll('-', ' '));
        }
    } else {
        showHome();
    }
});

// About link click
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.getElementById("about-link");
    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        loadAboutPage();
        history.pushState({ id: "About" }, "", "#about");
    });
});

// Initialize
loadBlogList();
