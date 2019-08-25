/**
 * Array.flatten()
 *
 * flatten method of JavaScript Array object
 * e.g. [[1,2,[3]],4].flatten() -> [1,2,3,4]
 *
 * @access     public
 *
 * @return {Array} Return flatten array.
 */
Array.prototype.flatten = function() {
	let result = [];
  
	for (let i=0; i<this.length; i++) {
		if (Array.isArray(this[i])) {
			result = [ ...result, ...this[i].flatten() ];
		} else {
			result = [ ...result, this[i] ];
		}
	}

	return result;
}

exports.default = Array;
