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
    const bid = blogId.replaceAll('-',' ');
		const blog = blogs.find((b) => b.title === bid);
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
		content.innerHTML = "<h2>Posts</h2><section id='blog-index'></section>";
		const ul = document.getElementById("blog-index");

		blogs.forEach((b) => {
      const id = b.title.replaceAll(' ','-');
			const li = document.createElement("article");
			const a = document.createElement("a");
			a.href = "#" + id;
			a.textContent = b.title;
			a.addEventListener("click", (e) => {
				e.preventDefault();
				loadBlog(id);
				history.pushState({id: id}, "", "#" + id);
			});
			li.appendChild(a);
			ul.appendChild(li);
		});
	}

	window.addEventListener("popstate", (e) => {
      console.log(e)
		if (e.state && e.state.id) {
			loadBlog(e.state.id.replaceAll('-',' '));
		} else {
			showHome();
		}
	});

loadBlogList();
