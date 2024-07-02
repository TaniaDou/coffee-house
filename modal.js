"use strict";
function t(t) {
    const a = e.filter((e=>e.category === t))
        , c = document.querySelector(".menu__list");
    c.innerHTML = "";
    const n = document.querySelector("button.renew");
    a.length > 4 ? (c.classList.add("menu__list_hidden"),
        n.classList.add("renew_visible")) : n.classList.remove("renew_visible"),
        a.forEach(((e,t)=>{
                const a = function(e, t, a, c, n) {
                    const i = document.createElement("div");
                    i.classList.add("menu__card"),
                        i.setAttribute("data-name", t),
                        i.setAttribute("data-category", e);
                    const d = document.createElement("div");
                    d.classList.add("card__image");
                    const r = document.createElement("img");
                    r.src = `../assets/${e}-${n}.jpg`,
                        r.alt = `${e}-${n}`,
                        d.appendChild(r);
                    const s = document.createElement("div");
                    s.classList.add("menu-card__description");
                    const o = document.createElement("h3");
                    o.textContent = t;
                    const l = document.createElement("p");
                    l.textContent = a;
                    const m = document.createElement("h3");
                    return m.textContent = c,
                        s.appendChild(o),
                        s.appendChild(l),
                        s.appendChild(m),
                        i.appendChild(d),
                        i.appendChild(s),
                        i
                }(e.category, e.name, e.description, e.price, t + 1);
                c.appendChild(a)
            }
        ))
}
let a = 0
    , c = 0
    , n = 0
    , i = 0;
const d = document.querySelectorAll(".progress-bar__inner")
    , r = document.querySelector(".carousel__container");
let s = d[0]
    , o = 0;
const l = ()=>{
        document.querySelector(".carousel") && (function() {
            const e = document.querySelector(".carousel__button_left")
                , t = document.querySelector(".carousel__button_right");
            e && e.addEventListener("click", (()=>{
                    clearInterval(c),
                        clearTimeout(o),
                        p(),
                        _()
                }
            )),
            t && t.addEventListener("click", (()=>{
                    clearInterval(c),
                        clearTimeout(o),
                        m(),
                        _()
                }
            ))
        }(),
            _(),
            function() {
                let e = 0
                    , t = 0;
                document.querySelector(".carousel__container").addEventListener("touchstart", (t=>{
                        e = t.touches[0].clientX,
                            clearInterval(i),
                            clearInterval(c),
                            clearTimeout(o)
                    }
                )),
                    document.querySelector(".carousel__container").addEventListener("touchend", (a=>{
                            t = a.changedTouches[0].clientX,
                                function() {
                                    const a = t - e;
                                    clearInterval(c),
                                        clearTimeout(o),
                                        a > 50 ? p() : a < -50 && m(),
                                        _()
                                }(),
                                h(),
                                o = setTimeout((()=>{
                                        clearInterval(c),
                                            m(),
                                            _()
                                    }
                                ), 5e3 - 50 * n)
                        }
                    ))
            }(),
            h(),
            r.addEventListener("mouseenter", (()=>{
                    clearInterval(i),
                        clearInterval(c),
                        clearTimeout(o)
                }
            )),
            r.addEventListener("mouseleave", (()=>{
                    h(),
                        o = setTimeout((()=>{
                                clearInterval(c),
                                    m(),
                                    _()
                            }
                        ), 5e3 - 50 * n)
                }
            )))
    }
;
function m() {
    a = 2 === a ? 0 : a + 1,
        u()
}
function p() {
    a = 0 === a ? 2 : a - 1,
        u()
}
function u() {
    n = 0,
        s.style.width = "0",
        clearInterval(i);
    const e = -100 * a;
    document.querySelector(".carousel__wrapper").style.transform = `translateX(${e}%)`,
        s = d[a],
        h()
}
function _() {
    c = setInterval((()=>{
            m()
        }
    ), 5e3)
}
function h() {
    i = setInterval((()=>{
            n >= 100 ? clearInterval(i) : (n++,
                s.style.width = n + "%")
        }
    ), 50)
}
const g = {
    coffee: ["Sugar", "Cinnamon", "Syrup"],
    tea: ["Sugar", "Lemon", "Syrup"],
    dessert: ["Berries", "Nuts", "Jam"]
};
let v = 0
    , y = 0
    , f = {
    s: 0,
    m: .5,
    l: 1
}
    , z = 0;
const b = document.querySelector(".menu__list")
    , C = ()=>{
        b && b.addEventListener("click", (t=>{
                const a = t.target.closest(".menu__card")
                    , c = a.getAttribute("data-name")
                    , n = a.getAttribute("data-category");
                let i = 0;
                !function(e, t) {
                    document.body.style.overflow = "hidden";
                    const a = document.createElement("div");
                    a.className = "modal";
                    const c = document.createElement("div");
                    c.className = "modal__wrapper";
                    const n = document.createElement("div");
                    n.className = "modal__image";
                    const i = document.createElement("img");
                    i.src = `../assets/${e.category}-${t + 1}.jpg`,
                        i.alt = `${e.category}-${t + 1}`,
                        n.appendChild(i);
                    const d = document.createElement("div");
                    d.className = "modal__content";
                    const r = document.createElement("div");
                    r.className = "modal__header__wrapper";
                    const s = document.createElement("h3");
                    s.className = "modal__header",
                        s.textContent = `${e.name}`;
                    const o = document.createElement("p");
                    o.className = "description",
                        o.textContent = `${e.description}`,
                        r.appendChild(s),
                        r.appendChild(o);
                    const l = document.createElement("div");
                    l.className = "modal__sizes";
                    const m = document.createElement("p");
                    m.className = "label",
                        m.textContent = "Size";
                    const p = document.createElement("div");
                    p.className = "size__controls";
                    const u = "dessert" === e.category
                        , _ = ["S", "M", "L"];
                    (u ? [50, 100, 200] : [200, 300, 400]).forEach(((e,t)=>{
                            p.appendChild(((e,t)=>{
                                    const a = document.createElement("button");
                                    a.className = "controls__button",
                                    t === (u ? 50 : 200) && a.classList.add("controls__button_active");
                                    const c = u ? "g" : "ml";
                                    return a.innerHTML = `<span class="controls__icon">${e}</span>${t} ${c}`,
                                        a
                                }
                            )(_[t], e))
                        }
                    )),
                        l.appendChild(m),
                        l.appendChild(p);
                    const h = document.createElement("div");
                    h.className = "modal__additives";
                    const b = document.createElement("p");
                    b.className = "label",
                        b.textContent = "Additives";
                    const C = document.createElement("div");
                    C.className = "additives__controls";
                    g[e.category].forEach(((e,t)=>{
                            C.appendChild(((e,t)=>{
                                    const a = document.createElement("button");
                                    return a.className = "controls__button",
                                        a.innerHTML = `<span class="controls__icon">${e}</span>${t}`,
                                        a
                                }
                            )(t + 1, e))
                        }
                    )),
                        h.appendChild(b),
                        h.appendChild(C);
                    const S = document.createElement("div");
                    S.className = "modal__total";
                    const w = document.createElement("h3");
                    w.textContent = "Total:";
                    const L = document.createElement("h3");
                    L.className = "total__price",
                        v = Number.parseFloat(e.price),
                        L.textContent = `$ ${e.price}`,
                        S.appendChild(w),
                        S.appendChild(L);
                    const k = document.createElement("div");
                    k.className = "small-size__description";
                    const N = document.createElement("span");
                    N.className = "circle__icon",
                        N.textContent = "i";
                    const q = document.createElement("span");
                    q.textContent = "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.",
                        k.appendChild(N),
                        k.appendChild(q);
                    const $ = document.createElement("button");
                    $.className = "close-button",
                        $.textContent = "Close",
                        d.appendChild(r),
                        d.appendChild(l),
                        d.appendChild(h),
                        d.appendChild(S),
                        d.appendChild(k),
                        d.appendChild($),
                        c.appendChild(n),
                        c.appendChild(d),
                        a.appendChild(c),
                        $.addEventListener("click", (()=>{
                                E()
                            }
                        )),
                        a.addEventListener("click", (e=>{
                                e.target.closest(".modal__wrapper") || E()
                            }
                        )),
                        document.body.appendChild(a),
                        function() {
                            const e = document.querySelectorAll(".size__controls .controls__button");
                            e.forEach((t=>{
                                    t.addEventListener("click", (()=>{
                                            t.classList.contains("controls__button_active") || function(e, t) {
                                                const a = t.querySelector(".controls__icon").innerText;
                                                e.forEach((e=>e.classList.remove("controls__button_active"))),
                                                    t.classList.add("controls__button_active"),
                                                    y = 0,
                                                    y = f[a.toLowerCase()],
                                                    document.querySelector(".total__price").innerText = `$ ${(v + y + z).toFixed(2)}`
                                            }(e, t)
                                        }
                                    ))
                                }
                            ))
                        }(),
                        document.querySelectorAll(".additives__controls .controls__button").forEach((e=>{
                                e.addEventListener("click", (()=>{
                                        var t;
                                        (t = e).classList.contains("controls__button_active") ? (t.classList.remove("controls__button_active"),
                                            z -= .5) : (t.classList.add("controls__button_active"),
                                            z += .5),
                                            document.querySelector(".total__price").innerText = `$ ${(v + y + z).toFixed(2)}`
                                    }
                                ))
                            }
                        ))
                }(e.filter((e=>e.category === n)).find(((e,t)=>(i = t,
                e.name === c))), i)
            }
        ))
    }
;
function E() {
    const e = document.querySelector(".modal");
    z = 0,
        y = 0,
        document.body.removeChild(e),
        document.body.style.overflow = "auto"
}
window.onload = ()=>{
    document.querySelector(".menu__controls") && t("coffee"),
        function() {
            const e = document.querySelector("button.renew")
                , t = document.querySelector(".menu__list");
            e?.addEventListener("click", (()=>{
                    t.classList.remove("menu__list_hidden"),
                        e.classList.remove("renew_visible")
                }
            ))
        }(),
        document.querySelector(".menu__controls")?.addEventListener("click", (e=>{
                let a = e.target;
                a.classList.contains("controls__button") && (document.querySelectorAll(".menu__controls .controls__button").forEach((e=>e.classList.remove("controls__button_active"))),
                    function(e) {
                        e.classList.add("controls__button_active")
                    }(a),
                    t(a.innerText.toLowerCase()))
            }
        )),
        function() {
            const e = document.querySelector(".burger")
                , t = document.querySelector(".burger-menu");
            let a = !1;
            t?.addEventListener("click", (()=>{
                    t.classList.remove("burger-menu_shown"),
                        e.classList.remove("burger_opened"),
                        a = !1
                }
            )),
                e?.addEventListener("click", (()=>{
                        a ? (t.classList.remove("burger-menu_shown"),
                            e.classList.remove("burger_opened"),
                            a = !1) : (t.classList.add("burger-menu_shown"),
                            e.classList.add("burger_opened"),
                            a = !0)
                    }
                ))
        }(),
        l(),
        C()
}