function pipe(...func) {
  function foo(param) {
    let res;
    for (let i = func.length - 1; i >= 0; i--) {
      res = func[i](param);
    }

    return res;
  }

  return foo;
}
