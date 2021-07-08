function palindrome(str) {
  var re = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

console.log("Radar                  # ", palindrome("Radar"));
console.log("Malam                  # ", palindrome("Malam"));
console.log("Kasur ini rusak        # ", palindrome("Kasur ini rusak"));
console.log("Ibu Ratna antar ubi    # ", palindrome("Ibu Ratna antar ubi"));
console.log("Malas                  # ", palindrome("Malas"));
console.log("Makan nasi goreng      # ", palindrome("Makan nasi goreng"));
console.log("Balonku ada lima       # ", palindrome("Balonku ada lima"));
