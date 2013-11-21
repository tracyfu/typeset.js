(function() {
  var root = this,
      _ = function() {

      };

  root.typeset = _;

  // Node.js Module
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = _;
  }

  // Numbers
  function isInt(number) {
    return (number % 1 === 0) && !isNaN(parseInt(number)) && isFinite(number);
  }

  // - Convert numbers to floats (8000 -> 80.00)
  // - Comma-separate numbers (8000 -> 8,000)
  // - Convert numbers to words (8000 -> eight thousand, $8000 -> eight thousand dollars, 1/8 -> one-eighth) [<10?]
  // - Convert words to numbers (eight thousand -> 8000)

  // Ordinal Indicators
  _.indicators = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

  // Returns an ordinal numeral
  _.ordinal = function(number) {
    if (!isInt(number)) {
      throw new TypeError('Invalid integer');
    }
    else {
      var i = Math.abs(number % 10),
          nth = (Math.floor(Math.abs(number % 100 / 10)) === 1) ? 'th' : _.indicators[i];

      return number + nth;
    }
  };

  // Convert numbers to ordinal numbers

  // Getters/Setters
  // - Char/Word at
  // - First/Last chars/words

  // Manipulation
  // - Truncate
  // - Summarize (truncate to n sentences, show more...)
  // - Wordwrap (on word parts, with dashes)
  // - Wrap URLs (prettify)
  // - Reverse string
  // - String replacement

  // Manipulation / Whitespace
  // - Left trim
  // - Right trim
  // - Trim
  // - Manipulation (convert spaces, newlines -> breaks)
  // - Normalization (Rails squish)
  // – Preserve whitespace (like a pre)

  // Manipulation / Special
  // - Convert URLs to links
  // - HTML entity replacement ('--' -> em-dash, smart-quotes)
  // - HTML de/encoding un/escaping
  // - Convert dashes to underscores
  // - Convert underscores to dashes
  // - Convert to human readable ('blog_post' -> 'Blog Post')
  // - Wrap blockquotes
  // - Wrap quotes
  // - Sentence per line

  // Parsing
  // - Pluralize
  // - Singularize
  // - Lower case
  // - Upper case
  // - Sentence case
  // - Title case
  // - Camel case
  // - Default text (if string passed is blank, return default)

  // Querying
  // - contains?, blank?, include?, exclude?
  // - Quote matching

  // Utility
  // Character count (punctuation?, whitespace?, numbers?)
  // Word count (exclude numbers, punctuation)

  // Validation
  // - URLs
  // – Passwords
  // - Phone numbers

  // Extra
  // - XSS sanitization
  // - Normalize scientific units (converting units)
  // - Highlighting
  // - Tooltips
  // - Acronym clean-up
  // - Footnotes
  // - Drop caps/Indentation
  // - Spell-Checking/Grammar-Checking
  // - Snoopify

  // Other
  // - Preserve original (pre-formatting)
}).call(this);
