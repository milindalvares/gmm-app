import Component, { tracked } from "@glimmer/component";

export default class TaskList extends Component {
  @tracked newTitle = '';
  @tracked newDescription = '';
  @tracked newNote = '';

  @tracked items = [
    {
      title: "Event Coordinator - School Teaching Program",
      description: "Schools will be approached and knowledge imparted. Need a brave young soul to coordinate the events",
      additional: "1-2 hrs per week. 1-2 months minimum commitment",
    },
    {
      title: "Facebook Group Moderator",
      description: "Schools will be approached Need a brave young soul to coordinate the events and knowledge imparted. Need a brave young soul to coordinate the events. Schools will be approached and knowledge imparted. Need a brave young soul to coordinate.",
      additional: "1-2 hrs per week. 1-2 months minimum commitment. ",
    },
    {
      title: "Social Media Content Generator",
      description: "Schools will be approached and knowledge imparted. Need a brave young soul to coordinate the events",
      additional: "1-2 hrs per week. 1-2 months minimum commitment",
    },
    {
      title: "Web Developer with basic knowledge of HTML/CSS",
      description: "Schools will be approached and knowledge imparted. Need a brave young soul to coordinate the events",
      additional: "1-2 hrs per week. 1-2 months minimum commitment",
    }
  ];

  updateNewTitle(e) {
    this.newTitle = e.target.value;
  }

  updateNewDescription(e) {
    this.newDescription = e.target.value;
  }

  updateNewNote(e) {
    this.newNote = e.target.value;
  }

  deleteItem(removedItem) {
    let items = this.items.filter(item => {
      return item.title !== removedItem.title;
    })

    this.items = items;
  }

  addTask() {
    if (!this.newTitle || !this.newDescription) return false;

    let items = [
      ...this.items,
      {
        title: this.newTitle,
        description: this.newDescription,
        additional: this.newNote,
      },
    ];

    this.items = items;
    this.newTitle = '';
    this.newDescription = '';
    this.newNote = '';
  }
}
