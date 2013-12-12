/**
 * Created by zcl on 13-12-11.
 */
    // Defines a JSON array.
App = Ember.Application.create();
App.Router.map(function () {
    this.route("home", {path: "/"});
    this.route("employee", {path: "/employee/:employee_id"});
});

App.HomeRoute = Ember.Route.extend({
    model: function () {
        return ['Jackson Huang', 'Ada Li', 'JK Rush'];
    },
    setupController: function (controller, model) {
        controller.set('content', model)
    }
});
App.Store = DS.Store.extend({

    adapter: 'DS.FixtureAdapter'
});

App.Employee = DS.Model.extend({
    name: DS.attr('string'),
    department: DS.attr('string'),
    title: DS.attr('string')
})
App.Employee.FIXTURES = [
    {
        id: 1,
        name: 'Jackson Huang',
        department: 'IT',
        title: 'programmer'
    },
    {
        id: 2,
        name: 'Ada Chen',
        department: 'purchasing',
        title: 'buyer'
    },
    {
        id: 3,
        name: 'JK Rush',
        department: 'IT',
        title: 'programmer'
    },
    {
        id: 4,
        name: 'Lucy Liu',
        department: 'IT',
        title: 'tester'
    },
    {
        id: 5,
        name: 'Julia Liu',
        department: 'HR',
        title: 'Manager'
    }
];
