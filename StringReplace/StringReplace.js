function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function stringReplace(str, find, r){
	return str.replace(new RegExp(escapeRegExp(find), 'g'), r);
}

module.exports = stringReplace;