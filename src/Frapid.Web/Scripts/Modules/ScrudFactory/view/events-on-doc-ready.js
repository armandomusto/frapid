﻿function docready() {
    window.scrudForm = $(".form.factory");
    window.scrudView = $(".view.factory");

    var defaultView = window.getQueryStringByName("View");

    if ((defaultView || "") === "FormView") {
        scrudView.hide();
    };


    loadMeta(loadFilterNames);
    loadFilterConditions();
    $("#ExportDropDown").dropdown();

    if (window.scrudFactory.title) {
        $(".title").html(window.scrudFactory.title);

        var titleSuffix = getQueryStringByName("TitleSuffix");
        if(titleSuffix){
            $(".title").append(" / " + titleSuffix);
        };
    };
    if (window.scrudFactory.description) {
        $("#description").html(window.scrudFactory.description).show();
    } else {
        $("#description").remove();
    };

    if (typeof (window.scrudFactory.back) === "object") {
        var title = window.scrudFactory.back.Title;
        var url = window.scrudFactory.back.Url;

        var anchor = $("<a/>");
        anchor.addClass("ui basic button");
        anchor.attr("title", window.Resources.Titles.Back());
        anchor.attr("href", url);
        anchor.text(title);

        $("#AddNewButton").before(anchor);
    };

    initializeViews();
    initializeCustomButtons();

    var view = getQueryStringByName("View");
    if (view) {
        showTarget(view);
    };

    $(".kanban.segments").css("width", (($(".segment").length - 1) * 300) + "px").fadeIn(500);
    refreshKanbans();
};

$(document).ready(function () {
    docready();
});
