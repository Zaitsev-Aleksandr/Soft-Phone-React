export default function searchPhoneBook(arr, regEx, inputValue,) {
   return  arr.filter((elem) => (JSON.stringify(elem).toLowerCase().replace(regEx, "").includes(inputValue.toLowerCase().replace(regEx, ""))))
}
