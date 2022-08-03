
$(document)
    .ready(function () {
        init();
    });

function init() {
    $('#lemonTea')
        .data('id', 1);

    $('#lemonTea')
        .click(selectDrink);
    $('#coffee')
        .data('id', 2);

    $('#coffee')
        .click(selectDrink);
    $('#chocolate')
        .data('id', 3);

    $('#chocolate')
        .click(selectDrink);

    $('#selector')
        .show();

    $('#recipeDisplay')
        .hide();

    function selectDrink(e) {
        e.preventDefault();
        var selected = $(e.currentTarget);


        var id = selected.data().id;
        $.ajax({
            url: 'api/Recipes/' + id,
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                processDrink(response);
            }
        });


    }

    function processDrink(response) {
        var responseJobj = JSON.parse(response);

        $('#selector')
            .hide();


        $('#recipeDisplay')
            .empty()
            .append(
                createElement('div', 'spinner-border text-info m-5')
                    .prop('role', 'status')
                    .prop('id', 'spinner')
                    .append(
                        createElement('span', 'sr-only')
                            .text('Processing request...')
                    ),
                createElement('div', 'text-secondary')
                    .prop('id', 'processStage')
            )
            .show();



        var steps = responseJobj.steps;
        var interval = 5000; //5 seconds - obviously in the real world it takes longer to do those things

        var loop = function () {
            return new Promise(function (outerResolve) {
                var promise = Promise.resolve();
                var i = 0;
                var next = function () {
                    var step = steps[i];

                    var displayText = step.replace('Boil ', 'Boiling ').replace('Steep ', 'Steeping ').replace('Pour ', 'Pouring ').replace('Add ', 'Adding ').replace('Brew ', 'Brewing ');
                    $('#processStage')
                        .text(displayText + '...');

                    if (++i < steps.length) {
                        promise = promise.then(function () {
                            return new Promise(function (resolve) {
                                setTimeout(function () {
                                    resolve();
                                    next();
                                }, interval);
                            });
                        });
                    }
                    else {
                        setTimeout(outerResolve, interval);
                    }

                };
                next();

            });
        };

        loop().then(function () {
            $('#processStage')
                .text('Enjoy your drink');
            $('#spinner')
                .remove();
            $('#recipeDisplay')
                .append(
                    createElement('button', 'btn-primary')
                        .text('Back to Selection')
                        .click(function (e) {
                            e.preventDefault();
                            $('#selector')
                                .show();
                            $('#recipeDisplay')
                                .hide();
                        })
                );

        });


        //var promise = Promise.resolve();
        //steps.forEach(function (step) {
        //    promise.then(function () {
        //        var displayText = step.replace('Boil ', 'Boiling ').replace('Steep ', 'Steeping ').replace('Pour ', 'Pouring ').replace('Add ', 'Adding ').replace('Brew ', 'Brewing ');
        //        $('#processStage')
        //            .text(displayText + '...');
        //        return new Promise(function (resolve) {
        //            setTimeout(resolve, interval);
        //        });
        //    });
        //});

        //promise.then(function () {
        //    $('#processStage')
        //        .text('Enjoy your drink');
        //    $('#spinner')
        //        .remove();
        //    $('#recipeDisplay')
        //        .append(
        //            createElement('button', 'btn-primary')
        //                .text('Back to Selection')
        //                .click(function (e) {
        //                    e.preventDefault();
        //                    $('#selector')
        //                        .show();
        //                    $('#recipeDisplay')
        //                        .hide();
        //                })
        //        );

        //});


    }
}
