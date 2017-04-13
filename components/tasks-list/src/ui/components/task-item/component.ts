import Component, { tracked } from '@glimmer/component';

export default class TaskItem extends Component {
  @tracked isExpanded = false;
  @tracked fullName = '';
  @tracked contact = '';
  @tracked worktime = '';

  updateFullName(e) {
    this.fullName = e.target.value;
  }

  updateContact(e) {
    this.contact = e.target.value;
  }

  updateWorktime(e) {
    this.worktime = e.target.value;
  }

  showForm(item) {
    this.isExpanded = !this.isExpanded;
  }

  sendRequest() {
    return;
  }
};
