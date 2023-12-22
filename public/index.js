$(document).ready(()=>{

    //call to /journal to check if getting data on console
    $.get('/journal', (data)=>{
        console.log(data);
        //for the entries form drop down list
        titleOptions(data)
        
    })
    //event listenr to change based on of the value (aka option) changes
    $('#selectTitle').change(() => {
        const selectedTitle = $('#selectTitle').val();
        if (selectedTitle) {
            //encode the selected title to successfully request data
            const encodeSelectedTitle = encodeURIComponent(selectedTitle);
            selectedTitleData(encodeSelectedTitle);
        }
    });


})

//function to display title of entries on the entries form
const titleOptions = (titles)=>{
    const selectTitle = $('#selectTitle');
    selectTitle.empty();

    //for each title, create an option
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
        displayEntryData(data)
    });
};

//function to display data of selected title on the page
//need to encode title that was selected
const displayEntryData = (entryData)=>{
    let entryDataContainer = $('#entryDataContainer');
    
    entryDataContainer.empty();

    let entryContainer = $('<div>').addClass('entryContainerClass');

    let titleDiv = $('<div>').text(`Title: ${entryData.title}`);
    let affirmationDiv = $('<div>').text(`affirmation: ${entryData.affirmation}`);
    let gratefulForDiv = $('<div>').text(`grateful for: ${entryData.grateful_for}`);
    let goodThingsDiv = $('<div>').text(`good things: ${entryData.good_thing}`);
    let positiveThoughtsDiv = $('<div>').text(`positive thoughts: ${entryData.positive_thought}`);

    entryContainer.append(titleDiv, affirmationDiv, gratefulForDiv, goodThingsDiv, positiveThoughtsDiv);
    entryDataContainer.append(entryContainer);

}