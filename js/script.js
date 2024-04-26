(function () {
  const user = {
    firstName: 'Vova',
    lastName: 'Shaitan',
    age: 27,
    foo() {
      console.log(this.firstName);
    },
  };

  user.foo();

  const call = function (func, ctx, arrayOfArgs) {
    ctx.cM = func;
    ctx.cM(arrayOfArgs);
    delete ctx.cM;
  };

  const bind = function (bFunc, bCtx, bArrayOfArgs) {
    return function () {
      return call(bFunc, bCtx, bArrayOfArgs);
    };
  };

  const display = function () {
    console.log(this.lastName);
  };

  const d = bind(display, user);
  d();
}());
