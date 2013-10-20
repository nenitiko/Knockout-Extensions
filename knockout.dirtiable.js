/* A fleshed-out implementation of the dirtiable observables
 * based on the the work done by Ryan Niemeyer.  
 * (http://www.knockmeout.net/2011/05/creating-smart-dirty-flag-in-knockoutjs.html)
 */ 
ko.extenders.dirtiable = function (target) {
    var _initialState = ko.observable(ko.toJSON(target)),
        _isInitiallyDirty = ko.observable(false);

    target.dirty = ko.computed(function () {
        return _isInitiallyDirty() || _initialState() !== ko.toJSON(target);
    });

    target.clean = function () {
        _initialState(ko.toJSON(target));
        _isInitiallyDirty(false);
    };

    return target;
};
