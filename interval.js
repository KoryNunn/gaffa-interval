var Gaffa = require('gaffa');

function startInterval(behaviour){
    behaviour.killInterval();

    var intervalLoop = function(){

            behaviour._timeout = setTimeout(function(){
                behaviour.triggerActions('tick');
                intervalLoop();
            }, behaviour.time.value);
        };

    intervalLoop();
}

function IntervalBehaviour(){}
IntervalBehaviour = Gaffa.createSpec(IntervalBehaviour, Gaffa.Behaviour);
IntervalBehaviour.prototype._type = 'interval';
IntervalBehaviour.prototype.bind = function(){
   startInterval(this);
};
IntervalBehaviour.prototype.remove = function(){
    this.killInterval();

    this.constructor.__super__.prototype.remove.call(this);
};
IntervalBehaviour.prototype.time = new Gaffa.Property({
    // If you forget to set the interval, we will be nice and give you
    // 5 seconds of debug time by default, rather than 0ms looping to death.
    value: 5000,
    update: function(behaviour, value){
        startInterval(behaviour);
    }
});
IntervalBehaviour.prototype.killInterval = function(){
    clearTimeout(this._timeout);
};

module.exports = IntervalBehaviour;