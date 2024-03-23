"use strict";
(self["webpackChunkpracticelogs"] = self["webpackChunkpracticelogs"] || []).push([[533],{

/***/ 1752:
/*!********************************************************************************************************!*\
  !*** ./src/app/practice-log/components/practice-log-command-bar/practice-log-command-bar.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogCommandBarComponent": () => (/* binding */ PracticeLogCommandBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 4594);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5245);






let PracticeLogCommandBarComponent = /*#__PURE__*/(() => {
  class PracticeLogCommandBarComponent {
    constructor(router) {
      this.router = router;
      this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

    ngOnInit() {}

    emitAction(action) {
      this.action.emit(action);
    }

    logOut() {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login').then();
    }

  }

  PracticeLogCommandBarComponent.ɵfac = function PracticeLogCommandBarComponent_Factory(t) {
    return new (t || PracticeLogCommandBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };

  PracticeLogCommandBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PracticeLogCommandBarComponent,
    selectors: [["app-practice-log-command-bar"]],
    outputs: {
      action: "action"
    },
    decls: 15,
    vars: 0,
    consts: [["mat-raised-button", "", "color", "primary", "data-cy", "create", 3, "click"], ["mat-raised-button", "", "color", "warn", "data-cy", "delete-all", 3, "click"], ["mat-button", "", "color", "danger", "data-cy", "logout", 3, "click"]],
    template: function PracticeLogCommandBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "mat-toolbar")(2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogCommandBarComponent_Template_button_click_2_listener() {
          return ctx.emitAction(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "fiber_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogCommandBarComponent_Template_button_click_7_listener() {
          return ctx.emitAction(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogCommandBarComponent_Template_button_click_11_listener() {
          return ctx.logOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    encapsulation: 2
  });
  return PracticeLogCommandBarComponent;
})();

/***/ }),

/***/ 3885:
/*!******************************************************************************************!*\
  !*** ./src/app/practice-log/components/practice-log-form/practice-log-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogFormComponent": () => (/* binding */ PracticeLogFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 7322);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7423);







let PracticeLogFormComponent = /*#__PURE__*/(() => {
  class PracticeLogFormComponent {
    constructor(fb) {
      this.fb = fb;
      this.selectedPracticeLog = null;
      this.actionButtonLabel = 'Create';
      this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.form = this.fb.group({
        id: [''],
        instrument: [''],
        key: [''],
        tempo: [''],
        description: ['']
      });
    }

    ngOnInit() {
      this.checkAction();
    }

    checkAction() {
      if (this.selectedPracticeLog) {
        this.actionButtonLabel = "Update";
        this.patchDataValues();
      }
    }

    patchDataValues() {
      if (this.selectedPracticeLog) this.form.patchValue(this.selectedPracticeLog);
    }

    emitAction() {
      this.action.emit({
        value: this.form.value,
        action: this.actionButtonLabel
      });
    }

    clear() {
      this.form.reset();
    }

  }

  PracticeLogFormComponent.ɵfac = function PracticeLogFormComponent_Factory(t) {
    return new (t || PracticeLogFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };

  PracticeLogFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PracticeLogFormComponent,
    selectors: [["app-practice-log-form"]],
    inputs: {
      selectedPracticeLog: "selectedPracticeLog",
      actionButtonLabel: "actionButtonLabel"
    },
    outputs: {
      action: "action"
    },
    decls: 26,
    vars: 3,
    consts: [[1, "form-card"], [1, "practice-log-form", 3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "formControlName", "instrument", "placeholder", "Ex. Guitar", "data-cy", "instrument"], ["matInput", "", "formControlName", "key", "placeholder", "Ex. C", "data-cy", "key"], ["matInput", "", "formControlName", "tempo", "placeholder", "Ex. 120 BPM", "data-cy", "tempo"], ["matInput", "", "formControlName", "description", "placeholder", "Ex. Play the scale in ascending order", "data-cy", "action"], [1, "button-group"], ["mat-raised-button", "", "color", "primary", "data-cy", "action", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
    template: function PracticeLogFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Instrument");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tempo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogFormComponent_Template_button_click_21_listener() {
          return ctx.emitAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogFormComponent_Template_button_click_24_listener() {
          return ctx.clear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedPracticeLog ? "Update/View Log" : "Create Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actionButtonLabel, " ");
      }
    },
    directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
    styles: [".practice-log-form[_ngcontent-%COMP%] {\n  min-width: 500px;\n  max-width: 800px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  min-width: 500px;\n  max-width: 800px;\n  margin: auto;\n}\n\n.button-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  float: right;\n}"]
  });
  return PracticeLogFormComponent;
})();

/***/ }),

/***/ 7651:
/*!******************************************************************************************!*\
  !*** ./src/app/practice-log/components/practice-log-list/practice-log-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogListComponent": () => (/* binding */ PracticeLogListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 8279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5245);







function PracticeLogListComponent_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.headerName, " ");
  }
}

function PracticeLogListComponent_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9[item_r5.fieldName], " ");
  }
}

function PracticeLogListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PracticeLogListComponent_ng_container_1_th_1_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PracticeLogListComponent_ng_container_1_td_2_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", item_r5.fieldName);
  }
}

function PracticeLogListComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function PracticeLogListComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogListComponent_td_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const element_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.selectPracticeLog(element_r11, 0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "pageview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PracticeLogListComponent_td_4_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const element_r11 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.selectPracticeLog(element_r11, 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function PracticeLogListComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
  }
}

function PracticeLogListComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
  }
}

let PracticeLogListComponent = /*#__PURE__*/(() => {
  class PracticeLogListComponent {
    constructor() {
      this.headers = [];
      this.practiceLogs = [];
      this.practiceLog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.headerFields = [];
    }

    ngOnInit() {
      this.getHeaderFields();
    }

    getHeaderFields() {
      this.headerFields = this.headers.map(data => data.fieldName);
      this.headerFields.push("actions");
    }

    selectPracticeLog(practiceLog, action) {
      this.practiceLog.emit({
        practiceLog,
        action
      });
    }

  }

  PracticeLogListComponent.ɵfac = function PracticeLogListComponent_Factory(t) {
    return new (t || PracticeLogListComponent)();
  };

  PracticeLogListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PracticeLogListComponent,
    selectors: [["app-practice-log-list"]],
    inputs: {
      headers: "headers",
      practiceLogs: "practiceLogs"
    },
    outputs: {
      practiceLog: "practiceLog"
    },
    decls: 7,
    vars: 4,
    consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-cell", "", "data-cy", "row", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", "data-cy", "row"], ["mat-cell", ""], ["mat-raised-button", "", "color", "primary", "data-cy", "view", 3, "click"], ["mat-raised-button", "", "color", "warn", "data-cy", "delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function PracticeLogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PracticeLogListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PracticeLogListComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PracticeLogListComponent_td_4_Template, 10, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PracticeLogListComponent_tr_5_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PracticeLogListComponent_tr_6_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.practiceLogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.headerFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.headerFields);
      }
    },
    directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"]
  });
  return PracticeLogListComponent;
})();

/***/ }),

/***/ 8348:
/*!****************************************************************!*\
  !*** ./src/app/practice-log/enums/command-bar-actions.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandBarActions": () => (/* binding */ CommandBarActions)
/* harmony export */ });
var CommandBarActions = /*#__PURE__*/(() => {
  (function (CommandBarActions) {
    CommandBarActions[CommandBarActions["Create"] = 0] = "Create";
    CommandBarActions[CommandBarActions["DeleteAll"] = 1] = "DeleteAll";
  })(CommandBarActions || (CommandBarActions = {}));

  return CommandBarActions;
})();

/***/ }),

/***/ 5456:
/*!**********************************************************!*\
  !*** ./src/app/practice-log/enums/table-actions.enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableActions": () => (/* binding */ TableActions)
/* harmony export */ });
var TableActions = /*#__PURE__*/(() => {
  (function (TableActions) {
    TableActions[TableActions["View"] = 0] = "View";
    TableActions[TableActions["Delete"] = 1] = "Delete";
  })(TableActions || (TableActions = {}));

  return TableActions;
})();

/***/ }),

/***/ 9196:
/*!***********************************************************!*\
  !*** ./src/app/practice-log/pages/form/form.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/practice-log.actions */ 9149);
/* harmony import */ var _state_practice_log_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/practice-log.selectors */ 9480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _components_practice_log_form_practice_log_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/practice-log-form/practice-log-form.component */ 3885);






let FormComponent = /*#__PURE__*/(() => {
  class FormComponent {
    constructor(router, store) {
      this.router = router;
      this.store = store;
      this.practiceLog = null;
      const id = this.router.snapshot.params['id'];
      this.practiceLog$ = this.store.select((0,_state_practice_log_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPracticeLog)(id));
      this.practiceLog$.subscribe(d => {
        if (d) this.practiceLog = d;
      });
    }

    canDeactivate() {
      const confirmation = window.confirm('Are you sure?');
      return confirmation;
    }

    ngOnInit() {}

    formAction(data) {
      switch (data.action) {
        case "Create":
          {
            this.store.dispatch({
              type: _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.ADD_PRACTICE_LOG_API,
              payload: data.value
            });
            return;
          }

        case "Update":
          {
            this.store.dispatch({
              type: _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.MODIFY_PRACTICE_LOG_API,
              payload: data.value
            });
            return;
          }

        default:
          "";
      }
    }

  }

  FormComponent.ɵfac = function FormComponent_Factory(t) {
    return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };

  FormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FormComponent,
    selectors: [["app-form"]],
    decls: 1,
    vars: 1,
    consts: [[3, "selectedPracticeLog", "action"]],
    template: function FormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-practice-log-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("action", function FormComponent_Template_app_practice_log_form_action_0_listener($event) {
          return ctx.formAction($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectedPracticeLog", ctx.practiceLog);
      }
    },
    directives: [_components_practice_log_form_practice_log_form_component__WEBPACK_IMPORTED_MODULE_2__.PracticeLogFormComponent],
    styles: [""]
  });
  return FormComponent;
})();

/***/ }),

/***/ 4954:
/*!***********************************************************!*\
  !*** ./src/app/practice-log/pages/list/list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _enums_table_actions_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/table-actions.enum */ 5456);
/* harmony import */ var _enums_command_bar_actions_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/command-bar-actions.enum */ 8348);
/* harmony import */ var _state_practice_log_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/practice-log.selectors */ 9480);
/* harmony import */ var _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/practice-log.actions */ 9149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _components_practice_log_command_bar_practice_log_command_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/practice-log-command-bar/practice-log-command-bar.component */ 1752);
/* harmony import */ var _components_practice_log_list_practice_log_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/practice-log-list/practice-log-list.component */ 7651);









let ListComponent = /*#__PURE__*/(() => {
  class ListComponent {
    constructor(router, store) {
      this.router = router;
      this.store = store;
      this.practiceLogs = [];
      this.practiceLogs$ = this.store.select((0,_state_practice_log_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPracticeLogs)());
      this.headers = [{
        headerName: "Instrument",
        fieldName: "instrument"
      }, {
        headerName: "Key",
        fieldName: "key"
      }, {
        headerName: "Tempo",
        fieldName: "tempo"
      }, {
        headerName: "Description",
        fieldName: "description"
      }];
    }

    ngOnInit() {
      this.store.dispatch({
        type: _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_3__.PracticeLogActions.GET_PRACTICE_LOG_LIST
      });
      this.assignPracticeLogs();
    }

    assignPracticeLogs() {
      this.practiceLogs$.subscribe(data => {
        this.practiceLogs = data;
      });
    }

    selectPracticeLog(data) {
      switch (data.action) {
        case _enums_table_actions_enum__WEBPACK_IMPORTED_MODULE_0__.TableActions.View:
          {
            this.router.navigate(['practice-logs', 'form', data.practiceLog.id]);
            return;
          }

        case _enums_table_actions_enum__WEBPACK_IMPORTED_MODULE_0__.TableActions.Delete:
          {
            this.store.dispatch({
              type: _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_3__.PracticeLogActions.REMOVE_PRACTICE_LOG_API,
              payload: data.practiceLog.id
            });
            return;
          }

        default:
          "";
      }
    }

    executeCommandBarAction(action) {
      switch (action) {
        case _enums_command_bar_actions_enum__WEBPACK_IMPORTED_MODULE_1__.CommandBarActions.Create:
          {
            this.router.navigate(["practice-logs", "form"]);
            return;
          }

        case _enums_command_bar_actions_enum__WEBPACK_IMPORTED_MODULE_1__.CommandBarActions.DeleteAll:
          {
            const ids = this.practiceLogs.map(a => a.id);
            this.store.dispatch({
              type: _state_practice_log_actions__WEBPACK_IMPORTED_MODULE_3__.PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_API,
              payload: ids
            });
            return;
          }

        default:
          "";
      }
    }

  }

  ListComponent.ɵfac = function ListComponent_Factory(t) {
    return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
  };

  ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ListComponent,
    selectors: [["app-list"]],
    decls: 2,
    vars: 2,
    consts: [[3, "action"], [3, "practiceLogs", "headers", "practiceLog"]],
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-practice-log-command-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function ListComponent_Template_app_practice_log_command_bar_action_0_listener($event) {
          return ctx.executeCommandBarAction($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-practice-log-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("practiceLog", function ListComponent_Template_app_practice_log_list_practiceLog_1_listener($event) {
          return ctx.selectPracticeLog($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("practiceLogs", ctx.practiceLogs)("headers", ctx.headers);
      }
    },
    directives: [_components_practice_log_command_bar_practice_log_command_bar_component__WEBPACK_IMPORTED_MODULE_4__.PracticeLogCommandBarComponent, _components_practice_log_list_practice_log_list_component__WEBPACK_IMPORTED_MODULE_5__.PracticeLogListComponent],
    styles: ["button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}"]
  });
  return ListComponent;
})();

/***/ }),

/***/ 1428:
/*!*************************************************************!*\
  !*** ./src/app/practice-log/practice-log-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogRoutingModule": () => (/* binding */ PracticeLogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/list/list.component */ 4954);
/* harmony import */ var _pages_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/form/form.component */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);





const routes = [{
  path: "",
  component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent
}, {
  path: "form",
  children: [{
    path: "",
    component: _pages_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent
  }, {
    path: ":id",
    component: _pages_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent
  }]
}];
let PracticeLogRoutingModule = /*#__PURE__*/(() => {
  class PracticeLogRoutingModule {}

  PracticeLogRoutingModule.ɵfac = function PracticeLogRoutingModule_Factory(t) {
    return new (t || PracticeLogRoutingModule)();
  };

  PracticeLogRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PracticeLogRoutingModule
  });
  PracticeLogRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return PracticeLogRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PracticeLogRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 1533:
/*!*****************************************************!*\
  !*** ./src/app/practice-log/practice-log.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogModule": () => (/* binding */ PracticeLogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _components_practice_log_command_bar_practice_log_command_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/practice-log-command-bar/practice-log-command-bar.component */ 1752);
/* harmony import */ var _components_practice_log_list_practice_log_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/practice-log-list/practice-log-list.component */ 7651);
/* harmony import */ var _components_practice_log_form_practice_log_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/practice-log-form/practice-log-form.component */ 3885);
/* harmony import */ var _practice_log_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./practice-log-routing.module */ 1428);
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/list/list.component */ 4954);
/* harmony import */ var _pages_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/form/form.component */ 9196);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ 898);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _state_practice_log_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/practice-log.reducers */ 3549);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ 1958);
/* harmony import */ var _state_practice_log_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/practice-log.effects */ 2615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5000);
















let PracticeLogModule = /*#__PURE__*/(() => {
  class PracticeLogModule {}

  PracticeLogModule.ɵfac = function PracticeLogModule_Factory(t) {
    return new (t || PracticeLogModule)();
  };

  PracticeLogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: PracticeLogModule
  });
  PracticeLogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _practice_log_routing_module__WEBPACK_IMPORTED_MODULE_3__.PracticeLogRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreModule.forFeature('practiceLogState', _state_practice_log_reducers__WEBPACK_IMPORTED_MODULE_7__.practiceLogReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsModule.forFeature([_state_practice_log_effects__WEBPACK_IMPORTED_MODULE_8__.PracticeLogEffects])]]
  });
  return PracticeLogModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PracticeLogModule, {
    declarations: [_components_practice_log_list_practice_log_list_component__WEBPACK_IMPORTED_MODULE_1__.PracticeLogListComponent, _components_practice_log_form_practice_log_form_component__WEBPACK_IMPORTED_MODULE_2__.PracticeLogFormComponent, _components_practice_log_command_bar_practice_log_command_bar_component__WEBPACK_IMPORTED_MODULE_0__.PracticeLogCommandBarComponent, _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent, _pages_form_form_component__WEBPACK_IMPORTED_MODULE_5__.FormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _practice_log_routing_module__WEBPACK_IMPORTED_MODULE_3__.PracticeLogRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 3304:
/*!***************************************************************!*\
  !*** ./src/app/practice-log/services/practice-log.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogService": () => (/* binding */ PracticeLogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 520);




let PracticeLogService = /*#__PURE__*/(() => {
  class PracticeLogService {
    constructor(http) {
      this.http = http;
    }

    getPracticeLogs() {
      return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/practice-logs`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
    }

    getPracticeLog(id) {
      return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/practice-logs/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
    }

    addPracticeLog(practiceLog) {
      return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/practice-logs`, practiceLog).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
    }

    updatePracticeLog(id, practiceLog) {
      return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/practice-logs/${id}`, practiceLog).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
    }

    deletePracticeLog(id) {
      return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/practice-logs/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
    }

  }

  PracticeLogService.ɵfac = function PracticeLogService_Factory(t) {
    return new (t || PracticeLogService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };

  PracticeLogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PracticeLogService,
    factory: PracticeLogService.ɵfac,
    providedIn: 'root'
  });
  return PracticeLogService;
})();

/***/ }),

/***/ 9149:
/*!************************************************************!*\
  !*** ./src/app/practice-log/state/practice-log.actions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogActions": () => (/* binding */ PracticeLogActions),
/* harmony export */   "addPracticeLogState": () => (/* binding */ addPracticeLogState),
/* harmony export */   "getPracticeLogList": () => (/* binding */ getPracticeLogList),
/* harmony export */   "modifyPracticeLogState": () => (/* binding */ modifyPracticeLogState),
/* harmony export */   "removeAllPracticeLogState": () => (/* binding */ removeAllPracticeLogState),
/* harmony export */   "removePracticeLogState": () => (/* binding */ removePracticeLogState),
/* harmony export */   "setPracticeLogList": () => (/* binding */ setPracticeLogList)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5094);

var PracticeLogActions = /*#__PURE__*/(() => {
  (function (PracticeLogActions) {
    PracticeLogActions["GET_PRACTICE_LOG_LIST"] = "[Practice-Log] Get Practice-Log list";
    PracticeLogActions["SET_PRACTICE_LOG_LIST"] = "[Practice-Log] Set Practice-Log list";
    PracticeLogActions["ADD_PRACTICE_LOG_API"] = "[Practice-Log] Add Practice-Log (API)";
    PracticeLogActions["ADD_PRACTICE_LOG_STATE"] = "[Practice-Log] Add Practice-Log (STATE)";
    PracticeLogActions["MODIFY_PRACTICE_LOG_API"] = "[Practice-Log] Modify Practice-Log (API)";
    PracticeLogActions["MODIFY_PRACTICE_LOG_STATE"] = "[Practice-Log] Modify Practice-Log (STATE)";
    PracticeLogActions["REMOVE_PRACTICE_LOG_API"] = "[Practice-Log] Remove Practice-Log (API)";
    PracticeLogActions["REMOVE_PRACTICE_LOG_STATE"] = "[Practice-Log] Remove Practice-Log (STATE)";
    PracticeLogActions["REMOVE_ALL_PRACTICE_LOG_API"] = "[Practice-Log] Remove All Practice-Log (API)";
    PracticeLogActions["REMOVE_ALL_PRACTICE_LOG_STATE"] = "[Practice-Log] Remove ALL Practice-Log (STATE)";
  })(PracticeLogActions || (PracticeLogActions = {}));

  return PracticeLogActions;
})();
const modifyPracticeLogState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(PracticeLogActions.MODIFY_PRACTICE_LOG_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addPracticeLogState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(PracticeLogActions.ADD_PRACTICE_LOG_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removePracticeLogState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(PracticeLogActions.REMOVE_PRACTICE_LOG_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getPracticeLogList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(PracticeLogActions.GET_PRACTICE_LOG_LIST);
const setPracticeLogList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(PracticeLogActions.SET_PRACTICE_LOG_LIST, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeAllPracticeLogState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_STATE);

/***/ }),

/***/ 2615:
/*!************************************************************!*\
  !*** ./src/app/practice-log/state/practice-log.effects.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeLogEffects": () => (/* binding */ PracticeLogEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 1958);
/* harmony import */ var _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice-log.actions */ 9149);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 515);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_practice_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/practice-log.service */ 3304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4202);







let PracticeLogEffects = /*#__PURE__*/(() => {
  class PracticeLogEffects {
    constructor(actions$, practiceLogService, router) {
      this.actions$ = actions$;
      this.practiceLogService = practiceLogService;
      this.router = router;
      this.getPracticeLogs$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.GET_PRACTICE_LOG_LIST), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.practiceLogService.getPracticeLogs().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(practiceLogs => ({
          type: _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.SET_PRACTICE_LOG_LIST,
          practiceLogs
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY))));
      }, {
        dispatch: true
      });
      this.removePracticeLog$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.REMOVE_PRACTICE_LOG_API), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(data => this.practiceLogService.deletePracticeLog(data.payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => ({
          type: _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.REMOVE_PRACTICE_LOG_STATE,
          practiceLogId: data.payload
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY))));
      }, {
        dispatch: true
      }); // add practice-logs in the database

      this.addPracticeLog$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.ADD_PRACTICE_LOG_API), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(data => this.practiceLogService.addPracticeLog(data.payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(practiceLogs => ({
          type: _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.ADD_PRACTICE_LOG_STATE,
          practiceLog: data.payload
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.router.navigate(["practice-logs"])), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY))));
      }, {
        dispatch: true
      });
      this.modifyPracticeLog$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.MODIFY_PRACTICE_LOG_API), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(data => this.practiceLogService.updatePracticeLog(data.payload.id, data.payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(practiceLogs => ({
          type: _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.MODIFY_PRACTICE_LOG_STATE,
          practiceLog: data.payload
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.router.navigate(["practice-logs"])), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY))));
      }, {
        dispatch: true
      }); // remove all practice logs in the database

      this.removeAllPracticeLog$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_API), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(data => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([...data.payload.map(id => this.practiceLogService.deletePracticeLog(id))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => ({
          type: _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.PracticeLogActions.REMOVE_ALL_PRACTICE_LOG_STATE
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY))));
      }, {
        dispatch: true
      });
    }

  }

  PracticeLogEffects.ɵfac = function PracticeLogEffects_Factory(t) {
    return new (t || PracticeLogEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_practice_log_service__WEBPACK_IMPORTED_MODULE_1__.PracticeLogService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
  };

  PracticeLogEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: PracticeLogEffects,
    factory: PracticeLogEffects.ɵfac
  });
  return PracticeLogEffects;
})();

/***/ }),

/***/ 3549:
/*!*************************************************************!*\
  !*** ./src/app/practice-log/state/practice-log.reducers.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "practiceLogReducer": () => (/* binding */ practiceLogReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _practice_log_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice-log.actions */ 9149);


const initialState = {
  practiceLogs: []
};
const practiceLogReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.setPracticeLogList, (state, {
  practiceLogs
}) => {
  return Object.assign(Object.assign({}, state), {
    practiceLogs
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.removePracticeLogState, (state, {
  practiceLogId
}) => {
  return Object.assign(Object.assign({}, state), {
    practiceLogs: state.practiceLogs.filter(data => data.id != practiceLogId)
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.addPracticeLogState, (state, {
  practiceLog
}) => {
  return Object.assign(Object.assign({}, state), {
    practiceLogs: [...state.practiceLogs, practiceLog]
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.modifyPracticeLogState, (state, {
  practiceLog
}) => {
  return Object.assign(Object.assign({}, state), {
    practiceLogs: state.practiceLogs.map(data => data.id === practiceLog.id ? practiceLog : data)
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_practice_log_actions__WEBPACK_IMPORTED_MODULE_0__.removeAllPracticeLogState, state => {
  return Object.assign(Object.assign({}, state), {
    practiceLogs: []
  });
}));

/***/ }),

/***/ 9480:
/*!**************************************************************!*\
  !*** ./src/app/practice-log/state/practice-log.selectors.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectPracticeLog": () => (/* binding */ selectPracticeLog),
/* harmony export */   "selectPracticeLogState": () => (/* binding */ selectPracticeLogState),
/* harmony export */   "selectPracticeLogs": () => (/* binding */ selectPracticeLogs)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5094);

const selectPracticeLogState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('practiceLogState');
const selectPracticeLogs = () => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPracticeLogState, state => state.practiceLogs);
const selectPracticeLog = id => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectPracticeLogState, state => state.practiceLogs.find(d => d.id === id));

/***/ })

}]);