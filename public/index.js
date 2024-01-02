$(document).ready(()=>{
    //hide the rest of the code for now until button clicked to open journal
    $('#entries').hide();
    $('#entryDataContainer').hide();
    $('#newEntryContainer').hide();

    //event listener for button being clicked to open journal
    $('#openJournalButton').click(()=>{
        $('#OpenJournalCover').hide();
        $('#openJournalButton').hide();
        $('footer').hide();
        $('#entries').show();
        $('#entryDataContainer').show();
        $('#newEntryContainer').show();
        
    })

    //call to /journal to check if getting data on console
    $.get('/journal', (data)=>{
        console.log(data);
        //for the entries form drop down list
        titleOptions(data)
        
    })


    //event listener to change based on of the value (aka option) changes
    
    $('#selectTitle').change(() => {
        const selectedTitle = $('#selectTitle').val();
        if (selectedTitle) {
            //encode the selected title to successfully request data
            const encodeSelectedTitle = encodeURIComponent(selectedTitle);
            selectedTitleData(encodeSelectedTitle);
        }
    });



    //event listener to submit new entry to the journal.

    //POST request to add an entry to the journal.


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

    let titleDiv = $('<div>').text(`Title: ${entryData.title}`).attr('id', 'titleID');
    let affirmationDiv = $('<div>').text(`Affirmation for today: ${entryData.affirmation}`).attr('id', 'affirmationID');
    let gratefulForDiv = $('<div>').text(`What I am grateful for: ${entryData.grateful_for}`).attr('id', 'gratefulForID');
    let goodThingsDiv = $('<div>').text(`Good things that happened today: ${entryData.good_thing}`).attr('id', 'goodThingsID');
    let positiveThoughtsDiv = $('<div>').text(`Positive thoughts to carry out: ${entryData.positive_thought}`).attr('id', 'positiveThoughtsID');

    entryContainer.append(titleDiv, affirmationDiv, gratefulForDiv, goodThingsDiv, positiveThoughtsDiv);
    entryDataContainer.append(entryContainer);

}