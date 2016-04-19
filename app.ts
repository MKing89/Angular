 import { bootstrap } from "angular2/platform/browser";
 import { Component } from "angular2/core";
 import { NgFor } from "angular2/common";

@Component({
    selector: "reddit",
    template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>

        <div class="field">
            <label for="title">Title</label>
            <input name="title">
        </div>
        <div class="field">
            <label for="link">Link:</label>
            <input name="link">
        </div>
    </form>
    `
})

class RedditApp {
    constructor() {
    }
}

bootstrap(RedditApp);