const keys = {'б': 'щ', 'в': 'ш', 'г': 'ч', 'д': 'ц', 'ж': 'х', 'з': 'ф', 'к': 'т', 'л': 'с', 'м': 'р', 'н': 'п'}
const keys_invert = {'щ': 'б', 'ш': 'в', 'ч': 'г', 'ц': 'д', 'х': 'ж', 'ф': 'з', 'т': 'к', 'с': 'л', 'р': 'м', 'п': 'н'}
const crypt = (message = "") => {
  symblist = message.split("");
  for (var i = 0; i < symblist.length; i++) {
   if (keys[symblist[i]]) {
     console.log(symblist[i], " to ", keys[symblist[i]])
    symblist[i] = keys[symblist[i]]
   } else if (keys_invert[symblist[i]]) {
    console.log(symblist[i], " to ", keys_invert[symblist[i]])
   symblist[i] = keys_invert[symblist[i]]
    }
  }
  return symblist.join("");
};

module.exports = { crypt }