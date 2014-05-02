#gaffa-interval

interval behaviour for gaffa

## Install:

    npm i gaffa-interval

## Add to gaffa:

    gaffa.behaviours.constructors.interval = require('gaffa-interval');

# Usage

    var interval = new behaviours.Interval();

    interval.time = 10000;
    interval.actions.tick = [myCoolAction];