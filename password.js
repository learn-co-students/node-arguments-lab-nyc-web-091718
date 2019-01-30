// code solution here
process.argv.shift()
process.argv.shift()
process.argv.map(num=>parseInt(num))
for (let i = 0; i < process.argv[1]; i++) {
  console.log(generatePassword(process.argv[0]))
}
process.exit(0)
function generatePassword(lengthOfPassword){
  let password  = "";
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < lengthOfPassword; i++){
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return password
}
