(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        56617: function(e, s, n) {
            "use strict";
            n(21902);
            var a = n(24081),
                i = n(53704);
            s.Z = function(e) {
                var s = e.desc,
                    n = e.imgClass,
                    r = e.imgSrc,
                    t = (e.isTouch, e.price),
                    o = e.title,
                    l = e.withRadial,
                    c = void 0 !== l && l,
                    d = e.withExtraContent,
                    u = void 0 !== d && d;
                return (0, i.jsxs)("div", {
                    className: "storeCardExample",
                    children: [(0, i.jsxs)("div", {
                        className: "price",
                        children: [(0, i.jsx)("img", {
                            src: (0, a.SF)("slanted-coin-mini@2x.png")
                        }), t]
                    }), (0, i.jsx)("div", {
                        className: "storeCardExample__contentWrapper".concat(c ? " withRadial" : ""),
                        children: (0, i.jsx)("img", {
                            className: "storeCardExample__mainImg ".concat(n),
                            src: r
                        })
                    }), u && (0, i.jsxs)("div", {
                        className: "rankTimestamp",
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)("img", {
                                src: (0, a.SF)("double-chevron.svg")
                            }), "2x"]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("img", {
                                src: (0, a.SF)("stopwatch.svg")
                            }), "1h"]
                        })]
                    }), (0, i.jsx)("h4", {
                        children: o
                    }), (0, i.jsx)("p", {
                        children: s
                    })]
                })
            }
        },
        48858: function(e, s, n) {
            "use strict";
            n.d(s, {
                Z: function() {
                    return t
                }
            });
            var a = n(60045),
                i = n(21902),
                r = n(18838);

            function t(e, s) {
                var n = (0, i.useRef)(null),
                    t = (0, i.useContext)(r.UserAgentContext).isTouch(),
                    o = t ? .25 : 1;
                (0, i.useEffect)((function() {
                    var i = new IntersectionObserver((function(s) {
                        var i = (0, a.Z)(s, 1)[0];
                        !(i.isIntersecting && i.intersectionRatio >= o) || t && n.current || (n.current = !0, e())
                    }), {
                        threshold: [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1],
                        rootMargin: "-100px 0px 0px 0px"
                    });
                    return i.observe(s.current),
                        function() {
                            i.disconnect()
                        }
                }), [])
            }
        },
        13476: function(e, s, n) {
            "use strict";
            n.d(s, {
                Z: function() {
                    return w
                }
            });
            var a = n(21902),
                i = n(64371),
                r = n(46653),
                t = n(9557),
                o = n(77419),
                l = n(6720),
                c = n(88459),
                d = n(24081),
                u = n(58346),
                m = n(12268),
                h = n(53704),
                g = function() {
                    var e = (0, m.ZP)().mixpanelEvent,
                        s = (0, u.Z)().currentUser;
                    return (0, h.jsx)(o.Z, {
                        className: "marketing__header",
                        title: "",
                        style: {
                            height: "129px",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            fontFamily: "Poppins",
                            width: "100%"
                        },
                        children: (0, h.jsxs)(l.Z, {
                            align: "middle",
                            justify: "space-between",
                            style: {
                                maxWidth: "1824px",
                                height: "100%",
                                margin: "0 auto",
                                width: "100%"
                            },
                            gutter: 16,
                            children: [(0, h.jsx)("div", {
                                className: "main-header-logo",
                                style: {
                                    display: "flex"
                                },
                                children: (0, h.jsxs)("div", {
                                    style: {
                                        display: "inline-flex"
                                    },
                                    children: [(0, h.jsx)("a", {
                                        href: "/auth/login",
                                        children: (0, h.jsx)("img", {
                                            className: "marketing__logo",
                                            src: (0, d.SF)("icon-with-text--gradient.svg")
                                        })
                                    }), (0, h.jsx)("a", {
                                        className: "getMushroomBot",
                                        href: "/bot/landing",
                                        onClick: function() {
                                            e(m.bX.HEADER_CLICKED_ADD_BOT)
                                        },
                                        target: "__blank",
                                        children: (0, h.jsx)("div", {
                                            className: "button gradient-button",
                                            children: "Get Mushroom Bot"
                                        })
                                    })]
                                })
                            }), (0, h.jsx)("div", {
                                className: "marketing__login",
                                style: {
                                    textAlign: "right",
                                    minWidth: "300px"
                                },
                                children: s ? (0, h.jsx)("a", {
                                    href: "/auth/logout",
                                    children: (0, h.jsx)(c.Z, {
                                        className: "marketing__login-btn",
                                        type: "ghost",
                                        children: "Logout"
                                    })
                                }) : (0, h.jsx)("div", {
                                    className: "header__loginButton",
                                    children: (0, h.jsx)("a", {
                                        href: "/auth/login",
                                        onClick: function() {
                                            e(m.bX.HEADER_CLICKED_LOGIN)
                                        },
                                        children: (0, h.jsxs)("div", {
                                            className: "button gradient-button",
                                            children: [(0, h.jsx)("img", {
                                                src: (0, d.SF)("icons/Discord/WhiteDiscord.svg"),
                                                height: 20,
                                                width: 20
                                            }), (0, h.jsx)("span", {
                                                className: "full",
                                                children: "Join Discord"
                                            }), (0, h.jsx)("span", {
                                                className: "mobile",
                                                children: "Login"
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                x = n(76436),
                f = n.n(x),
                p = n(48858),
                v = n(12706),
                j = n(20627),
                _ = function(e) {
                    var s = e.className,
                        n = e.mode,
                        a = e.onClick,
                        i = void 0 === a ? null : a,
                        r = "inline" === n;
                    return (0, h.jsxs)(v.Z, {
                        className: s,
                        mode: n,
                        selectable: !1,
                        children: [(0, h.jsx)(v.Z.Item, {
                            onClick: i,
                            children: (0, h.jsx)(j.Z, {
                                href: "/privacy-policy",
                                name: "Privacy Policy",
                                nameFirst: !0,
                                icon: r && (0, h.jsx)("img", {
                                    src: (0, d.SF)("icons/CaretSmall.svg"),
                                    className: "chevronRight",
                                    height: 20,
                                    width: 20
                                })
                            })
                        }), (0, h.jsx)(v.Z.Item, {
                            onClick: i,
                            children: (0, h.jsxs)("a", {
                                href: "/official-discord",
                                target: "_blank",
                                children: ["Support Server", r && (0, h.jsx)("img", {
                                    src: (0, d.SF)("icons/CaretSmall.svg"),
                                    className: "chevronRight",
                                    height: 20,
                                    width: 20
                                })]
                            })
                        }), (0, h.jsx)(v.Z.Item, {
                            onClick: i,
                            children: (0, h.jsx)(j.Z, {
                                href: "/team",
                                name: "About",
                                nameFirst: !0,
                                icon: r && (0, h.jsx)("img", {
                                    src: (0, d.SF)("icons/CaretSmall.svg"),
                                    className: "chevronRight",
                                    height: 20,
                                    width: 20
                                })
                            })
                        }), (0, h.jsx)(v.Z.Item, {
                            onClick: i,
                            children: (0, h.jsx)(j.Z, {
                                href: "/faq",
                                name: "FAQ",
                                nameFirst: !0,
                                icon: r && (0, h.jsx)("img", {
                                    src: (0, d.SF)("icons/CaretSmall.svg"),
                                    className: "chevronRight",
                                    height: 20,
                                    width: 20
                                })
                            })
                        })]
                    })
                },
                N = function() {
                    var e = (0, m.ZP)().mixpanelEvent,
                        s = (0, a.useRef)(null);
                    return (0, p.Z)((function() {
                        e(m.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "footer"
                        })
                    }), s), (0, h.jsx)("div", {
                        className: "landingPage__footer landingPage__section",
                        ref: s,
                        children: (0, h.jsxs)("div", {
                            className: "landingPage__footer__content",
                            children: [(0, h.jsxs)("div", {
                                className: "landingPage__footer__leftCol",
                                children: [(0, h.jsx)("img", {
                                    className: "logo",
                                    src: (0, d.SF)("icon-pink--gradient.svg")
                                }), (0, h.jsxs)("p", {
                                    children: ["Copyright \xa9 ", f()().year(), " Mushroom.gg, Inc."]
                                }), (0, h.jsx)("a", {
                                    className: "getMushroomBot",
                                    href: "/bot/landing",
                                    onClick: function() {
                                        e(m.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                            subsection: "footer"
                                        })
                                    },
                                    children: (0, h.jsx)("div", {
                                        className: "button gradient-button",
                                        children: "Add Our Discord Bot"
                                    })
                                })]
                            }), (0, h.jsx)("div", {
                                className: "landingPage__footer__rightCol",
                                children: (0, h.jsx)(_, {
                                    className: "landingFooter",
                                    mode: "vertical"
                                })
                            })]
                        })
                    })
                },
                b = i.Z.Content,
                y = function(e) {
                    var s = e.children,
                        n = e.showHeader,
                        o = void 0 === n || n,
                        l = e.showFooter,
                        c = void 0 === l || l;
                    (0, r.useRouter)();
                    var d = (0, a.useRef)(null);
                    return (0, t.Z)({
                        componentRef: d
                    }), (0, h.jsx)("div", {
                        ref: d,
                        children: (0, h.jsxs)(i.Z, {
                            style: {
                                position: "relative"
                            },
                            className: "marketing__layout",
                            hasSider: !1,
                            children: [o && (0, h.jsx)(g, {}), (0, h.jsx)(b, {
                                children: s
                            }), c && (0, h.jsx)(N, {})]
                        })
                    })
                },
                w = function(e) {
                    return (0, h.jsx)(y, {
                        children: e
                    })
                }
        },
        54355: function(e, s, n) {
            "use strict";
            n.d(s, {
                Z: function() {
                    return g
                }
            });
            var a = n(21902),
                i = n(64371),
                r = n(83537),
                t = n(77419),
                o = n(12706),
                l = n(53231),
                c = n(24081),
                d = n(20627),
                u = n(53704),
                m = function() {
                    var e = (0, a.useState)(!1),
                        s = e[0],
                        n = e[1],
                        i = function() {
                            n(!s)
                        };
                    return (0, u.jsxs)(t.Z, {
                        className: "onboardHeader",
                        title: "",
                        children: [(0, u.jsx)("div", {
                            className: "onboardHeader__logo",
                            children: (0, u.jsx)(r.default, {
                                href: "/",
                                children: (0, u.jsxs)("a", {
                                    children: [(0, u.jsx)("img", {
                                        className: "onboardHeader__logo onboardHeader__logo--mobile",
                                        src: (0, c.SF)("icon-with-text--gradient.svg")
                                    }), (0, u.jsx)("img", {
                                        className: "onboardHeader__logo onboardHeader__logo--desktop",
                                        src: (0, c.SF)("mushroom-logo-both.svg")
                                    })]
                                })
                            })
                        }), (0, u.jsxs)(o.Z, {
                            className: "onboardHeader__menu",
                            mode: "horizontal",
                            selectable: !1,
                            children: [(0, u.jsx)(o.Z.Item, {
                                children: (0, u.jsx)(d.Z, {
                                    href: "/faq",
                                    name: "FAQ",
                                    nameFirst: !0
                                })
                            }), (0, u.jsx)(o.Z.Item, {
                                children: (0, u.jsx)("a", {
                                    href: "/official-discord",
                                    target: "_blank",
                                    children: "Support Server"
                                })
                            }), (0, u.jsx)(o.Z.Item, {
                                children: (0, u.jsx)(d.Z, {
                                    href: "/team",
                                    name: "About",
                                    nameFirst: !0
                                })
                            }), (0, u.jsx)(o.Z.Item, {
                                children: (0, u.jsx)(d.Z, {
                                    href: "/privacy-policy",
                                    name: "Privacy",
                                    nameFirst: !0
                                })
                            })]
                        }), (0, u.jsx)("img", {
                            className: "onboardHeader__drawerTrigger",
                            onClick: i,
                            src: (0, c.SF)("icons/More.svg")
                        }), (0, u.jsx)(l.Z, {
                            className: "onboardHeader__drawer",
                            closeIcon: (0, u.jsx)("img", {
                                src: "icons/Close-Big/WhiteClose-Big.svg"
                            }),
                            placement: "right",
                            onClose: i,
                            title: (0, u.jsx)(r.default, {
                                href: "/",
                                children: (0, u.jsx)("a", {
                                    onClick: i,
                                    children: (0, u.jsx)("img", {
                                        src: (0, c.SF)("icon-pink.svg")
                                    })
                                })
                            }),
                            visible: s,
                            children: (0, u.jsxs)("div", {
                                children: [(0, u.jsx)("span", {
                                    className: "onboardHeader__drawerTitle",
                                    children: "Menu"
                                }), (0, u.jsxs)(o.Z, {
                                    className: "onboardHeader__drawerMenu",
                                    mode: "inline",
                                    selectable: !1,
                                    children: [(0, u.jsx)(o.Z.Item, {
                                        children: (0, u.jsx)(d.Z, {
                                            href: "/faq",
                                            name: "FAQ",
                                            nameFirst: !0,
                                            icon: (0, u.jsx)("img", {
                                                src: (0, c.SF)("icons/Caret/CaretSmall.svg"),
                                                className: "chevronRight",
                                                height: 20,
                                                width: 20
                                            })
                                        })
                                    }), (0, u.jsx)(o.Z.Item, {
                                        children: (0, u.jsxs)("a", {
                                            href: "/official-discord",
                                            target: "_blank",
                                            children: ["Support Server", (0, u.jsx)("img", {
                                                src: (0, c.SF)("icons/Caret/CaretSmall.svg"),
                                                className: "chevronRight",
                                                height: 20,
                                                width: 20
                                            })]
                                        })
                                    }), (0, u.jsx)(o.Z.Item, {
                                        children: (0, u.jsx)(d.Z, {
                                            href: "/team",
                                            name: "About",
                                            nameFirst: !0,
                                            icon: (0, u.jsx)("img", {
                                                src: (0, c.SF)("icons/Caret/CaretSmall.svg"),
                                                className: "chevronRight",
                                                height: 20,
                                                width: 20
                                            })
                                        })
                                    }), (0, u.jsx)(o.Z.Item, {
                                        children: (0, u.jsx)(d.Z, {
                                            href: "/privacy-policy",
                                            name: "Privacy",
                                            nameFirst: !0,
                                            icon: (0, u.jsx)("img", {
                                                src: (0, c.SF)("icons/Caret/CaretSmall.svg"),
                                                className: "chevronRight",
                                                height: 20,
                                                width: 20
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                h = i.Z.Content,
                g = function(e) {
                    return (0, u.jsxs)(i.Z, {
                        style: {
                            position: "relative"
                        },
                        className: "onboard__layout",
                        hasSider: !1,
                        children: [(0, u.jsx)(m, {}), (0, u.jsx)(h, {
                            className: "onboardPage",
                            children: e
                        })]
                    })
                }
        },
        72277: function(e, s, n) {
            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return Te
                }
            });
            var a, i, r, t, o, l = n(21902),
                c = n(46653),
                d = n(58346),
                u = n(24081),
                m = n(83068),
                h = n(51434),
                g = n(55542),
                x = n(12980),
                f = n(98337),
                p = n(60045),
                v = n(49059),
                j = n(96103),
                _ = n.n(j),
                N = n(38727),
                b = n(45411),
                y = n(50845),
                w = n(63903),
                C = n(88459),
                S = n(6720),
                F = n(44583),
                A = n(72219),
                E = n(75901),
                L = n(17138),
                Z = n(18130),
                P = n.n(Z),
                k = n(38716),
                I = n(79340),
                T = n(92314),
                D = n(68571),
                O = n(66051),
                G = n(4477),
                R = n(53704),
                B = (a = {}, (0, D.Z)(a, m.uC.FIRST, 0), (0, D.Z)(a, m.uC.SECOND, 1), (0, D.Z)(a, m.uC.THIRD, 2), a),
                M = function(e) {
                    var s = e.suggestion,
                        n = (0, N.useQuery)(G.uR, {
                            variables: {
                                limit: 33
                            },
                            fetchPolicy: "cache-first"
                        }),
                        a = n.data,
                        i = n.loading,
                        r = n.error,
                        t = (0, l.useMemo)((function() {
                            var e, n = [];
                            if (null !== a && void 0 !== a && null !== (e = a.getRelationshipRecommendations) && void 0 !== e && e.length) {
                                var i = a.getRelationshipRecommendations.slice(3, a.getRelationshipRecommendations.length);
                                if (i.length && void 0 !== B[s.carousel])
                                    for (var r = B[s.carousel]; r < i.length; r += 3) {
                                        var t = i[r];
                                        n.push(t)
                                    }
                            }
                            return n
                        }), [s.carousel, a]);
                    return i ? (0, R.jsx)(g.Z, {}) : r ? null : t.length ? (0, R.jsx)("div", {
                        style: {
                            marginBottom: "24px"
                        },
                        children: (0, R.jsx)(O.Z, {
                            recommendations: t
                        })
                    }) : null
                },
                q = function(e) {
                    var s = e.currentUser,
                        n = e.feed,
                        a = e.handleLoadMore,
                        i = e.showAllCaughtUp,
                        r = void 0 === i || i,
                        t = e.showTimeStamp,
                        o = void 0 !== t && t,
                        l = e.context,
                        c = (0, N.useReactiveVar)(E.AV),
                        d = n.data.length,
                        u = n.data.map((function(e, n) {
                            var a, i, r, t, u;
                            switch (e.__typename) {
                                case "PostDTO":
                                    var h = e;
                                    return (0, R.jsxs)("div", {
                                        className: "pagedPost".concat(n === d - 1 ? " pagedPost--lastPost" : ""),
                                        children: [c && (0, R.jsxs)(R.Fragment, {
                                            children: [(0, R.jsxs)("div", {
                                                children: ["Post ID: ", h.id]
                                            }), (0, R.jsxs)("p", {
                                                children: ["effective: ", h.total, "; total:", " ", (h.contentAF + h.authorAF + h.contentQL + h.misc + h.promotion).toFixed(2), " ", "; contentAF: ", null !== (a = h.contentAF) && void 0 !== a ? a : 0, "; contentQL:", " ", null !== (i = h.contentQL) && void 0 !== i ? i : 0, "; authorAF: ", null !== (r = h.authorAF) && void 0 !== r ? r : 0, "; misc:", " ", null !== (t = h.misc) && void 0 !== t ? t : 0, "; promotion: ", null !== (u = h.promotion) && void 0 !== u ? u : 0, ";"]
                                            })]
                                        }), (0, R.jsx)(I.Z, {
                                            post: h,
                                            showTimeStamp: o,
                                            showDoubleTapPopover: 1 === n && !(s.onboardFlags & m.y4.DISMISSED_DOUBLE_TAP_POPOVER),
                                            context: l
                                        }, h.id)]
                                    }, h.id);
                                case "FeedRecommendationDTO":
                                    var g = e;
                                    return (0, R.jsx)(M, {
                                        suggestion: g
                                    }, "FeedRecommendationDTO-".concat(g.carousel));
                                default:
                                    return null
                            }
                        })),
                        h = n.hasMore;
                    return (0, R.jsxs)(P(), {
                        loadMore: a,
                        hasMore: h,
                        threshold: 3500,
                        loader: (0, R.jsx)(k.Z, {
                            style: {
                                minHeight: "200px"
                            }
                        }, 0),
                        children: [u, !h && r && (0, R.jsx)(T.Z, {})]
                    })
                },
                U = (0, b.ZP)(i || (i = (0, v.Z)(["\n  query GetNewsFeed(\n    $cursor: Cursor\n    $contentAF: Float\n    $contentQL: Float\n    $authorAF: Float\n    $unseenOnly: Boolean\n    $promotion: Float\n    $misc: Float\n    $base: Float\n    $decay: Float\n    $filter: FeedFilter\n  ) {\n    getNewsFeed(\n      cursor: $cursor\n      contentAF: $contentAF\n      contentQL: $contentQL\n      authorAF: $authorAF\n      unseenOnly: $unseenOnly\n      promotion: $promotion\n      misc: $misc\n      base: $base\n      decay: $decay\n      filter: $filter\n    ) {\n      cursor {\n        afterCursor\n      }\n      data {\n        ... on PostDTO {\n          ...postFields\n          contentAF\n          contentQL\n          authorAF\n          promotion\n          misc\n          total\n        }\n        ... on FeedRecommendationDTO {\n          carousel\n        }\n      }\n      hasMore\n    }\n  }\n  ", "\n"])), L.Is),
                W = ((0, b.ZP)(r || (r = (0, v.Z)(["\n  mutation UnseeAllPosts {\n    unseeAllPosts\n  }\n"]))), function(e) {
                    var s = e.currentUser,
                        n = e.weights,
                        a = e.filter,
                        i = e.context,
                        r = (0, N.useApolloClient)(),
                        t = (0, N.useQuery)(U, {
                            variables: {
                                filter: a,
                                contentAF: n.contentAF,
                                contentQL: n.contentQL,
                                authorAF: n.authorAF,
                                misc: n.misc,
                                base: n.base,
                                unseenOnly: n.unseenOnly,
                                promotion: n.promotion,
                                decay: n.decay
                            }
                        }),
                        o = t.loading,
                        c = t.data,
                        d = t.error,
                        u = t.fetchMore;
                    t.refetch;
                    (0, l.useEffect)((function() {
                        return function() {
                            r.cache.evict({
                                id: "ROOT_QUERY",
                                fieldName: "getNewsFeed"
                            }), r.cache.gc()
                        }
                    }), []);
                    var m = (0, l.useRef)(!1);
                    if (!c) {
                        if (o) return (0, R.jsx)(g.Z, {});
                        if (d) return (0, R.jsxs)("div", {
                            children: ["Something unexpected went wrong: ", d.message]
                        })
                    }
                    var h = function() {
                        var e = (0, f.Z)(_().mark((function e() {
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!0 !== m.current && !o) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return m.current = !0, e.prev = 3, e.next = 6, u({
                                            variables: {
                                                filter: a,
                                                contentAF: n.contentAF,
                                                contentQL: n.contentQL,
                                                authorAF: n.authorAF,
                                                misc: n.misc,
                                                base: n.base,
                                                unseenOnly: n.unseenOnly,
                                                promotion: n.promotion,
                                                decay: n.decay,
                                                cursor: {
                                                    afterCursor: c.getNewsFeed.cursor.afterCursor
                                                }
                                            }
                                        });
                                    case 6:
                                        return e.prev = 6, m.current = !1, e.finish(6);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, , 6, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return (0, R.jsx)(q, {
                        currentUser: s,
                        feed: c.getNewsFeed,
                        handleLoadMore: h,
                        showTimeStamp: !1,
                        context: i
                    })
                }),
                Q = n(68013),
                V = (0, b.ZP)(t || (t = (0, v.Z)(["\n  mutation UnseeAllPosts {\n    unseeAllPosts\n  }\n"]))),
                H = function(e) {
                    var s, n, a = e.currentUser,
                        i = e.feedType,
                        r = (0, c.useRouter)(),
                        t = r.query.p;
                    null !== (s = t) && void 0 !== s && null !== (n = s.match(u.B8)) && void 0 !== n && n.length || (t = "");
                    r.query.f;
                    var o = (0, l.useState)(100),
                        d = o[0],
                        h = o[1],
                        g = (0, l.useState)(100),
                        x = g[0],
                        v = g[1],
                        j = (0, l.useState)(100),
                        b = j[0],
                        L = j[1],
                        Z = (0, l.useState)(100),
                        P = Z[0],
                        k = Z[1],
                        I = (0, l.useState)(300),
                        T = I[0],
                        D = I[1],
                        O = (0, l.useState)(!0),
                        G = O[0],
                        B = O[1],
                        M = (0, l.useState)(100),
                        q = M[0],
                        U = M[1],
                        H = (0, l.useState)(30),
                        X = H[0],
                        K = H[1],
                        $ = (0, Q.Z)({
                            func: function(e) {
                                h(Number(e))
                            },
                            wait: 500
                        }),
                        Y = (0, Q.Z)({
                            func: function(e) {
                                v(Number(e))
                            },
                            wait: 500
                        }),
                        z = (0, Q.Z)({
                            func: function(e) {
                                L(Number(e))
                            },
                            wait: 500
                        }),
                        J = (0, Q.Z)({
                            func: function(e) {
                                k(Number(e))
                            },
                            wait: 500
                        }),
                        ee = (0, Q.Z)({
                            func: function(e) {
                                U(Number(e))
                            },
                            wait: 500
                        }),
                        se = (0, Q.Z)({
                            func: function(e) {
                                K(Number(e))
                            },
                            wait: 500
                        }),
                        ne = (0, Q.Z)({
                            func: function(e) {
                                B(Boolean(e))
                            },
                            wait: 500
                        }),
                        ae = (0, Q.Z)({
                            func: function(e) {
                                D(Number(e))
                            },
                            wait: 500
                        }),
                        ie = (r.query.p, (0, N.useReactiveVar)(E.AV)),
                        re = (0, l.useState)(!1),
                        te = re[0],
                        oe = re[1],
                        le = (0, N.useMutation)(V),
                        ce = (0, p.Z)(le, 1)[0],
                        de = (m.Q2.NEWS, m.Q2.NEWS, m.Q2.FOLLOWS_CONTENT, m.Q2.NEWS, m.Q2.MUTUAL_GUILDS_CONTENT, function() {
                            var e = (0, f.Z)(_().mark((function e() {
                                var s, n;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ce();
                                        case 2:
                                            null !== (n = e.sent) && void 0 !== n && null !== (s = n.data) && void 0 !== s && s.unseeAllPosts ? (alert("Posts have been unseen, click OK to refresh page..."), location.reload()) : alert("Hmmm, something went wrong unseeing posts, you should probably tell James about this");
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }());
                    return (0, R.jsxs)(R.Fragment, {
                        children: [ie && (0, R.jsxs)("div", {
                            style: {
                                alignItems: "center",
                                marginBottom: "5px",
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [(0, R.jsx)(y.Z, {
                                onChange: function() {
                                    te ? (document.getElementById("observerBoundaries-1").style.display = "none", document.getElementById("observerBoundaries-2").style.display = "none") : (document.getElementById("observerBoundaries-1").style.display = "block", document.getElementById("observerBoundaries-2").style.display = "block"), oe(!te)
                                },
                                style: {
                                    marginBottom: "5px"
                                },
                                children: "Show Observer Boundaries"
                            }), (0, R.jsx)(w.Z, {
                                icon: null,
                                placement: "top",
                                onConfirm: de,
                                title: (0, R.jsx)("img", {
                                    src: (0, u.SF)("you-sure.jpeg")
                                }),
                                children: (0, R.jsx)(C.Z, {
                                    type: "primary",
                                    children: "Unsee All Posts"
                                })
                            })]
                        }), ie && (0, R.jsxs)(R.Fragment, {
                            children: [(0, R.jsx)("h4", {
                                children: "New version of news feed:"
                            }), (0, R.jsxs)(S.Z, {
                                children: [(0, R.jsx)("p", {
                                    children: "Content Affinity"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: $,
                                    size: "small",
                                    step: 5,
                                    defaultValue: d,
                                    parser: function(e) {
                                        return e.replace("%", "")
                                    },
                                    formatter: function(e) {
                                        return "".concat(e, "%")
                                    },
                                    className: "pay-coin-input"
                                }), (0, R.jsx)("p", {
                                    children: "Author Affinity"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: z,
                                    size: "small",
                                    step: 5,
                                    defaultValue: b,
                                    parser: function(e) {
                                        return e.replace("%", "")
                                    },
                                    formatter: function(e) {
                                        return "".concat(e, "%")
                                    },
                                    className: "pay-coin-input"
                                }), (0, R.jsx)("p", {
                                    children: "Content Quality"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: Y,
                                    size: "small",
                                    defaultValue: x,
                                    step: 5,
                                    parser: function(e) {
                                        return e.replace("%", "")
                                    },
                                    formatter: function(e) {
                                        return "".concat(e, "%")
                                    },
                                    className: "pay-coin-input"
                                })]
                            }), (0, R.jsxs)(S.Z, {
                                children: [(0, R.jsx)("p", {
                                    children: "Promotion"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: J,
                                    size: "small",
                                    defaultValue: P,
                                    step: 5,
                                    parser: function(e) {
                                        return e.replace("%", "")
                                    },
                                    formatter: function(e) {
                                        return "".concat(e, "%")
                                    },
                                    className: "pay-coin-input"
                                }), (0, R.jsx)("p", {
                                    children: "Misc"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: ee,
                                    size: "small",
                                    defaultValue: q,
                                    step: 5,
                                    parser: function(e) {
                                        return e.replace("%", "")
                                    },
                                    formatter: function(e) {
                                        return "".concat(e, "%")
                                    },
                                    className: "pay-coin-input"
                                }), (0, R.jsx)("p", {
                                    children: "Decay"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: ae,
                                    size: "small",
                                    defaultValue: T,
                                    step: 5,
                                    parser: function(e) {
                                        return e.replace("%", "")
                                    },
                                    formatter: function(e) {
                                        return "".concat(e, "%")
                                    },
                                    className: "pay-coin-input"
                                })]
                            }), (0, R.jsxs)(S.Z, {
                                children: [(0, R.jsx)("p", {
                                    children: "Base"
                                }), (0, R.jsx)(F.Z, {
                                    onChange: se,
                                    size: "small",
                                    defaultValue: X,
                                    step: 5,
                                    className: "pay-coin-input"
                                }), (0, R.jsx)("p", {
                                    children: "Unseen only"
                                }), (0, R.jsx)(A.Z, {
                                    onChange: ne,
                                    defaultChecked: G
                                })]
                            })]
                        }), "follow" === i ? (0, R.jsx)(W, {
                            currentUser: a,
                            weights: {
                                contentAF: d,
                                contentQL: x,
                                authorAF: b,
                                misc: q,
                                promotion: P,
                                unseenOnly: G,
                                base: X,
                                decay: T
                            },
                            filter: {
                                topPostId: t,
                                follows: !0
                            },
                            context: m.MK.FOLLOWING_FEED
                        }) : (0, R.jsx)(W, {
                            currentUser: a,
                            weights: {
                                contentAF: d,
                                contentQL: x,
                                authorAF: b,
                                misc: q,
                                promotion: P,
                                unseenOnly: G,
                                base: X,
                                decay: T
                            },
                            filter: {
                                topPostId: t,
                                follows: !1
                            },
                            context: m.MK.FOR_YOU_FEED
                        })]
                    })
                },
                X = n(73044),
                K = n(18838),
                $ = n(38154),
                Y = n(85580),
                z = n(73364),
                J = n(84811),
                ee = n(70334),
                se = n(53945),
                ne = n(76751),
                ae = n(59933),
                ie = n(87562),
                re = n(12268),
                te = z.ZP.Button,
                oe = (0, b.ZP)(o || (o = (0, v.Z)(["\n  mutation ViewFeed($type: Float!) {\n    viewFeed(type: $type) {\n      id\n    }\n  }\n"]))),
                le = function(e) {
                    var s = e.imgSrc,
                        n = e.label,
                        a = e.onClick,
                        i = void 0 === a ? function() {} : a,
                        r = e.showDot,
                        t = void 0 !== r && r,
                        o = e.value,
                        l = e.fullWidth,
                        c = void 0 !== l && l;
                    return (0, R.jsx)(se.Z, {
                        className: c ? "new-badge-full-width" : "new-badge-round",
                        dot: t,
                        offset: [-15, 23],
                        children: (0, R.jsxs)(te, {
                            style: c ? {
                                width: "100%",
                                height: "44px"
                            } : {
                                height: "44px"
                            },
                            onClick: i,
                            value: o,
                            children: ["string" === typeof s ? (0, R.jsx)("img", {
                                src: (0, u.SF)(s),
                                width: 16,
                                height: 16
                            }) : s, (0, R.jsx)(ne.Z, {
                                style: {
                                    fontSize: c ? 16 : 12,
                                    fontWeight: 600,
                                    marginLeft: c ? "10px" : "0"
                                },
                                children: n
                            })]
                        })
                    })
                },
                ce = function(e) {
                    var s = e.imgSrc,
                        n = e.label,
                        a = e.skip,
                        i = void 0 !== a && a,
                        r = e.user,
                        t = e.value,
                        o = e.fullWidth,
                        l = {
                            foryou: m.Q2.NEWS,
                            follow: m.Q2.NEWS | m.Q2.FOLLOWS_CONTENT,
                            mutualguilds: m.Q2.NEWS | m.Q2.MUTUAL_GUILDS_CONTENT
                        },
                        c = (0, re.ZP)().mixpanelEvent,
                        d = l[t] | m.Q2.HIDE_SEEN_CONTENT,
                        u = (0, N.useMutation)(oe, {
                            variables: {
                                type: d
                            }
                        }),
                        h = (0, p.Z)(u, 1)[0],
                        g = (0, N.useQuery)(ae.p$, {
                            skip: i,
                            variables: {
                                type: d,
                                slug: r.profile.slug,
                                shortId: r.shortId,
                                limit: 3,
                                cursor: {}
                            }
                        }),
                        x = g.data,
                        v = g.loading,
                        j = g.error;
                    if (v) return (0, R.jsx)(le, {
                        imgSrc: s,
                        label: n,
                        value: t,
                        fullWidth: o
                    });
                    if (j) return (0, R.jsx)(ie.Z, {});
                    var b = function() {
                            var e = (0, f.Z)(_().mark((function e() {
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return c(m.bX.FEED_FILTER_BUTTON_CLICKED, {
                                                filter_label: n
                                            }), e.next = 3, h({
                                                update: function(e) {
                                                    d & m.Q2.FOLLOWS_CONTENT && e.modify({
                                                        id: "CurrentUserDTO:".concat(r.id),
                                                        fields: {
                                                            lastViewedFriendsFeed: function() {
                                                                return new Date
                                                            }
                                                        }
                                                    }), d & m.Q2.MUTUAL_GUILDS_CONTENT && e.modify({
                                                        id: "CurrentUserDTO:".concat(r.id),
                                                        fields: {
                                                            lastViewedGuildsFeed: function() {
                                                                return new Date
                                                            }
                                                        }
                                                    })
                                                }
                                            });
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        y = null === x || void 0 === x ? void 0 : x.getPosts.data,
                        w = !r.lastViewedFriendsFeed && (null === y || void 0 === y ? void 0 : y.length) && !i;
                    return null !== y && void 0 !== y && y.length && r.lastViewedFriendsFeed && new Date(y[0].dateCreated).getTime() > new Date(r.lastViewedFriendsFeed).getTime() && (w = !0), (0, R.jsx)(le, {
                        imgSrc: s,
                        label: n,
                        onClick: b,
                        showDot: w,
                        value: t,
                        fullWidth: o
                    })
                },
                de = function(e) {
                    var s = e.className,
                        n = e.children;
                    return (0, R.jsx)("div", {
                        className: "twoCol__left--xs twoCol__col--scrollable ".concat(s),
                        children: n
                    })
                },
                ue = function() {
                    var e, s, n, a = (0, d.Z)().currentUser,
                        i = (0, l.useContext)(K.UserAgentContext),
                        r = (0, $.Z)(),
                        t = r.featureFlags,
                        o = r.featureFlagsLoading,
                        f = r.featureFlagsError,
                        p = (0, l.useRef)(null),
                        v = (0, l.useRef)(null),
                        j = (0, l.useRef)(null);
                    (0, Y.Z)({
                        stickyColRef: p,
                        scrollColRef: v,
                        spacerRef: j
                    });
                    var _ = (0, c.useRouter)(),
                        N = _.query.hlfg,
                        b = _.query.feed;
                    return "foryou" !== b && "follow" !== b && (b = "foryou"), o ? (0, R.jsx)(g.Z, {}) : f ? (0, R.jsx)("div", {
                        children: "Something unexpected went wrong; please refresh the page."
                    }) : (0, R.jsxs)(R.Fragment, {
                        children: [(0, R.jsx)(de, {
                            className: "homePage__leftCol",
                            children: !i.isTouch() && (0, R.jsxs)(R.Fragment, {
                                children: [(0, R.jsx)(z.ZP.Group, {
                                    className: "newsFeedFilters-full-width",
                                    onChange: function(e) {
                                        return _.push("/?feed=".concat(e.target.value))
                                    },
                                    value: null !== (e = b) && void 0 !== e ? e : "foryou",
                                    optionType: "button",
                                    style: {
                                        marginBottom: "5px"
                                    },
                                    children: (0, R.jsxs)(J.Z, {
                                        direction: "vertical",
                                        style: {
                                            width: "100%"
                                        },
                                        children: [(0, R.jsx)(ce, {
                                            imgSrc: (0, R.jsx)("img", {
                                                src: (0, u.SF)("foryou" === b ? "icons/Home/PinkHome.svg" : "icons/Home/Home.svg"),
                                                className: "filter__icon"
                                            }),
                                            label: "For You",
                                            skip: !0,
                                            user: a,
                                            fullWidth: !0,
                                            value: "foryou"
                                        }), (0, R.jsx)(ce, {
                                            imgSrc: (0, R.jsx)("img", {
                                                src: (0, u.SF)("follow" === b ? "icons/Users/PinkUsers.svg" : "icons/Users/Users.svg"),
                                                className: "filter__icon"
                                            }),
                                            label: "Following",
                                            user: a,
                                            value: "follow",
                                            fullWidth: !0
                                        })]
                                    })
                                }), (0, R.jsx)(h.dp, {
                                    displayName: (0, u.tS)(a, !0),
                                    user: a,
                                    buttonOnly: !0,
                                    small: !1,
                                    isMobile: !1,
                                    mixpanelBtnType: "small-mobile-bottom-right"
                                }), (0, R.jsx)(ee.Z, {
                                    className: "divider-bg-secondary"
                                }), (0, R.jsx)(G.ZP, {
                                    followBtnClassName: "home__followBtn"
                                }), a && (0, R.jsx)(x.Z, {
                                    feed: m.Ox.HOMEPAGE
                                })]
                            })
                        }), (0, R.jsxs)("div", {
                            className: "twoCol__main",
                            children: [(0, R.jsxs)(z.ZP.Group, {
                                className: "newsFeedFilters",
                                onChange: function(e) {
                                    return _.push("/?feed=".concat(e.target.value))
                                },
                                value: null !== (s = b) && void 0 !== s ? s : "foryou",
                                optionType: "button",
                                style: {
                                    marginBottom: "5px"
                                },
                                children: [(0, R.jsx)(ce, {
                                    imgSrc: (0, R.jsx)("img", {
                                        src: (0, u.SF)("icons/Home/WhiteHome.svg"),
                                        className: "filter__icon"
                                    }),
                                    label: "For You",
                                    skip: !0,
                                    user: a,
                                    value: "foryou"
                                }), (0, R.jsx)(ce, {
                                    imgSrc: (0, R.jsx)("img", {
                                        src: (0, u.SF)("icons/Users/WhiteUsers.svg"),
                                        className: "filter__icon"
                                    }),
                                    label: "Following",
                                    user: a,
                                    value: "follow"
                                })]
                            }), t.lfgStories && !N && (0, R.jsx)(X.Z, {
                                currentUser: a
                            }), (0, R.jsx)(H, {
                                currentUser: a,
                                feedType: null !== (n = b) && void 0 !== n ? n : "foryou"
                            })]
                        }), (0, R.jsx)(h.dp, {
                            displayName: (0, u.tS)(a, !0),
                            user: a,
                            small: !0,
                            isMobile: !0,
                            mixpanelBtnType: "small-mobile-bottom-right"
                        })]
                    })
                },
                me = n(48858),
                he = n(20627),
                ge = function(e) {
                    var s = e.question,
                        n = e.answer,
                        a = e.mixpanelEvent,
                        i = e.type,
                        r = (0, l.useState)(!1),
                        t = r[0],
                        o = r[1],
                        c = function() {
                            o(!t), t || a(re.bX.LANDING_PAGE_FAQ_EXPANDED, {
                                subtype: i
                            })
                        };
                    return (0, R.jsxs)("div", {
                        className: "faqCard",
                        children: [(0, R.jsxs)("div", {
                            className: "faqCard__question",
                            onClick: c,
                            children: [s, (0, R.jsx)("img", {
                                onClick: function() {
                                    return c()
                                },
                                src: (0, u.SF)(t ? "icons/Minus/PinkMinus.svg" : "icons/Plus/PinkPlus.svg"),
                                height: 32,
                                width: 32
                            })]
                        }), t && (0, R.jsx)("div", {
                            className: "faqCard__answer",
                            children: n
                        })]
                    })
                },
                xe = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "faq"
                        })
                    }), a);
                    var i = [{
                        question: "Is Mushroom a website or a Discord Bot?",
                        answer: "Both! The Mushroom.gg website works hand-in-hand with the Mushroom Bot to\n      track your quests, notify you of LFG invites, share posts with your\n      server, and much more.",
                        type: "website_or_bot"
                    }, {
                        question: "Is the Mushroom Bot required to use Mushroom.gg?",
                        answer: (0, R.jsxs)(R.Fragment, {
                            children: ["In short, yes. In order to use Mushroom.gg for game questing, earning coins, etc., you need to be in a Discord server that has the Mushroom Bot. You can do this very simply by joining the official", " ", (0, R.jsx)("a", {
                                href: "official-discord",
                                target: "_blank",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_FAQ_MUSHROOM_SERVER_LINK_CLICK, {
                                        subtype: "bot_required"
                                    })
                                },
                                children: "Mushroom Discord Server"
                            }), " ", "or by", " ", (0, R.jsx)("a", {
                                href: "/bot",
                                target: "_blank",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_FAQ_BOT_LINK_CLICK, {
                                        subtype: "bot_required"
                                    })
                                },
                                children: "Adding the Mushroom Bot"
                            }), " ", "to your own Discord server."]
                        }),
                        type: "bot_required"
                    }, {
                        question: "Will Mushroom work for my small server of just a few friends? What about my server of over 1,000 people?",
                        answer: "Absolutely, we\u2019ve designed our quests, coin economy, store, and\n    more to work great between small groups of gaming friends or large community\n    servers. You can customize the Mushroom experience to fit your server by\n    adjusting notification settings, creating your own daily Happy Hour, and\n    much more.",
                        type: "big_or_small"
                    }, {
                        question: "How do Quests work on Mushroom?",
                        answer: "Our zero-effort quests track your progress automatically in the\n    background. Fire up your favorite game, play with friends, and watch your\n    quest progress track LIVE as you rake in the coins. We have a variety of\n    quest types that reset at various time intervals including Daily, Weekly,\n    and Guild quests you complete as a group.",
                        type: "quests"
                    }, {
                        question: "How do coins and the currency system work?",
                        answer: (0, R.jsxs)(R.Fragment, {
                            children: ["The most common way to earn coins is simply playing your favorite games while Mushroom automatically tracks your progress without any performance cost. You can also earn coins by selling items in our", " ", (0, R.jsx)("span", {
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_FAQ_BOT_LINK_CLICK, {
                                        subtype: "bot_required"
                                    })
                                },
                                children: (0, R.jsx)(he.Z, {
                                    href: "/store",
                                    name: "Store",
                                    icon: null,
                                    newTab: !0
                                })
                            }), " ", "and even receive coins directly from other members. Think you can outscore your buddy this weekend? Place a coin bet!"]
                        }),
                        type: "currency"
                    }, {
                        question: "Sounds good but\u2026 is Mushroom totally free?",
                        answer: "Yes, you can use Mushroom.gg and the Mushroom Bot without ANY\n    limitations 100% free.",
                        type: "free"
                    }, {
                        question: "How does the Leaderboard work on Mushroom?",
                        answer: "With automatic quest tracking and rewards, the Leaderboard is\n    updated live as you climb the ranks. Earn coins by completing quests and\n    you\u2019ll rank up on that game's leaderboard. See how you stack up against all\n    members or just your friends.",
                        type: "leaderboard"
                    }, {
                        question: "How does the Looking for Group (LFG) work on Mushroom?",
                        answer: "Find others to play with through a simple stories format: select a\n    game to play, add a few details to your post, and connect with others who\n    want to play with you. We\u2019ll help you get the word out to your friends,\n    servermates, and can also help you find new people on Mushroom who love the\n    game too.",
                        type: "lfg"
                    }, {
                        question: "I have a few more questions, how can I learn more?",
                        answer: (0, R.jsxs)(R.Fragment, {
                            children: ["The best way to learn more about Mushroom is by joining our official", " ", (0, R.jsx)("a", {
                                href: "official-discord",
                                target: "_blank",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_FAQ_MUSHROOM_SERVER_LINK_CLICK, {
                                        subtype: "more_questions"
                                    })
                                },
                                children: "Mushroom Discord Server"
                            }), " ", "to see it in action."]
                        }),
                        type: "more_questions"
                    }];
                    return (0, R.jsx)("div", {
                        className: "faq",
                        children: (0, R.jsxs)("div", {
                            className: "content",
                            ref: a,
                            children: [(0, R.jsx)("img", {
                                className: "dots",
                                src: (0, u.SF)(s ? "landing/faq-dots-mobile.svg" : "landing/faq-dots.svg")
                            }), (0, R.jsx)("h1", {
                                children: "Frequently-ish Asked Questions"
                            }), i.map((function(e, s) {
                                var a = e.question,
                                    i = e.answer,
                                    r = e.type;
                                return (0, R.jsx)(ge, {
                                    question: a,
                                    answer: i,
                                    mixpanelEvent: n,
                                    type: r
                                }, s)
                            }))]
                        })
                    })
                },
                fe = n(64374),
                pe = function(e) {
                    var s = e.mixpanelEvent,
                        n = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        s(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "video_banner"
                        })
                    }), n), (0, R.jsxs)("div", {
                        className: "landingPage__footerVideo landingPage__section",
                        ref: n,
                        children: [(0, R.jsx)(fe.Z, {
                            playing: !0,
                            url: "https://d14eu5yur8w3te.cloudfront.net/api/v1/media/baseclub-media-uploads-production/7272ebaf-e5e0-41ac-8476-58919cf5524a.mp4",
                            className: "video",
                            playsinline: !0,
                            loop: !0,
                            width: "100%",
                            height: "100%",
                            muted: !0,
                            volume: 0,
                            config: {
                                file: {
                                    hlsOptions: {
                                        startLevel: -1
                                    },
                                    hlsVersion: "1.0.6"
                                }
                            }
                        }), (0, R.jsx)("div", {
                            className: "logoAndButtonWrapper",
                            children: (0, R.jsxs)("div", {
                                className: "logoAndButton",
                                children: [(0, R.jsx)("img", {
                                    className: "logo",
                                    src: (0, u.SF)("icon-pink--gradient.svg")
                                }), (0, R.jsx)("a", {
                                    className: "getMushroomBot",
                                    href: "/bot/landing",
                                    onClick: function() {
                                        s(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                            subsection: "video_banner"
                                        })
                                    },
                                    children: (0, R.jsx)("div", {
                                        className: "button gradient-button",
                                        children: "Add Our Discord Bot"
                                    })
                                })]
                            })
                        })]
                    })
                },
                ve = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent;
                    return (0, l.useEffect)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "splash"
                        })
                    }), []), (0, R.jsxs)("div", {
                        className: "landingPage__splash",
                        children: [(0, R.jsx)(fe.Z, {
                            playing: !0,
                            url: s ? "https://d14eu5yur8w3te.cloudfront.net/api/v1/media/baseclub-media-uploads-production/2d89a261-1f8e-47b3-9a73-907c12a63a92.mp4" : "https://d14eu5yur8w3te.cloudfront.net/api/v1/media/baseclub-media-uploads-production/8a87e8d6-86b2-46bf-8c93-212c939a8421.mp4",
                            className: "landingPage__splash__underlay",
                            playsinline: !0,
                            loop: !0,
                            width: "100%",
                            height: "100%",
                            muted: !0,
                            volume: 0,
                            config: {
                                file: {
                                    hlsOptions: {
                                        startLevel: -1
                                    },
                                    hlsVersion: "1.0.6"
                                }
                            }
                        }), (0, R.jsx)("div", {
                            className: "landingPage__splash__shadow"
                        }), (0, R.jsxs)("div", {
                            className: "landingPage__splash__contentWrapper",
                            children: [s ? (0, R.jsx)("img", {
                                className: "landingPage__splash__leftChar--mobile",
                                src: (0, u.SF)("landing/left-char-mobile.png")
                            }) : (0, R.jsx)("img", {
                                className: "landingPage__splash__leftChar",
                                src: (0, u.SF)("landing-left-char.png")
                            }), (0, R.jsxs)("div", {
                                className: "landingPage__splashContent",
                                children: [(0, R.jsx)("img", {
                                    className: "landingPage__splashContent__logo",
                                    src: (0, u.SF)("icon-pink--gradient.svg")
                                }), s ? (0, R.jsx)("img", {
                                    className: "landingPage__splashContent__logoDots--mobile",
                                    src: (0, u.SF)("landing/pink-logo-dots-mobile.svg")
                                }) : (0, R.jsx)("img", {
                                    className: "landingPage__splashContent__logoDots",
                                    src: (0, u.SF)("pink-logo-dots.svg")
                                }), (0, R.jsx)("h1", {
                                    children: "Power Up Your Discord"
                                }), (0, R.jsx)("p", {
                                    children: "Boost your gaming experience through personalized quests, loot systems, profiles, and much more with Mushroom.gg"
                                }), (0, R.jsx)("a", {
                                    className: "getMushroomBot",
                                    href: "/bot/landing",
                                    onClick: function() {
                                        n(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                            subsection: "splash"
                                        })
                                    },
                                    children: (0, R.jsx)("div", {
                                        className: "button gradient-button",
                                        children: "Add Our Discord Bot"
                                    })
                                })]
                            }), s ? (0, R.jsxs)(R.Fragment, {
                                children: [(0, R.jsx)("img", {
                                    className: "landingPage__splash__rightChar--mobile",
                                    src: (0, u.SF)("landing/right-char-mobile.png")
                                }), (0, R.jsx)("img", {
                                    className: "landingPage__splash__flyingCoins--mobile",
                                    src: (0, u.SF)("landing/flying-coins-mobile.png")
                                })]
                            }) : (0, R.jsxs)(R.Fragment, {
                                children: [(0, R.jsx)("img", {
                                    className: "landingPage__splash__rightChar",
                                    src: (0, u.SF)("landing-right-char.png")
                                }), (0, R.jsx)("img", {
                                    className: "landingPage__splash__flyingCoins",
                                    src: (0, u.SF)("flying-coins.png")
                                })]
                            })]
                        })]
                    })
                },
                je = function(e) {
                    e.isTouch;
                    return (0, R.jsxs)("div", {
                        className: "featureCards",
                        children: [(0, R.jsxs)("div", {
                            className: "featureCard",
                            children: [(0, R.jsx)("div", {
                                className: "featureCard__icon quests",
                                children: (0, R.jsx)("img", {
                                    src: (0, u.SF)("quests-purple-feather-icon@2x.png")
                                })
                            }), (0, R.jsx)("div", {
                                className: "featureCard__title quests",
                                children: "Daily Quests"
                            }), (0, R.jsxs)("div", {
                                className: "featureCard__body",
                                children: ["Add an extra layer of gaming into your gaming", " ", (0, R.jsx)("span", {
                                    className: "thicc",
                                    children: "completely free"
                                })]
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "featureCard",
                            children: [(0, R.jsx)("div", {
                                className: "featureCard__icon slantedCoin",
                                children: (0, R.jsx)("img", {
                                    src: (0, u.SF)("slanted-coin-with-shadow@2x.png")
                                })
                            }), (0, R.jsx)("div", {
                                className: "featureCard__title currency",
                                children: "Currency System"
                            }), (0, R.jsx)("div", {
                                className: "featureCard__body",
                                children: "Earn coins by gaming and select from a variety of epic unlockables in the Store"
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "featureCard",
                            children: [(0, R.jsx)("div", {
                                className: "featureCard__icon play",
                                children: (0, R.jsx)("img", {
                                    src: (0, u.SF)("blue-play-icon.svg")
                                })
                            }), (0, R.jsx)("div", {
                                className: "featureCard__title noticed",
                                children: "Get Noticed"
                            }), (0, R.jsx)("div", {
                                className: "featureCard__body",
                                children: "Share that crazy clutch win with other players to see in crisp HD"
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "featureCard",
                            children: [(0, R.jsx)("div", {
                                className: "featureCard__icon greenUsers",
                                children: (0, R.jsx)("img", {
                                    src: (0, u.SF)("icons/Users/GreenUsersWithBG.svg")
                                })
                            }), (0, R.jsx)("div", {
                                className: "featureCard__title squad",
                                children: "Find Your Squad"
                            }), (0, R.jsxs)("div", {
                                className: "featureCard__body",
                                children: ["Our ", (0, R.jsx)("span", {
                                    className: "thicc",
                                    children: "LFG Stories"
                                }), " get you connected with players so you can stop solo-queuing"]
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "featureCard",
                            children: [(0, R.jsx)("div", {
                                className: "featureCard__icon petGif",
                                children: (0, R.jsx)("img", {
                                    src: (0, u.SF)("pet_2.gif")
                                })
                            }), (0, R.jsx)("div", {
                                className: "featureCard__title express",
                                children: "Express Yourself"
                            }), (0, R.jsx)("div", {
                                className: "featureCard__body",
                                children: "From memes to iconic characters, customize your unique gaming profile"
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "featureCard",
                            children: [(0, R.jsx)("div", {
                                className: "featureCard__icon rankIcon",
                                children: (0, R.jsx)("img", {
                                    src: (0, u.SF)("purple-rank-icon.svg")
                                })
                            }), (0, R.jsx)("div", {
                                className: "featureCard__title rank",
                                children: "Rank Up"
                            }), (0, R.jsx)("div", {
                                className: "featureCard__body",
                                children: "Simply play your favorite games and watch your level rise in the Leaderboards"
                            })]
                        })]
                    })
                },
                _e = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "better-with-mushroom"
                        })
                    }), a), (0, R.jsxs)("div", {
                        className: "section1 landingPage__section",
                        ref: a,
                        children: [(0, R.jsxs)("div", {
                            className: "section1__leftCol",
                            children: [(0, R.jsxs)("div", {
                                className: "betterWithMush",
                                children: [(0, R.jsx)("div", {
                                    className: "title",
                                    children: "400K+ Players Agree:"
                                }), (0, R.jsxs)("div", {
                                    className: "content",
                                    children: ["Games are ", (0, R.jsx)("span", {
                                        className: "bold",
                                        children: "Better"
                                    }), " with", " ", (0, R.jsx)("span", {
                                        className: "pink",
                                        children: "Mushroom"
                                    })]
                                })]
                            }), (0, R.jsx)(je, {
                                isTouch: s
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "section1__rightCol",
                            children: [s && (0, R.jsx)("img", {
                                className: "section1__rightCol__mobileDots",
                                src: (0, u.SF)("landing/activity-dots-mobile.svg")
                            }), (0, R.jsxs)("div", {
                                className: "section1__rightCol__title",
                                children: [(0, R.jsx)("span", {
                                    className: "yellow",
                                    children: "Real Players, "
                                }), " Real Activity", (0, R.jsx)("img", {
                                    className: "arrow",
                                    src: (0, u.SF)("yellow-arrow.png")
                                })]
                            }), (0, R.jsx)("div", {
                                className: "section1__rightCol__activityFeed"
                            }), (0, R.jsx)(x.Z, {
                                feed: m.Ox.HOMEPAGE,
                                maxLength: 7,
                                title: ""
                            }), (0, R.jsx)("img", {
                                className: "section1__rightCol__feedDots",
                                src: (0, u.SF)("activity-feed-dots.svg")
                            })]
                        })]
                    })
                },
                Ne = function(e) {
                    var s = e.mixpanelEvent,
                        n = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        s(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "summary"
                        })
                    }), n), (0, R.jsx)("div", {
                        className: "section2",
                        ref: n,
                        children: (0, R.jsxs)("div", {
                            className: "section2__content",
                            children: [(0, R.jsxs)("div", {
                                children: [(0, R.jsx)("span", {
                                    className: "pink thicc",
                                    children: "Mushroom"
                                }), " is more than an amazing bot, it's the ", (0, R.jsx)("span", {
                                    className: "thicc",
                                    children: "gaming social network"
                                })]
                            }), (0, R.jsx)("div", {
                                children: (0, R.jsx)("a", {
                                    className: "getMushroomBot",
                                    href: "/bot/landing",
                                    onClick: function() {
                                        s(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                            subsection: "summary"
                                        })
                                    },
                                    children: (0, R.jsx)("div", {
                                        className: "button gradient-button",
                                        children: "Power Up Your Server"
                                    })
                                })
                            })]
                        })
                    })
                },
                be = n(56617),
                ye = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "economy"
                        })
                    }), a), (0, R.jsxs)("div", {
                        className: "landingPage__section section3",
                        ref: a,
                        children: [(0, R.jsxs)("div", {
                            className: "section3__leftCol",
                            children: [s ? (0, R.jsxs)(R.Fragment, {
                                children: [(0, R.jsx)("img", {
                                    className: "yellowDots--mobile",
                                    src: (0, u.SF)("landing/yellow-dots-mobile.svg")
                                }), (0, R.jsxs)("div", {
                                    className: "quests",
                                    children: [(0, R.jsxs)("div", {
                                        className: "imgWrapper",
                                        children: [(0, R.jsx)("img", {
                                            className: "questAnimation--mobile",
                                            src: (0, u.SF)("landing/fallguys-quest-example.png")
                                        }), (0, R.jsx)("div", {
                                            className: "shadow"
                                        })]
                                    }), (0, R.jsx)("img", {
                                        className: "questAnimation--mobile",
                                        src: (0, u.SF)("landing/fallguys-quest-example.png")
                                    }), (0, R.jsxs)("div", {
                                        className: "imgWrapper",
                                        children: [(0, R.jsx)("img", {
                                            className: "questAnimation--mobile",
                                            src: (0, u.SF)("landing/fallguys-quest-example.png")
                                        }), (0, R.jsx)("div", {
                                            className: "shadow"
                                        })]
                                    })]
                                })]
                            }) : (0, R.jsxs)(R.Fragment, {
                                children: [(0, R.jsx)("img", {
                                    className: "questAnimation",
                                    src: (0, u.SF)("scrolling-quests-animation.gif")
                                }), (0, R.jsx)("img", {
                                    className: "yellowDots",
                                    src: (0, u.SF)("yellow-dots.svg")
                                })]
                            }), (0, R.jsxs)("div", {
                                className: "storeCards",
                                children: [(0, R.jsxs)("div", {
                                    className: "storeCards__firstRow",
                                    children: [(0, R.jsx)(be.Z, {
                                        desc: "Profile Pet",
                                        imgClass: "gamer-girl",
                                        imgSrc: (0, u.SF)("gamer-girl.gif"),
                                        isTouch: s,
                                        price: "100",
                                        title: "Gamer Girl",
                                        withRadial: !0
                                    }), (0, R.jsx)(be.Z, {
                                        desc: "Earn double coins for 1hr",
                                        imgClass: "coins",
                                        imgSrc: (0, u.SF)("double-coins@2x.png"),
                                        isTouch: s,
                                        price: "250",
                                        title: "Coin Boost",
                                        withExtraContent: !0
                                    }), (0, R.jsx)(be.Z, {
                                        desc: "Profile Pet",
                                        imgClass: "pet2",
                                        imgSrc: (0, u.SF)("pet-example-2.gif"),
                                        isTouch: s,
                                        price: "150",
                                        title: "Grappa",
                                        withRadial: !0
                                    })]
                                }), (0, R.jsxs)("div", {
                                    className: "storeCards__secondRow",
                                    children: [(0, R.jsx)(be.Z, {
                                        desc: "Avatar Border",
                                        imgClass: "avatarExample",
                                        imgSrc: (0, u.SF)("avatar-example.gif"),
                                        price: "2,000",
                                        title: "Burning Ice"
                                    }), (0, R.jsx)(be.Z, {
                                        desc: "Profile Pet",
                                        imgClass: "caramellDansen",
                                        imgSrc: (0, u.SF)("caramell-dansen.gif"),
                                        price: "500",
                                        title: "Caramell Dansen",
                                        withRadial: !0
                                    })]
                                })]
                            }), (0, R.jsx)("img", {
                                className: "flyingCoin flyingCoin-3",
                                src: (0, u.SF)("landing/landing-coin-3-mobile.png")
                            }), (0, R.jsx)("img", {
                                className: "flyingCoin flyingCoin-4",
                                src: (0, u.SF)("landing/landing-coin-4-mobile.png")
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "section3__rightCol",
                            children: [(0, R.jsxs)("div", {
                                className: "title",
                                children: ["Complete Quests & ", (0, R.jsx)("span", {
                                    className: "yellow thicc",
                                    children: "Earn Coins"
                                }), " ", "with a Full Currency Economy"]
                            }), (0, R.jsx)("div", {
                                className: "body",
                                children: "Quests on Mushroom are tracked automatically in the background while you play. Rack up some coins to spend in our Store or send coins to other members"
                            }), (0, R.jsxs)("span", {
                                className: "rowWrapper",
                                children: [(0, R.jsxs)("div", {
                                    className: "row",
                                    children: [(0, R.jsx)("div", {
                                        children: (0, R.jsx)("img", {
                                            src: (0, u.SF)("landing/yellow-game-controller.svg")
                                        })
                                    }), "Over 2,000 Games Supported"]
                                }), (0, R.jsxs)("div", {
                                    className: "row",
                                    children: [(0, R.jsx)("div", {
                                        children: (0, R.jsx)("img", {
                                            src: (0, u.SF)("landing/yellow-store-icon.svg")
                                        })
                                    }), "Store with 5,000+ Unlockable Items"]
                                }), (0, R.jsxs)("div", {
                                    className: "row",
                                    children: [(0, R.jsx)("div", {
                                        children: (0, R.jsx)("img", {
                                            src: (0, u.SF)("landing/yellow-quest-scroll.svg")
                                        })
                                    }), "Quests ", (0, R.jsx)("span", {
                                        className: "yellow",
                                        children: "Automatically Tracked"
                                    })]
                                })]
                            }), (0, R.jsx)("a", {
                                className: "getMushroomBot",
                                href: "/bot/landing",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                        subsection: "economy"
                                    })
                                },
                                children: (0, R.jsx)("div", {
                                    className: "button yellow-gradient-button gradient-button",
                                    children: "Earn Your First 250 Coins Now"
                                })
                            })]
                        })]
                    })
                },
                we = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "video-share"
                        })
                    }), a), (0, R.jsxs)("div", {
                        className: "section4 landingPage__section",
                        ref: a,
                        children: [(0, R.jsxs)("div", {
                            className: "section4__leftCol",
                            children: [(0, R.jsxs)("div", {
                                className: "title",
                                children: ["Live the Moment, ", (0, R.jsx)("span", {
                                    className: "blue thicc",
                                    children: "Share"
                                }), " the Moment"]
                            }), (0, R.jsx)("div", {
                                className: "body",
                                children: "Get your most glorious gaming moments in front of an audience who can relate and react. With HD video posts, you can share every last bit of that Ace"
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/blue-play-icon-no-shadow.svg")
                                    })
                                }), (0, R.jsx)("span", {
                                    className: "blue",
                                    children: "HD Video"
                                }), " Upload"]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/blue-heart-icon.svg")
                                    })
                                }), "Share Your Clips with a Gaming Audience"]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/blue-speech-icon.svg")
                                    })
                                }), "Post GIFs, Images, & Memes"]
                            }), (0, R.jsx)("a", {
                                className: "getMushroomBot",
                                href: "/bot/landing",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                        subsection: "video-share"
                                    })
                                },
                                children: (0, R.jsx)("div", {
                                    className: "button blue-gradient-button gradient-button",
                                    children: "Got Clips to Share? Let\u2019s See Them!"
                                })
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "section4__rightCol",
                            children: [s ? (0, R.jsx)("img", {
                                className: "blue-dots--mobile",
                                src: (0, u.SF)("landing/blue-dots-mobile.svg")
                            }) : (0, R.jsx)("img", {
                                className: "blue-dots",
                                src: (0, u.SF)("landing/blue-dots.svg")
                            }), (0, R.jsxs)("div", {
                                className: "videoCarousel",
                                children: [(0, R.jsxs)("div", {
                                    className: "videoCarousel__left",
                                    children: [(0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/video-example-left.png")
                                    }), (0, R.jsx)("div", {
                                        className: "mask maskLeft"
                                    })]
                                }), (0, R.jsx)("div", {
                                    className: "videoCarousel__center",
                                    children: (0, R.jsx)(fe.Z, {
                                        playing: !0,
                                        url: "https://d14eu5yur8w3te.cloudfront.net/api/v1/media/baseclub-media-uploads-production/238cb49b-6b05-409f-93fb-1046be0ece3f.mp4",
                                        className: "EDIT ME",
                                        playsinline: !0,
                                        loop: !0,
                                        width: "100%",
                                        height: "100%",
                                        muted: !0,
                                        volume: 0,
                                        config: {
                                            file: {
                                                hlsOptions: {
                                                    startLevel: -1
                                                },
                                                hlsVersion: "1.0.6"
                                            }
                                        }
                                    })
                                }), (0, R.jsxs)("div", {
                                    className: "videoCarousel__right",
                                    children: [(0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/video-example-right.png")
                                    }), (0, R.jsx)("div", {
                                        className: "mask maskRight"
                                    })]
                                }), (0, R.jsx)("div", {
                                    className: "reactionAnimation",
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/reaction-animation.gif")
                                    })
                                }), (0, R.jsxs)("div", {
                                    className: "stub",
                                    children: ["winnicely", (0, R.jsx)("img", {
                                        src: (0, u.SF)("icons/Verified/BlueVerified.svg")
                                    }), (0, R.jsx)("span", {
                                        children: "\xb7"
                                    }), (0, R.jsxs)("div", {
                                        className: "gameStub",
                                        children: [(0, R.jsx)("img", {
                                            src: (0, u.SF)("landing/valorant-example-logo.png")
                                        }), "Valorant"]
                                    })]
                                })]
                            }), (0, R.jsxs)("div", {
                                className: "stackedCards",
                                children: [(0, R.jsx)("div", {
                                    className: "stackedCards__card card1"
                                }), (0, R.jsx)("div", {
                                    className: "stackedCards__card card2"
                                }), (0, R.jsxs)("div", {
                                    className: "stackedCards__card card3",
                                    children: [(0, R.jsx)("img", {
                                        className: "card__avatar",
                                        src: (0, u.SF)("landing/user-avatar-example.png")
                                    }), (0, R.jsxs)("div", {
                                        className: "card__body",
                                        children: [(0, R.jsxs)("div", {
                                            className: "card__title",
                                            children: ["Gamememesarelife", (0, R.jsx)("span", {
                                                className: "dot",
                                                children: "\xb7"
                                            }), (0, R.jsx)("span", {
                                                className: "timestamp",
                                                children: "Just Now"
                                            })]
                                        }), (0, R.jsxs)("div", {
                                            className: "card__content",
                                            children: ["That was insane ", (0, R.jsx)("span", {
                                                className: "mention",
                                                children: "@winnicely"
                                            }), " - what sens do you use?"]
                                        })]
                                    }), (0, R.jsx)("img", {
                                        className: "card__icon",
                                        src: (0, u.SF)("icons/Comment/Comment.svg")
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Ce = function(e) {
                    var s = e.avatarSrc,
                        n = e.bgImgSrc,
                        a = e.className,
                        i = e.gameAvatarSrc,
                        r = e.name,
                        t = e.timeStr,
                        o = e.userName;
                    return (0, R.jsxs)("div", {
                        className: "storyCardExample ".concat(a),
                        style: {
                            backgroundImage: "url(".concat(n, ")")
                        },
                        children: [(0, R.jsx)("div", {
                            className: "mask"
                        }), (0, R.jsx)("div", {
                            className: "mask mask-2"
                        }), (0, R.jsxs)("div", {
                            className: "storyCardExample__avatarNameAndTime",
                            children: [(0, R.jsx)("img", {
                                src: s
                            }), (0, R.jsxs)("div", {
                                className: "storyCardExample__nameAndTime",
                                children: [(0, R.jsx)("div", {
                                    className: "username",
                                    children: o
                                }), (0, R.jsx)("div", {
                                    className: "time",
                                    children: t
                                })]
                            })]
                        }), (0, R.jsx)("img", {
                            src: i
                        }), (0, R.jsx)("h3", {
                            children: r
                        })]
                    })
                },
                Se = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "lfg"
                        })
                    }), a), (0, R.jsxs)("div", {
                        className: "section5 landingPage__section",
                        ref: a,
                        children: [(0, R.jsxs)("div", {
                            className: "section5__leftCol",
                            children: [(0, R.jsx)("img", {
                                className: "dots",
                                src: (0, u.SF)("landing/lfg-dots.svg")
                            }), !s && (0, R.jsx)("img", {
                                className: "web",
                                src: (0, u.SF)("landing/lfg-web.svg")
                            }), (0, R.jsx)("img", {
                                className: "animation",
                                src: (0, u.SF)("landing/lfg-animation.gif")
                            }), s && (0, R.jsx)("img", {
                                className: "cards",
                                src: (0, u.SF)("landing/lfg.png")
                            }), !s && (0, R.jsxs)(R.Fragment, {
                                children: [(0, R.jsx)(Ce, {
                                    avatarSrc: (0, u.SF)("landing/trav-avatar.png"),
                                    bgImgSrc: (0, u.SF)("landing/battlefield.png"),
                                    className: "storyCardExample-1",
                                    gameAvatarSrc: (0, u.SF)("landing/battlefield-avatar.png"),
                                    name: "Battlefield\u2122 2042",
                                    timeStr: "2m ago",
                                    userName: "Trav"
                                }), (0, R.jsx)(Ce, {
                                    avatarSrc: (0, u.SF)("landing/krabolike-avatar.png"),
                                    bgImgSrc: (0, u.SF)("landing/roblox.png"),
                                    className: "storyCardExample-2",
                                    gameAvatarSrc: (0, u.SF)("landing/roblox-avatar.png"),
                                    name: "Roblox",
                                    timeStr: "22m ago",
                                    userName: "Krabolike"
                                }), (0, R.jsx)(Ce, {
                                    avatarSrc: (0, u.SF)("landing/pacha-avatar.png"),
                                    bgImgSrc: (0, u.SF)("landing/fortnite.png"),
                                    className: "storyCardExample-3",
                                    gameAvatarSrc: (0, u.SF)("landing/fortnite-avatar.png"),
                                    name: "Fortnite",
                                    timeStr: "1h ago",
                                    userName: "Pacha"
                                }), (0, R.jsx)(Ce, {
                                    avatarSrc: (0, u.SF)("landing/burning-avatar.png"),
                                    bgImgSrc: (0, u.SF)("landing/lol.png"),
                                    className: "storyCardExample-4",
                                    gameAvatarSrc: (0, u.SF)("landing/lol-avatar.png"),
                                    name: "League of Legends",
                                    timeStr: "12m ago",
                                    userName: "Burning"
                                }), (0, R.jsx)(Ce, {
                                    avatarSrc: (0, u.SF)("landing/squalls-avatar.png"),
                                    bgImgSrc: (0, u.SF)("landing/gta.png"),
                                    className: "storyCardExample-5",
                                    gameAvatarSrc: (0, u.SF)("landing/gta-avatar.png"),
                                    name: "GTA 5",
                                    timeStr: "Just Now",
                                    userName: "Squalls"
                                }), (0, R.jsx)(Ce, {
                                    avatarSrc: (0, u.SF)("landing/malice-avatar.png"),
                                    bgImgSrc: (0, u.SF)("landing/minecraft.png"),
                                    className: "storyCardExample-6",
                                    gameAvatarSrc: (0, u.SF)("landing/minecraft-avatar.png"),
                                    name: "Minecraft",
                                    timeStr: "6m ago",
                                    userName: "Malice"
                                })]
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "section5__rightCol",
                            children: [(0, R.jsxs)("div", {
                                className: "title",
                                children: ["Find Players Like You with", " ", (0, R.jsx)("span", {
                                    className: "green thicc",
                                    children: "LFG Stories"
                                })]
                            }), (0, R.jsx)("div", {
                                className: "body",
                                children: "Sometimes you just want to game alone but other times, you need a dependable squad with that one player who always rushes but it\u2019s OK because they tell funny jokes"
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/green-location-icon.svg")
                                    })
                                }), "Organize Events to Play Together"]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/green-person-icon.svg")
                                    })
                                }), "Coordinate Play with Friends & Guilds"]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/green-screen-icon.svg")
                                    })
                                }), "Promote Your Stream & Live Events"]
                            }), (0, R.jsx)("a", {
                                className: "getMushroomBot",
                                href: "/bot/landing",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                        subsection: "lfg"
                                    })
                                },
                                children: (0, R.jsx)("div", {
                                    className: "button green-gradient-button gradient-button",
                                    children: "Find Your Squad Now"
                                })
                            })]
                        })]
                    })
                },
                Fe = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "profile"
                        })
                    }), a), (0, R.jsxs)("div", {
                        className: "section6 landingPage__section",
                        ref: a,
                        children: [(0, R.jsxs)("div", {
                            className: "section6__leftCol",
                            children: [(0, R.jsxs)("div", {
                                className: "title",
                                children: ["All Your Gaming in ", (0, R.jsx)("span", {
                                    className: "orange thicc",
                                    children: "One Place"
                                })]
                            }), (0, R.jsx)("div", {
                                className: "body",
                                children: "Mushroom makes it easy and fun to connect with other players through customizable profiles that showcase your most important gaming information"
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/orange-bell-icon.svg")
                                    })
                                }), "Follow Your Favorites to Stay in the Know"]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/orange-link-icon.svg")
                                    })
                                }), "Vanity Profile URL ", (0, R.jsx)("span", {
                                    className: "orange",
                                    children: "100% FREE"
                                })]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/orange-lightning-bolt.svg")
                                    })
                                }), "Easily Add & Copy Game Usernames"]
                            }), (0, R.jsx)("a", {
                                className: "getMushroomBot",
                                href: "/bot/landing",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                        subsection: "profile"
                                    })
                                },
                                children: (0, R.jsx)("div", {
                                    className: "button orange-gradient-button gradient-button",
                                    children: "Claim Your @Username"
                                })
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "section6__rightCol",
                            children: [(0, R.jsx)("img", {
                                className: "dots",
                                src: (0, u.SF)(s ? "landing/orange-dots-mobile.svg" : "landing/tofu-dots.svg")
                            }), (0, R.jsx)("img", {
                                className: "profileCard",
                                src: (0, u.SF)(s ? "landing/mobile-profile.png" : "landing/tofu-profile-card.png")
                            })]
                        })]
                    })
                },
                Ae = function(e) {
                    var s = e.isTouch,
                        n = e.mixpanelEvent,
                        a = (0, l.useRef)(null);
                    return (0, me.Z)((function() {
                        n(re.bX.LANDING_PAGE_SCROLL_VIEW, {
                            subsection: "leaderboard"
                        })
                    }), a), (0, R.jsxs)("div", {
                        className: "section7 landingPage__section",
                        ref: a,
                        children: [(0, R.jsxs)("div", {
                            className: "section7__leftCol",
                            children: [(0, R.jsx)("img", {
                                className: "dots",
                                src: (0, u.SF)("landing/lb-dots.svg")
                            }), (0, R.jsx)("img", {
                                className: "lb-example",
                                src: (0, u.SF)(s ? "landing/lb-example-cards-mobile.png" : "landing/lb-example-cards.png")
                            }), (0, R.jsx)("img", {
                                className: "lb-activity-example",
                                src: (0, u.SF)(s ? "landing/lb-feed-example-card-mobile.png" : "landing/lb-feed-example-cards.png")
                            }), (0, R.jsx)("div", {
                                className: "card2"
                            }), (0, R.jsx)("div", {
                                className: "card3"
                            })]
                        }), (0, R.jsxs)("div", {
                            className: "section7__rightCol",
                            children: [(0, R.jsxs)("div", {
                                className: "title",
                                children: ["Are You The Best? ", (0, R.jsx)("span", {
                                    className: "magenta thicc",
                                    children: "Prove It"
                                })]
                            }), (0, R.jsx)("div", {
                                className: "body",
                                children: "Sometimes you just want to game alone but other times, you need a dependable squad with that one player who always rushes but it\u2019s OK because they tell funny jokes"
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/magenta-graph-icon.svg")
                                    })
                                }), (0, R.jsxs)("span", {
                                    children: [(0, R.jsx)("span", {
                                        className: "text--full",
                                        children: "XP + Game Leveling with"
                                    }), (0, R.jsx)("span", {
                                        className: "text--mini",
                                        children: "Game Leveling with"
                                    }), " ", (0, R.jsx)("span", {
                                        className: "magenta",
                                        children: "Automatic Tracking"
                                    })]
                                })]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/magenta-trophy-icon.svg")
                                    })
                                }), (0, R.jsx)("span", {
                                    className: "text--full",
                                    children: "Leaderboard Filters to Compete with Friends"
                                }), (0, R.jsx)("span", {
                                    className: "text--mini",
                                    children: "Leaderboards to Compete with Friends"
                                })]
                            }), (0, R.jsxs)("div", {
                                className: "row",
                                children: [(0, R.jsx)("div", {
                                    children: (0, R.jsx)("img", {
                                        src: (0, u.SF)("landing/magenta-game-controller.svg")
                                    })
                                }), "2,000 Games Supported & Counting"]
                            }), (0, R.jsx)("a", {
                                className: "getMushroomBot",
                                href: "/bot/landing",
                                onClick: function() {
                                    n(re.bX.LANDING_PAGE_ADD_BOT_BUTTON_CLICK, {
                                        subsection: "leaderboard"
                                    })
                                },
                                children: (0, R.jsx)("div", {
                                    className: "button magenta-gradient-button gradient-button",
                                    children: "Start Climbing the Leaderboard"
                                })
                            })]
                        })]
                    })
                },
                Ee = function() {
                    var e = (0, l.useContext)(K.UserAgentContext).isTouch(),
                        s = (0, re.X4)().mixpanelEvent;
                    return (0, R.jsxs)(R.Fragment, {
                        children: [(0, R.jsxs)("div", {
                            className: "landingPage",
                            children: [(0, R.jsx)(ve, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(_e, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(Ne, {
                                mixpanelEvent: s
                            }), (0, R.jsx)(ye, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(we, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(Se, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(Fe, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(Ae, {
                                isTouch: e,
                                mixpanelEvent: s
                            }), (0, R.jsx)(xe, {
                                isTouch: e,
                                mixpanelEvent: s
                            })]
                        }), (0, R.jsx)(pe, {
                            mixpanelEvent: s
                        })]
                    })
                },
                Le = n(51037),
                Ze = n(13476),
                Pe = n(10561),
                ke = n(54355),
                Ie = function() {
                    var e, s = (0, c.useRouter)(),
                        n = (0, d.Z)(),
                        a = n.currentUser;
                    if (n.currentUserLoading) return (0, R.jsx)(Pe.Z, {});
                    if (!a) return (0, R.jsx)(Ee, {});
                    if (!a.hasAlphaAccess) return s.replace("/alpha"), (0, R.jsx)(Pe.Z, {});
                    if (null === (e = a.profile) || void 0 === e || !e.onboarded) {
                        var i = "?returnUrl=".concat(encodeURIComponent(window.location.href));
                        return s.replace("/o/[userShortId]".concat(i), "/o/".concat(a.shortId).concat(i)), (0, R.jsx)(Pe.Z, {})
                    }
                    return (0, R.jsx)(ue, {})
                };
            Ie.getLayout = function(e, s) {
                var n;
                return s && s.hasAlphaAccess ? null !== (n = s.profile) && void 0 !== n && n.onboarded ? (0, Le.C)(e) : (0, ke.Z)(e) : (0, Ze.Z)(e)
            };
            var Te = Ie
        },
        18087: function(e, s, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(72277)
            }])
        }
    },
    function(e) {
        e.O(0, [699, 980, 774, 888, 179], (function() {
            return s = 18087, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);
//# sourceMappingURL=index-0859403d043a0d887e82.js.map