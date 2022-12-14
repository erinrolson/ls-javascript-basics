/*
Similar to the previous exercise, now write a function that 
extracts the region code from a locale.
*/
function extractLanguage(string) {
  console.log(string.split('_')[1]
                    .slice( 0, 2));
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'