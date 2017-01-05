/*
 * Copyright (c) 2017. tom@axisj.com
 * - github.com/thomasjang
 * - www.axisj.com
 */

describe('ax5select TEST', function () {
    var myUI;
    var options = [];
    options.push({value: "1", text: "string"});
    options.push({value: "2", text: "number"});
    options.push({value: "3", text: "substr"});
    options.push({value: "4", text: "substring"});
    options.push({value: "search", text: "search"});
    options.push({value: "parseInt", text: "parseInt"});
    options.push({value: "toFixed", text: "toFixed"});
    options.push({value: "min", text: "min"});
    options.push({value: "max", text: "max"});

    var tmpl = '<div class="form-group">' +
        '<div data-ax5select="select1" data-ax5select-config="{}"></div>' +
        '</div>';

    $(document.body).append(tmpl);


    ///
    it('new ax5select', function (done) {
        try {
            myUI = new ax5.ui.select();
            done();
        } catch (e) {
            done(e);
        }
    });


    it('bind select', function (done) {
        myUI.bind({
            target: $('[data-ax5select="select1"]'),
            options: options,
            onChange: function () {

            },
            onStateChanged: function () {

            }
        });

        done();
    });


});