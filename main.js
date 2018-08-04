var tasker = document.getElementById("task");

var elementList = document.getElementById("list");

var windows = document.getElementsByClassName("window");

tasker.addEventListener("keypress", save);

var sumeArray = [];

var doneArray = [];

var todoArray = [];



//localStorage.setItem();


var Obj = function (name, classes, identity) {
    this.name = name;
    this.classes = classes;
    this.identity = identity;
}

function newDiv(array) {


    for (var i = 0; i < array.length; i++) {



        item = document.createElement("div");

        list.appendChild(item);

        item.classList.add("item");
        item.classList.add(array[i].classes);
        item.style.display = "flex";
        item.style.alignItems = "center";



        item.innerHTML = "<input type='text' id='" + i + "' class='save'  value='" + array[i].name + "' readonly='readonly'>";


        console.log(this.Obj);
        


        close = document.createElement("div");

        item.appendChild(close);

        close.classList.add("fas");

        close.classList.add("fa-times");

        close.style.fontSize = "32px";
        close.style.height = "100%";
        close.style.padding = "0 10px";
        
        close.style.display = "flex";
        close.style.alignItems = "center";



        item.addEventListener("dblclick", beDone);


        close.addEventListener("click", beClose);







    }

    console.log(array);

}

for (var t = 0; t < windows.length; t++) {

    windows[t].addEventListener("click", change);

}




function change() {

    console.log(this);

    if (this.id == "done") {

        doneArray = [];



        for (var s = 0; s < sumeArray.length; s++) {

            if (sumeArray[s].classes == "done") {

                doneArray.push(sumeArray[s]);

            }

        }


        elementList.innerHTML = "";
        
        console.log(doneArray);

        newDiv(doneArray);

    }


    if (this.id == "all") {

        elementList.innerHTML = "";

        newDiv(sumeArray);

    }

    if (this.id == "todo") {

        todoArray = [];

        elementList.innerHTML = "";

        for (var g = 0; g < sumeArray.length; g++) {

            if (sumeArray[g].classes != "done") {

                todoArray.push(sumeArray[g]);

            }

        }


        newDiv(todoArray);

    }

    for (var s = 0; s < windows.length; s++) {

        windows[s].classList.remove("active");

    }

    this.classList.add("active");

}


function beClose() {

    var taskValue = this.parentNode.firstChild.id;

    var index = sumeArray.findIndex(x => x.identity == taskValue);

    sumeArray.splice(index, 1);

    console.log(sumeArray);

    elementList.innerHTML = "";

    newDiv(sumeArray);

}



function save(e) {

    if (e.key == "Enter") {

        if (tasker.value == "") return false;

        var one = new Obj(tasker.value);

        sumeArray.push(one);

        elementList.innerHTML = "";

        newDiv(sumeArray);

        tasker.value = "";


        for (var s = 0; s < sumeArray.length; s++) {

            sumeArray[s].identity = s;


            if (sumeArray[s].classes == "done") {

                var taskItem = document.getElementsByClassName("item");

                this.classList.toggle("green");

                console.log(taskItem[s]);

            }

        }



    }

}



function beDone() {

    var taskValue = this.firstChild.id;

    var index = sumeArray.findIndex(x => x.identity == taskValue);

    if (sumeArray[index].classes != "done") {

        sumeArray[index].classes = "done";

    } else {

        sumeArray[index].classes = undefined;

    }
    
    console.log(this);
    
    
    elementList.innerHTML = "";
    
    newDiv(sumeArray);


}






