/*
 *  Created By Bey.BLQ
 * */
;
(function ($) {
    'user strict!';

    if (!$) {
        console.error("请先引入jQuery.js;CDN地址：https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js")
        return
    }

    var _opts = {
        rules: {
            class: null,
            name: null,
            range: 'body'
        },
        extra: null,
        checked: null, // true,false,null()
        fn: function () {
        }
    }

    var check = function (target, param, fn) {
        var self = this
        var $this = $(target)
        this.$range = $(param.rules.range)

        this.getInput = function () {
            self.$input = param.rules.class ? self.$range.find(param.rules.class) :
                param.rules.name ? self.$range.find('input[name="' + param.rules.name + '"]') :
                    self.$range.find('input[type="checkbox"]')
            return this
        }()

        this.selected = function (type) {
            this.$input.prop("checked", type)
            this.callback()
            return this
        }

        this.callback = function (type) {
            var number = 0;
            var _domArray = [];
            var result = {}
            var length = self.$input.length

            self.$input.each(function (i, o) {
                if ($(o).prop("checked")) {
                    number++
                    _domArray.push(o)
                }
            })

            $this.prop("checked", length == number)
            result.checked = (length == number)
            result.number = number
            result.doms = _domArray

            fn(result)
            return this
        }

        this.$input.on("click", function () {
            self.callback();
        })

        if (param.extra, $(param.extra).length > 0) {
            $(param.extra).on("click", function () {
                if ($(this).data("checked") && typeof self[$(this).data("checked")] == 'function') {
                    self[$(this).data("checked")]()
                }
            })
        }

        if (typeof param.checked == 'boolean') {
            this.$input.prop("checked", param.checked)
            $this.prop("checked", param.checked)
        }
    }

    check.prototype = {
        checked: function () {
            this.$input.prop("checked", true)
            this.refresh()
            return this
        },
        unchecked: function () {
            this.$input.prop("checked", false)
            this.refresh()
            return this
        },
        inversed: function () {
            this.$input.each(function (i, o) {
                $(o).prop("checked", !$(o).prop("checked"))
            })
            this.refresh()
            return this
        },
        update: function () {
            this.getInput()
            this.refresh()
            return this
        },
        refresh: function () {
            this.callback()
            return this
        }
    }

    $.fn.check = function (options, callback) {
        var _check = $(this).data("checekobject")

        if (!_check) {
            typeof options == "function" ? (callback = options, options = {}) : callback
            $(this).data("checekobject", (_check = new check(this, $.extend({}, _opts, options), typeof callback == "function" ? callback : function () {
            })))
        }

        if (typeof options == "string" && typeof _check[options] == 'function') {
            _check[options]()
            return
        }

        $(this).on("click", function () {
            if (this.tagName == 'INPUT') {
                _check.selected($(this).prop("checked"))
            } else {
                var type = $(this).data("check")
                var state = $(this).attr("data-flag")
                if (type == "checked") {
                    _check.checked(true)
                } else if (type == "unchecked") {
                    _check.selected(false)
                } else {
                    if (state == "true") {
                        $(this).attr("data-flag", false)
                        _check.selected(false)
                    } else {
                        $(this).attr("data-flag", true)
                        _check.selected(true)
                    }
                }
            }
        })
        return this
    }
}(jQuery))`
