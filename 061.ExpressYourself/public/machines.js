let currentMode = 'expressions';
let currentRequest = '';
let requestInProgress = false;
let machineIsOn = false;
const expressionEmojis = [
    "😀",
    "😁",
    "😂",
    "😅",
    "😆",
    "😉",
    "😋",
    "😎",
    "😍",
    "😥",
    "😭",
    "😱",
    "🤓",
    "😴",
    "🤐",
    "💩"
];
const animalEmojis = [
    "🐶",
    "🐱",
    "🐼",
    "🐨",
    "🐷",
    "🐵",
    "🐭",
    "🐹",
    "🐰",
    "🐢",
    "🐸",
    "🐴",
    "🦄",
    "🐍",
    "🐙",
    "💩"
];
const expressionEmojisHtml = expressionEmojis
    .map(emoji => `<option value="${emoji}">${emoji}</option>`)
    .join('');
const animalEmojisHtml = animalEmojis
    .map(emoji => `<option value="${emoji}">${emoji}</option>`)
    .join('');
const emojiSelects = {
    expressions: expressionEmojisHtml,
    animals: animalEmojisHtml
};

const activeMachineImage = {
    expressions: 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/server-' +
            'machine-active.svg',
    animals: 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/server-' +
            'machine-animals.svg'
};

const activeSingularRouteImage = {
    expressions: 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ion-route-active.svg',
    animals: 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/animal-' +
            'route-active.svg'
};

const activePluralRouteImage = {
    expressions: 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ions-route-active.svg',
    animals: 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/animals' +
            '-route-active.svg'
};

$(document).ready(() => {
    setMode('expressions');
    pingMachine();
    setInterval(pingMachine, 1000);

    $('#get-expression').on('click', function () {
        selectExpressionMode('GET');
    });

    $('#create-expression').on('click', function () {
        selectExpressionMode('CREATE');
    });

    $('#update-expression').on('click', function () {
        selectExpressionMode('UPDATE');
    });

    $('#delete-expression').on('click', function () {
        selectExpressionMode('DELETE');
    });

    $('.expression-form .button').on('click', function () {
        triggerExpressionRequest();
    });

    $('#expressions-information .button').on('click', function () {
        triggerExpressionsRequest();
    });

    $('#expression-machine-type').on('click', function () {
        setMode('expressions');
    });

    $('#animals-machine-type').on('click', function () {
        setMode('animals');
    });
});

function setMode(mode) {
    if (mode !== 'expressions' && mode !== 'animals') {
        return;
    }
    currentMode = mode;
    pingMachine();
    $('#emoji-field').html(emojiSelects[currentMode]);
    selectExpressionMode('GET');
}

const generateRoute = (id, name, emoji) => {
    if (id && name && emoji) {
        return `/${currentMode}/${id}?name=${name}&emoji=${emoji}`;
    } else if (id) {
        return `/${currentMode}/${id}`;
    } else if (name && emoji) {
        return `/${currentMode}?name=${name}&emoji=${emoji}`;
    } else {
        return `/${currentMode}`;
    }
};

const getInactiveMode = () => {
    return currentMode === 'animals' ? 'expressions' : 'animals';
};

function pingMachine() {
    if (requestInProgress) {
        return;
    }

    $.ajax('/', {
        success: function () {
            activateMachine();
            if ($('#expression-route').attr('src') === activeSingularRouteImage[getInactiveMode()] || $('#expression-route').attr('src') === "https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express" +
                    "ion-route-inactive.svg") {
                $('#expression-route').attr('src', activeSingularRouteImage[currentMode]);
                $('#expressions-route').attr('src', activePluralRouteImage[currentMode]);
                activateExpressions();
            }
        },
        error: function (xhr) {
            if (xhr.status !== 404) {
                activateMachine();
                if ($('#expression-route').attr('src') === activeSingularRouteImage[getInactiveMode()] || $('#expression-route').attr('src') === "https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express" +
                        "ion-route-inactive.svg") {
                    $('#expression-route').attr('src', activeSingularRouteImage[currentMode]);
                    $('#expressions-route').attr('src', activePluralRouteImage[currentMode]);
                    activateExpressions();
                }
            } else {
                deactivateMachine();
                deactivateExpressions();
                $('#expression-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
                        'ion-route-inactive.svg');
                $('#expressions-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
                        'ions-route-inactive.svg');
            }
        }
    });
}

function activateMachine() {
    machineIsOn = true;
    $('#server-machine').attr('src', activeMachineImage[currentMode]);
    $('#beaker').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/beaker-' +
            'active-neutral.svg');

    if ($('#lightbulb').attr('src') === 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/lightbu' +
            'lb-inactive.svg') {
        $('#lightbulb').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/lightbu' +
                'lb-active.svg');
    }
}

function deactivateMachine() {
    machineIsOn = false;
    currentRequest = '';
    $('.expression-form').css('display', 'none');
    $('#expression-information .tabs li').removeClass('active');
    $('#expressions-information .tabs').html('');
    $('#server-machine').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/server-' +
            'machine-inactive.svg');
    $('#lightbulb').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/lightbu' +
            'lb-inactive.svg');
    $('#beaker').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/beaker-' +
            'inactive.svg');
    $('#code-number').text('');
    $('#code-description').text('');
    clearExpressionText();
    clearExpressionsText();
}

function activateExpressions() {
    $('#expression-information').removeClass('inactive');
    $('#expressions-information').removeClass('inactive');
}

function deactivateExpressions() {
    $('#expression-information').addClass('inactive');
    $('#expressions-information').addClass('inactive');
}

function selectExpressionMode(mode) {
    if (!machineIsOn) {
        return;
    }

    currentRequest = mode;
    $('.expression-form').css('display', 'block');
    $('#expression-information .tabs li').removeClass('active');
    $('#id-field')
        .prop('readonly', false)
        .removeClass('disabled')
        .val('');
    $('#name-field')
        .prop('readonly', false)
        .removeClass('disabled')
        .val('');
    if (mode === 'GET') {
        $('#emoji-field')
            .prop('disabled', false)
            .removeClass('disabled')
            .val('');
        $('#get-expression').addClass('active');
        $('#name-field')
            .prop('readonly', true)
            .addClass('disabled');
        $('#emoji-field')
            .prop('disabled', true)
            .addClass('disabled');
    } else if (mode === 'CREATE') {
        $('#emoji-field')
            .prop('disabled', false)
            .removeClass('disabled')
            .val(emojiSelects[currentMode][0]);
        $('#create-expression').addClass('active');
        $('#id-field')
            .prop('readonly', true)
            .addClass('disabled');
    } else if (mode === 'UPDATE') {
        $('#emoji-field')
            .prop('disabled', false)
            .removeClass('disabled')
            .val(emojiSelects[currentMode][0]);
        $('#update-expression').addClass('active');
    } else if (mode === 'DELETE') {
        $('#emoji-field')
            .prop('disabled', false)
            .removeClass('disabled')
            .val('');
        $('#delete-expression').addClass('active');
        $('#name-field')
            .prop('readonly', true)
            .addClass('disabled');
        $('#emoji-field')
            .prop('disabled', true)
            .addClass('disabled');
    }
}

function triggerExpressionRequest() {
    if (requestInProgress || !machineIsOn) {
        return;
    }

    requestInProgress = true;
    deactivateExpressions();

    const id = $('#id-field').val();
    const name = $('#name-field').val();
    const emoji = $('#emoji-field').val();

    $('#expression-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ion-route-pending.svg');
    $('#expressions-route').attr('src', activePluralRouteImage[currentMode]);
    $('#code-number').text('');
    $('#code-description').text('');
    clearExpressionsText();
    setExpressionRequestText(id, name, emoji);
    const animationDelay = 428.5;
    animateMachine(animationDelay);
    setTimeout(() => makeExpressionRequest(id, name, emoji), animationDelay * 4);
}

function setExpressionRequestText(id, name, emoji) {
    switch (currentRequest) {
        case 'GET':
            $('#expression-text pre')
                .eq(0)
                .text('GET');
            $('#expression-text pre')
                .eq(1)
                .text(`/${currentMode}/${id}`);
            $('#expression-text pre')
                .eq(2)
                .text('');
            $('#expression-text pre')
                .eq(3)
                .text('');
            break;
        case 'CREATE':
            $('#expression-text pre')
                .eq(0)
                .text('POST');
            $('#expression-text pre')
                .eq(1)
                .text(`/${currentMode}`);
            $('#expression-text pre')
                .eq(2)
                .text(`?name=${name}`);
            $('#expression-text pre')
                .eq(3)
                .text(`&emoji=${emoji}`);
            break;
        case 'UPDATE':
            $('#expression-text pre')
                .eq(0)
                .text('PUT');
            $('#expression-text pre')
                .eq(1)
                .text(`/${currentMode}/${id}`);
            $('#expression-text pre')
                .eq(2)
                .text(`?name=${name}`);
            $('#expression-text pre')
                .eq(3)
                .text(`&emoji=${emoji}`);
            break;
        case 'DELETE':
            $('#expression-text pre')
                .eq(0)
                .text('DELETE');
            $('#expression-text pre')
                .eq(1)
                .text(`/${currentMode}/${id}`);
            $('#expression-text pre')
                .eq(2)
                .text('');
            $('#expression-text pre')
                .eq(3)
                .text('');
            break;
    }
}

function clearExpressionText() {
    $('#expression-text pre')
        .eq(0)
        .text('');
    $('#expression-text pre')
        .eq(1)
        .text('');
    $('#expression-text pre')
        .eq(2)
        .text('');
    $('#expression-text pre')
        .eq(3)
        .text('');
}

function clearExpressionsText() {
    $('#expressions-text pre')
        .eq(0)
        .text('');
    $('#expressions-text pre')
        .eq(1)
        .text('');
}

function makeExpressionRequest(id, name, emoji) {
    switch (currentRequest) {
        case 'GET':
            $.ajax(generateRoute(id), {
                success: function (expression) {
                    animateGoodExpressionRequest('200', 'OK', expression);
                },
                error: function () {
                    animateBadExpressionRequest('404', 'Not Found');
                }
            });
            break;
        case 'CREATE':
            $.ajax(generateRoute(null, name, emoji), {
                method: 'POST',
                success: function (expression) {
                    animateGoodExpressionRequest('200', 'OK', expression);
                },
                error: function () {
                    animateBadExpressionRequest('400', 'Bad Request');
                }
            });
            break;
        case 'UPDATE':
            $.ajax(generateRoute(id, name, emoji), {
                method: 'PUT',
                success: function (expression) {
                    animateGoodExpressionRequest('200', 'OK', expression);
                },
                error: function () {
                    animateBadExpressionRequest('404', 'Not Found');
                }
            });
            break;
        case 'DELETE':
            $.ajax(generateRoute(id), {
                method: 'DELETE',
                success: function () {
                    animateGoodExpressionRequest('204', 'No Content');
                },
                error: function () {
                    animateBadExpressionRequest('404', 'Not Found');
                }
            });
            break;
    }
}

function triggerExpressionsRequest() {
    if (requestInProgress || !machineIsOn) {
        return;
    }

    requestInProgress = true;
    deactivateExpressions();

    $('#expression-route').attr('src', activeSingularRouteImage[currentMode]);
    $('#expressions-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ions-route-pending.svg');
    $('#code-number').text('');
    $('#code-description').text('');
    clearExpressionText();
    setExpressionsRequestText();
    const animationDelay = 428.5;
    animateMachine(animationDelay);
    setTimeout(() => makeExpressionsRequest(), animationDelay * 4);
}

function setExpressionsRequestText() {
    $('#expressions-text pre')
        .eq(0)
        .text('GET');
    $('#expressions-text pre')
        .eq(1)
        .text(`/${currentMode}`);
}

function makeExpressionsRequest() {
    $.ajax(generateRoute(), {
        success: function (expressions) {
            animateGoodExpressionsRequest('200', 'OK', expressions);
        },
        error: function () {
            animateBadExpressionsRequest('404', 'Not Found');
        }
    });
}

function animateMachine(animationDelay) {
    $('#beaker').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/beaker-' +
            'pending.svg');
    $('#lightbulb').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/lightbu' +
            'lb-pending.svg');
    $('#sliders').queue(function (next) {
        $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/sliders' +
                '-active-1.svg');
        next();
    })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/sliders' +
                    '-active-2.svg');
            next();
        })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/sliders' +
                    '-active-1.svg');
            next();
        })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/sliders' +
                    '-active-2.svg');
            next();
        })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/sliders' +
                    '-inactive.svg');
            next();
        });
    $('#buttons').queue(function (next) {
        $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/buttons' +
                '-active-1.svg');
        next();
    })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/buttons' +
                    '-active-2.svg');
            next();
        })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/buttons' +
                    '-active-1.svg');
            next();
        })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/buttons' +
                    '-active-2.svg');
            next();
        })
        .delay(animationDelay)
        .queue(function (next) {
            $(this).attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/buttons' +
                    '-inactive.svg');
            next();
        });
}

function animateGoodExpressionRequest(statusCode, statusDescription, response) {
    animateGoodRequest(statusCode, statusDescription);
    $('#expression-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ion-route-green.svg');
    if (currentRequest === 'DELETE') {
        $('#id-field').val('');
    } else {
        $('#id-field').val(response.id);
        $('#name-field').val(response.name);
        $('#emoji-field').val(response.emoji);
    }
}

function animateGoodExpressionsRequest(statusCode, statusDescription, response) {
    animateGoodRequest(statusCode, statusDescription);
    $('#expressions-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ions-route-green.svg');
    const expressions = response;
    const $expressionTabs = $('#expressions-information .tabs').html('');
    for (var i = 0; i < expressions.length; i++) {
        $expressionTabs.append(`<li><p>${expressions[i].emoji}</p><p class="id">${expressions[i].id}</p></li>`);
    }
}

function animateGoodRequest(statusCode, statusDescription) {
    $('#lightbulb').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/lightbu' +
            'lb-green.svg');
    $('#status-code')
        .removeClass('bad-status')
        .addClass('good-status');
    $('#code-number').text(statusCode);
    $('#code-description').text(statusDescription);
    activateExpressions();
    requestInProgress = false;
}

function animateBadExpressionRequest(statusCode, statusDescription) {
    animateBadRequest(statusCode, statusDescription);
    $('#expression-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ion-route-red.svg');
}

function animateBadExpressionsRequest(statusCode, statusDescription) {
    animateBadRequest(statusCode, statusDescription);
    $('#expressions-route').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/express' +
            'ions-route-red.svg');
}

function animateBadRequest(statusCode, statusDescription) {
    $('#lightbulb').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/learn-express-routes/lightbu' +
            'lb-red.svg');
    $('#status-code')
        .removeClass('good-status')
        .addClass('bad-status');
    $('#code-number').text(statusCode);
    $('#code-description').text(statusDescription);
    activateExpressions();
    requestInProgress = false;
}
