"use strict";
(self["webpackChunkpracticelogs"] = self["webpackChunkpracticelogs"] || []).push([[674],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/login/login.component */ 6142);
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/register/register.component */ 3333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);





const routes = [{
  path: "",
  component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: "register",
  component: _page_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}];
let AuthRoutingModule = /*#__PURE__*/(() => {
  class AuthRoutingModule {}

  AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
    return new (t || AuthRoutingModule)();
  };

  AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AuthRoutingModule
  });
  AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return AuthRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule),
/* harmony export */   "localStorageSyncReducer": () => (/* binding */ localStorageSyncReducer)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.module */ 294);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/material.module */ 898);
/* harmony import */ var _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-form/auth-form.component */ 3364);
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/login/login.component */ 6142);
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/register/register.component */ 3333);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngrx-store-localstorage */ 9573);
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/auth.effects */ 5054);
/* harmony import */ var _state_auth_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/auth.reducers */ 8081);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ 1958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5000);
















function localStorageSyncReducer(reducer) {
  return (0,ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_8__.localStorageSync)({
    keys: ['token']
  })(reducer);
}
const metaReducers = [localStorageSyncReducer];
let AuthModule = /*#__PURE__*/(() => {
  class AuthModule {}

  AuthModule.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };

  AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__.AuthRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreModule.forFeature('authState', _state_auth_reducers__WEBPACK_IMPORTED_MODULE_7__.authReducer, {
      metaReducers
    }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsModule.forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_6__.AuthEffects])]]
  });
  return AuthModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_2__.AuthFormComponent, _page_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _page_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__.AuthRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 3364:
/*!******************************************************************!*\
  !*** ./src/app/auth/components/auth-form/auth-form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthFormComponent": () => (/* binding */ AuthFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 7322);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8833);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4202);










function AuthFormComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}

const _c0 = function () {
  return ["register"];
};

function AuthFormComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
  }
}

const _c1 = function () {
  return [""];
};

function AuthFormComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
  }
}

let AuthFormComponent = /*#__PURE__*/(() => {
  class AuthFormComponent {
    constructor(fb) {
      this.fb = fb;
      this.error = "";
      this.title = "Login";
      this.submitEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.form = this.fb.group({
        email: [''],
        password: ['']
      });
    }

    submit() {
      this.submitEmitter.emit(this.form.value);
    }

  }

  AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) {
    return new (t || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };

  AuthFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthFormComponent,
    selectors: [["app-auth-form"]],
    inputs: {
      error: "error",
      title: "title"
    },
    outputs: {
      submitEmitter: "submitEmitter"
    },
    decls: 17,
    vars: 6,
    consts: [["data-cy", "auth-title"], [3, "formGroup", "ngSubmit"], ["class", "error", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "email", "data-cy", "email"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "data-cy", "password"], [1, "button"], ["type", "submit", "mat-button", "", "data-cy", "submit-login"], ["class", "link", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], [1, "error"], ["routerLinkActive", "router-link-active", 1, "link", 3, "routerLink"]],
    template: function AuthFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content")(4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_4_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthFormComponent_p_5_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p")(10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AuthFormComponent_p_15_Template, 2, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AuthFormComponent_p_16_Template, 2, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title == "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title == "Register");
      }
    },
    directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}"]
  });
  return AuthFormComponent;
})();

/***/ }),

/***/ 6142:
/*!****************************************************!*\
  !*** ./src/app/auth/page/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/auth.actions */ 2253);
/* harmony import */ var _state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth.selectors */ 4123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var src_app_core_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/authenticate.service */ 8682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 7261);
/* harmony import */ var _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/auth-form/auth-form.component */ 3364);








let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(store, authService, router, _snackBar) {
      this.store = store;
      this.authService = authService;
      this.router = router;
      this._snackBar = _snackBar;
      this.error$ = this.store.select((0,_state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectError)());
      this.checkJWT();
      this.getError();
    }

    submit(data) {
      this.store.dispatch({
        type: _state_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.LOGIN,
        payload: data
      });
    }

    getError() {
      this.error$.subscribe(data => {
        console.log("ERROR: " + data);

        if (data) {
          let snackBarRef = this._snackBar.open(data.message, "Error", {
            duration: 2500
          });

          snackBarRef.afterDismissed().subscribe(() => {
            this.store.dispatch({
              type: _state_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.REMOVE_LOGIN_ERROR,
              payload: null
            });
          });
        }
      });
    }

    checkJWT() {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/practice-logs']);
      }
    }

  }

  LoginComponent.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };

  LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 1,
    vars: 0,
    consts: [[3, "submitEmitter"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-auth-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submitEmitter", function LoginComponent_Template_app_auth_form_submitEmitter_0_listener($event) {
          return ctx.submit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    directives: [_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__.AuthFormComponent],
    styles: [""]
  });
  return LoginComponent;
})();

/***/ }),

/***/ 3333:
/*!**********************************************************!*\
  !*** ./src/app/auth/page/register/register.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/auth.actions */ 2253);
/* harmony import */ var _state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth.selectors */ 4123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 7261);
/* harmony import */ var _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth-form/auth-form.component */ 3364);






let RegisterComponent = /*#__PURE__*/(() => {
  class RegisterComponent {
    constructor(store, _snackBar) {
      this.store = store;
      this._snackBar = _snackBar;
      this.error$ = this.store.select((0,_state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectError)());
      this.getError();
    }

    ngOnInit() {}

    submit(data) {
      this.store.dispatch({
        type: _state_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActions.CREATE_USER,
        payload: data
      });
    }

    getError() {
      this.error$.subscribe(data => {
        if (data) {
          let snackBarRef = this._snackBar.open(data.message, "Error", {
            duration: 2500
          });
        }
      });
    }

  }

  RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };

  RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    decls: 1,
    vars: 0,
    consts: [["title", "Register", 3, "submitEmitter"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-auth-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submitEmitter", function RegisterComponent_Template_app_auth_form_submitEmitter_0_listener($event) {
          return ctx.submit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    directives: [_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_2__.AuthFormComponent],
    styles: [""]
  });
  return RegisterComponent;
})();

/***/ }),

/***/ 2253:
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthActions": () => (/* binding */ AuthActions),
/* harmony export */   "removeError": () => (/* binding */ removeError),
/* harmony export */   "setLoginError": () => (/* binding */ setLoginError),
/* harmony export */   "setRegisterError": () => (/* binding */ setRegisterError),
/* harmony export */   "setToken": () => (/* binding */ setToken)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5094);

var AuthActions = /*#__PURE__*/(() => {
  (function (AuthActions) {
    AuthActions["LOGIN"] = "[AUTH] Login";
    AuthActions["SET_TOKEN"] = "[AUTH] Set Token";
    AuthActions["CREATE_USER"] = "[AUTH] Create User";
    AuthActions["LOGIN_ERROR"] = "LOGIN_ERROR";
    AuthActions["REGISTER_ERROR"] = "REGISTER_ERROR";
    AuthActions["REMOVE_LOGIN_ERROR"] = "REMOVE_LOGIN_ERROR";
  })(AuthActions || (AuthActions = {}));

  return AuthActions;
})();
const setToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.SET_TOKEN, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setLoginError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.LOGIN_ERROR, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setRegisterError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.REGISTER_ERROR, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActions.REMOVE_LOGIN_ERROR, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 5054:
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _Users_ianperfitt_Documents_practice_log_app_spring_boot_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1958);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6099);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 2253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_core_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/authenticate.service */ 8682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4202);








let AuthEffects = /*#__PURE__*/(() => {
  class AuthEffects {
    constructor(actions$, authService, router) {
      this.actions$ = actions$;
      this.authService = authService;
      this.router = router;
      this.loginUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGIN), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(data => this.authService.login(data.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => ({
          type: _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthActions.SET_TOKEN,
          token: data.token
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.router.navigate(["practice-logs"])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)( /*#__PURE__*/function () {
          var _ref = (0,_Users_ianperfitt_Documents_practice_log_app_spring_boot_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            return {
              type: _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGIN_ERROR,
              error: data.error
            };
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()))));
      }, {
        dispatch: true
      });
      this.createUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
        return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthActions.CREATE_USER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(data => this.authService.register(data.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.router.navigate(["login"])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)( /*#__PURE__*/function () {
          var _ref2 = (0,_Users_ianperfitt_Documents_practice_log_app_spring_boot_angular_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            return {
              type: _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthActions.REGISTER_ERROR,
              error: data.error
            };
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }()))));
      }, {
        dispatch: true
      });
    }

  }

  AuthEffects.ɵfac = function AuthEffects_Factory(t) {
    return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_core_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
  };

  AuthEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AuthEffects,
    factory: AuthEffects.ɵfac
  });
  return AuthEffects;
})();

/***/ }),

/***/ 8081:
/*!*********************************************!*\
  !*** ./src/app/auth/state/auth.reducers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5094);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ 2253);


const initialState = {
  token: "",
  error: null
};
const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.setToken, (state, {
  token
}) => {
  return Object.assign(Object.assign({}, state), {
    token
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.setLoginError, (state, {
  error
}) => {
  return Object.assign(Object.assign({}, state), {
    error
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.setRegisterError, (state, {
  error
}) => {
  return Object.assign(Object.assign({}, state), {
    error
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.removeError, (state, {
  error
}) => {
  return Object.assign(Object.assign({}, state), {
    error
  });
}));

/***/ }),

/***/ 4123:
/*!**********************************************!*\
  !*** ./src/app/auth/state/auth.selectors.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAuthState": () => (/* binding */ selectAuthState),
/* harmony export */   "selectError": () => (/* binding */ selectError)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5094);

const selectAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('authState');
const selectError = () => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAuthState, state => state.error);

/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);


let CoreModule = /*#__PURE__*/(() => {
  class CoreModule {
    constructor(core) {
      if (core) {
        throw new Error("Core module should only be imported to the Root Module");
      }
    }

  }

  CoreModule.ɵfac = function CoreModule_Factory(t) {
    return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
  };

  CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
  });
  return CoreModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 4999:
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {



var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

/***/ }),

/***/ 9573:
/*!***********************************************************************************!*\
  !*** ./node_modules/ngrx-store-localstorage/fesm2015/ngrx-store-localstorage.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateReviver": () => (/* binding */ dateReviver),
/* harmony export */   "defaultMergeReducer": () => (/* binding */ defaultMergeReducer),
/* harmony export */   "localStorageSync": () => (/* binding */ localStorageSync),
/* harmony export */   "rehydrateApplicationState": () => (/* binding */ rehydrateApplicationState),
/* harmony export */   "syncStateUpdate": () => (/* binding */ syncStateUpdate)
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ 4999);
 // Cannot import from the @ngrx/store package due to a module resolution issue.
// See Issue #206.

const INIT_ACTION = '@ngrx/store/init';
const UPDATE_ACTION = '@ngrx/store/update-reducers';
const detectDate = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/; // correctly parse dates from local storage

const dateReviver = (_key, value) => {
  if (typeof value === 'string' && detectDate.test(value)) {
    return new Date(value);
  }

  return value;
};

const dummyReviver = (_key, value) => value;

const checkIsBrowserEnv = () => {
  return typeof window !== 'undefined';
};

const validateStateKeys = keys => {
  return keys.map(key => {
    let attr = key;

    if (typeof key === 'object') {
      attr = Object.keys(key)[0];
    }

    if (typeof attr !== 'string') {
      throw new TypeError(`localStorageSync Unknown Parameter Type: ` + `Expected type of string, got ${typeof attr}`);
    }

    return key;
  });
};

const rehydrateApplicationState = (keys, storage, storageKeySerializer, restoreDates) => {
  return keys.reduce((acc, curr) => {
    let key = curr;
    let reviver = restoreDates ? dateReviver : dummyReviver;
    let deserialize;
    let decrypt;

    if (typeof key === 'object') {
      key = Object.keys(key)[0]; // use the custom reviver function

      if (typeof curr[key] === 'function') {
        reviver = curr[key];
      } else {
        // use custom reviver function if available
        if (curr[key].reviver) {
          reviver = curr[key].reviver;
        } // use custom serialize function if available


        if (curr[key].deserialize) {
          deserialize = curr[key].deserialize;
        }
      } // Ensure that encrypt and decrypt functions are both present


      if (curr[key].encrypt && curr[key].decrypt) {
        if (typeof curr[key].encrypt === 'function' && typeof curr[key].decrypt === 'function') {
          decrypt = curr[key].decrypt;
        } else {
          console.error(`Either encrypt or decrypt is not a function on '${curr[key]}' key object.`);
        }
      } else if (curr[key].encrypt || curr[key].decrypt) {
        // Let know that one of the encryption functions is not provided
        console.error(`Either encrypt or decrypt function is not present on '${curr[key]}' key object.`);
      }
    }

    if (storage !== undefined) {
      let stateSlice = storage.getItem(storageKeySerializer(key));

      if (stateSlice) {
        // Use provided decrypt function
        if (decrypt) {
          stateSlice = decrypt(stateSlice);
        }

        const isObjectRegex = new RegExp('{|\\[');
        let raw = stateSlice;

        if (stateSlice === 'null' || stateSlice === 'true' || stateSlice === 'false' || isObjectRegex.test(stateSlice.charAt(0))) {
          raw = JSON.parse(stateSlice, reviver);
        }

        return Object.assign({}, acc, {
          [key]: deserialize ? deserialize(raw) : raw
        });
      }
    }

    return acc;
  }, {});
}; // Recursively traverse all properties of the existing slice as defined by the `filter` argument,
// and output the new object with extraneous properties removed.


function createStateSlice(existingSlice, filter) {
  return filter.reduce((memo, attr) => {
    if (typeof attr === 'string' || typeof attr === 'number') {
      const value = existingSlice === null || existingSlice === void 0 ? void 0 : existingSlice[attr];

      if (value !== undefined) {
        memo[attr] = value;
      }
    } else {
      for (const key in attr) {
        if (Object.prototype.hasOwnProperty.call(attr, key)) {
          const element = attr[key];
          memo[key] = createStateSlice(existingSlice[key], element);
        }
      }
    }

    return memo;
  }, {});
}

const syncStateUpdate = (state, keys, storage, storageKeySerializer, removeOnUndefined, syncCondition) => {
  if (syncCondition) {
    try {
      if (syncCondition(state) !== true) {
        return;
      }
    } catch (e) {
      // Treat TypeError as do not sync
      if (e instanceof TypeError) {
        return;
      }

      throw e;
    }
  }

  keys.forEach(key => {
    let stateSlice = state[key];
    let replacer;
    let space;
    let encrypt;

    if (typeof key === 'object') {
      let name = Object.keys(key)[0];
      stateSlice = state[name];

      if (typeof stateSlice !== 'undefined' && key[name]) {
        // use serialize function if specified.
        if (key[name].serialize) {
          stateSlice = key[name].serialize(stateSlice);
        } else {
          // if serialize function is not specified filter on fields if an array has been provided.
          let filter;

          if (key[name].reduce) {
            filter = key[name];
          } else if (key[name].filter) {
            filter = key[name].filter;
          }

          if (filter) {
            stateSlice = createStateSlice(stateSlice, filter);
          } // Check if encrypt and decrypt are present, also checked at this#rehydrateApplicationState()


          if (key[name].encrypt && key[name].decrypt) {
            if (typeof key[name].encrypt === 'function') {
              encrypt = key[name].encrypt;
            }
          } else if (key[name].encrypt || key[name].decrypt) {
            // If one of those is not present, then let know that one is missing
            console.error(`Either encrypt or decrypt function is not present on '${key[name]}' key object.`);
          }
        }
        /*
        Replacer and space arguments to pass to JSON.stringify.
        If these fields don't exist, undefined will be passed.
        */


        replacer = key[name].replacer;
        space = key[name].space;
      }

      key = name;
    }

    if (typeof stateSlice !== 'undefined' && storage !== undefined) {
      try {
        if (encrypt) {
          // ensure that a string message is passed
          stateSlice = encrypt(typeof stateSlice === 'string' ? stateSlice : JSON.stringify(stateSlice, replacer, space));
        }

        storage.setItem(storageKeySerializer(key), typeof stateSlice === 'string' ? stateSlice : JSON.stringify(stateSlice, replacer, space));
      } catch (e) {
        console.warn('Unable to save state to localStorage:', e);
      }
    } else if (typeof stateSlice === 'undefined' && removeOnUndefined && storage !== undefined) {
      try {
        storage.removeItem(storageKeySerializer(key));
      } catch (e) {
        console.warn(`Exception on removing/cleaning undefined '${key}' state`, e);
      }
    }
  });
}; // Default merge strategy is a full deep merge.


const defaultMergeReducer = (state, rehydratedState, action) => {
  if ((action.type === INIT_ACTION || action.type === UPDATE_ACTION) && rehydratedState) {
    const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

    const options = {
      arrayMerge: overwriteMerge
    };
    state = deepmerge__WEBPACK_IMPORTED_MODULE_0__(state, rehydratedState, options);
  }

  return state;
};

const localStorageSync = config => reducer => {
  if (config.storage === undefined && !config.checkStorageAvailability || config.checkStorageAvailability && checkIsBrowserEnv()) {
    config.storage = localStorage || window.localStorage;
  }

  if (config.storageKeySerializer === undefined) {
    config.storageKeySerializer = key => key;
  }

  if (config.restoreDates === undefined) {
    config.restoreDates = true;
  } // Use default merge reducer.


  let mergeReducer = config.mergeReducer;

  if (mergeReducer === undefined || typeof mergeReducer !== 'function') {
    mergeReducer = defaultMergeReducer;
  }

  const stateKeys = validateStateKeys(config.keys);
  const rehydratedState = config.rehydrate ? rehydrateApplicationState(stateKeys, config.storage, config.storageKeySerializer, config.restoreDates) : undefined;
  return function (state, action) {
    let nextState; // If state arrives undefined, we need to let it through the supplied reducer
    // in order to get a complete state as defined by user

    if (action.type === INIT_ACTION && !state) {
      nextState = reducer(state, action);
    } else {
      nextState = Object.assign({}, state);
    } // Merge the store state with the rehydrated state using
    // either a user-defined reducer or the default.


    nextState = mergeReducer(nextState, rehydratedState, action);
    nextState = reducer(nextState, action);

    if (action.type !== INIT_ACTION) {
      syncStateUpdate(nextState, stateKeys, config.storage, config.storageKeySerializer, config.removeOnUndefined, config.syncCondition);
    }

    return nextState;
  };
};
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngrx-store-localstorage.mjs.map

/***/ }),

/***/ 5861:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);