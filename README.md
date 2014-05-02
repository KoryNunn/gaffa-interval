#gaffa-interval

Interval behaviour for gaffa

## Install:

    npm i gaffa-interval

## Add to gaffa:

    var Interval = require('gaffa-interval');

    gaffa.registerConstructor(Interval);

# Usage

    var interval = new Interval();

    interval.time = 10000;
    interval.actions.tick = [myCoolAction];

# API

## Actions

### tick

Is triggered each tick of the interval

## Settings

### time

The time between ticks. This will default to 5000 if not set.



