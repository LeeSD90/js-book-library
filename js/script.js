function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	read = read

	this.info = function() {
		return `${this.title} by ${author}, ${pages} pages, ${this.read ? "read" : "not read yet"}`;
	}
}