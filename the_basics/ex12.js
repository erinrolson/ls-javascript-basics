//What does the following expression evaluate to?
'12' < '9'; // === true
/* The expression returns true. Strings use lexicographic ordering.
Lexicographic ordering is:
  1) Dictionary order except ALL Uppercase letters preceed lowercase letters.
  *is compared character by character, the first occurance of two characters
  not matching determines what the expression evaluates to.
  *if all characters in a string match, then the shorter string is 'less than'
  the larger string.
  */