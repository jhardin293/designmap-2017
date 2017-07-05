/*
 * Hanging Punctuation
 * This function takes a DOM element,
 * searches each of its direct descendants,
 * and, if the element begins with hangable punctuation,
 * the appropriate HTML class is applied to the element.
 *
 * Then the parent DOM element get's a class to activate
 * the child classes we applied. 
 * https://webdesign.tutsplus.com/articles/getting-the-hang-of-hanging-punctuation--cms-19890
 */
function hangPunctuation(container) {
 
    // Punctuation marks that qualify to be hung
    var marks = [
        '\u201c',     // “ - ldquo - left smart double quote
        '\u201d',     // ” - rdquo - right smart double quote
        '\u2018',      // ‘ - lsquo - left smart single quote
        '\u0022',     // " - ldquo - left dumb double quote
        '\u0027',      // ' - lsquo - left dumb single quote
        '\u00AB',      // « - laquo - left double angle quote
        '\u2039',     // ‹ - lsaquo - left single angle quote
        '\u201E',     // „ - bdquo - left smart double low quote
        '\u201A'    // ‚ - sbquo - left smart single low quote
    ];
         
    // Loop over all direct descendants of the container
    // If it's a blockquote, loop over its direct descendants
    for(i=0; i<container.length; i++) {
 
        var el = container[i];
 
        if (el.tagName === 'BLOCKQUOTE') {
            for (var k = 0; k < el.length; k++) {
                hangIfEligible(el[k]);
            };
        }
        else {
            hangIfEligible(el);
        }
    }
 
    // Check to see if the passed-in element 
    // begins or ends with one of the qualifying punctuation types
    // If it does, apply the appropriate class depending on the tag type
    function hangIfEligible(el) {
        var text = el.innerText || el.textContent;
        
        for(var i = 0; i < marks.length; i++) {
          
            // check if first char matches a hanging mark
            if ( text.indexOf(marks[i]) === 0 ) {
                el.innerHTML = '<span class="hanging-start">'+marks[i]+'</span>'+el.innerHTML.substr(1);
            }
          
            // check if last char matches a hanging mark
            if (text.substr(text.length-1).indexOf(marks[i]) === 0) {
                el.innerHTML = 
                  el.innerHTML.substr(0, el.innerHTML.length-1);
                el.innerHTML += '<span class="hanging-end">'+marks[i]+'</span>';
            }
        }
    }
}
 