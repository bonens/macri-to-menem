//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMauricio Macri\b/g, "Carlos Saúl Ménem, alias, el ñágaras");
	v = v.replace(/\bmauricio macri\b/g, "Carlos Saúl Ménem, alias, el ñágaras");
	v = v.replace(/\bMacri\b/g, "Carlos Saúl Ménem, alias, el ñágaras");
	v = v.replace(/\bmacri\b/g, "Carlos Saúl Ménem, alias, el ñágaras");
	v = v.replace(/\bEl Gobierno\b/g, "Carlos Saúl Ménem, alias, el ñágaras");
	v = v.replace(/\bel Gobierno\b/g, "Carlos Saúl Ménem, alias, el ñágaras");
	
	textNode.nodeValue = v;
}