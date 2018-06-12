let myLibrary = []


$(document).ready(function(){ 
	addBookToLibrary(new Book("title1", "bobby",34,"No"))
	addBookToLibrary(new Book("title2", "bobby",34,"Yes"))
	addBookToLibrary(new Book("title4", "jobby",34,"Yes"))
	render()
 }) 

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addBookToLibrary(book) {
	myLibrary.push(book)
}

function render() {
	clear()
	var myBook = new Book("","",0,false)
	for(var key in myBook) {
		var th = document.createElement('th')
		th.className = "col"
		var content = document.createTextNode(key)
		th.appendChild(content)
		var headings = document.getElementById("headings")
		headings.appendChild(th)
	}

	for(var i = 0; i < myLibrary.length; i++) {
		var tr = document.createElement('tr')
		for(var key in myLibrary[i]){
			var td = document.createElement('td')
			var content = document.createTextNode(myLibrary[i][key])
			td.appendChild(content)
			tr.appendChild(td)
		}
		var items = document.getElementById("items")
		items.appendChild(tr)
	}
}

function newBook() {
	var title = document.getElementById("input-title").value
	var author = document.getElementById("input-author").value
	var pages = document.getElementById("input-pages").value
	var read = document.getElementById("input-read").checked ? "Yes" : "No"
	addBookToLibrary(new Book(title, author, pages, read))
	render()
}

function showForm() {
	document.getElementById("new-book").style.display="block";
}

function hideForm() {
	document.getElementById("new-book").style.display="none";
}

function clear() {
	var items = document.getElementById("items")
	items.innerHTML = '';
	var headings = document.getElementById("headings")
	headings.innerHTML = '';
}