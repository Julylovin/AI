(global.webpackJsonp = global.webpackJsonp || []).push([["pages/component/report/indexjj"], {
    "4d43": function (t, a, e) {
        (function (t) {
            Object.defineProperty(a, "__esModule", {value: !0}), a.default = void 0, a.default = {
                components: {
                    tubiao: function () {
                        e.e("pages/component/tubiao/index").then(function () {
                            return resolve(e("c9b1"))
                        }.bind(null, e)).catch(e.oe)
                    }
                }, data: function () {
                    return {
                        chartDatajj: {},
                        optsjj: {
                            color: "#85C2FC",
                            fontSize: 8,
                            enableScroll: !0,
                            extra: {
                                line: {type: "curve"},
                                tooltip: {legendShow: !0},
                                column: {
                                    barBorderRadius: [2, 2, 0, 0],
                                    width: 12,
                                    linearType: "custom",
                                    customColor: ["#35C3FF", "#FFC135"]
                                }
                            },
                            dataLabel: !1,
                            legend: {show: !1},
                            background: "RGBA(175, 208, 252, 0.4)",
                            xAxis: {fontSize: 8, rotateLabel: !1, disableGrid: !0, itemCount: 10, fontColor: "#85C2FC"},
                            yAxis: {gridType: "solid", gridColor: "#B2D9FE", fontSize: 8, axisLine: !1}
                        },
                        version: 2,
                        dise: {},
                        msgps: {riskFactorAnalysisDataList: [], riskFactorAnalysisDataList1: []},
                        msg: {
                            userDriveInfo: {},
                            userItemAbnormalRateList: [],
                            userInfo: {picImg: "", userName: "", age: "", userHeight: ""},
                            itemReportList: []
                        },
                        reportId: "",
                        opts: {
                            fontSize: 8,
                            enableScroll: !0,
                            extra: {line: {type: "curve"}, tooltip: {legendShow: !0}, column: {width: 5}},
                            dataLabel: !1,
                            legend: {show: !1},
                            xAxis: {fontSize: 8, rotateLabel: !0, disableGrid: !0, itemCount: 4, fontColor: "#85C2FC"},
                            yAxis: {gridType: "dash", fontSize: 10, axisLine: !1}
                        },
                        chartData: {categories: [1, 2, 3], series: [{name: 1, data: [1, 3, 3]}]},
                        chartData1: {categories: [], series: [{name: 1, data: []}]},
                        chartData2: {categories: [], series: [{name: 1, data: []}]}
                    }
                }, onLoad: function (t) {
                }, onShow: function () {
                    this.reportId = "73618D59BB9E46D79AF13455E898C0AF", this.baogao()
                }, onHide: function () {
                }, methods: {
                    zouni: function () {
                        t.navigateTo({url: "/pages/component/myreport/index"})
                    }, typeinps: function (t) {
                        for (var a = 0; a < this.msgps.diseaseRiskPotentialList.length; a++) this.msgps.diseaseRiskPotentialList[a].diseaseId == t.diseaseId ? this.msgps.diseaseRiskPotentialList[a].cl = !0 : this.msgps.diseaseRiskPotentialList[a].cl = !1;
                        this.dise = t, this.chartData1 = {
                            categories: t.riskTrendLineChartData.nameList,
                            series: [{unit: "月", name: "", data: t.riskTrendLineChartData.valueList}]
                        }, this.chartData2 = {
                            categories: t.riskTrendBarChartData.nameList,
                            series: [{unit: "%", name: "", data: t.riskTrendBarChartData.valueList}]
                        }
                    }, typein: function (t) {
                        for (var a = 0; a < this.msg.itemReportList.length; a++) this.msg.itemReportList[a].funcationType == t.funcationType ? this.msg.itemReportList[a].cl = !0 : this.msg.itemReportList[a].cl = !1;
                        for (var e = 0; e < t.diseaseRiskPotentialList.length; e++) t.diseaseRiskPotentialList[e].cl = 0 == e;
                        for (var s = -1, n = 0; n < t.riskFactorAnalysisDataList.length; n++) 2 != t.riskFactorAnalysisDataList[n].dataType && (s = n);
                        console.log(s), t.num = s;
                        for (var i = -1, r = 0; r < t.riskFactorAnalysisDataList1.length; r++) 2 != t.riskFactorAnalysisDataList1[r].dataType && (i = r);
                        console.log(s), t.num1 = i, this.msgps = t, t.diseaseRiskPotentialList.length > 0 && this.typeinps(t.diseaseRiskPotentialList[0])
                    }, baogao: function () {
                        var a = this;
                        t.showLoading({title: "加载中"}), t.request({
                            url: a.$store.state.requestUrl + "/open/getRppgReportDetail",
                            method: "get",
                            data: {reportId: a.reportId},
                            success: function (e) {
                                if (t.hideLoading(), e.data.data.itemReportList) for (var s = 0; s < e.data.data.itemReportList.length; s++) 0 == e.data.data.itemReportList[s].funcationType ? (e.data.data.itemReportList[s].cl = !0, a.typein(e.data.data.itemReportList[s])) : e.data.data.itemReportList[s].cl = !1;
                                if (e.data.data.userItemAbnormalRateList) {
                                    for (var n = [], i = [], r = [], o = 0; o < e.data.data.userItemAbnormalRateList.length; o++) n.push(e.data.data.userItemAbnormalRateList[o].name), i.push(e.data.data.userItemAbnormalRateList[o].lineChartDataList[0].list[0][1]), r.push(e.data.data.userItemAbnormalRateList[o].lineChartDataList[1].list[0][1]);
                                    var l = {
                                        categories: n,
                                        series: [{
                                            color: "#1890FF",
                                            unit: ["%"],
                                            name: "正常",
                                            data: i
                                        }, {color: "#FF5C18", unit: ["%"], name: "异常", data: r}]
                                    };
                                    a.chartDatajj = l
                                }
                                a.msg = e.data.data
                            },
                            fail: function (a) {
                                t.hideLoading(), console.log("失败：", a)
                            }
                        })
                    }
                }
            }
        }).call(this, e("543d").default)
    }, "6d25": function (t, a, e) {
        e.r(a);
        var s = e("4d43"), n = e.n(s);
        for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
            e.d(a, t, (function () {
                return s[t]
            }))
        }(i);
        a.default = n.a
    }, c7a1: function (t, a, e) {
        e.d(a, "b", (function () {
            return n
        })), e.d(a, "c", (function () {
            return i
        })), e.d(a, "a", (function () {
            return s
        }));
        var s = {
            qiunDataCharts: function () {
                return Promise.all([e.e("common/vendor"), e.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(e.bind(null, "a13a"))
            }
        }, n = function () {
            var t = this, a = (t.$createElement, t._self._c, t.__map(t.msg.itemReportList, (function (a, s) {
                    var n = t.__get_orig(a),
                        i = 0 == a.funcationType || "hrv" != a.funcationType || a.cl ? null : e("d1a4"),
                        r = 0 != a.funcationType && "hrv" == a.funcationType && a.cl ? e("ab90") : null,
                        o = 0 == a.funcationType && t.msg.itemReportList.length % 4 != 1,
                        l = o ? t.msg.itemReportList.length : null,
                        u = o && l % 4 != 3 ? t.msg.itemReportList.length : null;
                    return {
                        $orig: n,
                        m0: i,
                        m1: r,
                        g0: o,
                        g1: l,
                        g2: u,
                        g3: o && l % 4 != 3 && u % 4 != 2 ? t.msg.itemReportList.length : null,
                        g4: 0 == a.funcationType && t.msg.itemReportList.length % 4 == 1
                    }
                }))), s = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType ? e("8d2e") : null,
                n = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 1 != t.msgps.dataType ? null : e("b825"),
                i = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 2 != t.msgps.dataType ? null : e("7b00"),
                r = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 3 != t.msgps.dataType ? null : e("a031"),
                o = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 4 != t.msgps.dataType ? null : e("7550"),
                l = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 5 != t.msgps.dataType ? null : e("fb11"),
                u = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 1 != t.msgps.dataType ? null : e("39b6"),
                p = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 2 != t.msgps.dataType ? null : e("39b6"),
                c = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 3 != t.msgps.dataType ? null : e("39b6"),
                m = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 4 != t.msgps.dataType ? null : e("39b6"),
                d = "heartBrain" != t.msgps.funcationType && "hrv" != t.msgps.funcationType || 5 != t.msgps.dataType ? null : e("39b6"),
                g = t.msgps.riskFactorAnalysisDataList.some((function (t) {
                    return 1 == t.dataType || 3 == t.dataType
                })), f = t.__map(t.msgps.riskFactorAnalysisDataList, (function (a, e) {
                    return {
                        $orig: t.__get_orig(a), g6: t.msgps.riskFactorAnalysisDataList.some((function (t) {
                            return 4 == t.dataType
                        })) && t.msgps.num > 0 && 0 == e
                    }
                })), h = t.msgps.num >= 0 && t.msgps.riskFactorAnalysisDataList.some((function (t) {
                    return 4 == t.dataType
                })), y = t.msgps.riskFactorAnalysisDataList1.length, L = t.msgps.riskFactorAnalysisDataList1.length,
                T = t.msgps.riskFactorAnalysisDataList1.length;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: a,
                    m2: s,
                    m3: n,
                    m4: i,
                    m5: r,
                    m6: o,
                    m7: l,
                    m8: u,
                    m9: p,
                    m10: c,
                    m11: m,
                    m12: d,
                    g5: g,
                    l1: f,
                    g7: h,
                    g8: y,
                    g9: L,
                    g10: T,
                    l2: null,
                    l3: null,
                    l4: null
                }
            })
        }, i = []
    }, cf1a: function (t, a, e) {
        e.r(a);
        var s = e("c7a1"), n = e("6d25");
        for (var i in n) ["default"].indexOf(i) < 0 && function (t) {
            e.d(a, t, (function () {
                return n[t]
            }))
        }(i);
        e("f2bc");
        var r = e("f0c5"), o = Object(r.a)(n.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        a.default = o.exports
    }, e5ea: function (t, a, e) {
    }, ee68: function (t, a, e) {
        (function (t, a) {
            var s = e("4ea4");
            e("1ae4"), s(e("66fd"));
            var n = s(e("cf1a"));
            t.__webpack_require_UNI_MP_PLUGIN__ = e, a(n.default)
        }).call(this, e("bc2e").default, e("543d").createPage)
    }, f2bc: function (t, a, e) {
        var s = e("e5ea");
        e.n(s).a
    }
}, [["ee68", "common/runtime", "common/vendor"]]]);