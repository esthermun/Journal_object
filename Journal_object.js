// application - simulates a journal with a list of entries

// create an entry and push the entry into journal
function Entry (title, content, author, tags){
	this.title = title;
	this.content = content;
	this.author = author;
	this.tags = tags;
	this.timestamp = new Date().toString();
	this.text = this.title + " by " + this.author + " was added on " + this.timestamp + ".";
	//function - find tag inside entry vs. find tag inside journal (journal inside tag doens't make sense)
	this.hasTag = function(tags){
		for (var i = 0; i < this.tags.length; i++){
			if (this.tags[i] === tags) {
				return true;
			} 
		}
		return false;
	}
}

//create a journal 
function Journal (title, author, content, tags){
	this.entries = [];
	this.addEntry = function (title, content, author, tags){
		var entry = new Entry(title, content, author, tags);
		this.entries.push(entry);
	}; 

	//display entries
	this.displayEntry = function showEntry (entry){
		console.log("\n");
		console.log("Title: " + entry.title );
		console.log("Author: " + entry.author);
		console.log("Content: " + entry.content);

		for (var i = 0; i < entry.tags.length; i++){
			console.log("Tags: " );
			console.log("#" + entry.tags[i]);
		}
		
		console.log("________________________________");
	}

	this.displayEntries = function showAllEntries (entryArray){
		for (var i = 0; i < entryArray.length; i++){
			this.displayEntry (entryArray[i]);
			console.log();
		}
	}

	this.displayAllEntries = function showAllEntries (){
		
		this.displayEntries(this.entries); 
		// this function will call the display entries and get the info needed from there. 
		// the code here iand up in display entries is the same.
		/* for (var i = 0; i < this.entries.length; i++){
		 	this.displayEntry (this.entries[i]);
			console.log();  
		} */
	}

	this.findAllEntriesWithTag = function searchForTag(tag){
		var foundEntries = [];
		for (var i = 0; i < this.entries.length; i++){
			var currentEntry = this.entries[i];
			if (currentEntry.hasTag(tag)){
				foundEntries.push(currentEntry);
				//console.log("Entry #" + i + " has the tag.");	
			}
		}
		return foundEntries;
	}

	this.findWord = function (word){
		var foundWords = [];
		for (var i = 0; i < this.entries.length; i++){
			var entryWithWord = this.entries[i];
			if(entryWithWord(word)){
				foundWords.push(entryWithWord);
			}
		}
		return foundWords;
	}

	this.removeEntryByNumber = function(entryNumber){
		var entryNumber = this.entries[entryNumber]; 
		delete entryNumber;
	}
	//this.json = JSON.stringify(this.entries);	

}
//testing code
var myJournal = new Journal();
//console.log(myJournal);

myJournal.addEntry("All About Pets", "Description about taking care of pets", "Tory Gaile", ["cute", "descriptive"]);
myJournal.addEntry("More About Pets", "Pet grooming info", "Tory Gaile", ["petite", "cute"]);

console.log(myJournal);

//delete pets.entries[0].tags;

//myJournal.displayAllEntries();
//var foundEntries = myJournal.findAllEntriesWithTag("cute");
//myJournal.displayAllEntries(foundEntries);
