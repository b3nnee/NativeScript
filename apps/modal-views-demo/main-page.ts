import observable = require("data/observable");
import pages = require("ui/page");
import labelModule = require("ui/label");

var page: pages.Page;
var label: labelModule.Label;

export function pageLoaded(args: observable.EventData) {
    page = <pages.Page>args.object;
    label = page.getViewById<labelModule.Label>("label");
}

export function onTap(args: observable.EventData) {
    page.showModal("./modal-views-demo/login-page", "some custom context", function(username: string, password: string) {
        console.log(username + "/" + password);
        label.text = username + "/" + password;
    });
}