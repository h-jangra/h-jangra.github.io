// script.js
let blogs = [];
	const content = document.getElementById("content");
	const maxVisible = 4;

	async function loadBlogList() {
		try {
			content.innerHTML = '<div class="loading"></div>';
			const res = await fetch("blogs.json");
			blogs = await res.json();
			if (location.hash) {
				loadBlog(location.hash.substring(1));
			} else {
				showHome();
			}
		} catch (error) {
			content.innerHTML =
				"<p>Error loading blog list. Please check if blogs/blogs.json exists.</p>";
		}
	}

	async function loadBlog(blogId) {
		const blog = blogs.find((b) => b.id === blogId);
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
			content.innerHTML =
				"<p>Error loading blog post. Please check if the file exists.</p>";
		}
	}

	function showHome() {
		content.innerHTML = "<h2>Posts</h2><ul id='blog-index'></ul>";
		const ul = document.getElementById("blog-index");

		blogs.forEach((b) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = "#" + b.id;
			a.textContent = b.title;
			a.addEventListener("click", (e) => {
				e.preventDefault();
				loadBlog(b.id);
				history.pushState({id: b.id}, "", "#" + b.id);
			});
			li.appendChild(a);
			ul.appendChild(li);
		});
	}

	window.addEventListener("popstate", (e) => {
		if (e.state && e.state.id) {
			loadBlog(e.state.id);
		} else {
			showHome();
		}
	});

	let resizeTimeout;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			buildNavbar();
		}, 250);
	});

loadBlogList();