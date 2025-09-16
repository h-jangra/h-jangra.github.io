# Creating Tabs with Just HTML & CSS (No JavaScript Needed!)

Tabs are one of those UI patterns you see everywhere—on websites, dashboards, or even blogs. Usually, people jump straight into JavaScript to make them work. But guess what? You don’t actually *need* JavaScript for simple tabs. With a little CSS magic, we can do it with just HTML and CSS.  

---

## Step 1: The Basic Structure
We’ll use radio buttons (or checkboxes) hidden in the background to control which tab is active. Each tab will have:

- A label (the clickable tab button)
- A content box

HTML:

```html
<div class="tabs">
  <input type="radio" id="tab1" name="tab" checked>
  <label for="tab1">Tab 1</label>

  <input type="radio" id="tab2" name="tab">
  <label for="tab2">Tab 2</label>

  <input type="radio" id="tab3" name="tab">
  <label for="tab3">Tab 3</label>

  <div class="tab-content" id="content1">
    <p>This is the content of Tab 1.</p>
  </div>
  <div class="tab-content" id="content2">
    <p>This is the content of Tab 2.</p>
  </div>
  <div class="tab-content" id="content3">
    <p>This is the content of Tab 3.</p>
  </div>
</div>
````

---

## Step 2: Styling It Up

Now, let’s hide those ugly radio buttons and make the labels look like tabs.

```css
.tabs {
  max-width: 500px;
  margin: 2rem auto;
  font-family: sans-serif;
}

.tabs input {
  display: none;
}

.tabs label {
  padding: 10px 20px;
  background: #eee;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  margin-right: 5px;
}

.tabs label:hover {
  background: #ddd;
}

.tab-content {
  display: none;
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
  background: #fafafa;
  border-radius: 0 8px 8px 8px;
}
```

---

## Step 3: Show Active Tab with CSS Magic ✨

Here’s where the trick happens. We’ll use the `:checked` pseudo-class to show the right tab content.

```css
#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3 {
  display: block;
}

#tab1:checked + label,
#tab2:checked + label,
#tab3:checked + label {
  background: #fff;
  border-bottom: 1px solid #fff;
}
```
