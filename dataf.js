let superheroes=[
    {
        id:1,
        name:"Superman",
        age:42,
        planet:"Krypton",
        group:"Justice League"
    },
    {
        id:2,
        name:"Thor",
        age:1500,
        planet:"Asgard",
        group:"Avengers"

    },
    {
        id:3,
        name:"Iron Man",
        age:45,
        planet:"Earth",
        group:"Avengers"
    
    },
    {
        id:4,
        name:"StarLord",
        age:36,
        planet:"Earth",
        group:"Guardians of galaxy"
    
    },
    {
        id:5,
        name:"Spiderman",
        age:30,
        planet:"Earth",
        group:"Avengers"
    },
    {
        id:6,
        name:"Black Panther",
        age:45,
        planet:"Earth",
        group:"Avengers"
    },
    {
        id:7,
        name:"Hulk",
        age:49,
        planet:"Earth",
        group:"Avengers"
    },
    {
        id:8,
        name:"Black Widow",
        age:30,
        planet:"Earth",
        group:"Avengers"
    },
    {
        id:9,
        name:"Doctor Strange",
        age:50,
        planet:"Earth",
        group:"Avengers"
    },
    {
        id:10,
        name:"Batman",
        age:30,
        planet:"Earth",
        group:"Justice League"
    },
    {
        id:11,
        name:"Krish",
        age:40,
        planet:"Earth",
        group:"Indian Superhero"
    }


]  
function createRows(supes) 
{
    document.getElementById("data").innerHTML="";
    supes.forEach(function(ele,index){
        // console.log(ele)
        // let tr=document.createElement("tr")
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.append(ele.id);
        tr.append(td1);
    
        let td2=document.createElement("td");
        td2.append(ele.name);
        tr.append(td2);
    
        let td3=document.createElement("td");
        td3.append(ele.age);
        tr.append(td3);
    
        let td4=document.createElement("td");
        td4.append(ele.planet);
        tr.append(td4);
    
        let td5=document.createElement("td");
        td5.append(ele.group);
        tr.append(td5);
        document.getElementById("data").append(tr);
        // console.log(tr);
    })
}
createRows(superheroes);

function searchName(sname)
{
    // console.log(sname);
    let filteredArray=superheroes.filter(function(superhero,index){
        return superhero.name.toUpperCase().includes(sname.toUpperCase());
    })
    // console.log(filteredArray);
    createRows(filteredArray);
}


// console.log(tr)











// console.log(superheroes);
