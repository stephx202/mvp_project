$(document).ready(()=>{

    //call to /journal to check if getting data on console
    $.get('/journal', (data)=>{
        console.log(data);
        titleOptions(data)
    })


})

//function to display title of entries on the entries form
const titleOptions = (titles)=>{
    const selectTitle = $('#selectTitle');
    selectTitle.empty();

    //for each title, will be an option on entries form
    titles.forEach((entry)=>{
        selectTitle.append($('<option>',{
            value: entry.title,
            text: entry.title
        }))
    })
}



//function with call based on current selected Title and respond with data on that row
const selectedTitleData = (selectedTitle)=>{
    $.get(`/journal/${selectedTitle}`, (data)=>{
        console.log(data);
    });
};

//function to display data of selected title on the page
const displayTitleData = (titleData)=>{
}
//need to encode title that was selected