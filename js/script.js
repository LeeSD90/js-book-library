let myLibrary = []


$(document).ready(function(){ 
	addBookToLibrary(new Book("title1", "bobby",34,false))
	addBookToLibrary(new Book("title2", "bobby",34,false))
	addBookToLibrary(new Book("title4", "jobby",34,false))
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
			console.log(key)
			var content = document.createTextNode(myLibrary[i][key])
			td.appendChild(content)
			tr.appendChild(td)
		}
		var items = document.getElementById("items")
		items.appendChild(tr)
	}
}

function newBook() {
	
}