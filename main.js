// Author: Lewis

var eventList = [];
var peopleList = [];
var inviteList = [];

var eventbrite = {
  createEvent: function(eventName, eventDate, eventAttendees){
    var newEvent = {
      name : eventName,
      date : eventDate,
      attendees : eventAttendees
    }
    eventList.push(newEvent);
  },
  showEvent: function(){
    if (eventList.length>0){
      console.log("Event List:");
      for(var i = 0; i < eventList.length; i++){
        console.log(eventList[i].name + " | " + eventList[i].date + " | " + eventList[i].attendees);
      }
    } else {
      console.log("There is no event.");
    }
  },
  createPerson: function(firstName, lastName){
    var newPerson = {
      firstName : firstName,
      lastName: lastName
    };
    peopleList.push(newPerson);
  },
  showPerson: function(){
    if (peopleList.length>0){
      console.log("Person List: ");
      for(var i = 0; i < peopleList.length; i++){
        console.log(peopleList[i].firstName + " " + peopleList[i].lastName);
      }
    } else {
      console.log("There is no person inserted.");
    }
  },
  sendInvite: function(firstName, lastName, eventName){
    var personListIndex,
        eventListIndex;
    
    // Find person
    if (peopleList.length>0){
      for(var i=0; i < peopleList.length; i++){
        if (peopleList[i].firstName == firstName && peopleList[i].lastName == lastName ){
          peopleListIndex = i;
          break;
        }
        if(i==peopleList.length-1 && peopleList[i].firstName != firstName && peopleList[i].lastName != lastName) {
          console.log("Fail: Can't find this person");
          return;
        } 
      }
    } else {
      console.log("Fail: Please insert person before invite.");
      return;
    }
    
    // Find event
    if (eventList.length>0){
      for(var i=0; i < eventList.length; i++){
        if (eventList[i].name == eventName){
          eventListIndex = i;
          break;
        }
        if(i==eventList.length-1 && eventList[i].name != eventName) {
          console.log("Fail: Can't find this event");
          return;
        } 
      }
    } else {
      console.log("Fail: Please insert event before invite.");
      return;
    }
    
    var invitation = {
      first: peopleList[peopleListIndex].firstName,
      last: peopleList[peopleListIndex].lastName,
      event: eventList[eventListIndex].name,
    }
    // Success
    inviteList.push(invitation);
    console.log("Success: Invitation Send");
  },
  showInvite: function(){
    if (inviteList.length>0){
      console.log("Sent Invitation List: ");
      for(var i = 0; i < inviteList.length; i++){
        console.log(inviteList[i].first + " " + inviteList[i].last + " " + inviteList[i].event);
      }
    } else {
      console.log("Invitation not found.");
    }
  }
};

// Static Test
// Events
eventbrite.createEvent("event1","Dec 1th", "Paul");
eventbrite.createEvent("event2","Jan 21th", "Tom");
eventbrite.createEvent("event3","Feb 13th", "Leo");
eventbrite.showEvent();

// Person
eventbrite.createPerson("John", "Doe");
eventbrite.createPerson("Jan", "Patrick");
eventbrite.createPerson("Nicole", "Rivera");
eventbrite.showPerson();

// Invite
var inputs = [
  // Expected: Return Success
  {
    firstName : "John",
    lastName: "Doe",
    inviteTo: "event3"
  },
  // Expected: Return False (No such event)
  {
    firstName : "Jan",
    lastName: "Patrick",
    inviteTo: "event999"
  },
  // Expected: Return False (No such person)
  {
    firstName : "Allen",
    lastName: "Carson",
    inviteTo: "event1"
  }
];

eventbrite.sendInvite(inputs[0].firstName, inputs[0].lastName, inputs[0].inviteTo);
eventbrite.sendInvite(inputs[1].firstName, inputs[1].lastName, inputs[1].inviteTo);
eventbrite.sendInvite(inputs[2].firstName, inputs[2].lastName, inputs[2].inviteTo);
eventbrite.showInvite();