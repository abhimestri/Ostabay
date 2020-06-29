let count = 0,outPut,UniqueId;
let parent = document.querySelector(".ListElements");
document.querySelector(".AddItemsButton").addEventListener('click',function(){
    let DrawerToggle = document.querySelector(".SideDrawerForAddNew");
    DrawerToggle.style.marginLeft = "0vh";
    document.body.style.backgroundColor = "#2E4053"
    document.querySelector(".MainSectionDiv").style.opacity = "0.3"
})

document.querySelector(".CancleBtn1").addEventListener('click' , function(){
    let CloseToggle = document.querySelector('.SideDrawerForAddNew');
    CloseToggle.style.marginLeft = "102vh"
    document.body.style.backgroundColor = ""
    document.querySelector(".MainSectionDiv").style.opacity = "1"
})

document.querySelector(".Hamburger").addEventListener('click',function() {
    let AsideSectionDisplay = document.querySelector(".AsideSectionForHamburger");
    if(AsideSectionDisplay.style.left == "0%"){
        AsideSectionDisplay.style.left = "-67%"
    }else{
    AsideSectionDisplay.style.left = "0%"
    }
});


document.querySelector(".Addbtn").addEventListener('click',function(){
    let Country = document.querySelector(".InputElementCountry").value;
    let Category = document.querySelector(".InputElementCategory").value;
    let SubCategory = document.querySelector(".InputElementSubCategory").value;
    let LooseStuffing = document.querySelector("#InputLooseStuffingOption")
    let WoodenCrating = document.querySelector("#InputWoodenCratingOption")
    UniqueId = Math.random()
    const Data = {
        country : Country,
        category : Category,
        subcategory : SubCategory,
        uniqueid : UniqueId,
        Id: count++,
        packagingOption1 : LooseStuffing.value,
        packagingOption2 : WoodenCrating.value
    }
    // console.log(Data)
    if(Data.subcategory == ""){
        subData = ""
    }else{
        subData = " > " + Data.subcategory
    }
    outPut = `<div id=${Data.Id} class="EachListOfOrders">
                            <img class="CountryFlagInList" src="../Assets/${Data.country}.jpg">
                            <p class="CountryEach">${Data.country}</p>
                            <p  class="ContinentEach">Asia</p>
                            <p id="CategoryAdding${Data.Id}" class="CategoryEach">${Data.category}${subData}</p>
                            <div class="EachLinePackaging">
                                <p id="PackagingOption1${Data.Id}">${ (LooseStuffing.checked) ? Data.packagingOption1 : ""}</p>
                                <p id="PackagingOption2${Data.Id}">${(WoodenCrating.checked) ? Data.packagingOption2 : ""}</p>
                            </div>
                        </div>
                        <div class="DirectDeleteToggleSection">
                            <p class="DirectDeletePackage" id=${Data.uniqueid.toString()} onClick="DirectDeleteList(${Data.Id})" >delete package</p>
                            <ion-icon class="DirectDelete" onClick="DirectDelete(${Data.uniqueid.toString()})" name="ellipsis-vertical-outline"></ion-icon>
                        </div>
   `
    let li = document.createElement('li')
    li.className = "ListOfCountry"
    li.innerHTML  =  outPut;
    console.log(li)
    li.firstChild.setAttribute("onClick", `SideDrawerToEdit(${Data.Id.toString()})`)
    parent.appendChild(li);
    let DrawerToggle = document.querySelector(".SideDrawerForAddNew");
    DrawerToggle.style.marginLeft = "102vh";
    document.body.style.backgroundColor = ""
    document.querySelector(".MainSectionDiv").style.opacity = "1"
})

function SideDrawerToEdit(Id){
    let DrawerForEdit = document.querySelector('.SideDrawerForEdit');
    DrawerForEdit.style.marginLeft = "0vh"
    document.body.style.backgroundColor = "#2E4053"
    document.querySelector(".MainSectionDiv").style.opacity = "0.3"
    let id = `${Id}`
    let CountryName =  document.getElementById(id).parentElement.firstChild.childNodes[3].innerHTML;
    let SideDrawerContentAppend = `<div>
            <p class="EditPackageText">Edit Packaging</p>
            <p id="InputElementForEditCountry${id}" class="EditPackageCountry">
            <img class="CountryLogo" src="../Assets/${Data.country}.jpg"/>${CountryName}</p>
            <p class="InputLabel" for="Category">Category</p>
                <select id="InputElementForEditCategory" class="InputElementCategory">
                    <option value="Natural Stones">Natural Stones</option>
                    <option value="Artificial Stones">Artificial Stones</option>
                </select>

            <p class="InputLabel" for="Sub-Category">Sub-Category</p>
                <select id="InputElementForEditSubCategory" class="InputElementCategory">
                    <option value="Granite">Granite</option>
                    <option value="Ceramic">Ceramic</option>
                    <option value="Stone">Stone</option>
                </select>

            <p class="PackagingOption">Packaging Options</p>
            <div class="RadioBtnForPackageOption">
                    <input id="InputElementForEditLooseStuffing" class="InputRadioCheck" type="checkbox" name="Loose Stuffing" value="Loose Stuffing">
                    <p class="LabelForInputRadioCheck" for="Loose Stuffing">Loose Stuffing</p><br>
                    <input id="InputElementForEditWoodenCrating" class="InputRadioCheck" type="checkbox" name="Wooden Crating" value="Wooden Crating">
                    <p class="LabelForInputRadioCheck" for="Wooden Crating">Wooden Crating</p><br>
            </div>
            <div class="LowerButtonHandlingSectionEditSidedrawer">
                    <p class="CancleBtn2" onclick="closeSideEditDrawer()" >cancel</p>
                    <ion-icon onClick="DeleteFromEditOption(${id})" class="deleteIcon" name="trash-outline"></ion-icon>
                    <button class="Savebtn" onClick="SaveBTN(${id})">Save</button>
            </div>
        </div>
    `
    document.querySelector(".SideDrawerForEdit").innerHTML = SideDrawerContentAppend;
}
function SaveBTN(Id){
    let EditedCategory = document.getElementById("InputElementForEditCategory").value;
    let EditedSubCategory  = document.getElementById("InputElementForEditSubCategory").value;
    let EditedPackagingOption1 = document.getElementById("InputElementForEditLooseStuffing");
    let EditedPackagingOption2 = document.getElementById("InputElementForEditWoodenCrating");

    if(EditedPackagingOption1.checked){
        document.getElementById("PackagingOption1"+Id).textContent = EditedPackagingOption1.value
    }else{
        document.getElementById("PackagingOption1"+Id).textContent = ""
    }
    if(EditedPackagingOption2.checked){
        document.getElementById("PackagingOption2"+Id).textContent = EditedPackagingOption2.value
    }else{
        document.getElementById("PackagingOption2"+Id).textContent = ""
    }
    document.getElementById("CategoryAdding"+Id).textContent = EditedCategory + " > " + EditedSubCategory
    let DrawerForEdit = document.querySelector('.SideDrawerForEdit');
    DrawerForEdit.style.marginLeft = "102vh"
    document.body.style.backgroundColor = ""
    document.querySelector(".MainSectionDiv").style.opacity = "1"
}


function closeSideEditDrawer(){
    let CloseEditDrawer = document.querySelector('.SideDrawerForEdit');
    CloseEditDrawer.style.marginLeft = "102vh"
    document.body.style.backgroundColor = ""
    document.querySelector(".MainSectionDiv").style.opacity = "1"
}

function DirectDelete(Id){
    let displayToggle = document.getElementById(Id.toString());
    if(displayToggle.style.display == "none"){
        displayToggle.style.display = "block"
    }else{
        displayToggle.style.display = "none" 
    }
}
function DeleteFromEditOption(Id){
    let ListElement = document.getElementById(Id).parentElement;
    ListElement.textContent = ""
    let DrawerForEdit = document.querySelector('.SideDrawerForEdit');
    DrawerForEdit.style.marginLeft = "102vh"
    document.body.style.backgroundColor = ""
    document.querySelector(".MainSectionDiv").style.opacity = "1"
}
function DirectDeleteList(Id){
    let ListElement = document.getElementById(Id).parentElement;
    ListElement.textContent = ""
}


