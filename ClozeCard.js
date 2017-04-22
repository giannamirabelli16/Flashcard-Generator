//Creates a clozeCard constructor
function ClozeCard (text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "...");

	if (!this.fullText.includes(this.cloze)) {
		console.error("Error: " + this.cloze + " does not appear in " + this.fullText);
	}
}

module.exports = ClozeCard;

