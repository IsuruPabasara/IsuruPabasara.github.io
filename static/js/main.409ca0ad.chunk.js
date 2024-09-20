(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function (e, t, a) {},
    15: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(7),
        i = a.n(o),
        c = (a(13), a(2)),
        l = a(3),
        s = a(5),
        m = a(4),
        u = a(1);
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var f = (function (e) {
        Object(s.a)(a, e);
        var t = p(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "header",
                    { id: "home" },
                    r.a.createElement(
                      "nav",
                      { id: "nav-wrap" },
                      r.a.createElement(
                        "a",
                        {
                          className: "mobile-btn",
                          href: "#nav-wrap",
                          title: "Show navigation",
                        },
                        "Show navigation"
                      ),
                      r.a.createElement(
                        "a",
                        {
                          className: "mobile-btn",
                          href: "#",
                          title: "Hide navigation",
                        },
                        "Hide navigation"
                      ),
                      r.a.createElement(
                        "ul",
                        { id: "nav", className: "nav" },
                        r.a.createElement(
                          "li",
                          { className: "current" },
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#home" },
                            "Home"
                          )
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#about" },
                            "About"
                          )
                        ),
                        /* r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#resume" },
                            "Resume"
                          )
                        ), */
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#portfolio" },
                            "Work"
                          )
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "a",
                            { className: "smoothscroll", href: "#outreach" },
                            "Other Interests"
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "row banner" },
                      r.a.createElement(
                        "div",
                        { className: "banner-text" },
                        r.a.createElement(
                          "h1",
                          { className: "responsive-headline" },
                          e.name
                        ),
                        r.a.createElement(
                          "h4",
                          { className: "responsive-headline" },
                          e.email
                        ),
                        r.a.createElement(
                          "div",
                          { className: "row download" },
                          r.a.createElement(
                            "div",
                            { className: "twelve columns" },
                            r.a.createElement(
                              "div",
                              { className: "download-button" },
                              r.a.createElement(
                                "ul",
                                { className: "button" },
                                r.a.createElement(
                                  "li",
                                  null,
                                  r.a.createElement(
                                    "a",
                                    { href: "/reports/cv.pdf", download: !0 },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      r.a.createElement("i", {
                                        className: "fa fa-download",
                                      }),
                                      "\xa0 Download Resume"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "ul",
                          { className: "social" },
                          e.socialLinks &&
                            e.socialLinks.map(function (e) {
                              return r.a.createElement(
                                "li",
                                { key: e.name },
                                r.a.createElement(
                                  "a",
                                  { href: e.url, target: "_blank" },
                                  r.a.createElement("i", {
                                    className: e.className,
                                  })
                                )
                              );
                            })
                        )
                      )
                    ),
                    r.a.createElement(
                      "p",
                      { className: "scrolldown" },
                      r.a.createElement(
                        "a",
                        { className: "smoothscroll", href: "#about" },
                        r.a.createElement("i", {
                          className: "icon-down-circle",
                        })
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var h = (function (e) {
        Object(s.a)(a, e);
        var t = d(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "about" },
                  r.a.createElement(
                    "div",
                    { className: "row" },
                    r.a.createElement(
                      "div",
                      { className: "three columns" },
                      r.a.createElement("img", {
                        className: "profile-pic",
                        src: "images/profilepic.jpg",
                        alt: "",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      r.a.createElement("h2", null, "Hello!"),
                      r.a.createElement(
                        "p",
                        null,
                        "I am an Electrical Engineering masters students with a focus on Biomedical Engineering. Currently I am studying the effects of repetitive Transcranial Magnetic Stimultion(rTMS) on EEG readings of people with Major Deppressive Disorder(MDD). My research lab is aiming for an objective biomarker for MDD that is easily accesible, so that doctors and patients can have an easier time in identifying mental diseases. I love doing projects that broaden my understanding of technology. You can find some of my projects that I am most proud of below. Besides work, I enjoy music and also dabble in weightlifting."
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function g(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var v = (function (e) {
        Object(s.a)(a, e);
        var t = g(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement("hr", null);
                /* return r.a.createElement(
                  "section",
                  { id: "resume" },
                  r.a.createElement(
                    "div",
                    { className: "row education" },
                    r.a.createElement(
                      "div",
                      { className: "three columns header-col" },
                      r.a.createElement(
                        "h1",
                        null,
                        r.a.createElement("span", null, "Education")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      e.education &&
                        e.education.map(function (e) {
                          return r.a.createElement(
                            "div",
                            {
                              style: { marginBottom: 40 },
                              className: "row item",
                            },
                            r.a.createElement(
                              "div",
                              { className: "twelve columns" },
                              r.a.createElement("h3", null, e.UniversityName),
                              r.a.createElement(
                                "p",
                                { className: "info" },
                                e.specialization,
                                r.a.createElement("span", null, "\u2022"),
                                " ",
                                r.a.createElement(
                                  "em",
                                  { className: "date" },
                                  e.MonthOfPassing,
                                  " ",
                                  e.YearOfPassing
                                )
                              ),
                              e.Achievements.map(function (e) {
                                return r.a.createElement(
                                  "p",
                                  { style: { margin: 0 } },
                                  e
                                );
                              })
                            )
                          );
                        })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "row work" },
                    r.a.createElement(
                      "div",
                      { className: "three columns header-col" },
                      r.a.createElement(
                        "h1",
                        null,
                        r.a.createElement("span", null, "Work")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      e.work &&
                        e.work.map(function (e) {
                          return r.a.createElement(
                            "div",
                            {
                              style: { marginBottom: 40 },
                              className: "row item",
                            },
                            r.a.createElement(
                              "div",
                              { className: "twelve columns" },
                              r.a.createElement("h3", null, e.CompanyName),
                              r.a.createElement(
                                "p",
                                { className: "info" },
                                e.specialization,
                                r.a.createElement("span", null, "\u2022"),
                                " ",
                                r.a.createElement(
                                  "em",
                                  { className: "date" },
                                  e.MonthOfStarting,
                                  " ",
                                  e.YearOfStarting,
                                  " -",
                                  " ",
                                  e.MonthOfLeaving,
                                  " ",
                                  e.YearOfLeaving
                                )
                              ),
                              e.Achievements &&
                                e.Achievements.map(function (e) {
                                  return r.a.createElement(
                                    "p",
                                    { style: { margin: 0 } },
                                    e
                                  );
                                })
                            )
                          );
                        })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "row skill" },
                    r.a.createElement(
                      "div",
                      { className: "three columns header-col" },
                      r.a.createElement(
                        "h1",
                        null,
                        r.a.createElement("span", null, "Experience")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "nine columns main-col" },
                      r.a.createElement(
                        "div",
                        { className: "bars" },
                        r.a.createElement(
                          "ul",
                          { className: "skills" },
                          e.skills &&
                            e.skills.map(function (e) {
                              return r.a.createElement(
                                "li",
                                null,
                                r.a.createElement("span", {
                                  style: { width: "".concat(e.level, "%") },
                                  className: "bar-expand",
                                }),
                                r.a.createElement("em", null, e.skillname)
                              );
                            })
                        )
                      )
                    )
                  )
                ); */
              },
            },
          ]),
          a
        );
      })(n.Component);
      function b(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var E = (function (e) {
        Object(s.a)(a, e);
        var t = b(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.item;
                return r.a.createElement(
                  "section",
                  { id: "project" },
                  r.a.createElement(
                    "div",
                    { className: "portfolio-item-meta" },
                    r.a.createElement("img", {
                      src: "".concat(e.img1url),
                      className: "img1",
                    }),
                    e.img2url &&
                      r.a.createElement("img", {
                        src: "".concat(e.img2url),
                        className: "img2",
                      }),
                    r.a.createElement("h5", null, e.name),
                    r.a.createElement("p", null, e.description),
                    r.a.createElement("br", null),
                    e.github &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.github,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to github repository"
                        ),
                        r.a.createElement("br", null)
                      ),
                    e.report &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.report,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to project report"
                        ),
                        r.a.createElement("br", null)
                      ),
                    e.video &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.video,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to video"
                        ),
                        r.a.createElement("br", null)
                      ),
                    e.website &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.website,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to website"
                        )
                      ),
                    e.certificate &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href: e.certificate,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "Go to certificate"
                        )
                      )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function w(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var y = (function (e) {
        Object(s.a)(a, e);
        var t = w(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "portfolio" },
                  r.a.createElement(
                    "div",
                    { className: "row" },
                    r.a.createElement(
                      "div",
                      { className: "twelve columns collapsed" },
                      r.a.createElement(
                        "h1",
                        null,
                        "Check Out Some of My Work."
                      ),
                      r.a.createElement(
                        "div",
                        {
                          id: "portfolio-wrapper",
                          className: "bgrid-quarters s-bgrid-thirds cf",
                        },
                        e.portfolio &&
                          e.portfolio.map(function (e) {
                            return r.a.createElement(
                              "div",
                              { className: "columns portfolio-item" },
                              r.a.createElement(
                                "div",
                                {
                                  id: "project-popup-".concat(e.id),
                                  className: "popup-modal",
                                  style: { display: "none" },
                                },
                                r.a.createElement(E, { item: e })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "item-wrap" },
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "#project-popup-".concat(e.id),
                                    onClick: function () {
                                      document.getElementById(
                                        "project-popup-".concat(e.id)
                                      ).style.display = "block";
                                    },
                                  },
                                  r.a.createElement("img", {
                                    src: "".concat(e.img1url),
                                    className: "item-img",
                                  }),
                                  r.a.createElement(
                                    "div",
                                    { className: "overlay" },
                                    r.a.createElement(
                                      "div",
                                      { className: "portfolio-item-meta" },
                                      r.a.createElement("h5", null, e.name),
                                      r.a.createElement(
                                        "p",
                                        null,
                                        e.shortDescription
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          })
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function k(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var N = (function (e) {
        Object(s.a)(a, e);
        var t = k(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                var e = this.props.resumeData;
                return r.a.createElement(
                  "section",
                  { id: "outreach" },
                  r.a.createElement(
                    "div",
                    { className: "text-container" },
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "twelve columns collapsed" },
                        r.a.createElement("h1", null, "Other interests")
                      ),
                      r.a.createElement("hr", null),
                      r.a.createElement(
                        "div",
                        { className: "twelve columns flex-container" },
                        r.a.createElement(
                          "div",
                          { className: "flexslider" },
                          r.a.createElement(
                            "ul",
                            { className: "slides" },
                            e.outreach &&
                              e.outreach.map(function (e) {
                                return r.a.createElement(
                                  "li",
                                  null,
                                  r.a.createElement(
                                    "blockquote",
                                    null,
                                    r.a.createElement("p", null, e.description),
                                    r.a.createElement(
                                      "p",
                                      { className: "inst" },
                                      e.institution
                                    ),
                                    r.a.createElement("cite", null, e.name),
                                    e.link1 &&
                                      r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                          "a",
                                          {
                                            href: e.link1,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          },
                                          "External link"
                                        ),
                                        r.a.createElement("br", null)
                                      ),
                                    e.link2 &&
                                      r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                          "a",
                                          {
                                            href: e.link2,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          },
                                          "External link"
                                        ),
                                        r.a.createElement("br", null)
                                      )
                                  )
                                );
                              })
                          )
                        ),
                        " "
                      ),
                      " "
                    ),
                    " "
                  ),
                  " "
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      function O(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var j = (function (e) {
          Object(s.a)(a, e);
          var t = O(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.resumeData;
                  return r.a.createElement(
                    "footer",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "twelve columns" },
                        r.a.createElement(
                          "ul",
                          { className: "social-links" },
                          e.socialLinks &&
                            e.socialLinks.map(function (e) {
                              return r.a.createElement(
                                "li",
                                null,
                                r.a.createElement(
                                  "a",
                                  { href: e.url },
                                  r.a.createElement("i", {
                                    className: e.className,
                                  })
                                )
                              );
                            })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { id: "go-top" },
                        r.a.createElement(
                          "a",
                          {
                            className: "smoothscroll",
                            title: "Back to Top",
                            href: "#home",
                          },
                          r.a.createElement("i", { className: "icon-up-open" })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        R = {
          name: "Isuru Rajapakshe",
          email: "rmisur@gmail.com",
          socialLinks: [
            {
              name: "linkedin",
              url: "https://linkedin.com/in/isuru-p-rajapakshe/",
              className: "fa fa-linkedin",
            },
            {
              name: "github",
              url: "https://github.com/IsuruPabasara",
              className: "fa fa-github",
            },
          ],
          email: "rmisur@gmail.com",
          education: [
            {
              UniversityName: "University of Moratuwa, Sri Lanka",
              specialization:
                "BSc Engineering in Electronic and Telecommunication Engineering",
              MonthOfPassing: "Aug",
              YearOfPassing: "2021",
              Achievements: [
                "Second Class (Upper Division) Honors with a CGPA of 3.57 out of 4.2",
                "Dean's List Placements - Semesters 1, 6, 7, 8",
              ],
            },
          ],
          work: [
            {
              CompanyName:
                "Insync Information Technologies, Colombo, Sri Lanka",
              specialization: "Software Engineer",
              MonthOfStarting: "Jul",
              YearOfStarting: "2021",
              MonthOfLeaving: "Jul",
              YearOfLeaving: "2022",
            },
            {
              CompanyName: "Lanka Electronics, Minuwangoda, Sri Lanka",
              specialization: "Electronic engineer intern",
              MonthOfStarting: "Jun",
              YearOfStarting: "2019",
              MonthOfLeaving: "Dec",
              YearOfLeaving: "2019",
            },
          ],
          skillsDescription: "Your skills here",
          skills: [
            { skillname: "React JS", level: 90 },
            { skillname: "CSS", level: 71 },
            { skillname: "Javascript", level: 80 },
            { skillname: "Python", level: 60 },
            { skillname: "C#", level: 80 },
            { skillname: "C++(Arduino)", level: 80 },
          ],
          portfolio: [
            {
              name: "rTMS and EEG Spectral Changes",
              id: "rtms",
              shortDescription:
                "2023 Dec. - Present. | Under guidance of Dr. Deborah Won",
              description:
                "rTMS, or repetitive transcranial magnetic stimulation, is a new treatment method used to stimulate the brain using magnetic pulses to treat mental health conditions like depression, anxiety, and OCD. Currently, rTMS therapy involves 36 sessions spread out over 6 weeks. Patients complete questionnaires before the first session, at the midpoint, and after the final session to assess treatment effectiveness.  However, these questionnaires are subjective and time-consuming. My goal is to find an objective measure of depression levels in patients. I collected EEG readings from 8 depression patients undergoing treatment at a Brain Stim Center and their MADRS scores(A questionnaire-based scoring for levels of depression). My focus is on coherence, which measures the similarity of electrical signals between two electrodes. I aimed to determine if changes in coherence were correlated with changes in MADRS scores. I considered specific brain signal bandwidths, delta, theta, alpha, beta, and gamma when analyzing. The most significant results I obtained are as follows: coherence is positively correlated throughout with MADRS scores in the gamma range and negatively correlated in the delta range. Additionally, coherence is positively correlated with GAD-7 scores in the gamma range. The results indirectly mean that people with depression have high coherence in gamma signals and low coherence in the delta signals. And people with higher levels of anxiety have higher coherence in gamma signals.",
              report: "reports/rtms.pdf",
              img1url: "images/portfolio/rtms-1.png",
            },
            {
              name: "The Conductor",
              id: "conductor",
              shortDescription: "2024 Dec. - 2024 Aug.",
              description:
                "This project was done as part of the BOOST program where I mentored 5 undergraduates, guiding them through the successful completion of an engineering project designed to benefit the community. In my role, I oversaw the entire process, from concept to final product, focusing on the design and development of a specialized rehabilitation instrument. This device, ultimately donated to the CSULA Mobility Center, was created to provide positive reinforcement for patients undergoing therapy to restore arm and hand movement. The instrument utilized a gyroscope to capture precise 3D coordinates of arm movements, while flex sensors were integrated to monitor finger motions, ensuring comprehensive tracking of patient progress. Through this technology, patients received real-time feedback during their rehabilitation, motivating them and supporting their recovery. This project not only enhanced the students' engineering skills but also made a meaningful impact on the community by improving rehabilitation outcomes for patients.",
              github: "https://github.com/IsuruPabasara/TheConductor",
              video: "https://www.youtube.com/watch?v=o3slCzBoATE",
              img1url: "images/portfolio/conductor-1.jpg",
            },
            {
              name: "Coffee Shop Seating",
              id: "coffee",
              shortDescription: "2024 Mar. - 2024 May.",
              description:
                "I developed an innovative automated seating system designed to enhance customer experience in a coffee shop by efficiently tracking seat availability using body heat sensors. The system automatically detects which seats are occupied and which are free, allowing customers to be seamlessly directed to available seating as they arrive. To create a fully wireless and low-power solution, I used the nRF52 development kit for the seats (as peripheral devices) and a laptop as the central device for managing Bluetooth Low Energy (BLE) communication. This wireless setup enabled smooth, energy-efficient data transfer between the seats and the central system, ensuring scalability and minimal power consumption, which is critical in a commercial environment. Additionally, I developed a simple yet effective graphical user interface (GUI) using Kivy, providing visual feedback for both customers and staff. This user-friendly interface made it easy to see which seats were available in real-time, further enhancing the efficiency of the seating system.",
              github: "https://github.com/IsuruPabasara/CoffeeShop",
              img1url: "images/portfolio/coffee-1.jpeg",
              img2url: "images/portfolio/coffee-2.jpg",
              img3url: "images/portfolio/coffee-3.JPG",
            },
            {
              name: "Lip Read",
              id: "lip",
              shortDescription: "2023 Nov. - 2023 Dec.",
              description:
                "I developed a system utilizing Gated Recurrent Units (GRUs) to predict words spoken in a series of soundless videos, treating the task as a classification problem with a predefined vocabulary of 10 words. This project was completed as part of the Neural Networks module, focusing on leveraging advanced machine learning techniques to solve a real-world problem. The core of the solution was based on GRUs, a type of recurrent neural network (RNN) known for their ability to capture temporal dependencies in sequential data. By using GRUs, I aimed to extract and analyze patterns in facial movements and lip syncs, correlating them with specific words from the target vocabulary. The model was trained on a dataset of silent videos, each labeled with the corresponding spoken word, and the best-performing pretrained model was made available for download for further experimentation or use. The system achieved a 60% accuracy in word prediction for the 10-word vocabulary.",
              github: "https://github.com/IsuruPabasara/LipRead",
              img1url: "images/portfolio/lip-1.png",
              report: "reports/lip.pdf",
            },
            {
              name: "Non-Intrusive Power Monitor",
              id: "fyp",
              shortDescription: "2020 Feb. - 2021 Jul.",
              description:
                "This project was done by me and three other team members. Our focus was to develop an accurate power monitor with minimal invasion and real-time remote access which will help reduce electricity wastage in a household. We were able to build a prototype for the project using non-intrusive load monitoring(NILM). We used a clamp ammeter and a voltmeter to measure the instantaneous current and voltage of the main power line to a house and fed this data into a machine-learning model to deduce the power usage of appliances currently used in the house. These deductions can then be viewed by a person remotely real-time using a web interface. I built the web interface using react and hosted it using firebase and also contributed to the circuit design. We experimented with several machine-learning models and were able to outperform sate of the art in regards to real-time capability.",
              github: "https://github.com/IsuruPabasara/FYP-Website.git",
              report: "reports/fyp.pdf",
              video: "https://www.youtube.com/watch?v=IKLFPIjkCOc",
              website: "https://elecmoni.web.app",
              img1url: "images/portfolio/fyp-1.png",
              img2url: "images/portfolio/fyp-2.png",
            },
            {
              name: "LE Robot Software Package",
              id: "lerobot",
              shortDescription: "2019 Jun. - 2019 Sep.",
              description:
                "This was my first assigned project as an engineering trainee at Lanka Electronics Pvt. Ltd. My assigned task was to improve functionality of a software package. The purpose of the software package is to use a 6 degree of freedom to perform welding funtions defined by a user. The package was written in written in C# and I had to develop it's code such that it is capable of generating jerks to perform constant velocity motion with a 6 degree-of-freedom robot arm. After I completed the calculation, I then had to to simulate this motion inside the software by developing an animation tool. After completing this task, me and my supervisor used the generated jerks to test the motion with a real robot arm. We used the software to generate jerks for a path that we wanted and used a HMI to transfer these jerks to the motors in the robot. We were able to achieve about 1% error in its path.",
              report: "reports/lerobot.pdf",
              img1url: "images/portfolio/lerobot-1.png",
              img2url: "images/portfolio/lerobot-2.png",
            },
            {
              name: "Low Cost Human Machine Interface",
              id: "hmi",
              shortDescription: "2019 Sep. - 2019 Dec.",
              description:
                "This was my second assigned project as an engineering trainee at Lanka Electronics Pvt. Ltd. My task was to design and implement a low cost human machine interface. It's function was to communicate with a 6 degree-of-freedom robot arm to perform a welding function. I used a TFT LCD touchscreen and a atmega 128 microcontroller for the HMI. I then developed software using C that will run on the HMI to recieve user commands. The end product had a screen lag but apart from that, performed well in comparision to the high cost HMI in the company.",
              report: "reports/lerobot.pdf",
              img1url: "images/portfolio/hmi-1.jpeg",
              img2url: "images/portfolio/hmi-2.jpg",
            },
            {
              name: "Ambient Temperature and Humidity Controller for Orchids",
              id: "orchid",
              shortDescription: "2019 Apr. - 2019 May",
              description:
                "This project was done by a team of 10 students. Dendrobium orchids make a large portion of flower exports in Sri Lanka and we wanted to help the planters by giving them a low cost solution to the difficulties faced with varying enviorenmental conditions. We wanted to develop a system that can automatically control the  ambient temperature, ambient humidity, and lighting while automating irrigation system and fertilization process in the plantation. Our main focus was partially enclosed Dendrobium plantations. I contributed to the software writing and desgined the enclosures for the system circuits. We were able to develop a system that use humidifiers, sprinklers and solenoid valves to control ambient humidity and irrigate and fertilize the plantation. The lighting and temperature issue was partially solved by using 60% shade nets because other solutions were too costly to be of help to farmers.",
              github: "https://github.com/Mevan1996/AutomatedGreenHouse.git",
              report: "reports/orchid.pdf",
              img1url: "images/portfolio/orchid-1.jpeg",
              img2url: "images/portfolio/orchid-2.png",
            },
            {
              name: "Hot Plate Temperature Controller",
              id: "hotplate",
              shortDescription: "2018 Aug.",
              description:
                "This project was done by a team of four. The aim of the project was to build a temperature controller for a open coil hot plate so as to prevent overheating and energy wastage. We designed the circuit using triacs and PT100 sensor to suit the Sri Lankan current supply. I helped design the circuit and I designed the eclosure using solidworks.",
              report: "reports/hotplate.pdf",
              img1url: "images/portfolio/hotplate-1.png",
              img2url: "images/portfolio/hotplate-2.png",
            },
            {
              name: "CRUD Web App Using MERN Stack",
              id: "crud",
              shortDescription: "2021 Jun.",
              description:
                "This was a self-initiated project done to get fammiliar with the MERN stack. I was able to build a full-stack application that utilized JWT authentication for user handling, material-ui for styling and reducers for front-end data handling.",
              github: "https://github.com/IsuruPabasara/CRUD-with-MERN.git",
              img1url: "images/portfolio/crud-1.png",
              img2url: "images/portfolio/crud-2.png",
            },
            {
              name: "Line Following and Metal Collecting Robot",
              id: "arduinorobot",
              shortDescription: "2018 Mar",
              description:
                "This project was done with a team of four members for a competition. We had to design and implement a robot that can follow a strip on a contrasting background who can then collect metal coins and climb up a steep ramp to get to the finishing line. I developed the code for the robot. The robot callibrated it's sensors to ambient lighting and used magentic strips to collect coins. Our team became the runners-up in the competition.",
              img1url: "images/portfolio/arduinorobot-1.jpg",
            },
            {
              name: "Single Page Restaurant Web Application",
              id: "react",
              shortDescription: "2020 May",
              description:
                "This was a project I had to complete as a part of the Coursera course 'Front-End web development with React'. I built a restaurant app that showed the different dishes in the restaurant, restaurant details, location, contact information and a feedback form for customers. I got fammiliraized with React concepts like class components, context, redux, bootstrap, dom and API handling.",
              github:
                "https://github.com/IsuruPabasara/React-App-Muppala-Course.git",
              certificate:
                "https://coursera.org/share/5a0c5c8ba933d1089ba3071005e65856",
              img1url: "images/portfolio/react-1.png",
              img2url: "images/portfolio/react-2.png",
            },
          ],
          outreach: [
            {
              description:
                "Vice President, Bio Medical Engineering Society , CSULA",
              institution:
                "As the vice president of the BMES club at CSULA, I take great pleasure in meeting with and encouraging students to explore the exciting fields of biomedical engineering and engineering as a whole. Engaging with fellow students and organizing club activities has played a crucial role in helping me integrate into the community, especially as an international student.",
              name: "2024",
            },
            {
              description: "Music",
              institution:
                "Music has been a passion of mine since I was a teenager, and it’s through music that I’ve met most of my closest friends. While I don’t claim to be particularly skilled, singing has always been one of my best outlets for stress. It’s something that brings me joy and helps me unwind, no matter the circumstances.",
              name: "Some of my music recordings are below",
              link1: "https://www.youtube.com/watch?v=wdTZ40Rt8pQ",
              link2:
                "https://www.youtube.com/watch?v=iTDiLxCpQTc&list=PLWY_qnypuYjxX5r8vofXc7xdOZqCGZEhU&index=19",
            },
            {
              description: "Weightlifting",
              institution:
                "I got into lifting in 2023. Loved it since the moment I started. My current PRs are, Deadlift : 245 lbs Squat : 205 lbs Bench press : 85 lbs",
              name: "",
            },
            {
              description:
                "Rotoractor, Rotoract Club University of Moratuwa Student Branch",
              institution:
                "Most of my volunteer work in Sri Lanka was done through the influence of Rotaract. I spearheaded Inspirer(sub project of Grama Prabodhaya), which targeted Engligh education of underprivilaged school children. This project greatly broadened my horizons as an individual, seeing the hardships some children face to get the most basic of education.",
              name: "2017 - 2019",
              link1:
                "https://www.sundaytimes.lk/170604/plus/moratuwa-uni-rotaract-club-helps-rangulla-villagers-realise-their-dreams-242984.html",
            },
          ],
        };
      function I(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = Object(u.a)(e);
          if (t) {
            var r = Object(u.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(m.a)(this, a);
        };
      }
      var C = (function (e) {
        Object(s.a)(a, e);
        var t = I(a);
        function a() {
          return Object(c.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(l.a)(a, [
            {
              key: "render",
              value: function () {
                return r.a.createElement(
                  "div",
                  { className: "App" },
                  r.a.createElement(f, { resumeData: R }),
                  r.a.createElement(h, { resumeData: R }),
                  r.a.createElement(v, { resumeData: R }),
                  r.a.createElement(y, { resumeData: R }),
                  r.a.createElement(N, { resumeData: R }),
                  r.a.createElement(j, { resumeData: R })
                );
              },
            },
          ]),
          a
        );
      })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(r.a.createElement(C, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    8: function (e, t, a) {
      e.exports = a(15);
    },
  },
  [[8, 2, 1]],
]);
//# sourceMappingURL=main.409ca0ad.chunk.js.map
