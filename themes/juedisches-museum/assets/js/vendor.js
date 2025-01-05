/*!
  * Bootstrap v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery) }(this, (function (t, e) { "use strict"; function n(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var i = n(e); function o(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t } function a() { return a = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }, a.apply(this, arguments) } function s(t, e) { return s = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t }, s(t, e) } var l = "transitionend"; var u = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href"); e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = i.default(t).css("transition-duration"), n = i.default(t).css("transition-delay"), o = parseFloat(e), r = parseFloat(n); return o || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { i.default(t).trigger(l) }, supportsTransitionEnd: function () { return Boolean(l) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i], r = e[i], a = r && u.isElement(r) ? "element" : null === (s = r) || "undefined" == typeof s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".') } var s }, findShadowRoot: function (t) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? u.findShadowRoot(t.parentNode) : null }, jQueryDetection: function () { if ("undefined" == typeof i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = i.default.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") } }; u.jQueryDetection(), i.default.fn.emulateTransitionEnd = function (t) { var e = this, n = !1; return i.default(this).one(u.TRANSITION_END, (function () { n = !0 })), setTimeout((function () { n || u.triggerTransitionEnd(e) }), t), this }, i.default.event.special[u.TRANSITION_END] = { bindType: l, delegateType: l, handle: function (t) { if (i.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var f = "bs.alert", d = i.default.fn.alert, c = function () { function t(t) { this._element = t } var e = t.prototype; return e.close = function (t) { var e = this._element; t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, e.dispose = function () { i.default.removeData(this._element, f), this._element = null }, e._getRootElement = function (t) { var e = u.getSelectorFromElement(t), n = !1; return e && (n = document.querySelector(e)), n || (n = i.default(t).closest(".alert")[0]), n }, e._triggerCloseEvent = function (t) { var e = i.default.Event("close.bs.alert"); return i.default(t).trigger(e), e }, e._removeElement = function (t) { var e = this; if (i.default(t).removeClass("show"), i.default(t).hasClass("fade")) { var n = u.getTransitionDurationFromElement(t); i.default(t).one(u.TRANSITION_END, (function (n) { return e._destroyElement(t, n) })).emulateTransitionEnd(n) } else this._destroyElement(t) }, e._destroyElement = function (t) { i.default(t).detach().trigger("closed.bs.alert").remove() }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this), o = n.data(f); o || (o = new t(this), n.data(f, o)), "close" === e && o[e](this) })) }, t._handleDismiss = function (t) { return function (e) { e && e.preventDefault(), t.close(this) } }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }]), t }(); i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c)), i.default.fn.alert = c._jQueryInterface, i.default.fn.alert.Constructor = c, i.default.fn.alert.noConflict = function () { return i.default.fn.alert = d, c._jQueryInterface }; var h = "bs.button", p = i.default.fn.button, m = "active", g = '[data-toggle^="button"]', _ = 'input:not([type="hidden"])', v = ".btn", b = function () { function t(t) { this._element = t, this.shouldAvoidTriggerChange = !1 } var e = t.prototype; return e.toggle = function () { var t = !0, e = !0, n = i.default(this._element).closest('[data-toggle="buttons"]')[0]; if (n) { var o = this._element.querySelector(_); if (o) { if ("radio" === o.type) if (o.checked && this._element.classList.contains(m)) t = !1; else { var r = n.querySelector(".active"); r && i.default(r).removeClass(m) } t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains(m)), this.shouldAvoidTriggerChange || i.default(o).trigger("change")), o.focus(), e = !1 } } this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(m)), t && i.default(this._element).toggleClass(m)) }, e.dispose = function () { i.default.removeData(this._element, h), this._element = null }, t._jQueryInterface = function (e, n) { return this.each((function () { var o = i.default(this), r = o.data(h); r || (r = new t(this), o.data(h, r)), r.shouldAvoidTriggerChange = n, "toggle" === e && r[e]() })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }]), t }(); i.default(document).on("click.bs.button.data-api", g, (function (t) { var e = t.target, n = e; if (i.default(e).hasClass("btn") || (e = i.default(e).closest(v)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault(); else { var o = e.querySelector(_); if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault(); "INPUT" !== n.tagName && "LABEL" === e.tagName || b._jQueryInterface.call(i.default(e), "toggle", "INPUT" === n.tagName) } })).on("focus.bs.button.data-api blur.bs.button.data-api", g, (function (t) { var e = i.default(t.target).closest(v)[0]; i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type)) })), i.default(window).on("load.bs.button.data-api", (function () { for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) { var i = t[e], o = i.querySelector(_); o.checked || o.hasAttribute("checked") ? i.classList.add(m) : i.classList.remove(m) } for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) { var s = t[r]; "true" === s.getAttribute("aria-pressed") ? s.classList.add(m) : s.classList.remove(m) } })), i.default.fn.button = b._jQueryInterface, i.default.fn.button.Constructor = b, i.default.fn.button.noConflict = function () { return i.default.fn.button = p, b._jQueryInterface }; var y = "carousel", E = "bs.carousel", w = i.default.fn[y], T = "active", C = "next", S = "prev", N = "slid.bs.carousel", D = ".active.carousel-item", A = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, k = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, I = { TOUCH: "touch", PEN: "pen" }, O = function () { function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var e = t.prototype; return e.next = function () { this._isSliding || this._slide(C) }, e.nextWhenVisible = function () { var t = i.default(this._element); !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next() }, e.prev = function () { this._isSliding || this._slide(S) }, e.pause = function (t) { t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (u.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function (t) { var e = this; this._activeElement = this._element.querySelector(D); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) i.default(this._element).one(N, (function () { return e.to(t) })); else { if (n === t) return this.pause(), void this.cycle(); var o = t > n ? C : S; this._slide(o, this._items[t]) } }, e.dispose = function () { i.default(this._element).off(".bs.carousel"), i.default.removeData(this._element, E), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function (t) { return t = a({}, A, t), u.typeCheckConfig(y, t, k), t }, e._handleSwipe = function () { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX; this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next() } }, e._addEventListeners = function () { var t = this; this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", (function (e) { return t._keydown(e) })), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", (function (e) { return t.pause(e) })).on("mouseleave.bs.carousel", (function (e) { return t.cycle(e) })), this._config.touch && this._addTouchEventListeners() }, e._addTouchEventListeners = function () { var t = this; if (this._touchSupported) { var e = function (e) { t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) }, n = function (e) { t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) { return t.cycle(e) }), 500 + t._config.interval)) }; i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (t) { return t.preventDefault() })), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", (function (t) { return e(t) })), i.default(this._element).on("pointerup.bs.carousel", (function (t) { return n(t) })), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", (function (t) { return e(t) })), i.default(this._element).on("touchmove.bs.carousel", (function (e) { return function (e) { t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX }(e) })), i.default(this._element).on("touchend.bs.carousel", (function (t) { return n(t) }))) } }, e._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, e._getItemIndex = function (t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t) }, e._getItemByDirection = function (t, e) { var n = t === C, i = t === S, o = this._getItemIndex(e), r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var a = (o + (t === S ? -1 : 1)) % this._items.length; return -1 === a ? this._items[this._items.length - 1] : this._items[a] }, e._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), o = this._getItemIndex(this._element.querySelector(D)), r = i.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: o, to: n }); return i.default(this._element).trigger(r), r }, e._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active")); i.default(e).removeClass(T); var n = this._indicatorsElement.children[this._getItemIndex(t)]; n && i.default(n).addClass(T) } }, e._updateInterval = function () { var t = this._activeElement || this._element.querySelector(D); if (t) { var e = parseInt(t.getAttribute("data-interval"), 10); e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval } }, e._slide = function (t, e) { var n, o, r, a = this, s = this._element.querySelector(D), l = this._getItemIndex(s), f = e || s && this._getItemByDirection(t, s), d = this._getItemIndex(f), c = Boolean(this._interval); if (t === C ? (n = "carousel-item-left", o = "carousel-item-next", r = "left") : (n = "carousel-item-right", o = "carousel-item-prev", r = "right"), f && i.default(f).hasClass(T)) this._isSliding = !1; else if (!this._triggerSlideEvent(f, r).isDefaultPrevented() && s && f) { this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(f), this._activeElement = f; var h = i.default.Event(N, { relatedTarget: f, direction: r, from: l, to: d }); if (i.default(this._element).hasClass("slide")) { i.default(f).addClass(o), u.reflow(f), i.default(s).addClass(n), i.default(f).addClass(n); var p = u.getTransitionDurationFromElement(s); i.default(s).one(u.TRANSITION_END, (function () { i.default(f).removeClass(n + " " + o).addClass(T), i.default(s).removeClass("active " + o + " " + n), a._isSliding = !1, setTimeout((function () { return i.default(a._element).trigger(h) }), 0) })).emulateTransitionEnd(p) } else i.default(s).removeClass(T), i.default(f).addClass(T), this._isSliding = !1, i.default(this._element).trigger(h); c && this.cycle() } }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this).data(E), o = a({}, A, i.default(this).data()); "object" == typeof e && (o = a({}, o, e)); var r = "string" == typeof e ? e : o.slide; if (n || (n = new t(this, o), i.default(this).data(E, n)), "number" == typeof e) n.to(e); else if ("string" == typeof r) { if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"'); n[r]() } else o.interval && o.ride && (n.pause(), n.cycle()) })) }, t._dataApiClickHandler = function (e) { var n = u.getSelectorFromElement(this); if (n) { var o = i.default(n)[0]; if (o && i.default(o).hasClass("carousel")) { var r = a({}, i.default(o).data(), i.default(this).data()), s = this.getAttribute("data-slide-to"); s && (r.interval = !1), t._jQueryInterface.call(i.default(o), r), s && i.default(o).data(E).to(s), e.preventDefault() } } }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return A } }]), t }(); i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", O._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", (function () { for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) { var o = i.default(t[e]); O._jQueryInterface.call(o, o.data()) } })), i.default.fn[y] = O._jQueryInterface, i.default.fn[y].Constructor = O, i.default.fn[y].noConflict = function () { return i.default.fn[y] = w, O._jQueryInterface }; var x = "collapse", j = "bs.collapse", L = i.default.fn[x], P = "show", F = "collapse", R = "collapsing", H = "collapsed", M = "width", q = '[data-toggle="collapse"]', B = { toggle: !0, parent: "" }, Q = { toggle: "boolean", parent: "(string|element)" }, W = function () { function t(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(q)), i = 0, o = n.length; i < o; i++) { var r = n[i], a = u.getSelectorFromElement(r), s = [].slice.call(document.querySelectorAll(a)).filter((function (e) { return e === t })); null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var e = t.prototype; return e.toggle = function () { i.default(this._element).hasClass(P) ? this.hide() : this.show() }, e.show = function () { var e, n, o = this; if (!(this._isTransitioning || i.default(this._element).hasClass(P) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (t) { return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(F) }))).length && (e = null), e && (n = i.default(e).not(this._selector).data(j)) && n._isTransitioning))) { var r = i.default.Event("show.bs.collapse"); if (i.default(this._element).trigger(r), !r.isDefaultPrevented()) { e && (t._jQueryInterface.call(i.default(e).not(this._selector), "hide"), n || i.default(e).data(j, null)); var a = this._getDimension(); i.default(this._element).removeClass(F).addClass(R), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass(H).attr("aria-expanded", !0), this.setTransitioning(!0); var s = "scroll" + (a[0].toUpperCase() + a.slice(1)), l = u.getTransitionDurationFromElement(this._element); i.default(this._element).one(u.TRANSITION_END, (function () { i.default(o._element).removeClass(R).addClass("collapse show"), o._element.style[a] = "", o.setTransitioning(!1), i.default(o._element).trigger("shown.bs.collapse") })).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px" } } }, e.hide = function () { var t = this; if (!this._isTransitioning && i.default(this._element).hasClass(P)) { var e = i.default.Event("hide.bs.collapse"); if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", u.reflow(this._element), i.default(this._element).addClass(R).removeClass("collapse show"); var o = this._triggerArray.length; if (o > 0) for (var r = 0; r < o; r++) { var a = this._triggerArray[r], s = u.getSelectorFromElement(a); null !== s && (i.default([].slice.call(document.querySelectorAll(s))).hasClass(P) || i.default(a).addClass(H).attr("aria-expanded", !1)) } this.setTransitioning(!0), this._element.style[n] = ""; var l = u.getTransitionDurationFromElement(this._element); i.default(this._element).one(u.TRANSITION_END, (function () { t.setTransitioning(!1), i.default(t._element).removeClass(R).addClass(F).trigger("hidden.bs.collapse") })).emulateTransitionEnd(l) } } }, e.setTransitioning = function (t) { this._isTransitioning = t }, e.dispose = function () { i.default.removeData(this._element, j), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function (t) { return (t = a({}, B, t)).toggle = Boolean(t.toggle), u.typeCheckConfig(x, t, Q), t }, e._getDimension = function () { return i.default(this._element).hasClass(M) ? M : "height" }, e._getParent = function () { var e, n = this; u.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent); var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', r = [].slice.call(e.querySelectorAll(o)); return i.default(r).each((function (e, i) { n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]) })), e }, e._addAriaAndCollapsedClass = function (t, e) { var n = i.default(t).hasClass(P); e.length && i.default(e).toggleClass(H, !n).attr("aria-expanded", n) }, t._getTargetFromElement = function (t) { var e = u.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this), o = n.data(j), r = a({}, B, n.data(), "object" == typeof e && e ? e : {}); if (!o && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), o || (o = new t(this, r), n.data(j, o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"'); o[e]() } })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return B } }]), t }(); i.default(document).on("click.bs.collapse.data-api", q, (function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var e = i.default(this), n = u.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(n)); i.default(o).each((function () { var t = i.default(this), n = t.data(j) ? "toggle" : e.data(); W._jQueryInterface.call(t, n) })) })), i.default.fn[x] = W._jQueryInterface, i.default.fn[x].Constructor = W, i.default.fn[x].noConflict = function () { return i.default.fn[x] = L, W._jQueryInterface }; var U = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, V = function () { for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)if (U && navigator.userAgent.indexOf(t[e]) >= 0) return 1; return 0 }(), Y = U && window.Promise ? function (t) { var e = !1; return function () { e || (e = !0, window.Promise.resolve().then((function () { e = !1, t() }))) } } : function (t) { var e = !1; return function () { e || (e = !0, setTimeout((function () { e = !1, t() }), V)) } }; function z(t) { return t && "[object Function]" === {}.toString.call(t) } function K(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n } function X(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host } function G(t) { if (!t) return document.body; switch (t.nodeName) { case "HTML": case "BODY": return t.ownerDocument.body; case "#document": return t.body }var e = K(t), n = e.overflow, i = e.overflowX, o = e.overflowY; return /(auto|scroll|overlay)/.test(n + o + i) ? t : G(X(t)) } function $(t) { return t && t.referenceNode ? t.referenceNode : t } var J = U && !(!window.MSInputMethodContext || !document.documentMode), Z = U && /MSIE 10/.test(navigator.userAgent); function tt(t) { return 11 === t ? J : 10 === t ? Z : J || Z } function et(t) { if (!t) return document.documentElement; for (var e = tt(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;)n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === K(n, "position") ? et(n) : n : t ? t.ownerDocument.documentElement : document.documentElement } function nt(t) { return null !== t.parentNode ? nt(t.parentNode) : t } function it(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, o = n ? e : t, r = document.createRange(); r.setStart(i, 0), r.setEnd(o, 0); var a, s, l = r.commonAncestorContainer; if (t !== l && e !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && et(a.firstElementChild) !== a ? et(l) : l; var u = nt(t); return u.host ? it(u.host, e) : it(t, nt(e).host) } function ot(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", n = "top" === e ? "scrollTop" : "scrollLeft", i = t.nodeName; if ("BODY" === i || "HTML" === i) { var o = t.ownerDocument.documentElement, r = t.ownerDocument.scrollingElement || o; return r[n] } return t[n] } function rt(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = ot(e, "top"), o = ot(e, "left"), r = n ? -1 : 1; return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t } function at(t, e) { var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom"; return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]) } function st(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], tt(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) } function lt(t) { var e = t.body, n = t.documentElement, i = tt(10) && getComputedStyle(n); return { height: st("Height", e, n, i), width: st("Width", e, n, i) } } var ut = function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }, ft = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function (e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(), dt = function (t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }, ct = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }; function ht(t) { return ct({}, t, { right: t.left + t.width, bottom: t.top + t.height }) } function pt(t) { var e = {}; try { if (tt(10)) { e = t.getBoundingClientRect(); var n = ot(t, "top"), i = ot(t, "left"); e.top += n, e.left += i, e.bottom += n, e.right += i } else e = t.getBoundingClientRect() } catch (t) { } var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top }, r = "HTML" === t.nodeName ? lt(t.ownerDocument) : {}, a = r.width || t.clientWidth || o.width, s = r.height || t.clientHeight || o.height, l = t.offsetWidth - a, u = t.offsetHeight - s; if (l || u) { var f = K(t); l -= at(f, "x"), u -= at(f, "y"), o.width -= l, o.height -= u } return ht(o) } function mt(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = tt(10), o = "HTML" === e.nodeName, r = pt(t), a = pt(e), s = G(t), l = K(e), u = parseFloat(l.borderTopWidth), f = parseFloat(l.borderLeftWidth); n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0)); var d = ht({ top: r.top - a.top - u, left: r.left - a.left - f, width: r.width, height: r.height }); if (d.marginTop = 0, d.marginLeft = 0, !i && o) { var c = parseFloat(l.marginTop), h = parseFloat(l.marginLeft); d.top -= u - c, d.bottom -= u - c, d.left -= f - h, d.right -= f - h, d.marginTop = c, d.marginLeft = h } return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = rt(d, e)), d } function gt(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = t.ownerDocument.documentElement, i = mt(t, n), o = Math.max(n.clientWidth, window.innerWidth || 0), r = Math.max(n.clientHeight, window.innerHeight || 0), a = e ? 0 : ot(n), s = e ? 0 : ot(n, "left"), l = { top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r }; return ht(l) } function _t(t) { var e = t.nodeName; if ("BODY" === e || "HTML" === e) return !1; if ("fixed" === K(t, "position")) return !0; var n = X(t); return !!n && _t(n) } function vt(t) { if (!t || !t.parentElement || tt()) return document.documentElement; for (var e = t.parentElement; e && "none" === K(e, "transform");)e = e.parentElement; return e || document.documentElement } function bt(t, e, n, i) { var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], r = { top: 0, left: 0 }, a = o ? vt(t) : it(t, $(e)); if ("viewport" === i) r = gt(a, o); else { var s = void 0; "scrollParent" === i ? "BODY" === (s = G(X(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i; var l = mt(s, a, o); if ("HTML" !== s.nodeName || _t(a)) r = l; else { var u = lt(t.ownerDocument), f = u.height, d = u.width; r.top += l.top - l.marginTop, r.bottom = f + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left } } var c = "number" == typeof (n = n || 0); return r.left += c ? n : n.left || 0, r.top += c ? n : n.top || 0, r.right -= c ? n : n.right || 0, r.bottom -= c ? n : n.bottom || 0, r } function yt(t) { return t.width * t.height } function Et(t, e, n, i, o) { var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var a = bt(n, i, r, o), s = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } }, l = Object.keys(s).map((function (t) { return ct({ key: t }, s[t], { area: yt(s[t]) }) })).sort((function (t, e) { return e.area - t.area })), u = l.filter((function (t) { var e = t.width, i = t.height; return e >= n.clientWidth && i >= n.clientHeight })), f = u.length > 0 ? u[0].key : l[0].key, d = t.split("-")[1]; return f + (d ? "-" + d : "") } function wt(t, e, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = i ? vt(e) : it(e, $(n)); return mt(n, o, i) } function Tt(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t), n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0), i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: t.offsetWidth + i, height: t.offsetHeight + n } } function Ct(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, (function (t) { return e[t] })) } function St(t, e, n) { n = n.split("-")[0]; var i = Tt(t), o = { width: i.width, height: i.height }, r = -1 !== ["right", "left"].indexOf(n), a = r ? "top" : "left", s = r ? "left" : "top", l = r ? "height" : "width", u = r ? "width" : "height"; return o[a] = e[a] + e[l] / 2 - i[l] / 2, o[s] = n === s ? e[s] - i[u] : e[Ct(s)], o } function Nt(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] } function Dt(t, e, n) { return (void 0 === n ? t : t.slice(0, function (t, e, n) { if (Array.prototype.findIndex) return t.findIndex((function (t) { return t.name === n })); var i = Nt(t, (function (t) { return t.name === n })); return t.indexOf(i) }(t, 0, n))).forEach((function (t) { t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var n = t.function || t.fn; t.enabled && z(n) && (e.offsets.popper = ht(e.offsets.popper), e.offsets.reference = ht(e.offsets.reference), e = n(e, t)) })), e } function At() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; t.offsets.reference = wt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Et(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = St(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = Dt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } } function kt(t, e) { return t.some((function (t) { var n = t.name; return t.enabled && n === e })) } function It(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) { var o = e[i], r = o ? "" + o + n : t; if ("undefined" != typeof document.body.style[r]) return r } return null } function Ot() { return this.state.isDestroyed = !0, kt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[It("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function xt(t) { var e = t.ownerDocument; return e ? e.defaultView : window } function jt(t, e, n, i) { var o = "BODY" === t.nodeName, r = o ? t.ownerDocument.defaultView : t; r.addEventListener(e, n, { passive: !0 }), o || jt(G(r.parentNode), e, n, i), i.push(r) } function Lt(t, e, n, i) { n.updateBound = i, xt(t).addEventListener("resize", n.updateBound, { passive: !0 }); var o = G(t); return jt(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n } function Pt() { this.state.eventsEnabled || (this.state = Lt(this.reference, this.options, this.state, this.scheduleUpdate)) } function Ft() { var t, e; this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, xt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) { t.removeEventListener("scroll", e.updateBound) })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e)) } function Rt(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) } function Ht(t, e) { Object.keys(e).forEach((function (n) { var i = ""; -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Rt(e[n]) && (i = "px"), t.style[n] = e[n] + i })) } var Mt = U && /Firefox/i.test(navigator.userAgent); function qt(t, e, n) { var i = Nt(t, (function (t) { return t.name === e })), o = !!i && t.some((function (t) { return t.name === n && t.enabled && t.order < i.order })); if (!o) { var r = "`" + e + "`", a = "`" + n + "`"; console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!") } return o } var Bt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Qt = Bt.slice(3); function Wt(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Qt.indexOf(t), i = Qt.slice(n + 1).concat(Qt.slice(0, n)); return e ? i.reverse() : i } var Ut = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (t) { var e = t.placement, n = e.split("-")[0], i = e.split("-")[1]; if (i) { var o = t.offsets, r = o.reference, a = o.popper, s = -1 !== ["bottom", "top"].indexOf(n), l = s ? "left" : "top", u = s ? "width" : "height", f = { start: dt({}, l, r[l]), end: dt({}, l, r[l] + r[u] - a[u]) }; t.offsets.popper = ct({}, a, f[i]) } return t } }, offset: { order: 200, enabled: !0, fn: function (t, e) { var n, i = e.offset, o = t.placement, r = t.offsets, a = r.popper, s = r.reference, l = o.split("-")[0]; return n = Rt(+i) ? [+i, 0] : function (t, e, n, i) { var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), a = t.split(/(\+|\-)/).map((function (t) { return t.trim() })), s = a.indexOf(Nt(a, (function (t) { return -1 !== t.search(/,|\s/) }))); a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/, u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a]; return u = u.map((function (t, i) { var o = (1 === i ? !r : r) ? "height" : "width", a = !1; return t.reduce((function (t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e) }), []).map((function (t) { return function (t, e, n, i) { var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], a = o[2]; return r ? 0 === a.indexOf("%") ? ht("%p" === a ? n : i)[e] / 100 * r : "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r : t }(t, o, e, n) })) })), u.forEach((function (t, e) { t.forEach((function (n, i) { Rt(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1)) })) })), o }(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), t.popper = a, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (t, e) { var n = e.boundariesElement || et(t.instance.popper); t.instance.reference === n && (n = et(n)); var i = It("transform"), o = t.instance.popper.style, r = o.top, a = o.left, s = o[i]; o.top = "", o.left = "", o[i] = ""; var l = bt(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed); o.top = r, o.left = a, o[i] = s, e.boundaries = l; var u = e.priority, f = t.offsets.popper, d = { primary: function (t) { var n = f[t]; return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), dt({}, t, n) }, secondary: function (t) { var n = "right" === t ? "left" : "top", i = f[n]; return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), dt({}, n, i) } }; return u.forEach((function (t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary"; f = ct({}, f, d[e](t)) })), t.offsets.popper = f, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function (t) { var e = t.offsets, n = e.popper, i = e.reference, o = t.placement.split("-")[0], r = Math.floor, a = -1 !== ["top", "bottom"].indexOf(o), s = a ? "right" : "bottom", l = a ? "left" : "top", u = a ? "width" : "height"; return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t } }, arrow: { order: 500, enabled: !0, fn: function (t, e) { var n; if (!qt(t.instance.modifiers, "arrow", "keepTogether")) return t; var i = e.element; if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t; var o = t.placement.split("-")[0], r = t.offsets, a = r.popper, s = r.reference, l = -1 !== ["left", "right"].indexOf(o), u = l ? "height" : "width", f = l ? "Top" : "Left", d = f.toLowerCase(), c = l ? "left" : "top", h = l ? "bottom" : "right", p = Tt(i)[u]; s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]), t.offsets.popper = ht(t.offsets.popper); var m = s[d] + s[u] / 2 - p / 2, g = K(t.instance.popper), _ = parseFloat(g["margin" + f]), v = parseFloat(g["border" + f + "Width"]), b = m - t.offsets.popper[d] - _ - v; return b = Math.max(Math.min(a[u] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (dt(n = {}, d, Math.round(b)), dt(n, c, ""), n), t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function (t, e) { if (kt(t.instance.modifiers, "inner")) return t; if (t.flipped && t.placement === t.originalPlacement) return t; var n = bt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed), i = t.placement.split("-")[0], o = Ct(i), r = t.placement.split("-")[1] || "", a = []; switch (e.behavior) { case "flip": a = [i, o]; break; case "clockwise": a = Wt(i); break; case "counterclockwise": a = Wt(i, !0); break; default: a = e.behavior }return a.forEach((function (s, l) { if (i !== s || a.length === l + 1) return t; i = t.placement.split("-")[0], o = Ct(i); var u = t.offsets.popper, f = t.offsets.reference, d = Math.floor, c = "left" === i && d(u.right) > d(f.left) || "right" === i && d(u.left) < d(f.right) || "top" === i && d(u.bottom) > d(f.top) || "bottom" === i && d(u.top) < d(f.bottom), h = d(u.left) < d(n.left), p = d(u.right) > d(n.right), m = d(u.top) < d(n.top), g = d(u.bottom) > d(n.bottom), _ = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g, v = -1 !== ["top", "bottom"].indexOf(i), b = !!e.flipVariations && (v && "start" === r && h || v && "end" === r && p || !v && "start" === r && m || !v && "end" === r && g), y = !!e.flipVariationsByContent && (v && "start" === r && p || v && "end" === r && h || !v && "start" === r && g || !v && "end" === r && m), E = b || y; (c || _ || E) && (t.flipped = !0, (c || _) && (i = a[l + 1]), E && (r = function (t) { return "end" === t ? "start" : "start" === t ? "end" : t }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = ct({}, t.offsets.popper, St(t.instance.popper, t.offsets.reference, t.placement)), t = Dt(t.instance.modifiers, t, "flip")) })), t }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function (t) { var e = t.placement, n = e.split("-")[0], i = t.offsets, o = i.popper, r = i.reference, a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n); return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), t.placement = Ct(e), t.offsets.popper = ht(o), t } }, hide: { order: 800, enabled: !0, fn: function (t) { if (!qt(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference, n = Nt(t.instance.modifiers, (function (t) { return "preventOverflow" === t.name })).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t; t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t; t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function (t, e) { var n = e.x, i = e.y, o = t.offsets.popper, r = Nt(t.instance.modifiers, (function (t) { return "applyStyle" === t.name })).gpuAcceleration; void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var a, s, l = void 0 !== r ? r : e.gpuAcceleration, u = et(t.instance.popper), f = pt(u), d = { position: o.position }, c = function (t, e) { var n = t.offsets, i = n.popper, o = n.reference, r = Math.round, a = Math.floor, s = function (t) { return t }, l = r(o.width), u = r(i.width), f = -1 !== ["left", "right"].indexOf(t.placement), d = -1 !== t.placement.indexOf("-"), c = e ? f || d || l % 2 == u % 2 ? r : a : s, h = e ? r : s; return { left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: c(i.right) } }(t, window.devicePixelRatio < 2 || !Mt), h = "bottom" === n ? "top" : "bottom", p = "right" === i ? "left" : "right", m = It("transform"); if (s = "bottom" === h ? "HTML" === u.nodeName ? -u.clientHeight + c.bottom : -f.height + c.bottom : c.top, a = "right" === p ? "HTML" === u.nodeName ? -u.clientWidth + c.right : -f.width + c.right : c.left, l && m) d[m] = "translate3d(" + a + "px, " + s + "px, 0)", d[h] = 0, d[p] = 0, d.willChange = "transform"; else { var g = "bottom" === h ? -1 : 1, _ = "right" === p ? -1 : 1; d[h] = s * g, d[p] = a * _, d.willChange = h + ", " + p } var v = { "x-placement": t.placement }; return t.attributes = ct({}, v, t.attributes), t.styles = ct({}, d, t.styles), t.arrowStyles = ct({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function (t) { var e, n; return Ht(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function (t) { !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) })), t.arrowElement && Object.keys(t.arrowStyles).length && Ht(t.arrowElement, t.arrowStyles), t }, onLoad: function (t, e, n, i, o) { var r = wt(o, e, t, n.positionFixed), a = Et(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute("x-placement", a), Ht(e, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } }, Vt = function () { function t(e, n) { var i = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; ut(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(i.update) }, this.update = Y(this.update.bind(this)), this.options = ct({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ct({}, t.Defaults.modifiers, o.modifiers)).forEach((function (e) { i.options.modifiers[e] = ct({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) { return ct({ name: t }, i.options.modifiers[t]) })).sort((function (t, e) { return t.order - e.order })), this.modifiers.forEach((function (t) { t.enabled && z(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) })), this.update(); var r = this.options.eventsEnabled; r && this.enableEventListeners(), this.state.eventsEnabled = r } return ft(t, [{ key: "update", value: function () { return At.call(this) } }, { key: "destroy", value: function () { return Ot.call(this) } }, { key: "enableEventListeners", value: function () { return Pt.call(this) } }, { key: "disableEventListeners", value: function () { return Ft.call(this) } }]), t }(); Vt.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Vt.placements = Bt, Vt.Defaults = Ut; var Yt = Vt, zt = "dropdown", Kt = "bs.dropdown", Xt = i.default.fn[zt], Gt = new RegExp("38|40|27"), $t = "disabled", Jt = "show", Zt = "dropdown-menu-right", te = "hide.bs.dropdown", ee = "hidden.bs.dropdown", ne = "click.bs.dropdown.data-api", ie = "keydown.bs.dropdown.data-api", oe = '[data-toggle="dropdown"]', re = ".dropdown-menu", ae = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null }, se = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" }, le = function () { function t(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var e = t.prototype; return e.toggle = function () { if (!this._element.disabled && !i.default(this._element).hasClass($t)) { var e = i.default(this._menu).hasClass(Jt); t._clearMenus(), e || this.show(!0) } }, e.show = function (e) { if (void 0 === e && (e = !1), !(this._element.disabled || i.default(this._element).hasClass($t) || i.default(this._menu).hasClass(Jt))) { var n = { relatedTarget: this._element }, o = i.default.Event("show.bs.dropdown", n), r = t._getParentFromElement(this._element); if (i.default(r).trigger(o), !o.isDefaultPrevented()) { if (!this._inNavbar && e) { if ("undefined" == typeof Yt) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); var a = this._element; "parent" === this._config.reference ? a = r : u.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(r).addClass("position-static"), this._popper = new Yt(a, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === i.default(r).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass(Jt), i.default(r).toggleClass(Jt).trigger(i.default.Event("shown.bs.dropdown", n)) } } }, e.hide = function () { if (!this._element.disabled && !i.default(this._element).hasClass($t) && i.default(this._menu).hasClass(Jt)) { var e = { relatedTarget: this._element }, n = i.default.Event(te, e), o = t._getParentFromElement(this._element); i.default(o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass(Jt), i.default(o).toggleClass(Jt).trigger(i.default.Event(ee, e))) } }, e.dispose = function () { i.default.removeData(this._element, Kt), i.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function () { var t = this; i.default(this._element).on("click.bs.dropdown", (function (e) { e.preventDefault(), e.stopPropagation(), t.toggle() })) }, e._getConfig = function (t) { return t = a({}, this.constructor.Default, i.default(this._element).data(), t), u.typeCheckConfig(zt, t, this.constructor.DefaultType), t }, e._getMenuElement = function () { if (!this._menu) { var e = t._getParentFromElement(this._element); e && (this._menu = e.querySelector(re)) } return this._menu }, e._getPlacement = function () { var t = i.default(this._element.parentNode), e = "bottom-start"; return t.hasClass("dropup") ? e = i.default(this._menu).hasClass(Zt) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i.default(this._menu).hasClass(Zt) && (e = "bottom-end"), e }, e._detectNavbar = function () { return i.default(this._element).closest(".navbar").length > 0 }, e._getOffset = function () { var t = this, e = {}; return "function" == typeof this._config.offset ? e.fn = function (e) { return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element)), e } : e.offset = this._config.offset, e }, e._getPopperConfig = function () { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a({}, t, this._config.popperConfig) }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this).data(Kt); if (n || (n = new t(this, "object" == typeof e ? e : null), i.default(this).data(Kt, n)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"'); n[e]() } })) }, t._clearMenus = function (e) { if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = [].slice.call(document.querySelectorAll(oe)), o = 0, r = n.length; o < r; o++) { var a = t._getParentFromElement(n[o]), s = i.default(n[o]).data(Kt), l = { relatedTarget: n[o] }; if (e && "click" === e.type && (l.clickEvent = e), s) { var u = s._menu; if (i.default(a).hasClass(Jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i.default.contains(a, e.target))) { var f = i.default.Event(te, l); i.default(a).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[o].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(u).removeClass(Jt), i.default(a).removeClass(Jt).trigger(i.default.Event(ee, l))) } } } }, t._getParentFromElement = function (t) { var e, n = u.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, t._dataApiKeydownHandler = function (e) { if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i.default(e.target).closest(re).length) : !Gt.test(e.which)) && !this.disabled && !i.default(this).hasClass($t)) { var n = t._getParentFromElement(this), o = i.default(n).hasClass(Jt); if (o || 27 !== e.which) { if (e.preventDefault(), e.stopPropagation(), !o || 27 === e.which || 32 === e.which) return 27 === e.which && i.default(n.querySelector(oe)).trigger("focus"), void i.default(this).trigger("click"); var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (t) { return i.default(t).is(":visible") })); if (0 !== r.length) { var a = r.indexOf(e.target); 38 === e.which && a > 0 && a--, 40 === e.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus() } } } }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return ae } }, { key: "DefaultType", get: function () { return se } }]), t }(); i.default(document).on(ie, oe, le._dataApiKeydownHandler).on(ie, re, le._dataApiKeydownHandler).on(ne + " keyup.bs.dropdown.data-api", le._clearMenus).on(ne, oe, (function (t) { t.preventDefault(), t.stopPropagation(), le._jQueryInterface.call(i.default(this), "toggle") })).on(ne, ".dropdown form", (function (t) { t.stopPropagation() })), i.default.fn[zt] = le._jQueryInterface, i.default.fn[zt].Constructor = le, i.default.fn[zt].noConflict = function () { return i.default.fn[zt] = Xt, le._jQueryInterface }; var ue = "bs.modal", fe = i.default.fn.modal, de = "modal-open", ce = "fade", he = "show", pe = "modal-static", me = "hidden.bs.modal", ge = "show.bs.modal", _e = "focusin.bs.modal", ve = "resize.bs.modal", be = "click.dismiss.bs.modal", ye = "keydown.dismiss.bs.modal", Ee = "mousedown.dismiss.bs.modal", we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Te = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Ce = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Se = function () { function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var e = t.prototype; return e.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, e.show = function (t) { var e = this; if (!this._isShown && !this._isTransitioning) { var n = i.default.Event(ge, { relatedTarget: t }); i.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, i.default(this._element).hasClass(ce) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on(be, '[data-dismiss="modal"]', (function (t) { return e.hide(t) })), i.default(this._dialog).on(Ee, (function () { i.default(e._element).one("mouseup.dismiss.bs.modal", (function (t) { i.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0) })) })), this._showBackdrop((function () { return e._showElement(t) }))) } }, e.hide = function (t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = i.default.Event("hide.bs.modal"); if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var o = i.default(this._element).hasClass(ce); if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off(_e), i.default(this._element).removeClass(he), i.default(this._element).off(be), i.default(this._dialog).off(Ee), o) { var r = u.getTransitionDurationFromElement(this._element); i.default(this._element).one(u.TRANSITION_END, (function (t) { return e._hideModal(t) })).emulateTransitionEnd(r) } else this._hideModal() } } }, e.dispose = function () { [window, this._element, this._dialog].forEach((function (t) { return i.default(t).off(".bs.modal") })), i.default(document).off(_e), i.default.removeData(this._element, ue), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, e.handleUpdate = function () { this._adjustDialog() }, e._getConfig = function (t) { return t = a({}, Te, t), u.typeCheckConfig("modal", t, Ce), t }, e._triggerBackdropTransition = function () { var t = this, e = i.default.Event("hidePrevented.bs.modal"); if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._element.scrollHeight > document.documentElement.clientHeight; n || (this._element.style.overflowY = "hidden"), this._element.classList.add(pe); var o = u.getTransitionDurationFromElement(this._dialog); i.default(this._element).off(u.TRANSITION_END), i.default(this._element).one(u.TRANSITION_END, (function () { t._element.classList.remove(pe), n || i.default(t._element).one(u.TRANSITION_END, (function () { t._element.style.overflowY = "" })).emulateTransitionEnd(t._element, o) })).emulateTransitionEnd(o), this._element.focus() } }, e._showElement = function (t) { var e = this, n = i.default(this._element).hasClass(ce), o = this._dialog ? this._dialog.querySelector(".modal-body") : null; this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && u.reflow(this._element), i.default(this._element).addClass(he), this._config.focus && this._enforceFocus(); var r = i.default.Event("shown.bs.modal", { relatedTarget: t }), a = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, i.default(e._element).trigger(r) }; if (n) { var s = u.getTransitionDurationFromElement(this._dialog); i.default(this._dialog).one(u.TRANSITION_END, a).emulateTransitionEnd(s) } else a() }, e._enforceFocus = function () { var t = this; i.default(document).off(_e).on(_e, (function (e) { document !== e.target && t._element !== e.target && 0 === i.default(t._element).has(e.target).length && t._element.focus() })) }, e._setEscapeEvent = function () { var t = this; this._isShown ? i.default(this._element).on(ye, (function (e) { t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition() })) : this._isShown || i.default(this._element).off(ye) }, e._setResizeEvent = function () { var t = this; this._isShown ? i.default(window).on(ve, (function (e) { return t.handleUpdate(e) })) : i.default(window).off(ve) }, e._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () { i.default(document.body).removeClass(de), t._resetAdjustments(), t._resetScrollbar(), i.default(t._element).trigger(me) })) }, e._removeBackdrop = function () { this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function (t) { var e = this, n = i.default(this._element).hasClass(ce) ? ce : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on(be, (function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide()) })), n && u.reflow(this._backdrop), i.default(this._backdrop).addClass(he), !t) return; if (!n) return void t(); var o = u.getTransitionDurationFromElement(this._backdrop); i.default(this._backdrop).one(u.TRANSITION_END, t).emulateTransitionEnd(o) } else if (!this._isShown && this._backdrop) { i.default(this._backdrop).removeClass(he); var r = function () { e._removeBackdrop(), t && t() }; if (i.default(this._element).hasClass(ce)) { var a = u.getTransitionDurationFromElement(this._backdrop); i.default(this._backdrop).one(u.TRANSITION_END, r).emulateTransitionEnd(a) } else r() } else t && t() }, e._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function () { var t = this; if (this._isBodyOverflowing) { var e = [].slice.call(document.querySelectorAll(we)), n = [].slice.call(document.querySelectorAll(".sticky-top")); i.default(e).each((function (e, n) { var o = n.style.paddingRight, r = i.default(n).css("padding-right"); i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px") })), i.default(n).each((function (e, n) { var o = n.style.marginRight, r = i.default(n).css("margin-right"); i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px") })); var o = document.body.style.paddingRight, r = i.default(document.body).css("padding-right"); i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px") } i.default(document.body).addClass(de) }, e._resetScrollbar = function () { var t = [].slice.call(document.querySelectorAll(we)); i.default(t).each((function (t, e) { var n = i.default(e).data("padding-right"); i.default(e).removeData("padding-right"), e.style.paddingRight = n || "" })); var e = [].slice.call(document.querySelectorAll(".sticky-top")); i.default(e).each((function (t, e) { var n = i.default(e).data("margin-right"); "undefined" != typeof n && i.default(e).css("margin-right", n).removeData("margin-right") })); var n = i.default(document.body).data("padding-right"); i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, e._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = "modal-scrollbar-measure", document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, t._jQueryInterface = function (e, n) { return this.each((function () { var o = i.default(this).data(ue), r = a({}, Te, i.default(this).data(), "object" == typeof e && e ? e : {}); if (o || (o = new t(this, r), i.default(this).data(ue, o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"'); o[e](n) } else r.show && o.show(n) })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return Te } }]), t }(); i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (t) { var e, n = this, o = u.getSelectorFromElement(this); o && (e = document.querySelector(o)); var r = i.default(e).data(ue) ? "toggle" : a({}, i.default(e).data(), i.default(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var s = i.default(e).one(ge, (function (t) { t.isDefaultPrevented() || s.one(me, (function () { i.default(n).is(":visible") && n.focus() })) })); Se._jQueryInterface.call(i.default(e), r, this) })), i.default.fn.modal = Se._jQueryInterface, i.default.fn.modal.Constructor = Se, i.default.fn.modal.noConflict = function () { return i.default.fn.modal = fe, Se._jQueryInterface }; var Ne = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], De = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ae = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i; function ke(t, e, n) { if (0 === t.length) return t; if (n && "function" == typeof n) return n(t); for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function (t, n) { var i = r[t], a = i.nodeName.toLowerCase(); if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue"; var s = [].slice.call(i.attributes), l = [].concat(e["*"] || [], e[a] || []); s.forEach((function (t) { (function (t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === Ne.indexOf(n) || Boolean(De.test(t.nodeValue) || Ae.test(t.nodeValue)); for (var i = e.filter((function (t) { return t instanceof RegExp })), o = 0, r = i.length; o < r; o++)if (i[o].test(n)) return !0; return !1 })(t, l) || i.removeAttribute(t.nodeName) })) }, s = 0, l = r.length; s < l; s++)a(s); return i.body.innerHTML } var Ie = "tooltip", Oe = "bs.tooltip", xe = i.default.fn.tooltip, je = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Le = ["sanitize", "whiteList", "sanitizeFn"], Pe = "fade", Fe = "show", Re = "show", He = "out", Me = "hover", qe = "focus", Be = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Qe = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, We = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" }, Ue = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, Ve = function () { function t(t, e) { if ("undefined" == typeof Yt) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var e = t.prototype; return e.enable = function () { this._isEnabled = !0 }, e.disable = function () { this._isEnabled = !1 }, e.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, e.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = i.default(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (i.default(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this); this._enter(null, this) } }, e.dispose = function () { clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function () { var t = this; if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements"); var e = i.default.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { i.default(this.element).trigger(e); var n = u.findShadowRoot(this.element), o = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (e.isDefaultPrevented() || !o) return; var r = this.getTipElement(), a = u.getUID(this.constructor.NAME); r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i.default(r).addClass(Pe); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement, l = this._getAttachment(s); this.addAttachmentClass(l); var f = this._getContainer(); i.default(r).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(r).appendTo(f), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Yt(this.element, r, this._getPopperConfig(l)), i.default(r).addClass(Fe), i.default(r).addClass(this.config.customClass), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop); var d = function () { t.config.animation && t._fixTransition(); var e = t._hoverState; t._hoverState = null, i.default(t.element).trigger(t.constructor.Event.SHOWN), e === He && t._leave(null, t) }; if (i.default(this.tip).hasClass(Pe)) { var c = u.getTransitionDurationFromElement(this.tip); i.default(this.tip).one(u.TRANSITION_END, d).emulateTransitionEnd(c) } else d() } }, e.hide = function (t) { var e = this, n = this.getTipElement(), o = i.default.Event(this.constructor.Event.HIDE), r = function () { e._hoverState !== Re && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), i.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (i.default(this.element).trigger(o), !o.isDefaultPrevented()) { if (i.default(n).removeClass(Fe), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass(Pe)) { var a = u.getTransitionDurationFromElement(n); i.default(n).one(u.TRANSITION_END, r).emulateTransitionEnd(a) } else r(); this._hoverState = "" } }, e.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function () { return Boolean(this.getTitle()) }, e.addAttachmentClass = function (t) { i.default(this.getTipElement()).addClass("bs-tooltip-" + t) }, e.getTipElement = function () { return this.tip = this.tip || i.default(this.config.template)[0], this.tip }, e.setContent = function () { var t = this.getTipElement(); this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(t).removeClass("fade show") }, e.setElementContent = function (t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = ke(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? i.default(e).parent().is(t) || t.empty().append(e) : t.text(i.default(e).text()) }, e.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, e._getPopperConfig = function (t) { var e = this; return a({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { return e._handlePopperPlacementChange(t) } }, this.config.popperConfig) }, e._getOffset = function () { var t = this, e = {}; return "function" == typeof this.config.offset ? e.fn = function (e) { return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element)), e } : e.offset = this.config.offset, e }, e._getContainer = function () { return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container) }, e._getAttachment = function (t) { return Be[t.toUpperCase()] }, e._setListeners = function () { var t = this; this.config.trigger.split(" ").forEach((function (e) { if ("click" === e) i.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function (e) { return t.toggle(e) })); else if ("manual" !== e) { var n = e === Me ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, o = e === Me ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT; i.default(t.element).on(n, t.config.selector, (function (e) { return t._enter(e) })).on(o, t.config.selector, (function (e) { return t._leave(e) })) } })), this._hideModalHandler = function () { t.element && t.hide() }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, e._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, e._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? qe : Me] = !0), i.default(e.getTipElement()).hasClass(Fe) || e._hoverState === Re ? e._hoverState = Re : (clearTimeout(e._timeout), e._hoverState = Re, e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () { e._hoverState === Re && e.show() }), e.config.delay.show) : e.show()) }, e._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? qe : Me] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () { e._hoverState === He && e.hide() }), e.config.delay.hide) : e.hide()) }, e._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, e._getConfig = function (t) { var e = i.default(this.element).data(); return Object.keys(e).forEach((function (t) { -1 !== Le.indexOf(t) && delete e[t] })), "number" == typeof (t = a({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), u.typeCheckConfig(Ie, t, this.constructor.DefaultType), t.sanitize && (t.template = ke(t.template, t.whiteList, t.sanitizeFn)), t }, e._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, e._cleanTipClass = function () { var t = i.default(this.getTipElement()), e = t.attr("class").match(je); null !== e && e.length && t.removeClass(e.join("")) }, e._handlePopperPlacementChange = function (t) { this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, e._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (i.default(t).removeClass(Pe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this), o = n.data(Oe), r = "object" == typeof e && e; if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this, r), n.data(Oe, o)), "string" == typeof e)) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"'); o[e]() } })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return Qe } }, { key: "NAME", get: function () { return Ie } }, { key: "DATA_KEY", get: function () { return Oe } }, { key: "Event", get: function () { return Ue } }, { key: "EVENT_KEY", get: function () { return ".bs.tooltip" } }, { key: "DefaultType", get: function () { return We } }]), t }(); i.default.fn.tooltip = Ve._jQueryInterface, i.default.fn.tooltip.Constructor = Ve, i.default.fn.tooltip.noConflict = function () { return i.default.fn.tooltip = xe, Ve._jQueryInterface }; var Ye = "bs.popover", ze = i.default.fn.popover, Ke = new RegExp("(^|\\s)bs-popover\\S+", "g"), Xe = a({}, Ve.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ge = a({}, Ve.DefaultType, { content: "(string|element|function)" }), $e = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }, Je = function (t) { var e, n; function o() { return t.apply(this, arguments) || this } n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, s(e, n); var a = o.prototype; return a.isWithContent = function () { return this.getTitle() || this._getContent() }, a.addAttachmentClass = function (t) { i.default(this.getTipElement()).addClass("bs-popover-" + t) }, a.getTipElement = function () { return this.tip = this.tip || i.default(this.config.template)[0], this.tip }, a.setContent = function () { var t = i.default(this.getTipElement()); this.setElementContent(t.find(".popover-header"), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show") }, a._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, a._cleanTipClass = function () { var t = i.default(this.getTipElement()), e = t.attr("class").match(Ke); null !== e && e.length > 0 && t.removeClass(e.join("")) }, o._jQueryInterface = function (t) { return this.each((function () { var e = i.default(this).data(Ye), n = "object" == typeof t ? t : null; if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), i.default(this).data(Ye, e)), "string" == typeof t)) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"'); e[t]() } })) }, r(o, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return Xe } }, { key: "NAME", get: function () { return "popover" } }, { key: "DATA_KEY", get: function () { return Ye } }, { key: "Event", get: function () { return $e } }, { key: "EVENT_KEY", get: function () { return ".bs.popover" } }, { key: "DefaultType", get: function () { return Ge } }]), o }(Ve); i.default.fn.popover = Je._jQueryInterface, i.default.fn.popover.Constructor = Je, i.default.fn.popover.noConflict = function () { return i.default.fn.popover = ze, Je._jQueryInterface }; var Ze = "scrollspy", tn = "bs.scrollspy", en = i.default.fn[Ze], nn = "active", on = "position", rn = ".nav, .list-group", an = { offset: 10, method: "auto", target: "" }, sn = { offset: "number", method: "string", target: "(string|element)" }, ln = function () { function t(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", (function (t) { return n._process(t) })), this.refresh(), this._process() } var e = t.prototype; return e.refresh = function () { var t = this, e = this._scrollElement === this._scrollElement.window ? "offset" : on, n = "auto" === this._config.method ? e : this._config.method, o = n === on ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (t) { var e, r = u.getSelectorFromElement(t); if (r && (e = document.querySelector(r)), e) { var a = e.getBoundingClientRect(); if (a.width || a.height) return [i.default(e)[n]().top + o, r] } return null })).filter((function (t) { return t })).sort((function (t, e) { return t[0] - e[0] })).forEach((function (e) { t._offsets.push(e[0]), t._targets.push(e[1]) })) }, e.dispose = function () { i.default.removeData(this._element, tn), i.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function (t) { if ("string" != typeof (t = a({}, an, "object" == typeof t && t ? t : {})).target && u.isElement(t.target)) { var e = i.default(t.target).attr("id"); e || (e = u.getUID(Ze), i.default(t.target).attr("id", e)), t.target = "#" + e } return u.typeCheckConfig(Ze, t, sn), t }, e._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;)this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } }, e._activate = function (t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",").map((function (e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' })), n = i.default([].slice.call(document.querySelectorAll(e.join(",")))); n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(nn), n.addClass(nn)) : (n.addClass(nn), n.parents(rn).prev(".nav-link, .list-group-item").addClass(nn), n.parents(rn).prev(".nav-item").children(".nav-link").addClass(nn)), i.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t }) }, e._clear = function () { [].slice.call(document.querySelectorAll(this._selector)).filter((function (t) { return t.classList.contains(nn) })).forEach((function (t) { return t.classList.remove(nn) })) }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this).data(tn); if (n || (n = new t(this, "object" == typeof e && e), i.default(this).data(tn, n)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"'); n[e]() } })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "Default", get: function () { return an } }]), t }(); i.default(window).on("load.bs.scrollspy.data-api", (function () { for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) { var n = i.default(t[e]); ln._jQueryInterface.call(n, n.data()) } })), i.default.fn[Ze] = ln._jQueryInterface, i.default.fn[Ze].Constructor = ln, i.default.fn[Ze].noConflict = function () { return i.default.fn[Ze] = en, ln._jQueryInterface }; var un = "bs.tab", fn = i.default.fn.tab, dn = "active", cn = "fade", hn = "show", pn = ".active", mn = "> li > .active", gn = function () { function t(t) { this._element = t } var e = t.prototype; return e.show = function () { var t = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass(dn) || i.default(this._element).hasClass("disabled"))) { var e, n, o = i.default(this._element).closest(".nav, .list-group")[0], r = u.getSelectorFromElement(this._element); if (o) { var a = "UL" === o.nodeName || "OL" === o.nodeName ? mn : pn; n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1] } var s = i.default.Event("hide.bs.tab", { relatedTarget: this._element }), l = i.default.Event("show.bs.tab", { relatedTarget: n }); if (n && i.default(n).trigger(s), i.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) { r && (e = document.querySelector(r)), this._activate(this._element, o); var f = function () { var e = i.default.Event("hidden.bs.tab", { relatedTarget: t._element }), o = i.default.Event("shown.bs.tab", { relatedTarget: n }); i.default(n).trigger(e), i.default(t._element).trigger(o) }; e ? this._activate(e, e.parentNode, f) : f() } } }, e.dispose = function () { i.default.removeData(this._element, un), this._element = null }, e._activate = function (t, e, n) { var o = this, r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.default(e).children(pn) : i.default(e).find(mn))[0], a = n && r && i.default(r).hasClass(cn), s = function () { return o._transitionComplete(t, r, n) }; if (r && a) { var l = u.getTransitionDurationFromElement(r); i.default(r).removeClass(hn).one(u.TRANSITION_END, s).emulateTransitionEnd(l) } else s() }, e._transitionComplete = function (t, e, n) { if (e) { i.default(e).removeClass(dn); var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0]; o && i.default(o).removeClass(dn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } i.default(t).addClass(dn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u.reflow(t), t.classList.contains(cn) && t.classList.add(hn); var r = t.parentNode; if (r && "LI" === r.nodeName && (r = r.parentNode), r && i.default(r).hasClass("dropdown-menu")) { var a = i.default(t).closest(".dropdown")[0]; if (a) { var s = [].slice.call(a.querySelectorAll(".dropdown-toggle")); i.default(s).addClass(dn) } t.setAttribute("aria-expanded", !0) } n && n() }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this), o = n.data(un); if (o || (o = new t(this), n.data(un, o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"'); o[e]() } })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }]), t }(); i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (t) { t.preventDefault(), gn._jQueryInterface.call(i.default(this), "show") })), i.default.fn.tab = gn._jQueryInterface, i.default.fn.tab.Constructor = gn, i.default.fn.tab.noConflict = function () { return i.default.fn.tab = fn, gn._jQueryInterface }; var _n = "bs.toast", vn = i.default.fn.toast, bn = "hide", yn = "show", En = "showing", wn = "click.dismiss.bs.toast", Tn = { animation: !0, autohide: !0, delay: 500 }, Cn = { animation: "boolean", autohide: "boolean", delay: "number" }, Sn = function () { function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var e = t.prototype; return e.show = function () { var t = this, e = i.default.Event("show.bs.toast"); if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) { this._clearTimeout(), this._config.animation && this._element.classList.add("fade"); var n = function () { t._element.classList.remove(En), t._element.classList.add(yn), i.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () { t.hide() }), t._config.delay)) }; if (this._element.classList.remove(bn), u.reflow(this._element), this._element.classList.add(En), this._config.animation) { var o = u.getTransitionDurationFromElement(this._element); i.default(this._element).one(u.TRANSITION_END, n).emulateTransitionEnd(o) } else n() } }, e.hide = function () { if (this._element.classList.contains(yn)) { var t = i.default.Event("hide.bs.toast"); i.default(this._element).trigger(t), t.isDefaultPrevented() || this._close() } }, e.dispose = function () { this._clearTimeout(), this._element.classList.contains(yn) && this._element.classList.remove(yn), i.default(this._element).off(wn), i.default.removeData(this._element, _n), this._element = null, this._config = null }, e._getConfig = function (t) { return t = a({}, Tn, i.default(this._element).data(), "object" == typeof t && t ? t : {}), u.typeCheckConfig("toast", t, this.constructor.DefaultType), t }, e._setListeners = function () { var t = this; i.default(this._element).on(wn, '[data-dismiss="toast"]', (function () { return t.hide() })) }, e._close = function () { var t = this, e = function () { t._element.classList.add(bn), i.default(t._element).trigger("hidden.bs.toast") }; if (this._element.classList.remove(yn), this._config.animation) { var n = u.getTransitionDurationFromElement(this._element); i.default(this._element).one(u.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, e._clearTimeout = function () { clearTimeout(this._timeout), this._timeout = null }, t._jQueryInterface = function (e) { return this.each((function () { var n = i.default(this), o = n.data(_n); if (o || (o = new t(this, "object" == typeof e && e), n.data(_n, o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"'); o[e](this) } })) }, r(t, null, [{ key: "VERSION", get: function () { return "4.6.1" } }, { key: "DefaultType", get: function () { return Cn } }, { key: "Default", get: function () { return Tn } }]), t }(); i.default.fn.toast = Sn._jQueryInterface, i.default.fn.toast.Constructor = Sn, i.default.fn.toast.noConflict = function () { return i.default.fn.toast = vn, Sn._jQueryInterface }, t.Alert = c, t.Button = b, t.Carousel = O, t.Collapse = W, t.Dropdown = le, t.Modal = Se, t.Popover = Je, t.Scrollspy = ln, t.Tab = gn, t.Toast = Sn, t.Tooltip = Ve, t.Util = u, Object.defineProperty(t, "__esModule", { value: !0 }) }));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/**
 * jquery-match-height master by @liabru
 * http://brm.io/jquery-match-height/
 * License: MIT
 */

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});
/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function () { 'use strict'; function e(e) { return e && '[object Function]' === {}.toString.call(e) } function t(e, t) { if (1 !== e.nodeType) return []; var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null); return t ? n[t] : n } function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host } function n(e) { if (!e) return document.body; switch (e.nodeName) { case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body; }var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) } function i(e) { return e && e.referenceNode ? e.referenceNode : e } function r(e) { return 11 === e ? re : 10 === e ? pe : re || pe } function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement } function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) } function d(e) { return null === e.parentNode ? e : d(e.parentNode) } function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange(); r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) } function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] } function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e } function m(e, t) { var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width']) } function h(e, t, o, n) { return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0) } function c(e) { var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o); return { height: h('Height', t, o, n), width: h('Width', t, o, n) } } function g(e) { return le({}, e, { right: e.left + e.width, bottom: e.top + e.height }) } function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'), i = l(e, 'left'); o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) { } var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top }, s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.width, a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a; if (f || h) { var u = t(e); f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) } function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth), c = parseFloat(m.borderLeftWidth); i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var w = parseFloat(m.marginTop), y = parseFloat(m.marginLeft); b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b } function w(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'), d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) } function y(e) { var n = e.nodeName; if ('BODY' === n || 'HTML' === n) return !1; if ('fixed' === t(e, 'position')) return !0; var i = o(e); return !!i && y(i) } function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');)o = o.parentElement; return o || document.documentElement } function v(e, t, r, p) { var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = { top: 0, left: 0 }, l = s ? E(e) : a(e, i(t)); if ('viewport' === p) d = w(l, s); else { var f; 'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p; var m = b(f, l, s); if ('HTML' === f.nodeName && !y(l)) { var h = c(e.ownerDocument), g = h.height, u = h.width; d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left } else d = m } r = r || 0; var v = 'number' == typeof r; return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d } function x(e) { var t = e.width, o = e.height; return t * o } function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i), s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } }, d = Object.keys(s).map(function (e) { return le({ key: e }, s[e], { area: x(s[e]) }) }).sort(function (e, t) { return t.area - e.area }), a = d.filter(function (e) { var t = e.width, n = e.height; return t >= o.clientWidth && n >= o.clientHeight }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1]; return l + (f ? '-' + f : '') } function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E(t) : a(t, i(o)); return b(o, r, n) } function S(e) { var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = { width: e.offsetWidth + i, height: e.offsetHeight + n }; return r } function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function (e) { return t[e] }) } function C(e, t, o) { o = o.split('-')[0]; var n = S(e), i = { width: n.width, height: n.height }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i } function D(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] } function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function (e) { return e[t] === o }); var n = D(e, function (e) { return e[t] === o }); return e.indexOf(n) } function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function (t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn; t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o } function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } } function W(e, t) { return e.some(function (e) { var o = e.name, n = e.enabled; return n && o === t }) } function B(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n], r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null } function H() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window } function M(e, t, o, i) { var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e; p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) } function F(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o } function I() { this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate)) } function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t } function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) } function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) } function V(e, t) { Object.keys(t).forEach(function (o) { var n = ''; -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) } function j(e, t) { Object.keys(t).forEach(function (o) { var n = t[o]; !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) } function q(e, t) { var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) { return e }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement), l = -1 !== e.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p; return { left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right) } } function K(e, t, o) { var n = D(e, function (e) { var o = e.name; return o === t }), i = !!n && e.some(function (e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i } function z(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e } function G(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e), n = he.slice(o + 1).concat(he.slice(0, o)); return t ? n.reverse() : n } function _(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) { case '%p': s = o; break; case '%': case '%r': default: s = n; }var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r } function X(e, t, o, n) { var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) { return e.trim() }), s = p.indexOf(D(p, function (e) { return -1 !== e.search(/,|\s/) })); p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1; return e.reduce(function (e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function (e) { return _(e, i, t, o) }) }), a.forEach(function (e, t) { e.forEach(function (o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i } function J(e, t) { var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator, oe = function () { for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1; return 0 }(), ne = te && window.Promise, ie = ne ? function (e) { var t = !1; return function () { t || (t = !0, window.Promise.resolve().then(function () { t = !1, e() })) } } : function (e) { var t = !1; return function () { t || (t = !0, setTimeout(function () { t = !1, e() }, oe)) } }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') }, de = function () { function e(e, t) { for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function (t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(), ae = function (e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }, le = Object.assign || function (e) { for (var t, o = 1; o < arguments.length; o++)for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }, fe = te && /Firefox/i.test(navigator.userAgent), me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], he = me.slice(3), ce = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }, ge = function () { function t(o, n) { var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; se(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(i.update) }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) { i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) { return le({ name: e }, i.options.modifiers[e]) }).sort(function (e, t) { return e.order - t.order }), this.modifiers.forEach(function (t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p } return de(t, [{ key: 'update', value: function () { return k.call(this) } }, { key: 'destroy', value: function () { return H.call(this) } }, { key: 'enableEventListeners', value: function () { return I.call(this) } }, { key: 'disableEventListeners', value: function () { return U.call(this) } }]), t }(); return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = t.split('-')[1]; if (n) { var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) }; e.offsets.popper = le({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (e, t) { var o = t.boundariesElement || p(e.instance.popper); e.instance.reference === o && (o = p(o)); var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n]; i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed); i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority, f = e.offsets.popper, m = { primary: function (e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o) }, secondary: function (e) { var o = 'right' === e ? 'left' : 'top', n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n) } }; return l.forEach(function (e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'; f = le({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function (e) { var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function (e, o) { var n; if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l]; d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f]), E = parseFloat(w['border' + f + 'Width']), v = b - e.offsets.popper[m] - y - E; return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function (e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = []; switch (t.behavior) { case ce.FLIP: p = [n, i]; break; case ce.CLOCKWISE: p = G(n); break; case ce.COUNTERCLOCKWISE: p = G(n, !0); break; default: p = t.behavior; }return p.forEach(function (s, d) { if (n !== s || p.length === d + 1) return e; n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, w = -1 !== ['top', 'bottom'].indexOf(n), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u), E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g), v = y || E; (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport', flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function (e) { if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e; e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e; e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function (e, t) { var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) { return 'applyStyle' === e.name }).gpuAcceleration; void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = { position: i.position }, h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform'); if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else { var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1; m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function (e) { return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e }, onLoad: function (e, t, o, n, i) { var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), V(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ge });
//# sourceMappingURL=popper.min.js.map
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
; (function (factory) {
   'use strict';
   if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
   } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
   } else {
      factory(jQuery);
   }

}(function ($) {
   'use strict';
   var Slick = window.Slick || {};

   Slick = (function () {

      var instanceUid = 0;

      function Slick(element, settings) {

         var _ = this, dataSettings;

         _.defaults = {
            accessibility: true,
            adaptiveHeight: false,
            appendArrows: $(element),
            appendDots: $(element),
            arrows: true,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: false,
            autoplaySpeed: 3000,
            centerMode: false,
            centerPadding: '50px',
            cssEase: 'ease',
            customPaging: function (slider, i) {
               return $('<button type="button" />').text(i + 1);
            },
            dots: false,
            dotsClass: 'slick-dots',
            draggable: true,
            easing: 'linear',
            edgeFriction: 0.35,
            fade: false,
            focusOnSelect: false,
            focusOnChange: false,
            infinite: true,
            initialSlide: 0,
            lazyLoad: 'ondemand',
            mobileFirst: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            pauseOnDotsHover: false,
            respondTo: 'window',
            responsive: null,
            rows: 1,
            rtl: false,
            slide: '',
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            touchThreshold: 5,
            useCSS: true,
            useTransform: true,
            variableWidth: false,
            vertical: false,
            verticalSwiping: false,
            waitForAnimate: true,
            zIndex: 1000
         };

         _.initials = {
            animating: false,
            dragging: false,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: false,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: false,
            slideOffset: 0,
            swipeLeft: null,
            swiping: false,
            $list: null,
            touchObject: {},
            transformsEnabled: false,
            unslicked: false
         };

         $.extend(_, _.initials);

         _.activeBreakpoint = null;
         _.animType = null;
         _.animProp = null;
         _.breakpoints = [];
         _.breakpointSettings = [];
         _.cssTransitions = false;
         _.focussed = false;
         _.interrupted = false;
         _.hidden = 'hidden';
         _.paused = true;
         _.positionProp = null;
         _.respondTo = null;
         _.rowCount = 1;
         _.shouldClick = true;
         _.$slider = $(element);
         _.$slidesCache = null;
         _.transformType = null;
         _.transitionType = null;
         _.visibilityChange = 'visibilitychange';
         _.windowWidth = 0;
         _.windowTimer = null;

         dataSettings = $(element).data('slick') || {};

         _.options = $.extend({}, _.defaults, settings, dataSettings);

         _.currentSlide = _.options.initialSlide;

         _.originalSettings = _.options;

         if (typeof document.mozHidden !== 'undefined') {
            _.hidden = 'mozHidden';
            _.visibilityChange = 'mozvisibilitychange';
         } else if (typeof document.webkitHidden !== 'undefined') {
            _.hidden = 'webkitHidden';
            _.visibilityChange = 'webkitvisibilitychange';
         }

         _.autoPlay = $.proxy(_.autoPlay, _);
         _.autoPlayClear = $.proxy(_.autoPlayClear, _);
         _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
         _.changeSlide = $.proxy(_.changeSlide, _);
         _.clickHandler = $.proxy(_.clickHandler, _);
         _.selectHandler = $.proxy(_.selectHandler, _);
         _.setPosition = $.proxy(_.setPosition, _);
         _.swipeHandler = $.proxy(_.swipeHandler, _);
         _.dragHandler = $.proxy(_.dragHandler, _);
         _.keyHandler = $.proxy(_.keyHandler, _);

         _.instanceUid = instanceUid++;

         // A simple way to check for HTML strings
         // Strict HTML recognition (must start with <)
         // Extracted from jQuery v1.11 source
         _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


         _.registerBreakpoints();
         _.init(true);

      }

      return Slick;

   }());

   Slick.prototype.activateADA = function () {
      var _ = this;

      _.$slideTrack.find('.slick-active').attr({
         'aria-hidden': 'false'
      }).find('a, input, button, select').attr({
         'tabindex': '0'
      });

   };

   Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

      var _ = this;

      if (typeof (index) === 'boolean') {
         addBefore = index;
         index = null;
      } else if (index < 0 || (index >= _.slideCount)) {
         return false;
      }

      _.unload();

      if (typeof (index) === 'number') {
         if (index === 0 && _.$slides.length === 0) {
            $(markup).appendTo(_.$slideTrack);
         } else if (addBefore) {
            $(markup).insertBefore(_.$slides.eq(index));
         } else {
            $(markup).insertAfter(_.$slides.eq(index));
         }
      } else {
         if (addBefore === true) {
            $(markup).prependTo(_.$slideTrack);
         } else {
            $(markup).appendTo(_.$slideTrack);
         }
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slides.each(function (index, element) {
         $(element).attr('data-slick-index', index);
      });

      _.$slidesCache = _.$slides;

      _.reinit();

   };

   Slick.prototype.animateHeight = function () {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
         var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
         _.$list.animate({
            height: targetHeight
         }, _.options.speed);
      }
   };

   Slick.prototype.animateSlide = function (targetLeft, callback) {

      var animProps = {},
         _ = this;

      _.animateHeight();

      if (_.options.rtl === true && _.options.vertical === false) {
         targetLeft = -targetLeft;
      }
      if (_.transformsEnabled === false) {
         if (_.options.vertical === false) {
            _.$slideTrack.animate({
               left: targetLeft
            }, _.options.speed, _.options.easing, callback);
         } else {
            _.$slideTrack.animate({
               top: targetLeft
            }, _.options.speed, _.options.easing, callback);
         }

      } else {

         if (_.cssTransitions === false) {
            if (_.options.rtl === true) {
               _.currentLeft = -(_.currentLeft);
            }
            $({
               animStart: _.currentLeft
            }).animate({
               animStart: targetLeft
            }, {
               duration: _.options.speed,
               easing: _.options.easing,
               step: function (now) {
                  now = Math.ceil(now);
                  if (_.options.vertical === false) {
                     animProps[_.animType] = 'translate(' +
                        now + 'px, 0px)';
                     _.$slideTrack.css(animProps);
                  } else {
                     animProps[_.animType] = 'translate(0px,' +
                        now + 'px)';
                     _.$slideTrack.css(animProps);
                  }
               },
               complete: function () {
                  if (callback) {
                     callback.call();
                  }
               }
            });

         } else {

            _.applyTransition();
            targetLeft = Math.ceil(targetLeft);

            if (_.options.vertical === false) {
               animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
            } else {
               animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
            }
            _.$slideTrack.css(animProps);

            if (callback) {
               setTimeout(function () {

                  _.disableTransition();

                  callback.call();
               }, _.options.speed);
            }

         }

      }

   };

   Slick.prototype.getNavTarget = function () {

      var _ = this,
         asNavFor = _.options.asNavFor;

      if (asNavFor && asNavFor !== null) {
         asNavFor = $(asNavFor).not(_.$slider);
      }

      return asNavFor;

   };

   Slick.prototype.asNavFor = function (index) {

      var _ = this,
         asNavFor = _.getNavTarget();

      if (asNavFor !== null && typeof asNavFor === 'object') {
         asNavFor.each(function () {
            var target = $(this).slick('getSlick');
            if (!target.unslicked) {
               target.slideHandler(index, true);
            }
         });
      }

   };

   Slick.prototype.applyTransition = function (slide) {

      var _ = this,
         transition = {};

      if (_.options.fade === false) {
         transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
      } else {
         transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
      }

      if (_.options.fade === false) {
         _.$slideTrack.css(transition);
      } else {
         _.$slides.eq(slide).css(transition);
      }

   };

   Slick.prototype.autoPlay = function () {

      var _ = this;

      _.autoPlayClear();

      if (_.slideCount > _.options.slidesToShow) {
         _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
      }

   };

   Slick.prototype.autoPlayClear = function () {

      var _ = this;

      if (_.autoPlayTimer) {
         clearInterval(_.autoPlayTimer);
      }

   };

   Slick.prototype.autoPlayIterator = function () {

      var _ = this,
         slideTo = _.currentSlide + _.options.slidesToScroll;

      if (!_.paused && !_.interrupted && !_.focussed) {

         if (_.options.infinite === false) {

            if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
               _.direction = 0;
            }

            else if (_.direction === 0) {

               slideTo = _.currentSlide - _.options.slidesToScroll;

               if (_.currentSlide - 1 === 0) {
                  _.direction = 1;
               }

            }

         }

         _.slideHandler(slideTo);

      }

   };

   Slick.prototype.buildArrows = function () {

      var _ = this;

      if (_.options.arrows === true) {

         _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
         _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

         if (_.slideCount > _.options.slidesToShow) {

            _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
            _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

            if (_.htmlExpr.test(_.options.prevArrow)) {
               _.$prevArrow.prependTo(_.options.appendArrows);
            }

            if (_.htmlExpr.test(_.options.nextArrow)) {
               _.$nextArrow.appendTo(_.options.appendArrows);
            }

            if (_.options.infinite !== true) {
               _.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true');
            }

         } else {

            _.$prevArrow.add(_.$nextArrow)

               .addClass('slick-hidden')
               .attr({
                  'aria-disabled': 'true',
                  'tabindex': '-1'
               });

         }

      }

   };

   Slick.prototype.buildDots = function () {

      var _ = this,
         i, dot;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

         _.$slider.addClass('slick-dotted');

         dot = $('<ul />').addClass(_.options.dotsClass);

         for (i = 0; i <= _.getDotCount(); i += 1) {
            dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
         }

         _.$dots = dot.appendTo(_.options.appendDots);

         _.$dots.find('li').first().addClass('slick-active');

      }

   };

   Slick.prototype.buildOut = function () {

      var _ = this;

      _.$slides =
         _.$slider
            .children(_.options.slide + ':not(.slick-cloned)')
            .addClass('slick-slide');

      _.slideCount = _.$slides.length;

      _.$slides.each(function (index, element) {
         $(element)
            .attr('data-slick-index', index)
            .data('originalStyling', $(element).attr('style') || '');
      });

      _.$slider.addClass('slick-slider');

      _.$slideTrack = (_.slideCount === 0) ?
         $('<div class="slick-track"/>').appendTo(_.$slider) :
         _.$slides.wrapAll('<div class="slick-track"/>').parent();

      _.$list = _.$slideTrack.wrap(
         '<div class="slick-list"/>').parent();
      _.$slideTrack.css('opacity', 0);

      if (_.options.centerMode === true || _.options.swipeToSlide === true) {
         _.options.slidesToScroll = 1;
      }

      $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

      _.setupInfinite();

      _.buildArrows();

      _.buildDots();

      _.updateDots();


      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

      if (_.options.draggable === true) {
         _.$list.addClass('draggable');
      }

   };

   Slick.prototype.buildRows = function () {

      var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

      newSlides = document.createDocumentFragment();
      originalSlides = _.$slider.children();

      if (_.options.rows > 0) {

         slidesPerSection = _.options.slidesPerRow * _.options.rows;
         numOfSlides = Math.ceil(
            originalSlides.length / slidesPerSection
         );

         for (a = 0; a < numOfSlides; a++) {
            var slide = document.createElement('div');
            for (b = 0; b < _.options.rows; b++) {
               var row = document.createElement('div');
               for (c = 0; c < _.options.slidesPerRow; c++) {
                  var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                  if (originalSlides.get(target)) {
                     row.appendChild(originalSlides.get(target));
                  }
               }
               slide.appendChild(row);
            }
            newSlides.appendChild(slide);
         }

         _.$slider.empty().append(newSlides);
         _.$slider.children().children().children()
            .css({
               'width': (100 / _.options.slidesPerRow) + '%',
               'display': 'inline-block'
            });

      }

   };

   Slick.prototype.checkResponsive = function (initial, forceUpdate) {

      var _ = this,
         breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
      var sliderWidth = _.$slider.width();
      var windowWidth = window.innerWidth || $(window).width();

      if (_.respondTo === 'window') {
         respondToWidth = windowWidth;
      } else if (_.respondTo === 'slider') {
         respondToWidth = sliderWidth;
      } else if (_.respondTo === 'min') {
         respondToWidth = Math.min(windowWidth, sliderWidth);
      }

      if (_.options.responsive &&
         _.options.responsive.length &&
         _.options.responsive !== null) {

         targetBreakpoint = null;

         for (breakpoint in _.breakpoints) {
            if (_.breakpoints.hasOwnProperty(breakpoint)) {
               if (_.originalSettings.mobileFirst === false) {
                  if (respondToWidth < _.breakpoints[breakpoint]) {
                     targetBreakpoint = _.breakpoints[breakpoint];
                  }
               } else {
                  if (respondToWidth > _.breakpoints[breakpoint]) {
                     targetBreakpoint = _.breakpoints[breakpoint];
                  }
               }
            }
         }

         if (targetBreakpoint !== null) {
            if (_.activeBreakpoint !== null) {
               if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                  _.activeBreakpoint =
                     targetBreakpoint;
                  if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                     _.unslick(targetBreakpoint);
                  } else {
                     _.options = $.extend({}, _.originalSettings,
                        _.breakpointSettings[
                        targetBreakpoint]);
                     if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                     }
                     _.refresh(initial);
                  }
                  triggerBreakpoint = targetBreakpoint;
               }
            } else {
               _.activeBreakpoint = targetBreakpoint;
               if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                  _.unslick(targetBreakpoint);
               } else {
                  _.options = $.extend({}, _.originalSettings,
                     _.breakpointSettings[
                     targetBreakpoint]);
                  if (initial === true) {
                     _.currentSlide = _.options.initialSlide;
                  }
                  _.refresh(initial);
               }
               triggerBreakpoint = targetBreakpoint;
            }
         } else {
            if (_.activeBreakpoint !== null) {
               _.activeBreakpoint = null;
               _.options = _.originalSettings;
               if (initial === true) {
                  _.currentSlide = _.options.initialSlide;
               }
               _.refresh(initial);
               triggerBreakpoint = targetBreakpoint;
            }
         }

         // only trigger breakpoints during an actual break. not on initialize.
         if (!initial && triggerBreakpoint !== false) {
            _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
         }
      }

   };

   Slick.prototype.changeSlide = function (event, dontAnimate) {

      var _ = this,
         $target = $(event.currentTarget),
         indexOffset, slideOffset, unevenOffset;

      // If target is a link, prevent default action.
      if ($target.is('a')) {
         event.preventDefault();
      }

      // If target is not the <li> element (ie: a child), find the <li>.
      if (!$target.is('li')) {
         $target = $target.closest('li');
      }

      unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
      indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

      switch (event.data.message) {

         case 'previous':
            slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
            if (_.slideCount > _.options.slidesToShow) {
               _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
            }
            break;

         case 'next':
            slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
            if (_.slideCount > _.options.slidesToShow) {
               _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
            }
            break;

         case 'index':
            var index = event.data.index === 0 ? 0 :
               event.data.index || $target.index() * _.options.slidesToScroll;

            _.slideHandler(_.checkNavigable(index), false, dontAnimate);
            $target.children().trigger('focus');
            break;

         default:
            return;
      }

   };

   Slick.prototype.checkNavigable = function (index) {

      var _ = this,
         navigables, prevNavigable;

      navigables = _.getNavigableIndexes();
      prevNavigable = 0;
      if (index > navigables[navigables.length - 1]) {
         index = navigables[navigables.length - 1];
      } else {
         for (var n in navigables) {
            if (index < navigables[n]) {
               index = prevNavigable;
               break;
            }
            prevNavigable = navigables[n];
         }
      }

      return index;
   };

   Slick.prototype.cleanUpEvents = function () {

      var _ = this;

      if (_.options.dots && _.$dots !== null) {

         $('li', _.$dots)
            .off('click.slick', _.changeSlide)
            .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
            .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

         if (_.options.accessibility === true) {
            _.$dots.off('keydown.slick', _.keyHandler);
         }
      }

      _.$slider.off('focus.slick blur.slick');

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
         _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
         _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

         if (_.options.accessibility === true) {
            _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
            _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
         }
      }

      _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
      _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
      _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
      _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

      _.$list.off('click.slick', _.clickHandler);

      $(document).off(_.visibilityChange, _.visibility);

      _.cleanUpSlideEvents();

      if (_.options.accessibility === true) {
         _.$list.off('keydown.slick', _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
         $(_.$slideTrack).children().off('click.slick', _.selectHandler);
      }

      $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

      $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

      $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

      $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

   };

   Slick.prototype.cleanUpSlideEvents = function () {

      var _ = this;

      _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

   };

   Slick.prototype.cleanUpRows = function () {

      var _ = this, originalSlides;

      if (_.options.rows > 0) {
         originalSlides = _.$slides.children().children();
         originalSlides.removeAttr('style');
         _.$slider.empty().append(originalSlides);
      }

   };

   Slick.prototype.clickHandler = function (event) {

      var _ = this;

      if (_.shouldClick === false) {
         event.stopImmediatePropagation();
         event.stopPropagation();
         event.preventDefault();
      }

   };

   Slick.prototype.destroy = function (refresh) {

      var _ = this;

      _.autoPlayClear();

      _.touchObject = {};

      _.cleanUpEvents();

      $('.slick-cloned', _.$slider).detach();

      if (_.$dots) {
         _.$dots.remove();
      }

      if (_.$prevArrow && _.$prevArrow.length) {

         _.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', '');

         if (_.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
         }
      }

      if (_.$nextArrow && _.$nextArrow.length) {

         _.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', '');

         if (_.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
         }
      }


      if (_.$slides) {

         _.$slides
            .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function () {
               $(this).attr('style', $(this).data('originalStyling'));
            });

         _.$slideTrack.children(this.options.slide).detach();

         _.$slideTrack.detach();

         _.$list.detach();

         _.$slider.append(_.$slides);
      }

      _.cleanUpRows();

      _.$slider.removeClass('slick-slider');
      _.$slider.removeClass('slick-initialized');
      _.$slider.removeClass('slick-dotted');

      _.unslicked = true;

      if (!refresh) {
         _.$slider.trigger('destroy', [_]);
      }

   };

   Slick.prototype.disableTransition = function (slide) {

      var _ = this,
         transition = {};

      transition[_.transitionType] = '';

      if (_.options.fade === false) {
         _.$slideTrack.css(transition);
      } else {
         _.$slides.eq(slide).css(transition);
      }

   };

   Slick.prototype.fadeSlide = function (slideIndex, callback) {

      var _ = this;

      if (_.cssTransitions === false) {

         _.$slides.eq(slideIndex).css({
            zIndex: _.options.zIndex
         });

         _.$slides.eq(slideIndex).animate({
            opacity: 1
         }, _.options.speed, _.options.easing, callback);

      } else {

         _.applyTransition(slideIndex);

         _.$slides.eq(slideIndex).css({
            opacity: 1,
            zIndex: _.options.zIndex
         });

         if (callback) {
            setTimeout(function () {

               _.disableTransition(slideIndex);

               callback.call();
            }, _.options.speed);
         }

      }

   };

   Slick.prototype.fadeSlideOut = function (slideIndex) {

      var _ = this;

      if (_.cssTransitions === false) {

         _.$slides.eq(slideIndex).animate({
            opacity: 0,
            zIndex: _.options.zIndex - 2
         }, _.options.speed, _.options.easing);

      } else {

         _.applyTransition(slideIndex);

         _.$slides.eq(slideIndex).css({
            opacity: 0,
            zIndex: _.options.zIndex - 2
         });

      }

   };

   Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

      var _ = this;

      if (filter !== null) {

         _.$slidesCache = _.$slides;

         _.unload();

         _.$slideTrack.children(this.options.slide).detach();

         _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

         _.reinit();

      }

   };

   Slick.prototype.focusHandler = function () {

      var _ = this;

      // If any child element receives focus within the slider we need to pause the autoplay
      _.$slider
         .off('focus.slick blur.slick')
         .on(
            'focus.slick',
            '*',
            function (event) {
               var $sf = $(this);

               setTimeout(function () {
                  if (_.options.pauseOnFocus) {
                     if ($sf.is(':focus')) {
                        _.focussed = true;
                        _.autoPlay();
                     }
                  }
               }, 0);
            }
         ).on(
            'blur.slick',
            '*',
            function (event) {
               var $sf = $(this);

               // When a blur occurs on any elements within the slider we become unfocused
               if (_.options.pauseOnFocus) {
                  _.focussed = false;
                  _.autoPlay();
               }
            }
         );
   };

   Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

      var _ = this;
      return _.currentSlide;

   };

   Slick.prototype.getDotCount = function () {

      var _ = this;

      var breakPoint = 0;
      var counter = 0;
      var pagerQty = 0;

      if (_.options.infinite === true) {
         if (_.slideCount <= _.options.slidesToShow) {
            ++pagerQty;
         } else {
            while (breakPoint < _.slideCount) {
               ++pagerQty;
               breakPoint = counter + _.options.slidesToScroll;
               counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
         }
      } else if (_.options.centerMode === true) {
         pagerQty = _.slideCount;
      } else if (!_.options.asNavFor) {
         pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
      } else {
         while (breakPoint < _.slideCount) {
            ++pagerQty;
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
         }
      }

      return pagerQty - 1;

   };

   Slick.prototype.getLeft = function (slideIndex) {

      var _ = this,
         targetLeft,
         verticalHeight,
         verticalOffset = 0,
         targetSlide,
         coef;

      _.slideOffset = 0;
      verticalHeight = _.$slides.first().outerHeight(true);

      if (_.options.infinite === true) {
         if (_.slideCount > _.options.slidesToShow) {
            _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
            coef = -1

            if (_.options.vertical === true && _.options.centerMode === true) {
               if (_.options.slidesToShow === 2) {
                  coef = -1.5;
               } else if (_.options.slidesToShow === 1) {
                  coef = -2
               }
            }
            verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
         }
         if (_.slideCount % _.options.slidesToScroll !== 0) {
            if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
               if (slideIndex > _.slideCount) {
                  _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                  verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
               } else {
                  _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                  verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
               }
            }
         }
      } else {
         if (slideIndex + _.options.slidesToShow > _.slideCount) {
            _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
            verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
         }
      }

      if (_.slideCount <= _.options.slidesToShow) {
         _.slideOffset = 0;
         verticalOffset = 0;
      }

      if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
         _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
      } else if (_.options.centerMode === true && _.options.infinite === true) {
         _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
      } else if (_.options.centerMode === true) {
         _.slideOffset = 0;
         _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
      }

      if (_.options.vertical === false) {
         targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
      } else {
         targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
      }

      if (_.options.variableWidth === true) {

         if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
         } else {
            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
         }

         if (_.options.rtl === true) {
            if (targetSlide[0]) {
               targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
            } else {
               targetLeft = 0;
            }
         } else {
            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
         }

         if (_.options.centerMode === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
               targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
               targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
            }

            if (_.options.rtl === true) {
               if (targetSlide[0]) {
                  targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
               } else {
                  targetLeft = 0;
               }
            } else {
               targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
         }
      }

      return targetLeft;

   };

   Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

      var _ = this;

      return _.options[option];

   };

   Slick.prototype.getNavigableIndexes = function () {

      var _ = this,
         breakPoint = 0,
         counter = 0,
         indexes = [],
         max;

      if (_.options.infinite === false) {
         max = _.slideCount;
      } else {
         breakPoint = _.options.slidesToScroll * -1;
         counter = _.options.slidesToScroll * -1;
         max = _.slideCount * 2;
      }

      while (breakPoint < max) {
         indexes.push(breakPoint);
         breakPoint = counter + _.options.slidesToScroll;
         counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }

      return indexes;

   };

   Slick.prototype.getSlick = function () {

      return this;

   };

   Slick.prototype.getSlideCount = function () {

      var _ = this,
         slidesTraversed, swipedSlide, swipeTarget, centerOffset;

      centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
      swipeTarget = (_.swipeLeft * -1) + centerOffset;

      if (_.options.swipeToSlide === true) {

         _.$slideTrack.find('.slick-slide').each(function (index, slide) {

            var slideOuterWidth, slideOffset, slideRightBoundary;
            slideOuterWidth = $(slide).outerWidth();
            slideOffset = slide.offsetLeft;
            if (_.options.centerMode !== true) {
               slideOffset += (slideOuterWidth / 2);
            }

            slideRightBoundary = slideOffset + (slideOuterWidth);

            if (swipeTarget < slideRightBoundary) {
               swipedSlide = slide;
               return false;
            }
         });

         slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

         return slidesTraversed;

      } else {
         return _.options.slidesToScroll;
      }

   };

   Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

      var _ = this;

      _.changeSlide({
         data: {
            message: 'index',
            index: parseInt(slide)
         }
      }, dontAnimate);

   };

   Slick.prototype.init = function (creation) {

      var _ = this;

      if (!$(_.$slider).hasClass('slick-initialized')) {

         $(_.$slider).addClass('slick-initialized');

         _.buildRows();
         _.buildOut();
         _.setProps();
         _.startLoad();
         _.loadSlider();
         _.initializeEvents();
         _.updateArrows();
         _.updateDots();
         _.checkResponsive(true);
         _.focusHandler();

      }

      if (creation) {
         _.$slider.trigger('init', [_]);
      }

      if (_.options.accessibility === true) {
         _.initADA();
      }

      if (_.options.autoplay) {

         _.paused = false;
         _.autoPlay();

      }

   };

   Slick.prototype.initADA = function () {
      var _ = this,
         numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
         tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
            return (val >= 0) && (val < _.slideCount);
         });

      _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
         'aria-hidden': 'true',
         'tabindex': '-1'
      }).find('a, input, button, select').attr({
         'tabindex': '-1'
      });

      if (_.$dots !== null) {
         _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            var slideControlIndex = tabControlIndexes.indexOf(i);

            $(this).attr({
               'role': 'tabpanel',
               'id': 'slick-slide' + _.instanceUid + i,
               'tabindex': -1
            });

            if (slideControlIndex !== -1) {
               var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
               if ($('#' + ariaButtonControl).length) {
                  $(this).attr({
                     'aria-describedby': ariaButtonControl
                  });
               }
            }
         });

         _.$dots.attr('role', 'tablist').find('li').each(function (i) {
            var mappedSlideIndex = tabControlIndexes[i];

            $(this).attr({
               'role': 'presentation'
            });

            $(this).find('button').first().attr({
               'role': 'tab',
               'id': 'slick-slide-control' + _.instanceUid + i,
               'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
               'aria-label': (i + 1) + ' of ' + numDotGroups,
               'aria-selected': null,
               'tabindex': '-1'
            });

         }).eq(_.currentSlide).find('button').attr({
            'aria-selected': 'true',
            'tabindex': '0'
         }).end();
      }

      for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
         if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({ 'tabindex': '0' });
         } else {
            _.$slides.eq(i).removeAttr('tabindex');
         }
      }

      _.activateADA();

   };

   Slick.prototype.initArrowEvents = function () {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
         _.$prevArrow
            .off('click.slick')
            .on('click.slick', {
               message: 'previous'
            }, _.changeSlide);
         _.$nextArrow
            .off('click.slick')
            .on('click.slick', {
               message: 'next'
            }, _.changeSlide);

         if (_.options.accessibility === true) {
            _.$prevArrow.on('keydown.slick', _.keyHandler);
            _.$nextArrow.on('keydown.slick', _.keyHandler);
         }
      }

   };

   Slick.prototype.initDotEvents = function () {

      var _ = this;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
         $('li', _.$dots).on('click.slick', {
            message: 'index'
         }, _.changeSlide);

         if (_.options.accessibility === true) {
            _.$dots.on('keydown.slick', _.keyHandler);
         }
      }

      if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

         $('li', _.$dots)
            .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
            .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

      }

   };

   Slick.prototype.initSlideEvents = function () {

      var _ = this;

      if (_.options.pauseOnHover) {

         _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
         _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

      }

   };

   Slick.prototype.initializeEvents = function () {

      var _ = this;

      _.initArrowEvents();

      _.initDotEvents();
      _.initSlideEvents();

      _.$list.on('touchstart.slick mousedown.slick', {
         action: 'start'
      }, _.swipeHandler);
      _.$list.on('touchmove.slick mousemove.slick', {
         action: 'move'
      }, _.swipeHandler);
      _.$list.on('touchend.slick mouseup.slick', {
         action: 'end'
      }, _.swipeHandler);
      _.$list.on('touchcancel.slick mouseleave.slick', {
         action: 'end'
      }, _.swipeHandler);

      _.$list.on('click.slick', _.clickHandler);

      $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

      if (_.options.accessibility === true) {
         _.$list.on('keydown.slick', _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
         $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }

      $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

      $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

      $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

      $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
      $(_.setPosition);

   };

   Slick.prototype.initUI = function () {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

         _.$prevArrow.show();
         _.$nextArrow.show();

      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

         _.$dots.show();

      }

   };

   Slick.prototype.keyHandler = function (event) {

      var _ = this;
      //Dont slide if the cursor is inside the form fields and arrow keys are pressed
      if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
         if (event.keyCode === 37 && _.options.accessibility === true) {
            _.changeSlide({
               data: {
                  message: _.options.rtl === true ? 'next' : 'previous'
               }
            });
         } else if (event.keyCode === 39 && _.options.accessibility === true) {
            _.changeSlide({
               data: {
                  message: _.options.rtl === true ? 'previous' : 'next'
               }
            });
         }
      }

   };

   Slick.prototype.lazyLoad = function () {

      var _ = this,
         loadRange, cloneRange, rangeStart, rangeEnd;

      function loadImages(imagesScope) {

         $('img[data-lazy]', imagesScope).each(function () {

            var image = $(this),
               imageSource = $(this).attr('data-lazy'),
               imageSrcSet = $(this).attr('data-srcset'),
               imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
               imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

               image
                  .animate({ opacity: 0 }, 100, function () {

                     if (imageSrcSet) {
                        image
                           .attr('srcset', imageSrcSet);

                        if (imageSizes) {
                           image
                              .attr('sizes', imageSizes);
                        }
                     }

                     image
                        .attr('src', imageSource)
                        .animate({ opacity: 1 }, 200, function () {
                           image
                              .removeAttr('data-lazy data-srcset data-sizes')
                              .removeClass('slick-loading');
                        });
                     _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                  });

            };

            imageToLoad.onerror = function () {

               image
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error');

               _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

            };

            imageToLoad.src = imageSource;

         });

      }

      if (_.options.centerMode === true) {
         if (_.options.infinite === true) {
            rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
            rangeEnd = rangeStart + _.options.slidesToShow + 2;
         } else {
            rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
            rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
         }
      } else {
         rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
         rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
         if (_.options.fade === true) {
            if (rangeStart > 0) rangeStart--;
            if (rangeEnd <= _.slideCount) rangeEnd++;
         }
      }

      loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

      if (_.options.lazyLoad === 'anticipated') {
         var prevSlide = rangeStart - 1,
            nextSlide = rangeEnd,
            $slides = _.$slider.find('.slick-slide');

         for (var i = 0; i < _.options.slidesToScroll; i++) {
            if (prevSlide < 0) prevSlide = _.slideCount - 1;
            loadRange = loadRange.add($slides.eq(prevSlide));
            loadRange = loadRange.add($slides.eq(nextSlide));
            prevSlide--;
            nextSlide++;
         }
      }

      loadImages(loadRange);

      if (_.slideCount <= _.options.slidesToShow) {
         cloneRange = _.$slider.find('.slick-slide');
         loadImages(cloneRange);
      } else
         if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
         } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
         }

   };

   Slick.prototype.loadSlider = function () {

      var _ = this;

      _.setPosition();

      _.$slideTrack.css({
         opacity: 1
      });

      _.$slider.removeClass('slick-loading');

      _.initUI();

      if (_.options.lazyLoad === 'progressive') {
         _.progressiveLazyLoad();
      }

   };

   Slick.prototype.next = Slick.prototype.slickNext = function () {

      var _ = this;

      _.changeSlide({
         data: {
            message: 'next'
         }
      });

   };

   Slick.prototype.orientationChange = function () {

      var _ = this;

      _.checkResponsive();
      _.setPosition();

   };

   Slick.prototype.pause = Slick.prototype.slickPause = function () {

      var _ = this;

      _.autoPlayClear();
      _.paused = true;

   };

   Slick.prototype.play = Slick.prototype.slickPlay = function () {

      var _ = this;

      _.autoPlay();
      _.options.autoplay = true;
      _.paused = false;
      _.focussed = false;
      _.interrupted = false;

   };

   Slick.prototype.postSlide = function (index) {

      var _ = this;

      if (!_.unslicked) {

         _.$slider.trigger('afterChange', [_, index]);

         _.animating = false;

         if (_.slideCount > _.options.slidesToShow) {
            _.setPosition();
         }

         _.swipeLeft = null;

         if (_.options.autoplay) {
            _.autoPlay();
         }

         if (_.options.accessibility === true) {
            _.initADA();

            if (_.options.focusOnChange) {
               var $currentSlide = $(_.$slides.get(_.currentSlide));
               $currentSlide.attr('tabindex', 0).focus();
            }
         }

      }

   };

   Slick.prototype.prev = Slick.prototype.slickPrev = function () {

      var _ = this;

      _.changeSlide({
         data: {
            message: 'previous'
         }
      });

   };

   Slick.prototype.preventDefault = function (event) {

      event.preventDefault();

   };

   Slick.prototype.progressiveLazyLoad = function (tryCount) {

      tryCount = tryCount || 1;

      var _ = this,
         $imgsToLoad = $('img[data-lazy]', _.$slider),
         image,
         imageSource,
         imageSrcSet,
         imageSizes,
         imageToLoad;

      if ($imgsToLoad.length) {

         image = $imgsToLoad.first();
         imageSource = image.attr('data-lazy');
         imageSrcSet = image.attr('data-srcset');
         imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
         imageToLoad = document.createElement('img');

         imageToLoad.onload = function () {

            if (imageSrcSet) {
               image
                  .attr('srcset', imageSrcSet);

               if (imageSizes) {
                  image
                     .attr('sizes', imageSizes);
               }
            }

            image
               .attr('src', imageSource)
               .removeAttr('data-lazy data-srcset data-sizes')
               .removeClass('slick-loading');

            if (_.options.adaptiveHeight === true) {
               _.setPosition();
            }

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
            _.progressiveLazyLoad();

         };

         imageToLoad.onerror = function () {

            if (tryCount < 3) {

               /**
                * try to load the image 3 times,
                * leave a slight delay so we don't get
                * servers blocking the request.
                */
               setTimeout(function () {
                  _.progressiveLazyLoad(tryCount + 1);
               }, 500);

            } else {

               image
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error');

               _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

               _.progressiveLazyLoad();

            }

         };

         imageToLoad.src = imageSource;

      } else {

         _.$slider.trigger('allImagesLoaded', [_]);

      }

   };

   Slick.prototype.refresh = function (initializing) {

      var _ = this, currentSlide, lastVisibleIndex;

      lastVisibleIndex = _.slideCount - _.options.slidesToShow;

      // in non-infinite sliders, we don't want to go past the
      // last visible index.
      if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
         _.currentSlide = lastVisibleIndex;
      }

      // if less slides than to show, go to start.
      if (_.slideCount <= _.options.slidesToShow) {
         _.currentSlide = 0;

      }

      currentSlide = _.currentSlide;

      _.destroy(true);

      $.extend(_, _.initials, { currentSlide: currentSlide });

      _.init();

      if (!initializing) {

         _.changeSlide({
            data: {
               message: 'index',
               index: currentSlide
            }
         }, false);

      }

   };

   Slick.prototype.registerBreakpoints = function () {

      var _ = this, breakpoint, currentBreakpoint, l,
         responsiveSettings = _.options.responsive || null;

      if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

         _.respondTo = _.options.respondTo || 'window';

         for (breakpoint in responsiveSettings) {

            l = _.breakpoints.length - 1;

            if (responsiveSettings.hasOwnProperty(breakpoint)) {
               currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

               // loop through the breakpoints and cut out any existing
               // ones with the same breakpoint number, we don't want dupes.
               while (l >= 0) {
                  if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                     _.breakpoints.splice(l, 1);
                  }
                  l--;
               }

               _.breakpoints.push(currentBreakpoint);
               _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

            }

         }

         _.breakpoints.sort(function (a, b) {
            return (_.options.mobileFirst) ? a - b : b - a;
         });

      }

   };

   Slick.prototype.reinit = function () {

      var _ = this;

      _.$slides =
         _.$slideTrack
            .children(_.options.slide)
            .addClass('slick-slide');

      _.slideCount = _.$slides.length;

      if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
         _.currentSlide = _.currentSlide - _.options.slidesToScroll;
      }

      if (_.slideCount <= _.options.slidesToShow) {
         _.currentSlide = 0;
      }

      _.registerBreakpoints();

      _.setProps();
      _.setupInfinite();
      _.buildArrows();
      _.updateArrows();
      _.initArrowEvents();
      _.buildDots();
      _.updateDots();
      _.initDotEvents();
      _.cleanUpSlideEvents();
      _.initSlideEvents();

      _.checkResponsive(false, true);

      if (_.options.focusOnSelect === true) {
         $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }

      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

      _.setPosition();
      _.focusHandler();

      _.paused = !_.options.autoplay;
      _.autoPlay();

      _.$slider.trigger('reInit', [_]);

   };

   Slick.prototype.resize = function () {

      var _ = this;

      if ($(window).width() !== _.windowWidth) {
         clearTimeout(_.windowDelay);
         _.windowDelay = window.setTimeout(function () {
            _.windowWidth = $(window).width();
            _.checkResponsive();
            if (!_.unslicked) { _.setPosition(); }
         }, 50);
      }
   };

   Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

      var _ = this;

      if (typeof (index) === 'boolean') {
         removeBefore = index;
         index = removeBefore === true ? 0 : _.slideCount - 1;
      } else {
         index = removeBefore === true ? --index : index;
      }

      if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
         return false;
      }

      _.unload();

      if (removeAll === true) {
         _.$slideTrack.children().remove();
      } else {
         _.$slideTrack.children(this.options.slide).eq(index).remove();
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slidesCache = _.$slides;

      _.reinit();

   };

   Slick.prototype.setCSS = function (position) {

      var _ = this,
         positionProps = {},
         x, y;

      if (_.options.rtl === true) {
         position = -position;
      }
      x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
      y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

      positionProps[_.positionProp] = position;

      if (_.transformsEnabled === false) {
         _.$slideTrack.css(positionProps);
      } else {
         positionProps = {};
         if (_.cssTransitions === false) {
            positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
            _.$slideTrack.css(positionProps);
         } else {
            positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
            _.$slideTrack.css(positionProps);
         }
      }

   };

   Slick.prototype.setDimensions = function () {

      var _ = this;

      if (_.options.vertical === false) {
         if (_.options.centerMode === true) {
            _.$list.css({
               padding: ('0px ' + _.options.centerPadding)
            });
         }
      } else {
         _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
         if (_.options.centerMode === true) {
            _.$list.css({
               padding: (_.options.centerPadding + ' 0px')
            });
         }
      }

      _.listWidth = _.$list.width();
      _.listHeight = _.$list.height();


      if (_.options.vertical === false && _.options.variableWidth === false) {
         _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
         _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

      } else if (_.options.variableWidth === true) {
         _.$slideTrack.width(5000 * _.slideCount);
      } else {
         _.slideWidth = Math.ceil(_.listWidth);
         _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
      }

      var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
      if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

   };

   Slick.prototype.setFade = function () {

      var _ = this,
         targetLeft;

      _.$slides.each(function (index, element) {
         targetLeft = (_.slideWidth * index) * -1;
         if (_.options.rtl === true) {
            $(element).css({
               position: 'relative',
               right: targetLeft,
               top: 0,
               zIndex: _.options.zIndex - 2,
               opacity: 0
            });
         } else {
            $(element).css({
               position: 'relative',
               left: targetLeft,
               top: 0,
               zIndex: _.options.zIndex - 2,
               opacity: 0
            });
         }
      });

      _.$slides.eq(_.currentSlide).css({
         zIndex: _.options.zIndex - 1,
         opacity: 1
      });

   };

   Slick.prototype.setHeight = function () {

      var _ = this;

      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
         var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
         _.$list.css('height', targetHeight);
      }

   };

   Slick.prototype.setOption =
      Slick.prototype.slickSetOption = function () {

         /**
          * accepts arguments in format of:
          *
          *  - for changing a single option's value:
          *     .slick("setOption", option, value, refresh )
          *
          *  - for changing a set of responsive options:
          *     .slick("setOption", 'responsive', [{}, ...], refresh )
          *
          *  - for updating multiple values at once (not responsive)
          *     .slick("setOption", { 'option': value, ... }, refresh )
          */

         var _ = this, l, item, option, value, refresh = false, type;

         if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';

         } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

               type = 'responsive';

            } else if (typeof arguments[1] !== 'undefined') {

               type = 'single';

            }

         }

         if (type === 'single') {

            _.options[option] = value;


         } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

               _.options[opt] = val;

            });


         } else if (type === 'responsive') {

            for (item in value) {

               if ($.type(_.options.responsive) !== 'array') {

                  _.options.responsive = [value[item]];

               } else {

                  l = _.options.responsive.length - 1;

                  // loop through the responsive object and splice out duplicates.
                  while (l >= 0) {

                     if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                        _.options.responsive.splice(l, 1);

                     }

                     l--;

                  }

                  _.options.responsive.push(value[item]);

               }

            }

         }

         if (refresh) {

            _.unload();
            _.reinit();

         }

      };

   Slick.prototype.setPosition = function () {

      var _ = this;

      _.setDimensions();

      _.setHeight();

      if (_.options.fade === false) {
         _.setCSS(_.getLeft(_.currentSlide));
      } else {
         _.setFade();
      }

      _.$slider.trigger('setPosition', [_]);

   };

   Slick.prototype.setProps = function () {

      var _ = this,
         bodyStyle = document.body.style;

      _.positionProp = _.options.vertical === true ? 'top' : 'left';

      if (_.positionProp === 'top') {
         _.$slider.addClass('slick-vertical');
      } else {
         _.$slider.removeClass('slick-vertical');
      }

      if (bodyStyle.WebkitTransition !== undefined ||
         bodyStyle.MozTransition !== undefined ||
         bodyStyle.msTransition !== undefined) {
         if (_.options.useCSS === true) {
            _.cssTransitions = true;
         }
      }

      if (_.options.fade) {
         if (typeof _.options.zIndex === 'number') {
            if (_.options.zIndex < 3) {
               _.options.zIndex = 3;
            }
         } else {
            _.options.zIndex = _.defaults.zIndex;
         }
      }

      if (bodyStyle.OTransform !== undefined) {
         _.animType = 'OTransform';
         _.transformType = '-o-transform';
         _.transitionType = 'OTransition';
         if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.MozTransform !== undefined) {
         _.animType = 'MozTransform';
         _.transformType = '-moz-transform';
         _.transitionType = 'MozTransition';
         if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.webkitTransform !== undefined) {
         _.animType = 'webkitTransform';
         _.transformType = '-webkit-transform';
         _.transitionType = 'webkitTransition';
         if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.msTransform !== undefined) {
         _.animType = 'msTransform';
         _.transformType = '-ms-transform';
         _.transitionType = 'msTransition';
         if (bodyStyle.msTransform === undefined) _.animType = false;
      }
      if (bodyStyle.transform !== undefined && _.animType !== false) {
         _.animType = 'transform';
         _.transformType = 'transform';
         _.transitionType = 'transition';
      }
      _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
   };


   Slick.prototype.setSlideClasses = function (index) {

      var _ = this,
         centerOffset, allSlides, indexOffset, remainder;

      allSlides = _.$slider
         .find('.slick-slide')
         .removeClass('slick-active slick-center slick-current')
         .attr('aria-hidden', 'true');

      _.$slides
         .eq(index)
         .addClass('slick-current');

      if (_.options.centerMode === true) {

         var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

         centerOffset = Math.floor(_.options.slidesToShow / 2);

         if (_.options.infinite === true) {

            if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
               _.$slides
                  .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

            } else {

               indexOffset = _.options.slidesToShow + index;
               allSlides
                  .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

            }

            if (index === 0) {

               allSlides
                  .eq(allSlides.length - 1 - _.options.slidesToShow)
                  .addClass('slick-center');

            } else if (index === _.slideCount - 1) {

               allSlides
                  .eq(_.options.slidesToShow)
                  .addClass('slick-center');

            }

         }

         _.$slides
            .eq(index)
            .addClass('slick-center');

      } else {

         if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

            _.$slides
               .slice(index, index + _.options.slidesToShow)
               .addClass('slick-active')
               .attr('aria-hidden', 'false');

         } else if (allSlides.length <= _.options.slidesToShow) {

            allSlides
               .addClass('slick-active')
               .attr('aria-hidden', 'false');

         } else {

            remainder = _.slideCount % _.options.slidesToShow;
            indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

            if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

               allSlides
                  .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

            } else {

               allSlides
                  .slice(indexOffset, indexOffset + _.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

            }

         }

      }

      if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
         _.lazyLoad();
      }
   };

   Slick.prototype.setupInfinite = function () {

      var _ = this,
         i, slideIndex, infiniteCount;

      if (_.options.fade === true) {
         _.options.centerMode = false;
      }

      if (_.options.infinite === true && _.options.fade === false) {

         slideIndex = null;

         if (_.slideCount > _.options.slidesToShow) {

            if (_.options.centerMode === true) {
               infiniteCount = _.options.slidesToShow + 1;
            } else {
               infiniteCount = _.options.slidesToShow;
            }

            for (i = _.slideCount; i > (_.slideCount -
               infiniteCount); i -= 1) {
               slideIndex = i - 1;
               $(_.$slides[slideIndex]).clone(true).attr('id', '')
                  .attr('data-slick-index', slideIndex - _.slideCount)
                  .prependTo(_.$slideTrack).addClass('slick-cloned');
            }
            for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
               slideIndex = i;
               $(_.$slides[slideIndex]).clone(true).attr('id', '')
                  .attr('data-slick-index', slideIndex + _.slideCount)
                  .appendTo(_.$slideTrack).addClass('slick-cloned');
            }
            _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
               $(this).attr('id', '');
            });

         }

      }

   };

   Slick.prototype.interrupt = function (toggle) {

      var _ = this;

      if (!toggle) {
         _.autoPlay();
      }
      _.interrupted = toggle;

   };

   Slick.prototype.selectHandler = function (event) {

      var _ = this;

      var targetElement =
         $(event.target).is('.slick-slide') ?
            $(event.target) :
            $(event.target).parents('.slick-slide');

      var index = parseInt(targetElement.attr('data-slick-index'));

      if (!index) index = 0;

      if (_.slideCount <= _.options.slidesToShow) {

         _.slideHandler(index, false, true);
         return;

      }

      _.slideHandler(index);

   };

   Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

      var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
         _ = this, navTarget;

      sync = sync || false;

      if (_.animating === true && _.options.waitForAnimate === true) {
         return;
      }

      if (_.options.fade === true && _.currentSlide === index) {
         return;
      }

      if (sync === false) {
         _.asNavFor(index);
      }

      targetSlide = index;
      targetLeft = _.getLeft(targetSlide);
      slideLeft = _.getLeft(_.currentSlide);

      _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

      if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
         if (_.options.fade === false) {
            targetSlide = _.currentSlide;
            if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
               _.animateSlide(slideLeft, function () {
                  _.postSlide(targetSlide);
               });
            } else {
               _.postSlide(targetSlide);
            }
         }
         return;
      } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
         if (_.options.fade === false) {
            targetSlide = _.currentSlide;
            if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
               _.animateSlide(slideLeft, function () {
                  _.postSlide(targetSlide);
               });
            } else {
               _.postSlide(targetSlide);
            }
         }
         return;
      }

      if (_.options.autoplay) {
         clearInterval(_.autoPlayTimer);
      }

      if (targetSlide < 0) {
         if (_.slideCount % _.options.slidesToScroll !== 0) {
            animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
         } else {
            animSlide = _.slideCount + targetSlide;
         }
      } else if (targetSlide >= _.slideCount) {
         if (_.slideCount % _.options.slidesToScroll !== 0) {
            animSlide = 0;
         } else {
            animSlide = targetSlide - _.slideCount;
         }
      } else {
         animSlide = targetSlide;
      }

      _.animating = true;

      _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

      oldSlide = _.currentSlide;
      _.currentSlide = animSlide;

      _.setSlideClasses(_.currentSlide);

      if (_.options.asNavFor) {

         navTarget = _.getNavTarget();
         navTarget = navTarget.slick('getSlick');

         if (navTarget.slideCount <= navTarget.options.slidesToShow) {
            navTarget.setSlideClasses(_.currentSlide);
         }

      }

      _.updateDots();
      _.updateArrows();

      if (_.options.fade === true) {
         if (dontAnimate !== true) {

            _.fadeSlideOut(oldSlide);

            _.fadeSlide(animSlide, function () {
               _.postSlide(animSlide);
            });

         } else {
            _.postSlide(animSlide);
         }
         _.animateHeight();
         return;
      }

      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
         _.animateSlide(targetLeft, function () {
            _.postSlide(animSlide);
         });
      } else {
         _.postSlide(animSlide);
      }

   };

   Slick.prototype.startLoad = function () {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

         _.$prevArrow.hide();
         _.$nextArrow.hide();

      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

         _.$dots.hide();

      }

      _.$slider.addClass('slick-loading');

   };

   Slick.prototype.swipeDirection = function () {

      var xDist, yDist, r, swipeAngle, _ = this;

      xDist = _.touchObject.startX - _.touchObject.curX;
      yDist = _.touchObject.startY - _.touchObject.curY;
      r = Math.atan2(yDist, xDist);

      swipeAngle = Math.round(r * 180 / Math.PI);
      if (swipeAngle < 0) {
         swipeAngle = 360 - Math.abs(swipeAngle);
      }

      if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
         return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
         return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
         return (_.options.rtl === false ? 'right' : 'left');
      }
      if (_.options.verticalSwiping === true) {
         if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
            return 'down';
         } else {
            return 'up';
         }
      }

      return 'vertical';

   };

   Slick.prototype.swipeEnd = function (event) {

      var _ = this,
         slideCount,
         direction;

      _.dragging = false;
      _.swiping = false;

      if (_.scrolling) {
         _.scrolling = false;
         return false;
      }

      _.interrupted = false;
      _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

      if (_.touchObject.curX === undefined) {
         return false;
      }

      if (_.touchObject.edgeHit === true) {
         _.$slider.trigger('edge', [_, _.swipeDirection()]);
      }

      if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

         direction = _.swipeDirection();

         switch (direction) {

            case 'left':
            case 'down':

               slideCount =
                  _.options.swipeToSlide ?
                     _.checkNavigable(_.currentSlide + _.getSlideCount()) :
                     _.currentSlide + _.getSlideCount();

               _.currentDirection = 0;

               break;

            case 'right':
            case 'up':

               slideCount =
                  _.options.swipeToSlide ?
                     _.checkNavigable(_.currentSlide - _.getSlideCount()) :
                     _.currentSlide - _.getSlideCount();

               _.currentDirection = 1;

               break;

            default:


         }

         if (direction != 'vertical') {

            _.slideHandler(slideCount);
            _.touchObject = {};
            _.$slider.trigger('swipe', [_, direction]);

         }

      } else {

         if (_.touchObject.startX !== _.touchObject.curX) {

            _.slideHandler(_.currentSlide);
            _.touchObject = {};

         }

      }

   };

   Slick.prototype.swipeHandler = function (event) {

      var _ = this;

      if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
         return;
      } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
         return;
      }

      _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
         event.originalEvent.touches.length : 1;

      _.touchObject.minSwipe = _.listWidth / _.options
         .touchThreshold;

      if (_.options.verticalSwiping === true) {
         _.touchObject.minSwipe = _.listHeight / _.options
            .touchThreshold;
      }

      switch (event.data.action) {

         case 'start':
            _.swipeStart(event);
            break;

         case 'move':
            _.swipeMove(event);
            break;

         case 'end':
            _.swipeEnd(event);
            break;

      }

   };

   Slick.prototype.swipeMove = function (event) {

      var _ = this,
         edgeWasHit = false,
         curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

      touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

      if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
         return false;
      }

      curLeft = _.getLeft(_.currentSlide);

      _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
      _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

      _.touchObject.swipeLength = Math.round(Math.sqrt(
         Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

      verticalSwipeLength = Math.round(Math.sqrt(
         Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

      if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
         _.scrolling = true;
         return false;
      }

      if (_.options.verticalSwiping === true) {
         _.touchObject.swipeLength = verticalSwipeLength;
      }

      swipeDirection = _.swipeDirection();

      if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
         _.swiping = true;
         event.preventDefault();
      }

      positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
      if (_.options.verticalSwiping === true) {
         positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
      }


      swipeLength = _.touchObject.swipeLength;

      _.touchObject.edgeHit = false;

      if (_.options.infinite === false) {
         if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
            swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
            _.touchObject.edgeHit = true;
         }
      }

      if (_.options.vertical === false) {
         _.swipeLeft = curLeft + swipeLength * positionOffset;
      } else {
         _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
      }
      if (_.options.verticalSwiping === true) {
         _.swipeLeft = curLeft + swipeLength * positionOffset;
      }

      if (_.options.fade === true || _.options.touchMove === false) {
         return false;
      }

      if (_.animating === true) {
         _.swipeLeft = null;
         return false;
      }

      _.setCSS(_.swipeLeft);

   };

   Slick.prototype.swipeStart = function (event) {

      var _ = this,
         touches;

      _.interrupted = true;

      if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
         _.touchObject = {};
         return false;
      }

      if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
         touches = event.originalEvent.touches[0];
      }

      _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
      _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

      _.dragging = true;

   };

   Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

      var _ = this;

      if (_.$slidesCache !== null) {

         _.unload();

         _.$slideTrack.children(this.options.slide).detach();

         _.$slidesCache.appendTo(_.$slideTrack);

         _.reinit();

      }

   };

   Slick.prototype.unload = function () {

      var _ = this;

      $('.slick-cloned', _.$slider).remove();

      if (_.$dots) {
         _.$dots.remove();
      }

      if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
         _.$prevArrow.remove();
      }

      if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
         _.$nextArrow.remove();
      }

      _.$slides
         .removeClass('slick-slide slick-active slick-visible slick-current')
         .attr('aria-hidden', 'true')
         .css('width', '');

   };

   Slick.prototype.unslick = function (fromBreakpoint) {

      var _ = this;
      _.$slider.trigger('unslick', [_, fromBreakpoint]);
      _.destroy();

   };

   Slick.prototype.updateArrows = function () {

      var _ = this,
         centerOffset;

      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.arrows === true &&
         _.slideCount > _.options.slidesToShow &&
         !_.options.infinite) {

         _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
         _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

         if (_.currentSlide === 0) {

            _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

         } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

            _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

         } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

            _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

         }

      }

   };

   Slick.prototype.updateDots = function () {

      var _ = this;

      if (_.$dots !== null) {

         _.$dots
            .find('li')
            .removeClass('slick-active')
            .end();

         _.$dots
            .find('li')
            .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
            .addClass('slick-active');

      }

   };

   Slick.prototype.visibility = function () {

      var _ = this;

      if (_.options.autoplay) {

         if (document[_.hidden]) {

            _.interrupted = true;

         } else {

            _.interrupted = false;

         }

      }

   };

   $.fn.slick = function () {
      var _ = this,
         opt = arguments[0],
         args = Array.prototype.slice.call(arguments, 1),
         l = _.length,
         i,
         ret;
      for (i = 0; i < l; i++) {
         if (typeof opt == 'object' || typeof opt == 'undefined')
            _[i].slick = new Slick(_[i], opt);
         else
            ret = _[i].slick[opt].apply(_[i].slick, args);
         if (typeof ret != 'undefined') return ret;
      }
      return _;
   };

}));
/**
 * @license jquery.panzoom.js v2.0.5
 * Updated: Mon Feb 01 2016
 * Add pan and zoom functionality to any element
 * Copyright (c) timmy willison
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */
!function (a, b) {
   // AMD
   "function" == typeof define && define.amd ? define(["jquery"], function (c) { return b(a, c) }) : "object" == typeof exports ? b(a, require("jquery")) : b(a, a.jQuery)
}("undefined" != typeof window ? window : this, function (a, b) {
   "use strict";/**
	 * Utility for determing transform matrix equality
	 * Checks backwards to test translation first
	 * @param {Array} first
	 * @param {Array} second
	 */
   function c(a, b) { for (var c = a.length; --c;)if (+a[c] !== +b[c]) return !1; return !0 }/**
	 * Creates the options object for reset functions
	 * @param {Boolean|Object} opts See reset methods
	 * @returns {Object} Returns the newly-created options object
	 */
   function d(a) { var c = { range: !0, animate: !0 }; return "boolean" == typeof a ? c.animate = a : b.extend(c, a), c }/**
	 * Represent a transformation matrix with a 3x3 matrix for calculations
	 * Matrix functions adapted from Louis Remi's jQuery.transform (https://github.com/louisremi/jquery.transform.js)
	 * @param {Array|Number} a An array of six values representing a 2d transformation matrix
	 */
   function e(a, c, d, e, f, g, h, i, j) { "array" === b.type(a) ? this.elements = [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1] : this.elements = [a, c, d, e, f, g, h || 0, i || 0, j || 1] }/**
	 * Create a vector containing three values
	 */
   function f(a, b, c) { this.elements = [a, b, c] }/**
	 * Create a Panzoom object for a given element
	 * @constructor
	 * @param {Element} elem - Element to use pan and zoom
	 * @param {Object} [options] - An object literal containing options to override default options
	 *  (See Panzoom.defaults for ones not listed below)
	 * @param {jQuery} [options.$zoomIn] - zoom in buttons/links collection (you can also bind these yourself
	 *  e.g. $button.on('click', function(e) { e.preventDefault(); $elem.panzoom('zoomIn'); });)
	 * @param {jQuery} [options.$zoomOut] - zoom out buttons/links collection on which to bind zoomOut
	 * @param {jQuery} [options.$zoomRange] - zoom in/out with this range control
	 * @param {jQuery} [options.$reset] - Reset buttons/links collection on which to bind the reset method
	 * @param {Function} [options.on[Start|Change|Zoom|Pan|End|Reset] - Optional callbacks for panzoom events
	 */
   function g(a, c) {
      // Allow instantiation without `new` keyword
      if (!(this instanceof g)) return new g(a, c);
      // Sanity checks
      1 !== a.nodeType && b.error("Panzoom called on non-Element node"), b.contains(l, a) || b.error("Panzoom element must be attached to the document");
      // Don't remake
      var d = b.data(a, m); if (d) return d;
      // Extend default with given object literal
      // Each instance gets its own options
      this.options = c = b.extend({}, g.defaults, c), this.elem = a; var e = this.$elem = b(a); this.$set = c.$set && c.$set.length ? c.$set : e, this.$doc = b(a.ownerDocument || l), this.$parent = e.parent(),
         // This is SVG if the namespace is SVG
         // However, while <svg> elements are SVG, we want to treat those like other elements
         this.isSVG = r.test(a.namespaceURI) && "svg" !== a.nodeName.toLowerCase(), this.panning = !1,
         // Save the original transform value
         // Save the prefixed transform style key
         // Set the starting transform
         this._buildTransform(),
         // Build the appropriately-prefixed transform style property name
         // De-camelcase
         this._transform = !this.isSVG && b.cssProps.transform.replace(q, "-$1").toLowerCase(),
         // Build the transition value
         this._buildTransition(),
         // Build containment dimensions
         this.resetDimensions();
      // Add zoom and reset buttons to `this`
      var f = b(), h = this; b.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function (a, b) { h[b] = c[b] || f }), this.enable(),
         // Save the instance
         b.data(a, m, this)
   }
   // Common properties to lift for touch or pointer events
   var h = "over out down up move enter leave cancel".split(" "), i = b.extend({}, b.event.mouseHooks), j = {};
   // Support pointer events in IE11+ if available
   if (a.PointerEvent) b.each(h, function (a, c) {
      // Add event name to events property and add fixHook
      b.event.fixHooks[j[c] = "pointer" + c] = i
   }); else {
      var k = i.props;
      // Add touch properties for the touch hook
      i.props = k.concat(["touches", "changedTouches", "targetTouches", "altKey", "ctrlKey", "metaKey", "shiftKey"]),/**
		 * Support: Android
		 * Android sets pageX/Y to 0 for any touch event
		 * Attach first touch's pageX/pageY and clientX/clientY if not set correctly
		 */
         i.filter = function (a, b) {
            var c, d = k.length; if (!b.pageX && b.touches && (c = b.touches[0]))
               // Copy over all mouse properties
               for (; d--;)a[k[d]] = c[k[d]]; return a
         }, b.each(h, function (a, c) {
            // No equivalent touch events for over and out
            if (2 > a) j[c] = "mouse" + c; else {
               var d = "touch" + ("down" === c ? "start" : "up" === c ? "end" : c);
               // Add fixHook
               b.event.fixHooks[d] = i,
                  // Add event names to events property
                  j[c] = d + " mouse" + c
            }
         })
   } b.pointertouch = j; var l = a.document, m = "__pz__", n = Array.prototype.slice, o = !!a.PointerEvent, p = function () { var a = l.createElement("input"); return a.setAttribute("oninput", "return"), "function" == typeof a.oninput }(), q = /([A-Z])/g, r = /^http:[\w\.\/]+svg$/, s = /^inline/, t = "(\\-?[\\d\\.e]+)", u = "\\,?\\s*", v = new RegExp("^matrix\\(" + t + u + t + u + t + u + t + u + t + u + t + "\\)$");/**
	 * Get the element at zero-indexed index i
	 * @param {Number} i
	 */
   // Attach regex for possible use (immutable)
   // Container for event names
   // Add Panzoom as a static property
   /**
       * Extend jQuery
       * @param {Object|String} options - The name of a method to call on the prototype
       *  or an object literal of options
       * @returns {jQuery|Mixed} jQuery instance for regular chaining or the return value(s) of a panzoom method call
       */
   return e.prototype = {/**
		 * Multiply a 3x3 matrix by a similar matrix or a vector
		 * @param {Matrix|Vector} matrix
		 * @return {Matrix|Vector} Returns a vector if multiplying by a vector
		 */
      x: function (a) { var b = a instanceof f, c = this.elements, d = a.elements; return b && 3 === d.length ? new f(c[0] * d[0] + c[1] * d[1] + c[2] * d[2], c[3] * d[0] + c[4] * d[1] + c[5] * d[2], c[6] * d[0] + c[7] * d[1] + c[8] * d[2]) : d.length === c.length ? new e(c[0] * d[0] + c[1] * d[3] + c[2] * d[6], c[0] * d[1] + c[1] * d[4] + c[2] * d[7], c[0] * d[2] + c[1] * d[5] + c[2] * d[8], c[3] * d[0] + c[4] * d[3] + c[5] * d[6], c[3] * d[1] + c[4] * d[4] + c[5] * d[7], c[3] * d[2] + c[4] * d[5] + c[5] * d[8], c[6] * d[0] + c[7] * d[3] + c[8] * d[6], c[6] * d[1] + c[7] * d[4] + c[8] * d[7], c[6] * d[2] + c[7] * d[5] + c[8] * d[8]) : !1 },/**
		 * Generates an inverse of the current matrix
		 * @returns {Matrix}
		 */
      inverse: function () { var a = 1 / this.determinant(), b = this.elements; return new e(a * (b[8] * b[4] - b[7] * b[5]), a * -(b[8] * b[1] - b[7] * b[2]), a * (b[5] * b[1] - b[4] * b[2]), a * -(b[8] * b[3] - b[6] * b[5]), a * (b[8] * b[0] - b[6] * b[2]), a * -(b[5] * b[0] - b[3] * b[2]), a * (b[7] * b[3] - b[6] * b[4]), a * -(b[7] * b[0] - b[6] * b[1]), a * (b[4] * b[0] - b[3] * b[1])) },/**
		 * Calculates the determinant of the current matrix
		 * @returns {Number}
		 */
      determinant: function () { var a = this.elements; return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2]) }
   }, f.prototype.e = e.prototype.e = function (a) { return this.elements[a] }, g.rmatrix = v, g.events = b.pointertouch, g.defaults = {
      // Should always be non-empty
      // Used to bind jQuery events without collisions
      // A guid is not added here as different instantiations/versions of panzoom
      // on the same element is not supported, so don't do it.
      eventNamespace: ".panzoom",
      // Whether or not to transition the scale
      transition: !0,
      // Default cursor style for the element
      cursor: "move",
      // There may be some use cases for zooming without panning or vice versa
      disablePan: !1, disableZoom: !1,
      // The increment at which to zoom
      // adds/subtracts to the scale each time zoomIn/Out is called
      increment: .3, minScale: .4, maxScale: 5,
      // The default step for the range input
      // Precendence: default < HTML attribute < option setting
      rangeStep: .05,
      // Animation duration (ms)
      duration: 200,
      // CSS easing used for scale transition
      easing: "ease-in-out",
      // Indicate that the element should be contained within it's parent when panning
      // Note: this does not affect zooming outside of the parent
      // Set this value to 'invert' to only allow panning outside of the parent element (basically the opposite of the normal use of contain)
      // 'invert' is useful for a large panzoom element where you don't want to show anything behind it
      contain: !1
   }, g.prototype = {
      constructor: g,/**
		 * @returns {Panzoom} Returns the instance
		 */
      instance: function () { return this },/**
		 * Enable or re-enable the panzoom instance
		 */
      enable: function () {
         // Unbind first
         this._initStyle(), this._bind(), this.disabled = !1
      },/**
		 * Disable panzoom
		 */
      disable: function () { this.disabled = !0, this._resetStyle(), this._unbind() },/**
		 * @returns {Boolean} Returns whether the current panzoom instance is disabled
		 */
      isDisabled: function () { return this.disabled },/**
		 * Destroy the panzoom instance
		 */
      destroy: function () { this.disable(), b.removeData(this.elem, m) },/**
		 * Builds the restricing dimensions from the containment element
		 * Also used with focal points
		 * Call this method whenever the dimensions of the element or parent are changed
		 */
      resetDimensions: function () {
         // Reset container properties
         var a = this.$parent; this.container = { width: a.innerWidth(), height: a.innerHeight() }; var c, d = a.offset(), e = this.elem, f = this.$elem; this.isSVG ? (c = e.getBoundingClientRect(), c = { left: c.left - d.left, top: c.top - d.top, width: c.width, height: c.height, margin: { left: 0, top: 0 } }) : c = { left: b.css(e, "left", !0) || 0, top: b.css(e, "top", !0) || 0, width: f.innerWidth(), height: f.innerHeight(), margin: { top: b.css(e, "marginTop", !0) || 0, left: b.css(e, "marginLeft", !0) || 0 } }, c.widthBorder = b.css(e, "borderLeftWidth", !0) + b.css(e, "borderRightWidth", !0) || 0, c.heightBorder = b.css(e, "borderTopWidth", !0) + b.css(e, "borderBottomWidth", !0) || 0, this.dimensions = c
      },/**
		 * Return the element to it's original transform matrix
		 * @param {Boolean} [options] If a boolean is passed, animate the reset (default: true). If an options object is passed, simply pass that along to setMatrix.
		 * @param {Boolean} [options.silent] Silence the reset event
		 */
      reset: function (a) {
         a = d(a);
         // Reset the transform to its original value
         var b = this.setMatrix(this._origTransform, a); a.silent || this._trigger("reset", b)
      },/**
		 * Only resets zoom level
		 * @param {Boolean|Object} [options] Whether to animate the reset (default: true) or an object of options to pass to zoom()
		 */
      resetZoom: function (a) { a = d(a); var b = this.getMatrix(this._origTransform); a.dValue = b[3], this.zoom(b[0], a) },/**
		 * Only reset panning
		 * @param {Boolean|Object} [options] Whether to animate the reset (default: true) or an object of options to pass to pan()
		 */
      resetPan: function (a) { var b = this.getMatrix(this._origTransform); this.pan(b[4], b[5], d(a)) },/**
		 * Sets a transform on the $set
		 * @param {String} transform
		 */
      setTransform: function (a) { for (var c = this.isSVG ? "attr" : "style", d = this.$set, e = d.length; e--;)b[c](d[e], "transform", a) },/**
		 * Retrieving the transform is different for SVG
		 *  (unless a style transform is already present)
		 * Uses the $set collection for retrieving the transform
		 * @param {String} [transform] Pass in an transform value (like 'scale(1.1)')
		 *  to have it formatted into matrix format for use by Panzoom
		 * @returns {String} Returns the current transform value of the element
		 */
      getTransform: function (a) {
         var c = this.$set, d = c[0];
         // Retrieve the transform
         // Convert any transforms set by the user to matrix format
         // by setting to computed
         // Get computed and set for next time
         return a ? this.setTransform(a) : a = b[this.isSVG ? "attr" : "style"](d, "transform"), "none" === a || v.test(a) || this.setTransform(a = b.css(d, "transform")), a || "none"
      },/**
		 * Retrieve the current transform matrix for $elem (or turn a transform into it's array values)
		 * @param {String} [transform] matrix-formatted transform value
		 * @returns {Array} Returns the current transform matrix split up into it's parts, or a default matrix
		 */
      getMatrix: function (a) { var b = v.exec(a || this.getTransform()); return b && b.shift(), b || [1, 0, 0, 1, 0, 0] },/**
		 * Given a matrix object, quickly set the current matrix of the element
		 * @param {Array|String} matrix
		 * @param {Boolean} [animate] Whether to animate the transform change
		 * @param {Object} [options]
		 * @param {Boolean|String} [options.animate] Whether to animate the transform change, or 'skip' indicating that it is unnecessary to set
		 * @param {Boolean} [options.contain] Override the global contain option
		 * @param {Boolean} [options.range] If true, $zoomRange's value will be updated.
		 * @param {Boolean} [options.silent] If true, the change event will not be triggered
		 * @returns {Array} Returns the newly-set matrix
		 */
      setMatrix: function (a, c) {
         if (!this.disabled) {
            c || (c = {}),
               // Convert to array
               "string" == typeof a && (a = this.getMatrix(a)); var d, e, f, g, h, i, j, k, l, m, n = +a[0], o = this.$parent, p = "undefined" != typeof c.contain ? c.contain : this.options.contain;
            // Apply containment
            // Use absolute value of scale here as negative scale doesn't mean even smaller
            // marginW += dims.widthBorder / 2;
            // If the element is not naturally centered, assume full margin right
            // Set transition
            // Update range
            // Set the matrix on this.$set
            return p && (d = this._checkDims(), e = this.container, l = d.width + d.widthBorder, m = d.height + d.heightBorder, f = l * Math.abs(n) > e.width ? (l * Math.abs(n) - e.width) / 2 : 0, g = m * Math.abs(n) > e.height ? (m * Math.abs(n) - e.height) / 2 : 0, j = d.left + d.margin.left, k = d.top + d.margin.top, "invert" === p ? (h = l > e.width ? l - e.width : 0, i = m > e.height ? m - e.height : 0, f += (e.width - l) / 2, g += (e.height - m) / 2, a[4] = Math.max(Math.min(a[4], f - j), -f - j - h), a[5] = Math.max(Math.min(a[5], g - k), -g - k - i + d.heightBorder)) : (g += d.heightBorder / 2, h = e.width > l ? e.width - l : 0, i = e.height > m ? e.height - m : 0, "center" === o.css("textAlign") && s.test(b.css(this.elem, "display")) ? h = 0 : f = g = 0, a[4] = Math.min(Math.max(a[4], f - j), -f - j + h), a[5] = Math.min(Math.max(a[5], g - k), -g - k + i))), "skip" !== c.animate && this.transition(!c.animate), c.range && this.$zoomRange.val(n), this.setTransform("matrix(" + a.join(",") + ")"), c.silent || this._trigger("change", a), a
         }
      },/**
		 * @returns {Boolean} Returns whether the panzoom element is currently being dragged
		 */
      isPanning: function () { return this.panning },/**
		 * Apply the current transition to the element, if allowed
		 * @param {Boolean} [off] Indicates that the transition should be turned off
		 */
      transition: function (a) {
         if (this._transition) for (var c = a || !this.options.transition ? "none" : this._transition, d = this.$set, e = d.length; e--;)
            // Avoid reflows when zooming
            b.style(d[e], "transition") !== c && b.style(d[e], "transition", c)
      },/**
		 * Pan the element to the specified translation X and Y
		 * Note: this is not the same as setting jQuery#offset() or jQuery#position()
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Object} [options] These options are passed along to setMatrix
		 * @param {Array} [options.matrix] The matrix being manipulated (if already known so it doesn't have to be retrieved again)
		 * @param {Boolean} [options.silent] Silence the pan event. Note that this will also silence the setMatrix change event.
		 * @param {Boolean} [options.relative] Make the x and y values relative to the existing matrix
		 */
      pan: function (a, b, c) {
         if (!this.options.disablePan) {
            c || (c = {}); var d = c.matrix; d || (d = this.getMatrix()),
               // Cast existing matrix values to numbers
               c.relative && (a += +d[4], b += +d[5]), d[4] = a, d[5] = b, this.setMatrix(d, c), c.silent || this._trigger("pan", d[4], d[5])
         }
      },/**
		 * Zoom in/out the element using the scale properties of a transform matrix
		 * @param {Number|Boolean} [scale] The scale to which to zoom or a boolean indicating to transition a zoom out
		 * @param {Object} [opts] All global options can be overwritten by this options object. For example, override the default increment.
		 * @param {Boolean} [opts.noSetRange] Specify that the method should not set the $zoomRange value (as is the case when $zoomRange is calling zoom on change)
		 * @param {jQuery.Event|Object} [opts.focal] A focal point on the panzoom element on which to zoom.
		 *  If an object, set the clientX and clientY properties to the position relative to the parent
		 * @param {Boolean} [opts.animate] Whether to animate the zoom (defaults to true if scale is not a number, false otherwise)
		 * @param {Boolean} [opts.silent] Silence the zoom event
		 * @param {Array} [opts.matrix] Optionally pass the current matrix so it doesn't need to be retrieved
		 * @param {Number} [opts.dValue] Think of a transform matrix as four values a, b, c, d
		 *  where a/d are the horizontal/vertical scale values and b/c are the skew values
		 *  (5 and 6 of matrix array are the tx/ty transform values).
		 *  Normally, the scale is set to both the a and d values of the matrix.
		 *  This option allows you to specify a different d value for the zoom.
		 *  For instance, to flip vertically, you could set -1 as the dValue.
		 */
      zoom: function (a, c) {
         // Shuffle arguments
         "object" == typeof a ? (c = a, a = null) : c || (c = {}); var d = b.extend({}, this.options, c);
         // Check if disabled
         if (!d.disableZoom) {
            var g = !1, h = d.matrix || this.getMatrix(); "number" != typeof a && (a = +h[0] + d.increment * (a ? -1 : 1), g = !0),
               // Constrain scale
               a > d.maxScale ? a = d.maxScale : a < d.minScale && (a = d.minScale);
            // Calculate focal point based on scale
            var i = d.focal; if (i && !d.disablePan) {
               // Adapted from code by Florian Günther
               // https://github.com/florianguenther/zui53
               var j = this._checkDims(), k = i.clientX, l = i.clientY;
               // Adjust the focal point for default transform-origin => 50% 50%
               this.isSVG || (k -= (j.width + j.widthBorder) / 2, l -= (j.height + j.heightBorder) / 2); var m = new f(k, l, 1), n = new e(h), o = this.parentOffset || this.$parent.offset(), p = new e(1, 0, o.left - this.$doc.scrollLeft(), 0, 1, o.top - this.$doc.scrollTop()), q = n.inverse().x(p.inverse().x(m)), r = a / h[0]; n = n.x(new e([r, 0, 0, r, 0, 0])), m = p.x(n.x(q)), h[4] = +h[4] + (k - m.e(0)), h[5] = +h[5] + (l - m.e(1))
            }
            // Set the scale
            h[0] = a, h[3] = "number" == typeof d.dValue ? d.dValue : a,
               // Calling zoom may still pan the element
               this.setMatrix(h, {
                  animate: "boolean" == typeof d.animate ? d.animate : g,
                  // Set the zoomRange value
                  range: !d.noSetRange
               }),
               // Trigger zoom event
               d.silent || this._trigger("zoom", h[0], d)
         }
      },/**
		 * Get/set option on an existing instance
		 * @returns {Array|undefined} If getting, returns an array of all values
		 *   on each instance for a given key. If setting, continue chaining by returning undefined.
		 */
      option: function (a, c) {
         var d; if (!a)
            // Avoids returning direct reference
            return b.extend({}, this.options); if ("string" == typeof a) { if (1 === arguments.length) return void 0 !== this.options[a] ? this.options[a] : null; d = {}, d[a] = c } else d = a; this._setOptions(d)
      },/**
		 * Internally sets options
		 * @param {Object} options - An object literal of options to set
		 */
      _setOptions: function (a) {
         b.each(a, b.proxy(function (a, c) {
            switch (a) {
               case "disablePan": this._resetStyle();/* falls through */
               case "$zoomIn": case "$zoomOut": case "$zoomRange": case "$reset": case "disableZoom": case "onStart": case "onChange": case "onZoom": case "onPan": case "onEnd": case "onReset": case "eventNamespace": this._unbind()
            }switch (this.options[a] = c, a) {
               case "disablePan": this._initStyle();/* falls through */
               case "$zoomIn": case "$zoomOut": case "$zoomRange": case "$reset":
                  // Set these on the instance
                  this[a] = c;/* falls through */
               case "disableZoom": case "onStart": case "onChange": case "onZoom": case "onPan": case "onEnd": case "onReset": case "eventNamespace": this._bind(); break; case "cursor": b.style(this.elem, "cursor", c); break; case "minScale": this.$zoomRange.attr("min", c); break; case "maxScale": this.$zoomRange.attr("max", c); break; case "rangeStep": this.$zoomRange.attr("step", c); break; case "startTransform": this._buildTransform(); break; case "duration": case "easing": this._buildTransition();/* falls through */
               case "transition": this.transition(); break; case "$set": c instanceof b && c.length && (this.$set = c,
                  // Reset styles
                  this._initStyle(), this._buildTransform())
            }
         }, this))
      },/**
		 * Initialize base styles for the element and its parent
		 */
      _initStyle: function () {
         var a = {
            // Promote the element to it's own compositor layer
            "backface-visibility": "hidden",
            // Set to defaults for the namespace
            "transform-origin": this.isSVG ? "0 0" : "50% 50%"
         };
         // Set elem styles
         this.options.disablePan || (a.cursor = this.options.cursor), this.$set.css(a);
         // Set parent to relative if set to static
         var c = this.$parent;
         // No need to add styles to the body
         c.length && !b.nodeName(c[0], "body") && (a = { overflow: "hidden" }, "static" === c.css("position") && (a.position = "relative"), c.css(a))
      },/**
		 * Undo any styles attached in this plugin
		 */
      _resetStyle: function () { this.$elem.css({ cursor: "", transition: "" }), this.$parent.css({ overflow: "", position: "" }) },/**
		 * Binds all necessary events
		 */
      _bind: function () {
         var a = this, c = this.options, d = c.eventNamespace, e = o ? "pointerdown" + d : "touchstart" + d + " mousedown" + d, f = o ? "pointerup" + d : "touchend" + d + " click" + d, h = {}, i = this.$reset, j = this.$zoomRange;
         // No bindings if zooming is disabled
         if (
            // Bind panzoom events from options
            b.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function () { var a = c["on" + this]; b.isFunction(a) && (h["panzoom" + this.toLowerCase() + d] = a) }),
            // Bind $elem drag and click/touchdown events
            // Bind touchstart if either panning or zooming is enabled
            c.disablePan && c.disableZoom || (h[e] = function (b) { var d; ("touchstart" === b.type ? !(d = b.touches) || (1 !== d.length || c.disablePan) && 2 !== d.length : c.disablePan || 1 !== b.which) || (b.preventDefault(), b.stopPropagation(), a._startMove(b, d)) }), this.$elem.on(h),
            // Bind reset
            i.length && i.on(f, function (b) { b.preventDefault(), a.reset() }),
            // Set default attributes for the range input
            j.length && j.attr({
               // Only set the range step if explicit or
               // set the default if there is no attribute present
               step: c.rangeStep === g.defaults.rangeStep && j.attr("step") || c.rangeStep, min: c.minScale, max: c.maxScale
            }).prop({ value: this.getMatrix()[0] }), !c.disableZoom) {
            var k = this.$zoomIn, l = this.$zoomOut;
            // Bind zoom in/out
            // Don't bind one without the other
            k.length && l.length && (
               // preventDefault cancels future mouse events on touch events
               k.on(f, function (b) { b.preventDefault(), a.zoom() }), l.on(f, function (b) { b.preventDefault(), a.zoom(!0) })), j.length && (h = {}, h[(o ? "pointerdown" : "mousedown") + d] = function () { a.transition(!0) }, h[(p ? "input" : "change") + d] = function () { a.zoom(+this.value, { noSetRange: !0 }) }, j.on(h))
         }
      },/**
		 * Unbind all events
		 */
      _unbind: function () { this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace) },/**
		 * Builds the original transform value
		 */
      _buildTransform: function () {
         // Save the original transform
         // Retrieving this also adds the correct prefixed style name
         // to jQuery's internal $.cssProps
         return this._origTransform = this.getTransform(this.options.startTransform)
      },/**
		 * Set transition property for later use when zooming
		 * If SVG, create necessary animations elements for translations and scaling
		 */
      _buildTransition: function () { if (this._transform) { var a = this.options; this._transition = this._transform + " " + a.duration + "ms " + a.easing } },/**
		 * Checks dimensions to make sure they don't need to be re-calculated
		 */
      _checkDims: function () {
         var a = this.dimensions;
         // Rebuild if width or height is still 0
         return a.width && a.height || this.resetDimensions(), this.dimensions
      },/**
		 * Calculates the distance between two touch points
		 * Remember pythagorean?
		 * @param {Array} touches
		 * @returns {Number} Returns the distance
		 */
      _getDistance: function (a) { var b = a[0], c = a[1]; return Math.sqrt(Math.pow(Math.abs(c.clientX - b.clientX), 2) + Math.pow(Math.abs(c.clientY - b.clientY), 2)) },/**
		 * Constructs an approximated point in the middle of two touch points
		 * @returns {Object} Returns an object containing pageX and pageY
		 */
      _getMiddle: function (a) { var b = a[0], c = a[1]; return { clientX: (c.clientX - b.clientX) / 2 + b.clientX, clientY: (c.clientY - b.clientY) / 2 + b.clientY } },/**
		 * Trigger a panzoom event on our element
		 * The event is passed the Panzoom instance
		 * @param {String|jQuery.Event} event
		 * @param {Mixed} arg1[, arg2, arg3, ...] Arguments to append to the trigger
		 */
      _trigger: function (a) { "string" == typeof a && (a = "panzoom" + a), this.$elem.triggerHandler(a, [this].concat(n.call(arguments, 1))) },/**
		 * Starts the pan
		 * This is bound to mouse/touchmove on the element
		 * @param {jQuery.Event} event An event with pageX, pageY, and possibly the touches list
		 * @param {TouchList} [touches] The touches list if present
		 */
      _startMove: function (a, d) {
         var e, f, g, h, i, j, k, m, n = this, p = this.options, q = p.eventNamespace, r = this.getMatrix(), s = r.slice(0), t = +s[4], u = +s[5], v = { matrix: r, animate: "skip" };
         // Use proper events
         o ? (f = "pointermove", g = "pointerup") : "touchstart" === a.type ? (f = "touchmove", g = "touchend") : (f = "mousemove", g = "mouseup"), f += q, g += q, this.transition(!0), this.panning = !0, this._trigger("start", a, d), d && 2 === d.length ? (h = this._getDistance(d), i = +r[0], j = this._getMiddle(d), e = function (a) { a.preventDefault(); var b = n._getMiddle(d = a.touches), c = n._getDistance(d) - h; n.zoom(c * (p.increment / 100) + i, { focal: b, matrix: r, animate: !1 }), n.pan(+r[4] + b.clientX - j.clientX, +r[5] + b.clientY - j.clientY, v), j = b }) : (k = a.pageX, m = a.pageY, e = function (a) { a.preventDefault(), n.pan(t + a.pageX - k, u + a.pageY - m, v) }), b(l).off(q).on(f, e).on(g, function (a) { a.preventDefault(), b(this).off(q), n.panning = !1, a.type = "panzoomend", n._trigger(a, r, !c(r, s)) })
      }
   }, b.Panzoom = g, b.fn.panzoom = function (a) {
      var c, d, e, f;
      // Call methods widget-style
      // Call methods widget-style
      return "string" == typeof a ? (f = [], d = n.call(arguments, 1), this.each(function () { c = b.data(this, m), c ? "_" !== a.charAt(0) && "function" == typeof (e = c[a]) && void 0 !== (e = e.apply(c, d)) && f.push(e) : f.push(void 0) }), f.length ? 1 === f.length ? f[0] : f : this) : this.each(function () { new g(this, a) })
   }, g
});