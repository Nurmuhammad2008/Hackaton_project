/* js for block_job */
const search = () =>  {

const searchBox  = document.getElementById("search_item").value.toUpperCase()
const storeItems = document.getElementById("list_job");
const jobs = document.querySelectorAll("type_job")
const pname = storeItems.getElementsByTagName("p")




for(var i = 0; i < pname.length ; i++)  {
    let match = jobs[i].getElementsByTagName("p")[0]


const search = getElementById("search_ite")
if(match) {
    let textvalue = match.textContent || match.innerHTML

if (textvalue = match.toUpperCase().indexOF(searchBox)  -1) {
     jobe[i].style.display = "block"
}else {
    jobe[i].style.display = none
      }
   }

   }


}