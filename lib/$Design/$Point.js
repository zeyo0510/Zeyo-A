/************************************************/
((_) => {
  globalThis.$Zeyo = globalThis.$Zeyo || {}
  globalThis.$Zeyo.$Design = globalThis.$Zeyo.$Design || {}
  globalThis.$Zeyo.$Design.$Point = class $
  {
    #x = 0;
    #y = 0;

    constructor(...args)
    {
      this.X = args[0];
      this.Y = args[1];
    }

    get X()
    {
      return this.#x;
    }

    set X(newValue)
    {
      this.X = newValue;
    }

    get Y()
    {
      return this.#x;
    }

    set Y(newValue)
    {
      this.Y = newValue;
    }

    Meta()
    {
      const retValue = {};
      /************************************************/
      retValue.X = this.X;
      retValue.Y = this.Y;
      /************************************************/
      return retValue;
    }
  }
})({
  space : ''
});
/************************************************/